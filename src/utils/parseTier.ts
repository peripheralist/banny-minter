import { categoryOfId } from "@/constants/category";
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
        tokenId: parseInt(info.tokenId),
        name: info.productName,
        category: categoryOfId[tier.category],
        tierId: tier.tierId,
        price: tier.price,
        initialSupply: tier.initialSupply,
        remainingSupply: tier.remainingSupply,
        svg: tier.svg?.includes("<script") ? null : tier.svg, // crude injected script protection
      }
    : undefined;
};
