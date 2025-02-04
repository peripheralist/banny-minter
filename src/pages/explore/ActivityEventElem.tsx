import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { LOOKS_COLLECTION_ID } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { ActivityEvent } from "@/model/activity";
import { useCallback, useMemo } from "react";
import moment from "moment";
import FormattedAddress from "@/components/shared/FormattedAddress";
import Link from "next/link";
import ButtonPad from "@/components/shared/ButtonPad";

export default function ActivityEventElem({ event }: { event: ActivityEvent }) {
  const { tiers } = useAllTiers();

  const { data: nfts } = useNfTsQuery({
    variables: {
      where: {
        collection: LOOKS_COLLECTION_ID,
      },
    },
  });

  const Title = useCallback(() => {
    switch (event.type) {
      case "decorate":
        return `Dressed Banny #${event.nakedBannyId.toString()}`;
      case "mint":
        return `Minted items`;
    }
  }, [event]);

  const Timestamp = useCallback(() => {
    return (
      <div style={{ opacity: 0.5 }}>
        {moment(event.timestamp * 1000).fromNow()}
      </div>
    );
  }, [event.timestamp]);

  const Caller = useCallback(() => {
    return (
      <FormattedAddress
        position="left"
        style={{ opacity: 0.5 }}
        address={event.caller as `0x${string}`}
      />
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
        if (!tiers) return "...";

        return (
          <div style={{ display: "flex" }}>
            {[
              event.nakedBannyId,
              ...(event.outfitIds ?? []),
              ...(event.worldId ? [event.worldId] : []),
            ].map((nftId) => {
              const tierId = nftId / BigInt(1000000000);
              const tier = tiers.find((t) => BigInt(t.tierId) === tierId);

              if (!tier) return null;

              return (
                <div key={nftId}>
                  <TierImage tier={tier} size={imgSize} />
                </div>
              );
            })}
          </div>
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
    <Link href={txUrl} target="blank">
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
        </div>

        <Title />

        <Body />
      </ButtonPad>
    </Link>
  );
}
