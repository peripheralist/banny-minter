import { Category } from "./category";

type CategoryIncompatibles = Partial<Record<Category, Category[]>>;

// If key category is equipped, values should be removed
// Copied from revert logic in contract
const _categoryIncompatibles: CategoryIncompatibles = {
  head: ["glasses", "mouth", "headTop"],
  suit: ["suitTop", "suitBottom"],
};

// Export incompatibles with all remaining many-to-many relationships
export const categoryIncompatibles: CategoryIncompatibles = (
  Object.entries(_categoryIncompatibles) as [Category, Category[]][]
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
