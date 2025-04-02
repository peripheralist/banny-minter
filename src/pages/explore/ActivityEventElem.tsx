import ButtonPad from "@/components/shared/ButtonPad";
import FormattedAddress from "@/components/shared/FormattedAddress";
import TierImage from "@/components/shared/TierImage";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { ActivityEvent } from "@/model/activity";
import { Tier } from "@/model/tier";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { tierIdOfTokenId } from "@/utils/tierIdOfTokenId";
import moment from "moment";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import DressedBannyElem from "./DressedBannyElem";

export default function ActivityEventElem({ event }: { event: ActivityEvent }) {
  const { tiers } = useAllTiers();

  const Title = useCallback(() => {
    switch (event.type) {
      case "decorate":
        return `Dressed Banny #${event.bannyBodyId.toString()}`;
      case "mint":
        const items = event.note.split("Minted tiers ")[1].split(", ");
        return `Minted ${items.length} item${items.length > 1 ? "s" : ""}`;
    }
  }, [event]);

  const Timestamp = useCallback(() => {
    // https://momentjs.com/docs/#/customization/relative-time/
    moment.relativeTimeThreshold("h", 24);
    moment.relativeTimeThreshold("m", 60);
    moment.relativeTimeThreshold("d", 365);
    return (
      <div style={{ color: COLORS.gray }}>
        {moment(event.timestamp * 1000).fromNow()}
      </div>
    );
  }, [event.timestamp]);

  const Caller = useCallback(() => {
    return (
      <Link href={`/locker/${event.caller}`} target="blank">
        <FormattedAddress
          position="left"
          style={{ cursor: "pointer" }}
          address={event.caller as `0x${string}`}
        />
      </Link>
    );
  }, [event.caller]);

  const Body = useCallback(() => {
    const imgSize = 48;

    switch (event.type) {
      case "mint":
        const tierIds = event.note
          .split("Minted tiers ")[1]
          .split(", ")
          .map((str) => parseInt(str));

        const _tiers = tierIds.reduce((acc, tierId) => {
          if (acc.some((t) => t.tier.tierId === tierId)) {
            return acc.map((t) =>
              t.tier.tierId === tierId
                ? { tier: t.tier, quantity: t.quantity + 1 }
                : t
            );
          }

          const tier = tiers?.find((t) => t.tierId === tierId);

          if (tier) {
            return [...acc, { tier, quantity: 1 }];
          }

          return acc;
        }, [] as { tier: Tier; quantity: number }[]);

        if (!_tiers) return "...";

        return (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {_tiers.map(({ tier, quantity }) => (
              <div key={tier.tierId} style={{ position: "relative" }}>
                <TierImage tier={tier} size={imgSize} />

                {quantity > 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 4,
                      right: 0,
                      fontSize: FONT_SIZE.xs,
                      background: "white",
                      color: COLORS.gray,
                    }}
                  >
                    x{quantity}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      case "decorate":
        const info = decodeNFTInfo(event.tokenUri);

        if (!tiers || !info) return "...";

        const displayLarge = info.outfitIds?.every((tokenId) =>
          // Return true if banny is NOT wearing a background
          tiers
            .filter((t) => t.category === "background")
            .every((t) => t.tierId !== tierIdOfTokenId(tokenId))
        );

        const size = imgSize * (displayLarge ? 1.3 : 1);

        return (
          <Link href={`?nft=${event.chain.id}:${info.tokenId}`}>
            <div
              style={{
                margin: displayLarge ? -(size * 0.125) : 0,
                pointerEvents: "none",
              }}
            >
              <DressedBannyElem nftInfo={info} size={size} />
            </div>
          </Link>
        );
    }
  }, [event, tiers]);

  const Chain = useCallback(
    () => (
      <div style={{ color: COLORS.blue300 }}>
        {event.chain.name.toUpperCase()}
      </div>
    ),
    [event.chain.name]
  );

  const txUrl = useMemo(
    () => `${event.chain.blockExplorers.default.url}/tx/${event.txHash}`,
    [event]
  );

  return (
    <ButtonPad
      fillFg={"white"}
      fillBorder={"white"}
      style={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: 8,
        padding: 12,
        color: "black",
        width: "100%",
        cursor: "default",
      }}
      shadow="none"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: FONT_SIZE.xs,
          gap: 8,
          fontWeight: "normal",
          width: "100%",
        }}
      >
        <Timestamp />
        <Chain />

        <div style={{ flex: 1 }} />

        <Caller />
        <Link href={txUrl} target="blank">
          {"TX>"}
        </Link>
      </div>

      <Title />

      <div style={{ maxWidth: "100%" }}>
        <Body />
      </div>
    </ButtonPad>
  );
}
