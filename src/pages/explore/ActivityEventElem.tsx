import ButtonPad from "@/components/shared/ButtonPad";
import FormattedAddress from "@/components/shared/FormattedAddress";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { ActivityEvent } from "@/model/activity";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { tierIdOfTokenId } from "@/utils/tierIdOfTokenId";
import moment from "moment";
import Link from "next/link";
import { useCallback, useMemo } from "react";

export default function ActivityEventElem({ event }: { event: ActivityEvent }) {
  const { tiers } = useAllTiers();

  const Title = useCallback(() => {
    switch (event.type) {
      case "decorate":
        return `Dressed Banny #${event.bannyBodyId.toString()}`;
      case "mint":
        return `Minted items`;
    }
  }, [event]);

  const Timestamp = useCallback(() => {
    // moment.updateLocale('en', {
    //   relativeTime: {
    //     mm: `%dmin`,
    //     hh: `%dhrs`
    //   }
    // })
    return (
      <div style={{ opacity: 0.5 }}>
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

        const _tiers = tiers?.filter((t) => tierIds.includes(t.tierId));

        if (!_tiers) return "...";

        return (
          <div style={{ display: "flex", gap: 4 }}>
            {_tiers.map((t) => (
              <TierImage key={t.tierId} tier={t} size={imgSize} />
            ))}
          </div>
        );
      case "decorate":
        const info = decodeNFTInfo(event.tokenUri);

        if (!tiers || !info) return "...";

        const displayLarge = info.outfitIds?.every((tokenId) => {
          // TODO sloppy way of returning true if banny is NOT wearing a background
          const tierId = tierIdOfTokenId(tokenId);

          return tiers
            .filter((t) => t.category === "background")
            .every((t) => t.tierId !== tierId);
        });

        const size = imgSize * (displayLarge ? 1.3 : 1);

        // TODO make link to view NFT
        return (
          <Link href={`?nft=${event.chain.id}:${info.tokenId}`}>
            <div
              style={{
                margin: displayLarge ? -(size * 0.125) : 0,
                pointerEvents: "none",
              }}
            >
              <object data={info.image} width={size} height={size} />
            </div>
          </Link>
        );
    }
  }, [event, tiers]);

  const Chain = useCallback(
    () => (
      <div style={{ color: COLORS.blue500 }}>
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

      <Body />
    </ButtonPad>
  );
}
