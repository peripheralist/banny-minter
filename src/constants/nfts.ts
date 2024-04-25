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
  naked: 0,
  world: 1,
  backside: 2,
  necklace: 3,
  head: 4,
  glasses: 5,
  mouth: 6,
  legs: 7,
  suit: 8,
  suitBottom: 9,
  suitTop: 10,
  headTop: 11,
  fist: 12,
  topping: 13,
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
  "naked",
  "backside",
  "necklace",
  "head",
  "glasses",
  "mouth",
  "legs",
  "suitBottom",
  "suitTop",
  "suit",
  "headTop",
  "fist",
  "topping",
];

export const CATEGORY_GROUP_NAMES = [
  "head",
  "body",
  "special",
  "world",
] as const;

export type CategoryGroup = (typeof CATEGORY_GROUP_NAMES)[number];

// Groups of similar asset categories, not including body
export const CATEGORY_GROUPS: Record<CategoryGroup, Category[]> = {
  body: ["necklace", "legs", "suit", "suitBottom", "suitTop"],
  head: ["glasses", "head", "headTop", "mouth"],
  special: ["fist", "topping", "backside"],
  world: ["world"],
};
