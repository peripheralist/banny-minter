import { NFTCategory } from "./nfts";

type CategoryIncompatibles = Partial<Record<NFTCategory, NFTCategory[]>>;

// If key category is equipped, values should be removed
// Copied from revert logic in contract
const _categoryIncompatibles: CategoryIncompatibles = {
  onesie: ["suit", "suitTop", "suitBottom", "shoe"],
  head: ["face", "eyes", "mouth", "headgear"],
  face: ["eyes", "mouth"],
  suit: ["suitTop", "suitBottom"],
};

// Export incompatibles with all remaining many-to-many relationships
export const categoryIncompatibles: CategoryIncompatibles = (
  Object.entries(_categoryIncompatibles) as [NFTCategory, NFTCategory[]][]
).reduce((acc, [k, values]) => {
  values.forEach((v) => {
    if (!acc[v]) {
      acc[v] = [k];
    } else if (!acc[v]!.includes(k)) {
      acc[v]!.push(k);
    }
  });

  return acc;
}, _categoryIncompatibles);
