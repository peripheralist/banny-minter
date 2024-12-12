import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { useContext } from "react";
import MintButton from "./MintButton";
import BagItems from "./BagItems";
import RoundedFrame from "./RoundedFrame";
import TierImage from "./TierImage";

export default function Bag({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: VoidFunction;
}) {
  const { bag, itemsQuantity } = useContext(ShopContext);

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
      <h1
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          padding: 12,
          paddingBottom: 0,
          paddingTop: 8,
        }}
      >
        <span>
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
        </span>

        <span style={{ fontSize: FONT_SIZE.sm, textTransform: "uppercase" }}>
          {itemsQuantity} item{itemsQuantity && itemsQuantity > 1 ? "s" : ""}
        </span>
      </h1>

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
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "space-between",
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
