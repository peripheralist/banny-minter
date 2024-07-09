import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";
import { Tiers } from "@/model/tier";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { useMemo } from "react";
import { useCategorizedTiers } from "./useCategorizedTiers";

export function useOwnedCategorizedTiers(
  wallet: string | undefined,
  onlyUnworn?: boolean
) {
  const { data: nfts, loading: nftsLoading } = useNfTsQuery({
    variables: {
      where: {
        collection: BANNYVERSE_COLLECTION_ID,
        owner_: {
          wallet: wallet?.toLowerCase() ?? null,
        },
      },
    },
  });

  const { tiers, loading: tiersLoading } = useCategorizedTiers();

  const ownedTiers = useMemo(() => {
    if (!tiers || !nfts?.nfts.length) return null;

    return Object.entries(tiers).reduce(
      (acc, [category, tiersOfCategory]) => ({
        ...acc,
        [category]: tiersOfCategory.filter((t) => {
          const nft = nfts?.nfts.find((nft) => nft.tier.tierId === t.tierId);

          // TODO can maybe remove onlyUnworn logic?
          if (onlyUnworn) {
            // return true if NFT of tier is owned, and is currently not equipped to a banny
            const info = decodeNFTInfo(nft?.tokenUri);
            return nft && info?.wornByNakedBannyId === "0";
          }

          // return true if NFT of tier is owned
          return !!nft;
        }),
      }),
      {} as Tiers
    );
  }, [tiers, nfts, onlyUnworn]);

  return {
    tiers: ownedTiers,
    loading: tiersLoading || nftsLoading,
  };
}
