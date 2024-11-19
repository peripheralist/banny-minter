import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { ShopContext } from "@/contexts/shopContext";
import { formatEther } from "juice-sdk-core";
import { useContext } from "react";
import RoundedFrame from "./RoundedFrame";
import TierImage from "./TierImage";

export default function BagItems({ canRemove }: { canRemove?: boolean }) {
  const { equipped, equip } = useContext(EquipmentContext);
  const { bag, removeItem } = useContext(ShopContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: 8,
        flex: 1,
        boxSizing: "border-box",
        overflow: "auto",
      }}
    >
      {bag.length
        ? bag.map(({ tier, quantity }) => {
            const { tierId, name, price, category } = tier;

            return (
              <div
                key={tierId}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  width: "100%",
                }}
              >
                <div
                  onClick={() => {
                    equip?.[category](
                      equipped[category]?.tierId === tierId ? undefined : tierId
                    );
                  }}
                >
                  <RoundedFrame
                    borderColor={
                      canRemove && equipped[category]?.tierId === tierId
                        ? COLORS.pink
                        : "black"
                    }
                    background={"white"}
                    style={{ pointerEvents: "none" }}
                  >
                    <TierImage size={56} tier={tier} />
                  </RoundedFrame>
                </div>

                <div style={{ flex: 1 }}>
                  <div>
                    {quantity > 1 ? (
                      <span style={{ fontWeight: "bold" }}>(x{quantity}) </span>
                    ) : (
                      ""
                    )}
                    {name}
                  </div>
                  <div style={{ fontSize: FONT_SIZE.sm }}>
                    Ξ{formatEther(price * BigInt(quantity))}
                  </div>
                </div>

                {canRemove && (
                  <div
                    style={{ padding: 8 }}
                    onClick={() => {
                      if (equipped?.[category]?.tierId === tierId) {
                        // unequip when removing
                        equip?.[category](undefined);
                      }

                      removeItem?.(tierId);
                    }}
                  >
                    x
                  </div>
                )}
              </div>
            );
          })
        : "Bag is empty"}
    </div>
  );
}
