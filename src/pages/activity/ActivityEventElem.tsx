import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { LOOKS_COLLECTION_ID } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { ActivityEvent } from "@/model/activity";
import { formatEthAddress } from "juice-sdk-core";
import { useCallback } from "react";

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
    return <div>{new Date(event.timestamp * 1000).toLocaleString()}</div>;
  }, [event.timestamp]);

  const Caller = useCallback(() => {
    return <div>{formatEthAddress(event.caller)}</div>;
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
              <div key={t.tierId}>
                <RoundedFrame background={"white"} borderColor="white">
                  <TierImage tier={t} size={imgSize} />
                </RoundedFrame>
              </div>
            ))}
          </div>
        );
      case "decorate":
        if (!tiers) return "...";

        return (
          <div style={{ display: "flex", gap: 4 }}>
            {[
              ...(event.outfitIds ?? []),
              ...(event.worldId ? [event.worldId] : []),
            ].map((nftId) => {
              const tierId = nftId / BigInt(1000000000);
              const tier = tiers.find((t) => BigInt(t.tierId) === tierId);

              if (!tier) return null;

              return (
                <div key={nftId}>
                  <RoundedFrame background={"white"} borderColor="white">
                    <TierImage tier={tier} size={imgSize} />
                  </RoundedFrame>
                </div>
              );
            })}
          </div>
        );
    }
  }, [event, tiers]);

  const Chain = useCallback(() => event.chain.name, [event.chain.name]);

  return (
    <div>
      <RoundedFrame
        background={COLORS.bananaLite}
        borderColor={COLORS.bananaLite}
        style={{ padding: 12 }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: FONT_SIZE.xs,
              gap: 8,
            }}
          >
            <Chain />
            <Caller />

            <div style={{ flex: 1 }} />

            <Timestamp />
          </div>

          <Title />

          <Body />
        </div>
      </RoundedFrame>
    </div>
  );
}
