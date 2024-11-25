import { LOOKS_COLLECTION_ID } from "@/constants/nfts";
import {
  NftTiersDocument,
  NftTiersQuery,
  useNftTiersQuery,
} from "@/generated/graphql";
import { ChainId } from "@/model/chain";
import { Tier } from "@/model/tier";
import { createApolloClient } from "@/utils/createApolloClient";
import { parseTier } from "@/utils/parseTier";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useSupportedChains } from "../useSupportedChains";

/**
 * @returns All Looks NFT tiers
 */
export function useAllTiers() {
  const { data: allTiers, ...props } = useNftTiersQuery({
    variables: {
      where: {
        collection: LOOKS_COLLECTION_ID,
      },
    },
  });

  const { data: multichainTiers } = useMultiChainTiers();

  const formattedTiers: Tier[] | undefined = useMemo(() => {
    return allTiers?.nfttiers.map((t) => {
      // Hack for pre-loading embedded images to ensure they render correctly
      const svg = t?.svg;
      const imgHref = '<image href="';

      if (svg?.includes(imgHref)) {
        let embeddedImageUrl = svg.split(imgHref)[1];
        embeddedImageUrl = embeddedImageUrl.split('"')[0];
        const img = new Image();
        img.src = embeddedImageUrl;
      }

      return {
        ...parseTier(t),
        multiChainSupply: multichainTiers?.[t.tierId],
      } as Tier;
    });
  }, [allTiers, multichainTiers]);

  return {
    ...props,
    tiers: formattedTiers,
  };
}

function useMultiChainTiers() {
  const chains = useSupportedChains();

  return useQuery({
    queryKey: ["multichain-tiers"],
    queryFn: () =>
      Promise.allSettled(
        chains.map((chain) => {
          const client = createApolloClient(chain);

          return client.query<NftTiersQuery>({
            query: NftTiersDocument,
            variables: {
              where: {
                collection: LOOKS_COLLECTION_ID,
              },
            },
            fetchPolicy: "no-cache",
          });
        })
      ).then((promises) => {
        const tiersByChain: Partial<Record<ChainId, Tier[]>> = {};

        promises.forEach((p, i) => {
          if (p.status === "rejected") {
            console.log("asdf Cross-chain query failed", p);

            return;
          }

          const chainId = chains[i].id;

          tiersByChain[chainId] = p.value.data.nfttiers
            .map(parseTier)
            .filter((t) => !!t) as Tier[];
        });

        // Get supplies from each chain and add to each tier
        const supplies = Object.entries(tiersByChain).reduce(
          (acc, [chainId, tiers]) => {
            const tierSupplies = tiers.reduce(
              (_acc, { tierId, initialSupply, remainingSupply }) => {
                const _chainId = chainId as unknown as ChainId;

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

        return supplies;
      }),
  });
}
