import { CategoryGroup } from "@/constants/category";
import { TierOrNft } from "@/model/tierOrNft";
import { createContext } from "react";

export type ShoppingBag = { quantity: number; tier: TierOrNft }[];

type Context = {
  bag: ShoppingBag;
  addItem?: (t: TierOrNft) => void;
  removeItem?: (t: TierOrNft["tierId"]) => void;
  emptyBag?: VoidFunction;
  itemsQuantity?: number;
  totalEquippedPrice?: bigint | null;
  selectedGroup: CategoryGroup;
  setSelectedGroup?: (g: CategoryGroup) => void;
  purgeCache?: VoidFunction;
};

export const ShopContext = createContext<Context>({
  selectedGroup: "banny",
  bag: [],
});
