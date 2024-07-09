import { CATEGORY_IDS, Category } from "@/constants/nfts";

type NumString = `${number}`;

type EquippedIds = Record<`${Exclude<Category, "naked">}Upc`, NumString>;

type NakedInfo = {
  category: "0";
  wornByNakedBannyId?: NumString;
} & EquippedIds;

type AllOtherInfo = {
  category: `"${Exclude<(typeof CATEGORY_IDS)[keyof typeof CATEGORY_IDS], 0>}"`;
  wornByNakedBannyId: NumString;
} & Partial<EquippedIds>;

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
} & (NakedInfo | AllOtherInfo);
