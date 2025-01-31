import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { useContext } from "react";
import MintButton from "./MintButton";
import BagItems from "./BagItems";
import RoundedFrame from "./RoundedFrame";
import TierImage from "./TierImage";
import { COLORS } from "@/constants/colors";

export default function Bag({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: VoidFunction;
}) {
  const { bag, itemsQuantity, emptyBag } = useContext(ShopContext);

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
          paddingBottom: 0,
          paddingTop: 8,
        }}
      >
        <h4 style={{ fontSize: FONT_SIZE["2xl"], flex: 1, cursor: "default" }}>
          <span
            style={{
              marginBottom: 6,
              display: "inline-block",
              verticalAlign: "middle",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            {">"}
          </span>{" "}
          Bag
        </h4>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            fontSize: FONT_SIZE.sm,
            textTransform: "uppercase",
          }}
        >
          <div>
            {itemsQuantity} item{itemsQuantity && itemsQuantity > 1 ? "s" : ""}
          </div>

          {itemsQuantity && (
            <div onClick={emptyBag} style={{ color: COLORS.pink }}>
              Clear
            </div>
          )}
        </div>
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
      <h4
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 48,
          transform: `rotate(90deg)`,
          whiteSpace: "pre",
          fontSize: FONT_SIZE["2xl"],
        }}
      >
        {">"} Bag
      </h4>

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
