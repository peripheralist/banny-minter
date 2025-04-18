import { CATEGORIES } from "@/constants/category";
import { CategoryLib } from "@/model/categoryLib";
import { TierOrNft } from "@/model/tierOrNft";

export const libRequiresNfts = (lib: CategoryLib<TierOrNft> | undefined) => {
  if (!lib) return {} as CategoryLib<TierOrNft<true>>;

  if (CATEGORIES.some((c) => !!lib[c] && !lib[c]?.tokenId)) {
    throw new Error("Lib contains tier without nft");
  }

  return lib as CategoryLib<TierOrNft<true>>;
};
