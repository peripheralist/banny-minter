import { categoryIncompatibles } from "@/constants/incompatibles";
import { NFTCategory, NFT_CATEGORIES } from "@/constants/nfts";
import { useTiers } from "@/hooks/queries/useTiers";
import { useAnimation } from "@/hooks/useAnimation";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  MinterContext,
  SelectedTierGetters,
  SelectedTierSetters,
} from "./minterContext";

export default function MinterContextProvider({ children }: PropsWithChildren) {
  const [selectedAssetId, setSelectedAssetId] = useState<
    Partial<Record<NFTCategory, number>>
  >({});
  const [selectedCategory, setSelectedCategory] =
    useState<NFTCategory>("suitTop");
  const [animatingCategory, setAnimatingCategory] = useState<NFTCategory>();

  const animation = useAnimation({
    interval: 100,
    step: 0.2,
  });

  const { tiers } = useTiers();

  useEffect(() => {
    // set default body
    if (!tiers?.body) return;
    setSelectedAssetId((_) => ({ ..._, body: tiers.body[0].tierId }));
  }, [tiers?.body]);

  const get = useMemo(
    () =>
      NFT_CATEGORIES.reduce(
        (acc, category) => ({
          ...acc,
          [category]: tiers?.[category].find(
            (t) => t.tierId === selectedAssetId[category]
          ),
        }),
        {} as SelectedTierGetters
      ),
    [selectedAssetId, tiers]
  );

  const set = useMemo(() => {
    function tierIdSetter(category: NFTCategory) {
      return (tierId: number | undefined) => {
        setSelectedAssetId((_ids) => ({
          ..._ids,
          // Set new tierId for category
          [category]: tierId,
          // Remove any incompatible assets
          ...categoryIncompatibles[category]?.reduce(
            (acc, incompatible) => ({
              ...acc,
              [incompatible]: undefined,
            }),
            {}
          ),
        }));

        // Don't animate if removing asset
        if (!tierId || !animation) return;
        setAnimatingCategory(category);
        animation.animate(true).then(() => animation.setFrame(0));
      };
    }

    // Define setter function for each NFT category
    return NFT_CATEGORIES.reduce(
      (acc, category) => ({
        ...acc,
        [category]: tierIdSetter(category),
      }),
      {} as SelectedTierSetters
    );
  }, [animation]);

  const randomize = useCallback(() => {
    if (!tiers) return;

    // randomize all category tier ids
    NFT_CATEGORIES.forEach((c) => {
      if (!tiers[c].length) return;

      set[c](Math.floor(Math.random() * tiers[c].length) + 1);
    });
  }, [set, tiers]);

  const totalPrice = useMemo(() => {
    if (!tiers) return null;

    // Sum price of all selected assets
    return Object.entries(tiers).reduce((acc, [category, tiers]) => {
      const tier = tiers.find(
        (t) => t.tierId === get[category as NFTCategory]?.tierId
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
        selectedCategory,
        setSelectedCategory,
        changeAssetAnimation: {
          ...animation,
          category: animatingCategory,
        },
      }}
    >
      {children}
    </MinterContext.Provider>
  );
}
