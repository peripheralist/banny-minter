import { CATEGORY_IDS } from "@/constants/category";

type NumString = `${number}`;

type NakedInfo = {
  category: 0;
  wornByNakedBannyId?: NumString;
};

type AllOtherInfo = {
  category: Exclude<(typeof CATEGORY_IDS)[keyof typeof CATEGORY_IDS], 0>;
  wornByNakedBannyId: NumString;
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
  outfitIds?: bigint[];
} & (NakedInfo | AllOtherInfo);
