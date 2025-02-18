import { BAN_HOOK } from "@/constants/contracts";
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
        collection: BAN_HOOK,
      },
    },
    fetchPolicy: "cache-and-network",
  });

  const { data: multichainTierSupplies } = useMultiChainTierSupplies();

  const formattedTiers: Tier[] | undefined = useMemo(
    () =>
      allTiers?.nfttiers.map(
        (t) =>
          ({
            ...parseTier(t),
            multiChainSupply: multichainTierSupplies?.[t.tierId],
          } as Tier)
      ),
    [allTiers?.nfttiers, multichainTierSupplies]
  );

  return {
    ...props,
    tiers: formattedTiers,
  };
}

function useMultiChainTierSupplies() {
  const chains = useSupportedChains();

  return useQuery({
    queryKey: ["multichain-tiers", ...chains.map((c) => c.id)],
    queryFn: () =>
      Promise.allSettled(
        chains.map((chain) => {
          const client = createApolloClient(chain);

          return client.query<NftTiersQuery>({
            query: NftTiersDocument,
            variables: {
              where: {
                collection: BAN_HOOK,
              },
            },
          });
        })
      ).then((promises) => {
        const tiersByChain: Partial<Record<ChainId, Tier[]>> = {};

        promises.forEach((p, i) => {
          if (p.status === "rejected") {
            console.log("Cross-chain query failed", p);

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
