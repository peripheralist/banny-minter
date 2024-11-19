import { CategoryGroup } from "@/constants/category";
import { Tier, Tiers } from "@/model/tier";
import { createContext } from "react";

export type ShoppingBag = { quantity: number; tier: Tier }[];

type Context = {
  availableTiers?: Tiers;
  bag: ShoppingBag;
  addItem?: (t: Tier) => void;
  removeItem?: (t: Tier["tierId"]) => void;
  emptyBag?: VoidFunction;
  itemsQuantity?: number;
  totalEquippedPrice?: bigint | null;
  selectedGroup: CategoryGroup;
  setSelectedGroup?: (g: CategoryGroup) => void;
};

export const ShopContext = createContext<Context>({
  selectedGroup: "banny",
  bag: [],
});