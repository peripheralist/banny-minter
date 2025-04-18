import { NFT } from "@/model/nft";
import { useMemo } from "react";
import { Address } from "viem";
import { useAllTiers } from "./useAllTiers";
import { useNftsOf } from "./useNftsOf";
import { TierOrNft } from "@/model/tierOrNft";
import { parseTierOrNft } from "@/utils/parseTier";

/**
 * @returns all tiers owned by `wallet`, including all NFTs owned of each tier.
 */
export function useOwnedTiers(wallet: Address | undefined) {
  const { data: nfts, loading: nftsLoading } = useNftsOf(wallet);

  const { tiers, loading: tiersLoading } = useAllTiers();

  const ownedTiers = useMemo(() => {
    if (!tiers) return;

    return nfts?.nfts.items.reduce((acc, nft) => {
      if (acc.some((ton) => ton.tierId === nft.tier?.tierId)) {
        // we already added a NFT with this tier
        return acc.map((_ton) =>
          _ton.tierId === nft.tier?.tierId
            ? {
                ..._ton,
                ownedQuantity: (_ton.ownedQuantity || 0) + 1,
              }
            : _ton
        );
      }

      const tier = nft.tier;

      if (tier) {
        return [
          ...acc,
          {
            ...parseTierOrNft(nft),
            ownedQuantity: 1,
          },
        ];
      }

      return acc;
    }, [] as TierOrNft<true>[]);
  }, [tiers, nfts]);

  return {
    tiers: ownedTiers,
    loading: tiersLoading || nftsLoading,
  };
}
