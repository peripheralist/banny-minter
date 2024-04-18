import { Category } from "@/constants/nfts";

export type Tier = {
  category: Category;
  tierId: number;
  name: string | undefined;
  image: string | undefined;
  svg: (styles?: string) => string | null;
  price: bigint;
};
