import { categoryIncompatibles } from "@/constants/incompatibles";
import { CATEGORIES, Category, CategoryGroup } from "@/constants/nfts";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { useAnimation } from "@/hooks/useAnimation";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { EquipTierFns, EquippedTiers, MinterContext } from "./minterContext";

export default function MinterContextProvider({ children }: PropsWithChildren) {
  const [equippedTierId, setEquippedTierId] = useState<
    Partial<Record<Category, number>>
  >({});
  const [selectedGroup, setSelectedGroup] = useState<CategoryGroup>("head");
  const [equippingCategory, setEquippingCategory] = useState<Category>();
  const [unequippingCategory, setUnequippingCategory] = useState<Category>();

  const equipAnimation = useAnimation({
    interval: 80,
    step: 0.25,
  });
  const unequipAnimation = useAnimation({
    interval: 80,
    step: 0.25,
  });

  const { tiers } = useCategorizedTiers();

  const equipped = useMemo(
    () =>
      CATEGORIES.reduce((acc, category) => {
        const equippedTierForCategory = tiers?.[category].find(
          (t) => t.tierId === equippedTierId[category]
        );

        return {
          ...acc,
          [category]: equippedTierForCategory,
        };
      }, {} as EquippedTiers),
    [equippedTierId, tiers]
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
          equipAnimation.animate(true).then(() => {
            equipAnimation.setFrame(0);
            setEquippingCategory(undefined);
          });
        };

        const handleUnequip = () => {
          setUnequippingCategory(category);
          unequipAnimation.animate(true).then(() => {
            unequipAnimation.setFrame(0);
            setUnequippingCategory(undefined);

            setEquippedTierId((_ids) => ({
              ..._ids,
              // unequip category
              [category]: undefined,
            }));
          });
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
  }, [equipAnimation, unequipAnimation]);

  useEffect(() => {
    // default equip first body tier
    if (!tiers?.naked.length || !equip || equipped.naked) return;
    equip.naked(tiers.naked[0].tierId);
  }, [tiers?.naked, equipped, equip]);

  const equipRandom = useCallback(() => {
    if (!tiers) return;

    // randomize all category tier ids
    CATEGORIES.forEach((c) => {
      if (!tiers[c].length) return;

      equip[c](Math.floor(Math.random() * tiers[c].length) + 1);
    });
  }, [equip, tiers]);

  const totalEquippedPrice = useMemo(() => {
    if (!tiers) return null;

    // Sum price of all selected assets
    return Object.entries(tiers).reduce((acc, [category, tiers]) => {
      const tier = tiers.find(
        (t) => t.tierId === equipped[category as Category]?.tierId
      );

      return tier?.price ? acc + tier.price : acc;
    }, BigInt(0));
  }, [tiers, equipped]);

  return (
    <MinterContext.Provider
      value={{
        equipped,
        equip,
        equipRandom,
        totalEquippedPrice,
        selectedGroup,
        setSelectedGroup,
        equipAnimation: {
          ...equipAnimation,
          category: equippingCategory,
        },
        unequipAnimation: {
          ...unequipAnimation,
          category: unequippingCategory,
        },
      }}
    >
      {children}
    </MinterContext.Provider>
  );
}
