import { NFTCategory, NFT_CATEGORIES } from "@/constants/nfts";
import { useAnimation } from "@/hooks/useAnimation";
import { Asset } from "@/model/asset";
import { createContext } from "react";

export type SelectedTierGetters = Record<NFTCategory, Asset | undefined>;

export type SelectedTierSetters = Record<
  NFTCategory,
  (id: number | undefined) => void
>;

type Context = {
  equipped: {
    set?: Partial<SelectedTierSetters>;
    get: Partial<SelectedTierGetters>;
    randomize?: VoidFunction;
    totalPrice?: bigint | null;
  };
  selectedCategory: NFTCategory;
  setSelectedCategory?: (t: NFTCategory) => void;
  changeAssetAnimation?: ReturnType<typeof useAnimation> & {
    category?: NFTCategory;
  };
};

export const MinterContext = createContext<Context>({
  selectedCategory: "suitTop",
  equipped: {
    get: NFT_CATEGORIES.reduce(
      (acc, category) => ({
        ...acc,
        [category]: undefined,
      }),
      {}
    ),
  },
});
