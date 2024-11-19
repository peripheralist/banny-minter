import { categoryIncompatibles } from "@/constants/incompatibles";
import { CATEGORIES, Category } from "@/constants/category";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { EquippedTiers } from "@/model/tier";
import { useEffect, useMemo, useState } from "react";
import EquippedTiersPreview from "../shared/EquippedTiersPreview";

export default function TiersDemo({
  size,
  pixelSize,
}: {
  size: number;
  pixelSize?: number;
}) {
  const [equippedTierId, setEquippedTierId] = useState<
    Partial<Record<Category, number>>
  >({});
  const [category, setCategory] = useState<Category>("naked");

  const { tiers } = useCategorizedTiers();

  // exclude some categories
  const filteredCategories = useMemo(
    () => CATEGORIES.filter((c) => c !== "world"),
    []
  );

  const equipped = useMemo(
    () =>
      filteredCategories.reduce((acc, category) => {
        const equippedTierForCategory = tiers?.[category].find(
          (t) => t.tierId === equippedTierId[category]
        );

        return {
          ...acc,
          [category]: equippedTierForCategory,
        };
      }, {} as EquippedTiers),
    [equippedTierId, tiers, filteredCategories]
  );

  useEffect(() => {
    setEquippedTierId({
      naked: Math.ceil(Math.random() * 4),
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (!tiers) return;

      let _category: Category;

      setCategory((c) => {
        let __category = c;
        while (__category === c || !__category) {
          __category =
            filteredCategories[
              Math.floor(Math.random() * filteredCategories.length)
            ];
        }

        _category = __category;
        return __category;
      });

      if (!_category!) return;

      const tiersOfCategory = tiers[_category];

      if (!tiersOfCategory.length) return;

      setEquippedTierId((e) => {
        let newTierIdOfCategory = e[_category];

        if (newTierIdOfCategory && tiersOfCategory.length === 1) {
          newTierIdOfCategory = undefined;
        } else {
          while (newTierIdOfCategory == e[_category]) {
            newTierIdOfCategory =
              tiersOfCategory[
                Math.floor(Math.random() * tiersOfCategory.length)
              ].tierId;
          }
        }

        return {
          ...e,
          [_category]: newTierIdOfCategory,
          // Remove any incompatible tiers
          ...categoryIncompatibles[_category]?.reduce(
            (acc, incompatibleTier) => ({
              ...acc,
              [incompatibleTier]: undefined,
            }),
            {}
          ),
        };
      });
    }, 3000);

    return () => clearInterval(id);
  }, [tiers, filteredCategories]);

  return (
    <EquippedTiersPreview
      size={size}
      pixelSize={pixelSize}
      equipped={equipped}
      equippingCategory={category}
    />
  );
}
