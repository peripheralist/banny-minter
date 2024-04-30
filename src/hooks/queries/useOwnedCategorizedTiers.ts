import { apolloClient } from "@/constants/apollo";
import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";
import { Tiers } from "@/model/tier";
import { useMemo } from "react";
import { useCategorizedTiers } from "./useCategorizedTiers";

export function useOwnedCategorizedTiers(wallet: string | undefined) {
  const { data: nfts, loading: nftsLoading } = useNfTsQuery({
    client: apolloClient,
    variables: {
      where: {
        collection: BANNYVERSE_COLLECTION_ID,
        owner_: {
          wallet: wallet?.toLowerCase() ?? null,
        },
      },
    },
  });

  const ownedTierIds = useMemo(
    () => nfts?.nfts.map((nft) => nft.tier.tierId),
    [nfts]
  );

  const { tiers, loading: tiersLoading } = useCategorizedTiers();

  const ownedTiers = useMemo(() => {
    if (!tiers || !ownedTierIds?.length) return null;

    return Object.entries(tiers).reduce(
      (acc, [category, tiersOfCategory]) => ({
        ...acc,
        [category]: tiersOfCategory.filter((t) =>
          ownedTierIds?.includes(t.tierId)
        ),
      }),
      {} as Tiers
    );
  }, [tiers, ownedTierIds]);

  return {
    tiers: ownedTiers,
    loading: tiersLoading || nftsLoading,
  };
}
