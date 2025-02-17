import { CATEGORY_IDS } from "@/constants/category";

type NumString = `${number}`;

type BodyInfo = {
  category: 0;
  wornByBannyBodyId?: NumString;
};

type AllOtherInfo = {
  category: Exclude<(typeof CATEGORY_IDS)[keyof typeof CATEGORY_IDS], 0>;
  wornByBannyBodyId: NumString;
};

export type NFTInfo = {
  name: string;
  productName: string;
  categoryName: string;
  image: string;
  upc: NumString;
  tokenId: NumString;
  supply: NumString;
  remaining: NumString;
  price: NumString;
  decimals: NumString;
  currency: NumString;
  description: string;
  outfitIds?: number[];
  backgroundId?: number;
} & (BodyInfo | AllOtherInfo);
