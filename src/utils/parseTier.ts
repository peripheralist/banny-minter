import { categoryOfId } from "@/constants/nfts";
import { NftTiersQuery } from "@/generated/graphql";
import { Tier } from "@/model/tier";
import { decodeNFTInfo } from "./decodeNftInfo";

export const parseTier = (
  tier: NftTiersQuery["nfttiers"][number]
): Tier | undefined => {
  const info = decodeNFTInfo(tier.resolvedUri);

  return info
    ? {
        ...info,
        name: info.productName,
        category: categoryOfId[tier.category],
        tierId: tier.tierId,
        price: tier.price,
        svg: tier.svg?.includes("<script") ? null : tier.svg, // crude injected script protection
      }
    : undefined;
};
