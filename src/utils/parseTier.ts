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
        name: info.productName,
        category: categoryOfId[tier.category],
        tierId: tier.tierId,
        price: tier.price,
        svg: tier.svg
          ? (styles?: string) => {
              const { svg } = tier;
              if (!styles || !svg) return svg;

              const idx = svg.indexOf(">");
              if (!idx) return svg;

              const parts = [svg.substring(0, idx), svg.substring(idx + 1)];

              if (!parts) return svg;
              return `${parts[0]}><style>${styles}</style>${parts[1]}`;
            }
          : () => null,
      }
    : undefined;
};
