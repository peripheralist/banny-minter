import { BANNYVERSE_COLLECTION_ID, Category } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";
import { useMemo } from "react";
import { useCategorizedTiers } from "./useCategorizedTiers";
import { Tier } from "@/model/tier";

export function useOwnedCategorizedTiers(wallet: string | undefined) {
  const { data: nfts, loading: nftsLoading } = useNfTsQuery({
    variables: {
      where: {
        collection: BANNYVERSE_COLLECTION_ID,
        owner_: {
          wallet: wallet?.toLowerCase() ?? null,
        },
      },
    },
  });

  const { tiers, loading: tiersLoading } = useCategorizedTiers();

  const ownedTiers = useMemo(() => {
    if (!tiers || !nfts?.nfts.length) return null;

    return Object.entries(tiers).reduce(
      (acc, [category, tiersOfCategory]) => ({
        ...acc,
        [category]: tiersOfCategory
          .map((t) => ({
            tier: t,
            quantity: nfts?.nfts.filter((nft) => nft.tier.tierId === t.tierId)
              .length,
          }))
          .filter((t) => t.quantity),
      }),
      {} as Record<Category, { tier: Tier; quantity: number }[]>
    );
  }, [tiers, nfts]);

  return {
    tiers: ownedTiers,
    loading: tiersLoading || nftsLoading,
  };
}
