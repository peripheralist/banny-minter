import { CATEGORIES, Category, CategoryGroup } from "@/constants/category";
import { categoryIncompatibles } from "@/constants/incompatibles";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { EquipTierFns, TierOrNft } from "@/model/tierOrNft";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DressBannyContext } from "./dressBannyContext";
import { CategoryLib } from "@/model/categoryLib";

export const EQUIP_DURATION_MILLIS = 400;

export default function DressBannyContextProvider({
  cacheKey,
  children,
  defaultGroup,
  availableTiers,
  defaultEquippedTierIds,
}: PropsWithChildren<{
  cacheKey?: string;
  defaultGroup?: CategoryGroup;
  availableTiers: Pick<TierOrNft, 'category' | 'tierId' | 'metadata' | 'tokenId'>[];
  defaultEquippedTierIds?: CategoryLib<number>;
}>) {
  const {
    value: equippedTierId,
    setValue: setEquippedTierId,
    purge,
  } = useLocalStorageState<CategoryLib<number>>(
    cacheKey ? `equipped_${cacheKey}` : undefined,
    {
      defaultValue: {},
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
      }, {} as CategoryLib<TierOrNft>),
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
      const ton = equipped[category as Category];

      return acc + (ton?.price ?? BigInt(0));
    }, BigInt(0));
  }, [availableTiers, equipped]);

  return (
    <DressBannyContext.Provider
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
        purgeCache: purge,
      }}
    >
      {children}
    </DressBannyContext.Provider>
  );
}
