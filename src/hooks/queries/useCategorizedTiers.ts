import { Category } from "@/constants/category";
import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { SUPPORTED_CHAINS } from "@/constants/supportedChains";
import { NftTiersDocument, useAllNftTiersQuery } from "@/generated/graphql";
import { Tier, Tiers } from "@/model/tier";
import { createApolloClient } from "@/utils/createApolloClient";
import { parseTier } from "@/utils/parseTier";
import { useEffect, useMemo } from "react";

/**
 * @returns All NFT tiers mapped to their respective category
 */
export function useCategorizedTiers() {
  useEffect(() => {
    async function get() {
      const promises = [];

      for (const { name } of SUPPORTED_CHAINS) {
        const client = createApolloClient(name);

        promises.push(
          client.query({
            query: NftTiersDocument,
            variables: {
              collection: BANNYVERSE_COLLECTION_ID,
            },
          })
        );
      }

      Promise.all(promises).then((_promises) =>
        _promises.map((p, i) => ({
          chain: SUPPORTED_CHAINS[i].name.toLowerCase(),
          tiers: p,
        }))
      );
    }
  }, []);

  const { data: tiers, ...props } = useAllNftTiersQuery({
    variables: {
      collection: BANNYVERSE_COLLECTION_ID,
    },
    fetchPolicy: "cache-first",
  });

  // console.log(
  //   "asdf tiers",
  //   CATEGORIES.reduce(
  //     (acc, c) => [...acc, ...(tiers?.[c] ?? [])],
  //     [] as AllNftTiersQuery[Category]
  //   )
  //     .sort((a, b) => (a.tierId < b.tierId ? -1 : 1))
  //     .map((t) => `${parseTier(t)?.name} ${t.tierId}`)
  // );

  const formattedTiers: Tiers | undefined = useMemo(
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
    tiers: formattedTiers,
  };
}
