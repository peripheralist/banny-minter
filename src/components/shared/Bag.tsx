import { COLORS } from "@/constants/colors";
import { ShopContext } from "@/contexts/shopContext";
import { useCallback, useContext } from "react";
import BagItems from "./BagItems";
import MintButton from "./MintButton";
import RoundedFrame from "./RoundedFrame";
import TierImage from "./TierImage";
import { FONT_SIZE } from "@/constants/fontSize";
import { EquipmentContext } from "@/contexts/equipmentContext";

export default function Bag({ open }: { open?: boolean }) {
  const { bag, itemsQuantity, emptyBag } = useContext(ShopContext);
  const { unequipAll } = useContext(EquipmentContext);

  const ItemsQuantity = useCallback(
    () => (
      <div>
        {itemsQuantity} item{itemsQuantity && itemsQuantity > 1 ? "s" : ""}
      </div>
    ),
    [itemsQuantity]
  );

  return open ? (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 12,
          marginBottom: 12,
        }}
      >
        <ItemsQuantity />

        {itemsQuantity && (
          <div
            onClick={() => {
              emptyBag?.();
              unequipAll?.();
            }}
            style={{ color: COLORS.pink }}
          >
            Clear
          </div>
        )}
      </div>

      <div style={{ padding: 12, flex: 1, overflow: "auto" }}>
        <BagItems canRemove />
      </div>

      <div style={{ padding: 12 }}>
        <MintButton />
      </div>
    </div>
  ) : (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        boxSizing: "border-box",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: 8,
          flex: 1,
          boxSizing: "border-box",
          marginTop: 24,
        }}
      >
        <div style={{ fontSize: FONT_SIZE.sm }}>
          <ItemsQuantity />
        </div>

        {bag.length ? (
          bag.map(({ tier }) => {
            const { tierId } = tier;

            return (
              <div key={tierId}>
                <RoundedFrame
                  borderColor="black"
                  background={"white"}
                  style={{ padding: 8 }}
                >
                  <TierImage size={40} tier={tier} />
                </RoundedFrame>
              </div>
            );
          })
        ) : (
          <div style={{ transform: `rotate(90deg)` }}>Empty</div>
        )}
      </div>
    </div>
  );
}
