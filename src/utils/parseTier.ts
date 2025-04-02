import { categoryOfId } from "@/constants/category";
import { NftTiersQuery } from "@/generated/graphql";
import { Tier } from "@/model/tier";
import { decodeNFTInfo } from "./decodeNftInfo";

export const parseTier = (
  tier: NftTiersQuery["nfttiers"][number]
): Tier | undefined => {
  const info = decodeNFTInfo(tier.resolvedUri);

  const imgHref = '<image href="';

  let embeddedSvgUrl: string | undefined = undefined;

  if (tier.svg?.includes(imgHref)) {
    // Pre-load images embedded in SVG to ensure they load in browser. May not be necessary.
    let embeddedImageUrl = tier.svg.split(imgHref)[1];
    embeddedImageUrl = embeddedImageUrl.split('"')[0].replace(
      "bannyverse.infura-ipfs.io",
      "ipfs.io" // bannyverse gateway returning SSL error, issue unclear
    );
    const img = new Image();
    img.src = embeddedImageUrl;

    embeddedSvgUrl = embeddedImageUrl;
  }

  return {
    info,
    image: info?.image,
    tokenId: info?.tokenId ? parseInt(info.tokenId) : undefined,
    name: info?.productName,
    category: categoryOfId[tier.category],
    tierId: tier.tierId,
    price: tier.price,
    initialSupply: tier.initialSupply,
    remainingSupply: tier.remainingSupply,
    embeddedSvgUrl,
    svg: tier.svg?.toLowerCase().includes("<script") ? null : tier.svg, // crude injected script protection
  };
};
