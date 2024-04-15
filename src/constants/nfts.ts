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

export const CATEGORY_IDS = {
  body: 0,
  world: 1,
  backside: 2,
  necklace: 3,
  head: 4,
  face: 5,
  eyes: 6,
  mouth: 7,
  headgear: 8,
  shoe: 9,
  suit: 10,
  suitBottom: 11,
  suitTop: 12,
  fist: 13,
  topping: 14,
} as const;

export type Category = keyof typeof CATEGORY_IDS;

export const categoryOfId = Object.entries(CATEGORY_IDS).reduce(
  (acc, [k, v]) => ({
    ...acc,
    [v]: k as Category,
  }),
  {} as Record<number, Category>
);

// All categories in SVG layering order, from background to foreground
export const CATEGORIES: Category[] = [
  "world",
  "backside",
  "body",
  "suitBottom",
  "suitTop",
  "suit",
  "face",
  "eyes",
  "mouth",
  "head",
  "headgear",
  "necklace",
  "shoe",
  "fist",
  "topping",
];

export const CATEGORY_GROUP_NAMES = [
  "body",
  "head",
  "special",
  "world",
] as const;

export type CategoryGroup = (typeof CATEGORY_GROUP_NAMES)[number];

// Groups of similar asset categories
export const CATEGORY_GROUPS: Record<CategoryGroup, Category[]> = {
  body: ["necklace", "shoe", "suit", "suitBottom", "suitTop"],
  head: ["eyes", "face", "head", "headgear", "mouth"],
  special: ["fist", "topping", "backside"],
  world: ["world"],
};
