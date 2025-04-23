import { CategoryGroup } from "@/constants/category";
import { TierOrNft } from "@/model/tierOrNft";
import { createContext, Dispatch, SetStateAction } from "react";

export type ShoppingBag = { quantity: number; tier: TierOrNft }[];

export type ShopSort = "category" | "price";
export type ShopPriceFormat = "usd" | "eth";

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
  sort?: ShopSort;
  setSort?: Dispatch<SetStateAction<ShopSort>>;
  priceFormat?: ShopPriceFormat;
  setPriceFormat?: Dispatch<SetStateAction<ShopPriceFormat>>;
};

export const ShopContext = createContext<Context>({
  selectedGroup: "banny",
  bag: [],
});
