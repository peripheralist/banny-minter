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

      let newCategory: Category;

      setCategory((prevCategory) => {
        const availableCategories = CATEGORIES.filter(
          (_c) => ![...excludedCategories, prevCategory].includes(_c)
        );

        newCategory =
          availableCategories[
            Math.floor(Math.random() * availableCategories.length)
          ];

        return newCategory;
      });

      if (!newCategory!) return;

      const tiersOfCategory = availableTiers.filter(
        (t) => t.category === newCategory
      );

      let newTierId = equipped[newCategory]?.tierId;

      if (newTierId && tiersOfCategory.length === 1) {
        // remove if only tier in category
        newTierId = undefined;
      } else {
        while (newTierId === equipped[newCategory]?.tierId) {
          newTierId =
            tiersOfCategory[Math.floor(Math.random() * tiersOfCategory.length)]
              ?.tierId;
        }
      }

      equip[newCategory](newTierId);
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
