import { categoryOfId } from "@/constants/nfts";
import { NftTiersQuery } from "@/generated/graphql";
import { Tier } from "@/model/tier";
import { decodeNFTInfo } from "./tokenInfo";

export const parseTier = (
  tier: NftTiersQuery["nfttiers"][number]
): Tier | undefined => {
  const info = decodeNFTInfo(tier.resolvedUri);

  return info
    ? {
        ...info,
        category: categoryOfId[tier.category],
        tierId: tier.tierId,
        price: tier.price,
      }
    : undefined;
};
