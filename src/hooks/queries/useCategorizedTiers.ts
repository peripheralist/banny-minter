import { apolloClient } from "@/constants/apollo";
import { BANNYVERSE_COLLECTION_ID, Category } from "@/constants/nfts";
import { NftTier_OrderBy, useAllNftTiersQuery } from "@/generated/graphql";
import { Tier } from "@/model/tier";
import { parseTier } from "@/utils/parseTier";
import { useMemo } from "react";

/**
 * @returns All NFT tiers mapped to their respective category
 */
export function useCategorizedTiers() {
  const { data: tiers, ...props } = useAllNftTiersQuery({
    client: apolloClient,
    variables: {
      collection: BANNYVERSE_COLLECTION_ID,
      orderBy: NftTier_OrderBy.price,
    },
  });

  const _tiers = useMemo(
    () =>
      tiers
        ? Object.entries(tiers).reduce(
            (acc, [k, tiers]) => ({
              ...acc,
              [k]: tiers.map(parseTier),
            }),
            {} as Record<Category, Tier[]>
          )
        : undefined,
    [tiers]
  );

  return {
    ...props,
    tiers: _tiers,
  };
}