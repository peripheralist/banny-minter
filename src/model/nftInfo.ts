import { Category } from "@/constants/nfts";

export type NFTInfo = {
  image: string;
  productName: string;
} & Record<`${Exclude<Category, "naked">}Upc`, number>;
