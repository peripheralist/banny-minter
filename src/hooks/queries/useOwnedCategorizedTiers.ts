import { Category } from "@/constants/nfts";
import { NfTsQuery } from "@/generated/graphql";
import { Tier } from "@/model/tier";
import { useMemo } from "react";
import { useCategorizedTiers } from "./useCategorizedTiers";
import { useNftsOf } from "./useNftsOf";

export function useOwnedCategorizedTiers(wallet: `0x${string}` | undefined) {
  const { data: nfts, loading: nftsLoading } = useNftsOf(wallet);

  const { tiers, loading: tiersLoading } = useCategorizedTiers();

  const ownedTiers = useMemo(() => {
    if (!tiers || !nfts?.nfts.length) return null;

    return Object.entries(tiers).reduce(
      (acc, [category, tiersOfCategory]) => ({
        ...acc,
        [category]: tiersOfCategory
          .map((tier) => {
            const nftsOfTier = nfts?.nfts.filter(
              (nft) => nft.tier.tierId === tier.tierId
            );

            return {
              tier,
              nfts: nftsOfTier,
            };
          })
          .filter((t) => !!t.nfts.length),
      }),
      {} as Record<
        Category,
        { tier: Tier; nfts: NfTsQuery["nfts"][number][] }[]
      >
    );
  }, [tiers, nfts]);

  return {
    tiers: ownedTiers,
    loading: tiersLoading || nftsLoading,
  };
}
