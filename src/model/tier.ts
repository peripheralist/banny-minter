import { Category } from "@/constants/nfts";

export type Tier = {
  category: Category;
  tierId: number;
  name: string | undefined;
  image: string | undefined;
  svg: string | null;
  price: bigint;
  initialSupply: bigint;
  remainingSupply: bigint;

  label?: JSX.Element | string;
  detail?: JSX.Element | string;

  tokenId?: number; // Only if NFT
  equipped?: boolean; // Only if NFT is equipped + owned by resolver contract
};

export type Tiers = Record<Category, Tier[]>;

export type EquippedTiers = Partial<Record<Category, Tier | undefined>>;

export type EquipTierFns = Record<Category, (id: number | undefined) => void>;
