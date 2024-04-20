import { CATEGORIES, Category, CategoryGroup } from "@/constants/nfts";
import { EquipTierFns, EquippedTiers } from "@/model/tier";
import { createContext } from "react";

type Context = {
  equipped: EquippedTiers;
  equip?: EquipTierFns;
  equipRandom?: VoidFunction;
  totalEquippedPrice?: bigint | null;
  selectedGroup: CategoryGroup;
  setSelectedGroup?: (g: CategoryGroup) => void;
  equippingCategory?: Category;
  unequippingCategory?: Category;
};

export const MinterContext = createContext<Context>({
  selectedGroup: "body",
  equipped: CATEGORIES.reduce(
    (acc, category) => ({
      ...acc,
      [category]: undefined,
    }),
    {} as EquippedTiers
  ),
});
