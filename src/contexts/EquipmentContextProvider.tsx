import { CATEGORIES, Category, CategoryGroup } from "@/constants/category";
import { categoryIncompatibles } from "@/constants/incompatibles";
import { DisplayStrategy } from "@/model/displayStrategy";
import { EquipTierFns, EquippedTiers, Tiers } from "@/model/tier";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { EquipmentContext } from "./equipmentContext";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";

export const EQUIP_DURATION_MILLIS = 400;

export default function EquipmentContextProvider({
  children,
  defaultGroup,
  availableTiers,
  defaultEquippedTierIds,
  displayStrategy,
}: PropsWithChildren<{
  defaultGroup?: CategoryGroup;
  availableTiers: Tiers;
  defaultEquippedTierIds?: Partial<Record<Category, number>>;
  displayStrategy?: DisplayStrategy;
}>) {
  const { value: equippedTierId, setValue: setEquippedTierId } =
    useLocalStorageState<Partial<Record<Category, number>>>("looks_equipped", {
      initialValue: {},
      parse: (str) => (str ? JSON.parse(str) : {}),
      serialize: (v) => JSON.stringify(v),
    });
  const [selectedGroup, setSelectedGroup] = useState<CategoryGroup>(
    defaultGroup ?? "body"
  );
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
  }, [setEquippedTierId]);

  useEffect(() => {
    if (defaultEquippedTierIds) {
      setEquippedTierId(defaultEquippedTierIds);
    }
  }, [defaultEquippedTierIds, setEquippedTierId]);

  const equipNone = useCallback(() => {
    setEquippedTierId({});
  }, [setEquippedTierId]);

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

  const _displayStrategy = useMemo(() => {
    if (!displayStrategy) throw new Error("displayStrategy is undefined");

    return displayStrategy;
  }, [displayStrategy]);

  return (
    <EquipmentContext.Provider
      value={{
        equipped,
        equip,
        equipNone,
        totalEquippedPrice,
        selectedGroup,
        setSelectedGroup,
        equippingCategory,
        unequippingCategory,
        availableTiers,
        displayStrategy: _displayStrategy,
      }}
    >
      {children}
    </EquipmentContext.Provider>
  );
}
