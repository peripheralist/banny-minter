import { CATEGORIES, Category } from "@/constants/category";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { useContext, useEffect, useState } from "react";
import EquippedTiersPreview from "../shared/EquippedTiersPreview";

const excludedCategories: Category[] = ["world", "specialSuit"];

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

  useEffect(() => {
    // default equip body
    equip?.naked(Math.ceil(Math.random() * 4));
  }, [equip]);

  // periodically equip/unequip random tiers of a random available category
  useEffect(() => {
    if (!availableTiers || !equip) return;

    let prevCategory: Category | undefined;

    function availableCategories() {
      // omit excluded categories, previous category, and any categories with no available tiers
      return CATEGORIES.filter(
        (c) => ![...excludedCategories, prevCategory].includes(c)
      ).filter((c) => availableTiers?.some((t) => t.category === c));
    }

    const id = setInterval(() => {
      // select category of next item to be equipped
      const _availableCategories = availableCategories();

      const newCategory =
        _availableCategories[
          Math.floor(Math.random() * _availableCategories.length)
        ];

      const tiersOfCategory = availableTiers.filter(
        (t) => t.category === newCategory
      );

      let newTierId = equipped[newCategory]?.tierId;

      if (newTierId && tiersOfCategory.length === 1) {
        // remove if only tier in category is equipped
        newTierId = undefined;
      } else {
        // find a new tier of category that isn't equipped
        while (newTierId === equipped[newCategory]?.tierId) {
          newTierId =
            tiersOfCategory[Math.floor(Math.random() * tiersOfCategory.length)]
              ?.tierId;
        }
      }

      equip[newCategory](newTierId);

      prevCategory = newCategory;
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
