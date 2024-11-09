import { CategoryGroup } from "@/constants/category";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { Tier } from "@/model/tier";
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ShopContext, ShoppingBag } from "./shopContext";
import { EquipmentContext } from "./equipmentContext";

export const EQUIP_DURATION_MILLIS = 400;

export default function ShopContextProvider({ children }: PropsWithChildren) {
  const { equip } = useContext(EquipmentContext);

  const [selectedGroup, setSelectedGroup] = useState<CategoryGroup>("body");

  const { tiers } = useCategorizedTiers();

  const [bag, setBag] = useState<ShoppingBag>([]);

  const addItem = useCallback(
    (tier: Tier) => {
      equip?.[tier.category](tier.tierId);

      setBag((b) =>
        b.some((_b) => _b.tier.tierId === tier.tierId)
          ? b.map((_b) =>
              _b.tier.tierId === tier.tierId
                ? { tier: _b.tier, quantity: _b.quantity + 1 }
                : _b
            )
          : [...b, { tier, quantity: 1 }]
      );
    },
    [equip]
  );

  const removeItem = useCallback((tierId: Tier["tierId"]) => {
    setBag((b) => {
      const tier = b.find(({ tier }) => tier.tierId === tierId);

      if (tier && tier.quantity > 1) {
        return b.map(({ tier, quantity }) =>
          tier.tierId === tierId
            ? { tier, quantity: quantity - 1 }
            : { tier, quantity }
        );
      }

      return b.filter(({ tier }) => tier.tierId !== tierId);
    });
  }, []);

  const itemsQuantity = useMemo(
    () => bag.reduce((acc, { quantity }) => acc + quantity, 0),
    [bag]
  );

  const totalEquippedPrice = useMemo(
    () =>
      // Sum price of all selected assets
      bag.reduce(
        (acc, { tier, quantity }) =>
          tier?.price ? acc + tier.price * BigInt(quantity) : acc,
        BigInt(0)
      ),
    [bag]
  );

  return (
    <ShopContext.Provider
      value={{
        bag,
        addItem,
        removeItem,
        itemsQuantity,
        totalEquippedPrice,
        selectedGroup,
        setSelectedGroup,
        availableTiers: tiers,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
