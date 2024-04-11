import { NftTiersQuery } from "@/generated/graphql";
import { Asset } from "@/model/asset";
import { decodeNFTInfo } from "./tokenInfo";

export const parseAsset = (
  tier: NftTiersQuery["nfttiers"][number]
): Asset | undefined => {
  const info = decodeNFTInfo(tier.resolvedUri);

  return info
    ? {
        ...info,
        tierId: tier.tierId,
        price: tier.price,
      }
    : undefined;
};
