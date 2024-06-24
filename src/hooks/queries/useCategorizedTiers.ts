import { useApolloClient } from "@/constants/apollo";
import { BANNYVERSE_COLLECTION_ID, Category } from "@/constants/nfts";
import { NftTier_OrderBy, useAllNftTiersQuery } from "@/generated/graphql";
import { Tier, Tiers } from "@/model/tier";
import { parseTier } from "@/utils/parseTier";
import { useMemo } from "react";

/**
 * @returns All NFT tiers mapped to their respective category
 */
export function useCategorizedTiers() {
  const apolloClient = useApolloClient();

  const { data: tiers, ...props } = useAllNftTiersQuery({
    client: apolloClient,
    variables: {
      collection: BANNYVERSE_COLLECTION_ID,
      orderBy: NftTier_OrderBy.price,
    },
  });

  const _tiers: Tiers | undefined = useMemo(
    () =>
      tiers
        ? Object.entries(tiers).reduce((acc, [k, tiers]) => {
            const _tiers = tiers.map(parseTier);
            _tiers.forEach((t) => {
              const svg = t?.svg;
              if (!svg) return;

              const imgHref = '<image href="';
              if (!svg.includes(imgHref)) return;

              let embeddedImageUrl = svg.split(imgHref)[1];
              embeddedImageUrl = embeddedImageUrl.split('"')[0];
              const img = new Image();
              img.src = embeddedImageUrl;
            });

            return {
              ...acc,
              [k]: _tiers,
            };
          }, {} as Record<Category, Tier[]>)
        : undefined,
    [tiers]
  );

  return {
    ...props,
    tiers: _tiers,
  };
}
