import { Category, CategoryGroup } from "@/constants/category";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { Tier } from "@/model/tier";
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { EquipmentContext } from "./equipmentContext";
import { ShopContext, ShoppingBag } from "./shopContext";

export const EQUIP_DURATION_MILLIS = 400;

export default function ShopContextProvider({ children }: PropsWithChildren) {
  const { equip } = useContext(EquipmentContext);

  const [selectedGroup, setSelectedGroup] = useState<CategoryGroup>("banny");

  const { tiers } = useCategorizedTiers();

  const { value: bag, setValue: setBag } = useLocalStorageState<ShoppingBag>(
    "looks_bag",
    {
      initialValue: [],
      parse: (str) =>
        str
          ? JSON.parse(str).map(
              ({
                tierId,
                category,
                quantity,
              }: {
                tierId: number;
                category: Category;
                quantity: number;
              }) => ({
                quantity,
                tier: tiers?.[category].find((t) => t.tierId === tierId),
              })
            )
          : [],
      serialize: (b) =>
        JSON.stringify(
          b.map(({ tier, quantity }) => ({
            tierId: tier.tierId,
            category: tier.category,
            quantity,
          }))
        ),
    }
  );

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
    [equip, setBag]
  );

  const removeItem = useCallback(
    (tierId: Tier["tierId"]) => {
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
    },
    [setBag]
  );

  const emptyBag = useCallback(() => setBag([]), [setBag]);

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
        emptyBag,
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
