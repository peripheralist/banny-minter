import { Category } from "@/constants/nfts";

export type Tier = {
  category: Category;
  tierId: number;
  name: string | undefined;
  image: string | undefined;
  svg: string | null;
  price: bigint;
};

export type Tiers = Record<Category, Tier[]>;

export type EquippedTiers = Record<Category, Tier | undefined>;

export type EquipTierFns = Record<Category, (id: number | undefined) => void>;
