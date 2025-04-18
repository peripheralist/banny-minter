import ButtonPad from "@/components/shared/ButtonPad";
import FormattedAddress from "@/components/shared/FormattedAddress";
import TierImage from "@/components/shared/TierImage";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { ActivityEvent } from "@/model/activity";
import { NFTMetadata } from "@/model/nftInfo";
import { TierOrNft } from "@/model/tierOrNft";
import { chainName } from "@/utils/chainName";
import { ROUTES } from "@/utils/routes";
import { tierIdOfTokenId } from "@/utils/tierIdOfTokenId";
import moment from "moment";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { formatEther } from "viem";
import { config } from "../../../config.wagmi";
import DressedBannyElem from "./DressedBannyElem";
import { parseTierOrNft } from "@/utils/parseTier";

export default function ActivityEventElem({ event }: { event: ActivityEvent }) {
  const { parsedTiers } = useAllTiers();

  const Title = useCallback(() => {
    if (event.decorateBannyEvent) {
      return `Dressed Banny #${event.decorateBannyEvent.bannyBodyId.toString()}`;
    }
    if (event.payEvent) {
      let mainText = "";

      if (!event.payEvent.memo?.startsWith("Minted tiers ")) {
        mainText = `Paid ${formatEther(event.payEvent.amount).substring(
          0,
          6
        )} ETH`;
      } else {
        const items = event.payEvent.memo.split("Minted tiers ")[1].split(", ");

        mainText = `Minted ${items.length} item${items.length > 1 ? "s" : ""}`;
      }

      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            width: "100%",
          }}
        >
          {mainText}{" "}
          <span style={{ fontSize: FONT_SIZE.xs, opacity: 0.6 }}>
            earned{" "}
            {Math.round(
              parseFloat(formatEther(event.payEvent.newlyIssuedTokenCount))
            )}{" "}
            $BAN
          </span>
        </div>
      );
    }
  }, [event]);

  const Timestamp = useCallback(
    () => (
      <div style={{ color: COLORS.gray }}>
        {moment(event.timestamp * 1000).fromNow()}
      </div>
    ),
    [event.timestamp]
  );

  const From = useCallback(() => {
    return (
      <Link href={`/locker/${event.from}`} target="blank">
        <FormattedAddress
          position="left"
          style={{ cursor: "pointer" }}
          address={event.from as `0x${string}`}
        />
      </Link>
    );
  }, [event.from]);

  const Body = useCallback(() => {
    const imgSize = 48;

    if (event.payEvent) {
      if (!event.payEvent.memo?.startsWith("Minted tiers ")) {
        return null;
      }

      const tierIds = event.payEvent.memo
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

        const tier = parsedTiers?.find((t) => t.tierId === tierId);

        if (tier) {
          return [
            ...acc,
            {
              tier,
              quantity: 1,
            },
          ];
        }

        return acc;
      }, [] as { tier: TierOrNft; quantity: number }[]);

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
    }

    if (event.decorateBannyEvent) {
      const info = event.decorateBannyEvent.tokenUriMetadata as NFTMetadata;

      if (!parsedTiers || !info) return "...";

      const displayLarge = info.outfitIds?.every((tokenId) =>
        // Return true if banny is NOT wearing a background
        parsedTiers
          .filter((t) => t.category === "background")
          .every((t) => t.tierId !== tierIdOfTokenId(tokenId))
      );

      const size = imgSize * (displayLarge ? 1.3 : 1);

      return (
        <Link
          href={ROUTES.nftPath({
            chainId: event.chainId,
            tokenId: info.tokenId,
          })}
        >
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
  }, [event, parsedTiers]);

  const Chain = useCallback(
    () => (
      <div style={{ color: COLORS.blue300 }}>
        {chainName(event.chainId)?.toUpperCase()}
      </div>
    ),
    [event.chainId]
  );

  const txUrl = useMemo(() => {
    const chain = config.chains.find((c) => c.id === event.chainId);
    return chain
      ? `${chain.blockExplorers.default.url}/tx/${event.txHash}`
      : undefined;
  }, [event]);

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

        <From />
        {txUrl && (
          <Link href={txUrl} target="blank">
            {"TX>"}
          </Link>
        )}
      </div>

      <Title />

      <Body />
    </ButtonPad>
  );
}
