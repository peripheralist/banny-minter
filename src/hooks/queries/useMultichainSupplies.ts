import { ChainId } from "@/model/chain";
import { useMemo } from "react";
import { useAllTiers } from "./useAllTiers";

type MultichainSupplies = Record<
  number,
  { total: number } & Record<ChainId, { initial: number; remaining: number }>
>;

export function useMultichainSupplies() {
  const { tiers } = useAllTiers();

  const multichainSupplies = useMemo(
    () =>
      tiers?.reduce(
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
            } as MultichainSupplies[number],
          };
        },
        {} as MultichainSupplies
      ),
    [tiers]
  );

  return multichainSupplies;
}
