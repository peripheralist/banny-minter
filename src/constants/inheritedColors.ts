const INHERITED_FILLS: Record<number, string[]> = {
  1: [
    "#67d757",
    "#30a220",
    "#217a15",
    "#09490f",
    "#e483ef",
    "#dc2fef",
    "#dc2fef",
  ],
  2: [
    "#ffd8c5",
    "#ff96a9",
    "#fe588b",
    "#c92f45",
    "#ffd8c5",
    "#ff96a9",
    "#fe588b",
  ],
  3: [
    "#f3a603",
    "#ff7c02",
    "#fd3600",
    "#c32e0d",
    "#f3a603",
    "#ff7c02",
    "#fd3600",
  ],
  4: [
    "#ffe900",
    "#ffc700",
    "#f3a603",
    "#965a1a",
    "#ffe900",
    "#ffc700",
    "#f3a603",
  ],
};

const getFillsForNaked = (nakedTier: number) => {
  const [b1, b2, b3, b4, a1, a2, a3] = INHERITED_FILLS[nakedTier];

  return { b1, b2, b3, b4, a1, a2, a3 };
};

export function getInheritedStyle(nakedTierId?: number) {
  if (!nakedTierId) return "";

  const colors = getFillsForNaked(nakedTierId);

  return `<style>${Object.entries(colors)
    .map(([className, color]) => `.${className}{fill:${color};}`)
    .join("")}</style>`;
}
