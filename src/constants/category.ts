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
  hand: 12,
  specialSuit: 13,
  specialLegs: 14,
  specialHead: 15,
  specialBody: 16,
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
  "naked",
  "head",
  "glasses",
  "mouth",
  "legs",
  "suitBottom",
  "suitTop",
  "suit",
  "necklace",
  "headTop",
  "hand",
  "specialSuit",
  "specialLegs",
  "specialHead",
  "specialBody",
];

export const CATEGORY_GROUP_NAMES = [
  "banny",
  "outfit",
  "head",
  "special",
  "world",
] as const;

export type CategoryGroup = (typeof CATEGORY_GROUP_NAMES)[number];

// Groups of similar asset categories, not including body
export const CATEGORY_GROUPS: Record<CategoryGroup, Category[]> = {
  banny: ["naked"],
  head: ["glasses", "head", "headTop", "specialHead", "mouth"],
  outfit: [
    "suit",
    "suitBottom",
    "suitTop",
    "specialSuit",
    "specialBody",
    "necklace",
    "legs",
    "specialLegs",
  ],
  special: ["hand", "backside"],
  world: ["world"],
};

// export const groupOfCategory = Object.entries(CATEGORY_GROUPS).reduce(
//   (acc, [k, v]) => ({
//     ...acc,
//     ...v.reduce((_acc, curr) => ({ ..._acc, [curr]: k }), {}),
//   }),
//   {} as Record<Category, CategoryGroup>
// );
