import { CATEGORIES, Category, CategoryGroup } from "@/constants/category";
import { CategoryLib } from "@/model/categoryLib";
import { EquipTierFns, TierOrNft } from "@/model/tierOrNft";
import { createContext } from "react";

type Context = {
  equipped: CategoryLib<TierOrNft>;
  equip?: EquipTierFns;
  unequipAll?: VoidFunction;
  totalEquippedPrice?: bigint | null;
  selectedGroup: CategoryGroup;
  setSelectedGroup?: (g: CategoryGroup) => void;
  equippingCategory?: Category;
  unequippingCategory?: Category;
  availableTiers?: TierOrNft[];
  purgeCache?: VoidFunction;
};

export const DressBannyContext = createContext<Context>({
  selectedGroup: "banny",
  equipped: CATEGORIES.reduce(
    (acc, category) => ({
      ...acc,
      [category]: undefined,
    }),
    {}
  ),
});
