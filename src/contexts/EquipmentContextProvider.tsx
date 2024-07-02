import { categoryIncompatibles } from "@/constants/incompatibles";
import { CATEGORIES, Category, CategoryGroup } from "@/constants/nfts";
import { EquipTierFns, EquippedTiers, Tiers } from "@/model/tier";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { EquipmentContext } from "./equipmentContext";

export const EQUIP_DURATION_MILLIS = 320;

export default function EquipmentContextProvider({
  children,
  availableTiers,
  defaultEquippedTierIds,
}: PropsWithChildren<{
  availableTiers: Tiers;
  defaultEquippedTierIds?: Partial<Record<Category, number>>;
}>) {
  const [equippedTierId, setEquippedTierId] = useState<
    Partial<Record<Category, number>>
  >({});
  const [selectedGroup, setSelectedGroup] = useState<CategoryGroup>("head");
  const [equippingCategory, setEquippingCategory] = useState<Category>();
  const [unequippingCategory, setUnequippingCategory] = useState<Category>();

  const equipped = useMemo(
    () =>
      CATEGORIES.reduce((acc, category) => {
        const equippedTierForCategory = availableTiers?.[category].find(
          (t) => t.tierId === equippedTierId[category]
        );

        return {
          ...acc,
          [category]: equippedTierForCategory,
        };
      }, {} as EquippedTiers),
    [equippedTierId, availableTiers]
  );

  const equip = useMemo(() => {
    const tierIdSetter =
      (category: Category) => (tierId: number | undefined) => {
        const handleEquip = () => {
          setEquippedTierId((_ids) => ({
            ..._ids,
            // Set new tierId for category
            [category]: tierId,
            // Remove any incompatible tiers
            ...categoryIncompatibles[category]?.reduce(
              (acc, incompatibleTier) => ({
                ...acc,
                [incompatibleTier]: undefined,
              }),
              {}
            ),
          }));

          setEquippingCategory(category);
          setTimeout(
            () => setEquippingCategory(undefined),
            EQUIP_DURATION_MILLIS
          );
        };

        const handleUnequip = () => {
          setUnequippingCategory(category);

          setTimeout(() => {
            setEquippedTierId((_ids) => ({
              ..._ids,
              // unequip category
              [category]: undefined,
            }));
            setUnequippingCategory(undefined);
          }, EQUIP_DURATION_MILLIS);
        };

        if (tierId) handleEquip();
        else handleUnequip();
      };

    // Define setter function for each NFT category
    return CATEGORIES.reduce(
      (acc, category) => ({
        ...acc,
        [category]: tierIdSetter(category),
      }),
      {} as EquipTierFns
    );
  }, []);

  useEffect(() => {
    if (defaultEquippedTierIds) {
      setEquippedTierId(defaultEquippedTierIds);
    }
  }, [defaultEquippedTierIds]);

  const equipRandom = useCallback(() => {
    if (!availableTiers) return;

    // randomize all category tier ids
    CATEGORIES.forEach((c) => {
      if (!availableTiers[c].length) return;

      equip[c](Math.floor(Math.random() * availableTiers[c].length) + 1);
    });
  }, [equip, availableTiers]);

  const totalEquippedPrice = useMemo(() => {
    if (!availableTiers) return null;

    // Sum price of all selected assets
    return Object.entries(availableTiers).reduce(
      (acc, [category, tiersOfCategory]) => {
        const tier = tiersOfCategory.find(
          (t) => t.tierId === equipped[category as Category]?.tierId
        );

        return tier?.price ? acc + tier.price : acc;
      },
      BigInt(0)
    );
  }, [availableTiers, equipped]);

  return (
    <EquipmentContext.Provider
      value={{
        equipped,
        equip,
        equipRandom,
        totalEquippedPrice,
        selectedGroup,
        setSelectedGroup,
        equippingCategory,
        unequippingCategory,
        availableTiers
      }}
    >
      {children}
    </EquipmentContext.Provider>
  );
}
