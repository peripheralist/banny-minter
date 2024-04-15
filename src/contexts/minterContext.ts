import { Category, CategoryGroup, CATEGORIES } from "@/constants/nfts";
import { useAnimation } from "@/hooks/useAnimation";
import { Tier } from "@/model/tier";
import { createContext } from "react";

export type EquippedTiers = Record<Category, Tier | undefined>;

export type EquipTierFns = Record<Category, (id: number | undefined) => void>;

type Context = {
  equipped: Partial<EquippedTiers>;
  equip?: Partial<EquipTierFns>;
  equipRandom?: VoidFunction;
  totalEquippedPrice?: bigint | null;
  selectedGroup: CategoryGroup;
  setSelectedGroup?: (g: CategoryGroup) => void;
  equipAnimation?: ReturnType<typeof useAnimation> & {
    category?: Category;
  };
  unequipAnimation?: ReturnType<typeof useAnimation> & {
    category?: Category;
  };
};

export const MinterContext = createContext<Context>({
  selectedGroup: "body",
  equipped: CATEGORIES.reduce(
    (acc, category) => ({
      ...acc,
      [category]: undefined,
    }),
    {}
  ),
});
