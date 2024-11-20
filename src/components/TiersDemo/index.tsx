import { CATEGORIES, Category } from "@/constants/category";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { useContext, useEffect, useState } from "react";
import EquippedTiersPreview from "../shared/EquippedTiersPreview";

const excludedCategories: Category[] = ["world"];

export default function TiersDemo({
  size,
  pixelSize,
}: {
  size: number;
  pixelSize?: number;
}) {
  const { tiers } = useAllTiers();

  if (!tiers) return null;

  return (
    <EquipmentContextProvider
      availableTiers={tiers.filter(
        (t) => !excludedCategories.includes(t.category)
      )}
    >
      <_Demo size={size} pixelSize={pixelSize} />
    </EquipmentContextProvider>
  );
}

function _Demo({
  size,
  pixelSize,
}: {
  size: number;
  pixelSize: number | undefined;
}) {
  const {
    equip,
    equipped,
    equippingCategory,
    unequippingCategory,
    availableTiers,
  } = useContext(EquipmentContext);

  const [_, setCategory] = useState<Category>("naked");

  useEffect(() => {
    // default equip body
    equip?.naked(Math.ceil(Math.random() * 4));
  }, [equip]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!availableTiers || !equip) return;

      let _category: Category;

      setCategory((prevCategory) => {
        const availableCategories = CATEGORIES.filter(
          (_c) => ![...excludedCategories, prevCategory].includes(_c)
        );

        _category =
          availableCategories[
            Math.floor(Math.random() * availableCategories.length)
          ];

        return _category;
      });

      if (!_category!) return;

      const tiersOfCategory = availableTiers.filter(
        (t) => t.category === _category
      );

      let newTierId = equipped[_category]?.tierId;

      if (newTierId && tiersOfCategory.length === 1) {
        // remove if only tier in category
        newTierId = undefined;
      } else {
        while (newTierId === equipped[_category]) {
          newTierId =
            tiersOfCategory[Math.floor(Math.random() * tiersOfCategory.length)]
              .tierId;
        }
      }

      equip[_category](newTierId);
    }, 3000);

    return () => clearInterval(id);
  }, [availableTiers, equip, equipped]);

  return (
    <EquippedTiersPreview
      size={size}
      pixelSize={pixelSize}
      equipped={equipped}
      equippingCategory={equippingCategory}
      unequippingCategory={unequippingCategory}
    />
  );
}
