import { categoryIncompatibles } from "@/constants/incompatibles";
import {
  Category,
  CategoryGroup,
  CATEGORIES,
} from "@/constants/nfts";
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
  const [selectedGroup, setSelectedGroup] = useState<CategoryGroup>("body");
  const [animatingCategory, setAnimatingCategory] = useState<Category>();

  const animation = useAnimation({
    interval: 100,
    step: 0.2,
  });

  const { tiers } = useCategorizedTiers();

  const get = useMemo(
    () =>
      CATEGORIES.reduce(
        (acc, category) => ({
          ...acc,
          [category]: tiers?.[category].find(
            (t) => t.tierId === equippedTierId[category]
          ),
        }),
        {} as EquippedTiers
      ),
    [equippedTierId, tiers]
  );

  const set = useMemo(() => {
    const tierIdSetter =
      (category: Category) => (tierId: number | undefined) => {
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

        // Don't animate if unequiping tier
        if (!tierId || !animation) return;
        setAnimatingCategory(category);
        animation.animate(true).then(() => animation.setFrame(0));
      };

    // Define setter function for each NFT category
    return CATEGORIES.reduce(
      (acc, category) => ({
        ...acc,
        [category]: tierIdSetter(category),
      }),
      {} as EquipTierFns
    );
  }, [animation]);

  useEffect(() => {
    // default equip first body tier
    if (!tiers?.body || !set || get.body) return;
    set.body(tiers.body[0].tierId);
  }, [tiers?.body, set, get]);

  const randomize = useCallback(() => {
    if (!tiers) return;

    // randomize all category tier ids
    CATEGORIES.forEach((c) => {
      if (!tiers[c].length) return;

      set[c](Math.floor(Math.random() * tiers[c].length) + 1);
    });
  }, [set, tiers]);

  const totalPrice = useMemo(() => {
    if (!tiers) return null;

    // Sum price of all selected assets
    return Object.entries(tiers).reduce((acc, [category, tiers]) => {
      const tier = tiers.find(
        (t) => t.tierId === get[category as Category]?.tierId
      );

      return tier?.price ? acc + tier.price : acc;
    }, BigInt(0));
  }, [tiers, get]);

  return (
    <MinterContext.Provider
      value={{
        equipped: {
          get,
          set,
          randomize,
          totalPrice,
        },
        selectedGroup,
        setSelectedGroup,
        equipCategoryAnimation: {
          ...animation,
          category: animatingCategory,
        },
      }}
    >
      {children}
    </MinterContext.Provider>
  );
}
