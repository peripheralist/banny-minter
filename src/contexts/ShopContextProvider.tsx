import { CategoryGroup } from "@/constants/category";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { TierOrNft } from "@/model/tierOrNft";
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { DressBannyContext } from "./dressBannyContext";
import { ShopContext, ShoppingBag } from "./shopContext";

export const EQUIP_DURATION_MILLIS = 400;

export default function ShopContextProvider({ children }: PropsWithChildren) {
  const { equip } = useContext(DressBannyContext);

  const [selectedGroup, setSelectedGroup] = useState<CategoryGroup>("banny");

  const { parsedTiers } = useAllTiers();

  const { value: bag, setValue: setBag } = useLocalStorageState<ShoppingBag>(
    "bag_content",
    {
      defaultValue: [],
      disabled: !parsedTiers?.length,
      parse: (str) =>
        str
          ? JSON.parse(str).map(
              ({ tierId, quantity }: { tierId: number; quantity: number }) => ({
                quantity,
                tier: parsedTiers?.find((t) => t.tierId === tierId),
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
    (tier: TierOrNft) => {
      equip?.[tier.category](tier.tierId);

      setBag((b) =>
        b.some((_b) => _b.tier.tierId === tier.tierId)
          ? b.map((__b) =>
              __b.tier.tierId === tier.tierId
                ? { ...__b, quantity: __b.quantity + 1 }
                : __b
            )
          : [...b, { tier, quantity: 1 }]
      );

      if (twq) {
        // twitter tracking
        twq("event", "tw-p8ahl-p8ahp", {
          contents: [
            {
              content_type: tier.category,
              content_id: tier.tierId,
              content_name: tier.name,
              content_price: tier.price.toString(),
            },
          ],
        });
      }
    },
    [equip, setBag]
  );

  const removeItem = useCallback(
    (tierId: TierOrNft["tierId"]) => {
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
        (acc, { tier, quantity }) => acc + tier.price * BigInt(quantity),
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
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
