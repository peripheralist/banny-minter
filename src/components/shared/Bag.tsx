import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { ShopContext } from "@/contexts/shopContext";
import { formatEther } from "juice-sdk-core";
import { useContext } from "react";
import MintButton from "../DressingRoom/MintButton";
import RoundedFrame from "./RoundedFrame";
import TierImage from "./TierImage";

export default function Bag({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: VoidFunction;
}) {
  const { bag, removeItem } = useContext(ShopContext);

  const { equipped, equip } = useContext(EquipmentContext);

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
      <h1 style={{ margin: 0, padding: 12, paddingBottom: 0, paddingTop: 8 }}>
        <span
          style={{
            marginBottom: 6,
            display: "inline-block",
            verticalAlign: "middle",
          }}
          onClick={onClose}
        >
          {">"}
        </span>{" "}
        Bag
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          width: "100%",
          flex: 1,
          padding: 12,
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
                        equipped[category]?.tierId === tierId
                          ? undefined
                          : tierId
                      );
                    }}
                  >
                    <RoundedFrame
                      borderColor={
                        equipped[category]?.tierId === tierId
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
                    <div style={{ fontSize: FONT_SIZE.md }}>
                      {name} {quantity > 1 ? `(x${quantity})` : ""}
                    </div>
                    <div style={{ fontSize: FONT_SIZE.md }}>
                      Ξ{formatEther(price)}
                    </div>
                  </div>

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
                </div>
              );
            })
          : "Bag is empty"}
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
      }}
    >
      <h1
        style={{
          margin: 0,
          padding: 48,
          transform: `rotate(90deg)`,
          whiteSpace: "pre",
        }}
      >
        {">"} Bag
      </h1>

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
                  <div style={{ marginTop: -4, marginBottom: 4 }}>
                    <TierImage size={40} tier={tier} />
                  </div>
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
