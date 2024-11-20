import { CATEGORIES, Category, CategoryGroup } from "@/constants/category";
import { EquipTierFns, EquippedTiers, Tier } from "@/model/tier";
import { createContext } from "react";

type Context = {
  equipped: EquippedTiers;
  equip?: EquipTierFns;
  unequipAll?: VoidFunction;
  totalEquippedPrice?: bigint | null;
  selectedGroup: CategoryGroup;
  setSelectedGroup?: (g: CategoryGroup) => void;
  equippingCategory?: Category;
  unequippingCategory?: Category;
  availableTiers?: Tier[];
};

export const EquipmentContext = createContext<Context>({
  selectedGroup: "banny",
  equipped: CATEGORIES.reduce(
    (acc, category) => ({
      ...acc,
      [category]: undefined,
    }),
    {} as EquippedTiers
  ),
});
