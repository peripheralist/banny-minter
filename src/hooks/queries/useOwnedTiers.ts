import { NFT } from "@/model/nft";
import { Tier } from "@/model/tier";
import { useMemo } from "react";
import { Address } from "viem";
import { useAllTiers } from "./useAllTiers";
import { useNftsOf } from "./useNftsOf";

/**
 * @returns all tiers owned by `wallet`, including all NFTs owned of each tier.
 */
export function useOwnedTiers(wallet: Address | undefined) {
  const { data: nfts, loading: nftsLoading } = useNftsOf(wallet);

  const { tiers, loading: tiersLoading } = useAllTiers();

  const ownedTiers = useMemo(() => {
    if (!tiers) return;

    return nfts?.nfts.items.reduce((acc, nft) => {
      if (acc.some(({ tier }) => tier.tierId === nft.tier?.tierId)) {
        return acc.map((obj) =>
          obj.tier.tierId === nft.tier?.tierId
            ? {
                ...obj,
                nfts: [...obj.nfts, nft],
              }
            : obj
        );
      }

      const tier = tiers.find((t) => t.tierId === nft.tier?.tierId);

      if (tier) {
        return [
          ...acc,
          {
            tier,
            nfts: [nft],
          },
        ];
      }

      return acc;
    }, [] as { tier: Tier; nfts: NFT[] }[]);
  }, [tiers, nfts]);

  return {
    tiers: ownedTiers,
    loading: tiersLoading || nftsLoading,
  };
}
