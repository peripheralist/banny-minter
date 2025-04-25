import { BAN_HOOK } from "@/constants/contracts";
import { useNftTiersQuery } from "@/generated/graphql";
import { ChainId } from "@/model/chain";
import { parseTierOrNft } from "@/utils/parseTier";
import { useMemo } from "react";

type MultichainSupplies = Record<
  number,
  { total: number; reserved: number } & Record<
    ChainId,
    { initial: number; remaining: number }
  >
>;

export function useMultichainSupplies() {
  const { data: tiers } = useNftTiersQuery({
    variables: {
      where: {
        hook: BAN_HOOK,
      },
    },
  });

  const multichainSupplies = useMemo(
    () =>
      tiers?.nftTiers.items
        ?.map(parseTierOrNft)
        .reduce(
          (
            acc,
            { tierId, initialSupply, remainingSupply, reserveQuantity, chainId }
          ) => {
            const existingSupplies = acc?.[tierId];

            const total =
              (existingSupplies?.total ?? 0) + initialSupply + remainingSupply;

            return {
              ...acc,
              [tierId]: {
                ...(existingSupplies ?? {}),
                reserved: reserveQuantity,
                [chainId]: {
                  initial: initialSupply,
                  remaining: remainingSupply,
                },
                total,
              },
            };
          },
          {} as MultichainSupplies
        ),
    [tiers]
  );

  return multichainSupplies;
}
