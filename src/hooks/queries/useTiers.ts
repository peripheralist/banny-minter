import { apolloClient } from "@/constants/apollo";
import { BANNYVERSE_COLLECTION_ID, NFTCategory } from "@/constants/nfts";
import { NftTier_OrderBy, useAllNftTiersQuery } from "@/generated/graphql";
import { Asset } from "@/model/asset";
import { parseAsset } from "@/utils/parseAsset";
import { useMemo } from "react";

/**
 * @returns All NFT tiers mapped to their respective category
 */
export function useTiers() {
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
              [k]: tiers.map(parseAsset),
            }),
            {} as Record<NFTCategory, Asset[]>
          )
        : undefined,
    [tiers]
  );

  return {
    ...props,
    tiers: _tiers,
  };
}
