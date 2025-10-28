import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { DressBannyContext } from "@/contexts/dressBannyContext";
import { ShopContext } from "@/contexts/shopContext";
import { useCreditBalance } from "@/hooks/queries/useCreditBalance";
import { useCallback, useContext } from "react";
import { formatEther } from "viem";
import BagItems from "./BagItems";
import MintButton from "./MintButton";
import RoundedFrame from "./RoundedFrame";
import TierImage from "./TierImage";

export default function Bag({ open }: { open?: boolean }) {
  const { bag, itemsQuantity, emptyBag } = useContext(ShopContext);
  const { unequipAll } = useContext(DressBannyContext);
  const creditBalance = useCreditBalance();

  const ItemsQuantity = useCallback(
    () =>
      itemsQuantity ? (
        <div>
          {itemsQuantity} item{itemsQuantity && itemsQuantity > 1 ? "s" : ""}
        </div>
      ) : null,
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
        gap: 12,
        padding: 12,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ItemsQuantity />

        {itemsQuantity ? (
          <div
            onClick={() => {
              emptyBag?.();
              unequipAll?.();
            }}
            style={{ color: COLORS.pink }}
          >
            Clear
          </div>
        ) : null}
      </div>

      <div style={{ flex: 1, overflow: "auto" }}>
        <BagItems canRemove />
      </div>

      {creditBalance && creditBalance > BigInt(0) ? (
        <div
          style={{
            fontSize: FONT_SIZE.sm,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>Credits:</div>
          <div>
            {parseFloat(formatEther(creditBalance ?? BigInt(0))).toFixed(4)}
          </div>
        </div>
      ) : null}

      <div>
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
