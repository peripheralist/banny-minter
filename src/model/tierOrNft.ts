import { Category } from "@/constants/category";
import { NftTiersQuery } from "@/generated/graphql";
import { Chain } from "./chain";

// type _Nft = Omit<NfTsQuery["nfts"]["items"][number], "tokenId" | "tier"> & {
//   ownedSupply?: number;
//   tokenId?: number;
//   equipped?: boolean; // Only if NFT is equipped to a banny + owned by resolver contract
// };

type NftProps = {
  tokenId: number;
  chain: Chain;
  owner?: `0x${string}`;
  dressed?: boolean; // owned by resolver contract
  ownedQuantity?: number;
  customized?: boolean
};

export type TierOrNft<hasNft extends boolean = boolean> = {
  tierId: number;
  category: Category;
  name?: string;

  embeddedSvgUrl?: string;
  reserveQuantity: number;
} & Omit<NftTiersQuery["nftTiers"]["items"][number], "category" | "name"> &
  (hasNft extends true ? NftProps : Partial<NftProps>);

export type EquipTierFns = Record<Category, (id: number | undefined) => void>;
