export const BANNYVERSE_COLLECTION_ID =
  process.env.NEXT_PUBLIC_BANNYVERSE_COLLECTION_ID!;

if (!BANNYVERSE_COLLECTION_ID) {
  throw new Error("Missing Bannyverse collection ID");
}

export const BANNYVERSE_PROJECT_ID =
  process.env.NEXT_PUBLIC_BANNYVERSE_PROJECT_ID!;

if (!BANNYVERSE_PROJECT_ID) {
  throw new Error("Missing Bannyverse projectId");
}

/**
 * NFT lingo overview:
 *
 * nft: individual token
 * tier: individual asset (many nfts)
 * category: type of asset (many tiers)
 * group: group of similar categories (many categories)
 */

export const NFT_CATEGORY_IDS = {
  body: 0,
  world: 1,
  backside: 2,
  necklace: 3,
  head: 4,
  face: 5,
  eyes: 6,
  mouth: 7,
  headgear: 8,
  onesie: 9,
  shoe: 10,
  suit: 11,
  suitBottom: 12,
  suitTop: 13,
  fist: 14,
  topping: 15,
} as const;

export type NFTCategory = keyof typeof NFT_CATEGORY_IDS;

export const NFT_CATEGORIES: NFTCategory[] = [
  "body",
  "world",
  "head",
  "suitTop",
];

export type NFTCategoryGroup = "world" | "head" | "body" | "hand";

// Groups of similar asset categories
export const NFT_CATEGORY_GROUPS: Record<NFTCategoryGroup, NFTCategory[]> = {
  head: ["eyes", "face", "head", "headgear", "mouth"],
  body: ["necklace", "onesie", "shoe", "suit", "suitBottom", "suitTop"],
  hand: ["fist"],
  world: ["world"],
};
