import { CATEGORIES, Category, CategoryGroup } from "@/constants/category";
import { categoryIncompatibles } from "@/constants/incompatibles";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { EquipTierFns, EquippedTiers, Tier } from "@/model/tier";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { EquipmentContext } from "./equipmentContext";

export const EQUIP_DURATION_MILLIS = 400;

export default function EquipmentContextProvider({
  cacheKey,
  children,
  defaultGroup,
  availableTiers,
  defaultEquippedTierIds,
}: PropsWithChildren<{
  cacheKey?: string;
  defaultGroup?: CategoryGroup;
  availableTiers: Tier[];
  defaultEquippedTierIds?: Partial<Record<Category, number>>;
}>) {
  const { value: equippedTierId, setValue: setEquippedTierId } =
    useLocalStorageState<Partial<Record<Category, number>>>(
      cacheKey ? `looks_equipped_${cacheKey}` : undefined,
      {
        initialValue: {},
        parse: (str) => (str ? JSON.parse(str) : {}),
        serialize: (v) => JSON.stringify(v),
      }
    );
  const [selectedGroup, setSelectedGroup] = useState<CategoryGroup>(
    defaultGroup ?? "banny"
  );
  const [equippingCategory, setEquippingCategory] = useState<Category>();
  const [unequippingCategory, setUnequippingCategory] = useState<Category>();

  const equipped = useMemo(
    () =>
      CATEGORIES.reduce((acc, category) => {
        const equippedTierForCategory = availableTiers.find(
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
  }, [setEquippedTierId]);

  useEffect(() => {
    if (defaultEquippedTierIds) {
      setEquippedTierId(defaultEquippedTierIds);
    }
  }, [defaultEquippedTierIds, setEquippedTierId]);

  const unequipAll = useCallback(() => {
    setEquippedTierId({});
  }, [setEquippedTierId]);

  const totalEquippedPrice = useMemo(() => {
    if (!availableTiers) return null;

    // Sum price of all selected assets
    return CATEGORIES.reduce((acc, category) => {
      const tier = equipped[category as Category];

      return tier?.price ? acc + tier.price : acc;
    }, BigInt(0));
  }, [availableTiers, equipped]);

  return (
    <EquipmentContext.Provider
      value={{
        equipped,
        equip,
        unequipAll,
        totalEquippedPrice,
        selectedGroup,
        setSelectedGroup,
        equippingCategory,
        unequippingCategory,
        availableTiers,
      }}
    >
      {children}
    </EquipmentContext.Provider>
  );
}
