import { Category } from "@/constants/category";
import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { SUPPORTED_CHAINS } from "@/constants/supportedChains";
import {
  NftTiersDocument,
  NftTiersQuery,
  useAllNftTiersQuery,
} from "@/generated/graphql";
import { Tier, Tiers } from "@/model/tier";
import { createApolloClient } from "@/utils/createApolloClient";
import { parseTier } from "@/utils/parseTier";
import { useEffect, useMemo, useState } from "react";
import { ChainId } from "../useChain";

/**
 * @returns All NFT tiers mapped to their respective category
 */
export function useCategorizedTiers() {
  const [multichainTiers, setMultichainTiers] =
    useState<Record<number, Tier["multiChainSupply"]>>();

  useEffect(() => {
    async function get() {
      Promise.allSettled(
        SUPPORTED_CHAINS.map((chain) => {
          const client = createApolloClient(chain);

          return client.query<NftTiersQuery>({
            query: NftTiersDocument,
            variables: {
              where: {
                collection: BANNYVERSE_COLLECTION_ID,
              },
            },
            fetchPolicy: "no-cache",
          });
        })
      ).then((promises) => {
        const tiersByChain: Partial<Record<ChainId, Tier[]>> = {};

        promises.forEach((p, i) => {
          if (p.status === "rejected") {
            console.log("asdf rejected", p);

            return;
          }

          const chainId = SUPPORTED_CHAINS[i].id;

          tiersByChain[chainId] = p.value.data.nfttiers
            .map(parseTier)
            .filter((t) => !!t) as Tier[];
        });

        const supplies = Object.entries(tiersByChain).reduce(
          (acc, [chainId, tiers]) => {
            const tierSupplies = tiers.reduce(
              (_acc, { tierId, initialSupply, remainingSupply }) => {
                const _chainId = chainId as unknown as ChainId;
                // console.log("asdf chainId", _chainId, tierId, remainingSupply);

                const existingSupplies = acc?.[tierId];

                const total =
                  (existingSupplies?.total ?? BigInt(0)) +
                  initialSupply +
                  remainingSupply;

                return {
                  ..._acc,
                  [tierId]: {
                    ...(existingSupplies ?? {}),
                    [_chainId]: {
                      initial: initialSupply,
                      remaining: remainingSupply,
                    },
                    total,
                  } as Tier["multiChainSupply"],
                };
              },
              {} as Record<number, Tier["multiChainSupply"]>
            );

            return {
              ...acc,
              ...(tierSupplies ?? {}),
            };
          },
          {} as Record<number, Tier["multiChainSupply"]>
        );

        setMultichainTiers(supplies);
      });
    }

    get();
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
            const _tiers = tiers.map((t) => ({
              ...parseTier(t),
              multiChainSupply: multichainTiers?.[t.tierId],
            }));

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
    [tiers, multichainTiers]
  );

  return {
    ...props,
    tiers: formattedTiers,
  };
}
