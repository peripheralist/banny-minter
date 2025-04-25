import { BAN_HOOK } from "@/constants/contracts";
import { useNftTiersQuery } from "@/generated/graphql";
import { TierOrNft } from "@/model/tierOrNft";
import { parseTierOrNft } from "@/utils/parseTier";
import { mainnet, sepolia } from "viem/chains";
import { useAppChain } from "../useAppChain";
import { useMemo } from "react";

/**
 * @returns All Looks NFT tiers
 */
export function useAllTiers() {
  const appChain = useAppChain();

  const { data: tiers, ...props } = useNftTiersQuery({
    variables: {
      where: {
        hook: BAN_HOOK,
        chainId: appChain.id,
      },
    },
  });

  const _tiers = tiers?.nftTiers.items;

  const parsedTiers = useMemo(
    () =>
      _tiers
        ?.map((t) => parseTierOrNft(t))
        .reduce(
          (acc, curr) =>
            // remove duplicates
            acc.some((parsed) => parsed.tierId === curr.tierId)
              ? acc
              : [...acc, curr],
          [] as TierOrNft[]
        ),
    [_tiers]
  );

  return {
    ...props,
    tiers: _tiers,
    parsedTiers,
  };
}
