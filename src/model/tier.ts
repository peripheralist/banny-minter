import { Category } from "@/constants/category";
import { NftTiersQuery } from "@/generated/graphql";
import { ChainId } from "./chain";

type _Tier = NftTiersQuery["nftTiers"]["items"][number];

export type Tier = Omit<_Tier, "category" | "metadata"> & {
  category: Category;
  multiChainSupply?: Record<ChainId, { initial: number; remaining: number }> & {
    total: number;
  };
  metadata?: {
    productName: string;
  };
  embeddedSvgUrl?: string;

  // Below only if NFT
  nft?: {
    ownedSupply?: number;
    tokenId?: number;
    equipped?: boolean; // Only if NFT is equipped to a banny + owned by resolver contract
  };
};

export type EquippedTiers = Partial<Record<Category, Tier | undefined>>;

export type EquipTierFns = Record<Category, (id: number | undefined) => void>;
