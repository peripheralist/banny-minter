import { BAN_HOOK } from "@/constants/contracts";
import { useNftTiersQuery } from "@/generated/graphql";
import { Tier } from "@/model/tier";
import { parseTier } from "@/utils/parseTier";
import { useMemo } from "react";

/**
 * @returns All Looks NFT tiers
 */
export function useAllTiers() {
  const { data: allTiers, ...props } = useNftTiersQuery({
    variables: {
      where: {
        hook: BAN_HOOK,
      },
    },
    fetchPolicy: "cache-and-network",
  });

  const multichainSupplies = useMemo(
    () =>
      allTiers?.nftTiers.items?.reduce(
        (acc, { tierId, initialSupply, remainingSupply, chainId }) => {
          const existingSupplies = acc?.[tierId];

          const total =
            (existingSupplies?.total ?? 0) + initialSupply + remainingSupply;

          return {
            ...acc,
            [tierId]: {
              ...(existingSupplies ?? {}),
              [chainId]: {
                initial: initialSupply,
                remaining: remainingSupply,
              },
              total,
            } as Tier["multiChainSupply"],
          };
        },
        {} as Record<number, Tier["multiChainSupply"]>
      ),
    [allTiers?.nftTiers.items]
  );

  const formattedTiers = useMemo(
    () =>
      allTiers?.nftTiers.items.reduce(
        (acc, tier) =>
          acc.some((t) => t.tierId === tier.tierId)
            ? acc
            : [
                ...acc,
                {
                  ...parseTier(tier),
                  multiChainSupply: multichainSupplies?.[tier.tierId],
                },
              ],
        [] as Tier[]
      ),
    [allTiers?.nftTiers, multichainSupplies]
  );

  return {
    ...props,
    tiers: formattedTiers,
  };
}
