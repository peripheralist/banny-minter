import { Category } from "@/constants/category";
import { ChainId } from "./chain";
import { NFTInfo } from "./nftInfo";

export type Tier = {
  category: Category;
  tierId: number;
  name: string | undefined;
  image: string | undefined;
  svg: string | null;
  price: bigint;
  initialSupply: number;
  remainingSupply: number;
  multiChainSupply?: Record<ChainId, { initial: number; remaining: number }> & {
    total: number;
  };
  info?: NFTInfo;
  embeddedSvgUrl?: string;

  // Below only if NFT
  ownedSupply?: number;
  tokenId?: number;
  equipped?: boolean; // Only if NFT is equipped + owned by resolver contract
};

export type EquippedTiers = Partial<Record<Category, Tier | undefined>>;

export type EquipTierFns = Record<Category, (id: number | undefined) => void>;
