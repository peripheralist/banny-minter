import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { DressBannyContext } from "@/contexts/dressBannyContext";
import { ShopContext } from "@/contexts/shopContext";
import { useFormattedUsdPrice } from "@/hooks/useFormattedUsdPrice";
import { TierOrNft } from "@/model/tierOrNft";
import { formatEther } from "juice-sdk-core";
import { useContext } from "react";
import RoundedFrame from "./RoundedFrame";
import TierImage from "./TierImage";

export default function BagItems({ canRemove }: { canRemove?: boolean }) {
  const { bag } = useContext(ShopContext);

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
        ? bag.map(({ tier, quantity }) => (
            <BagItem
              key={tier.tierId}
              tier={tier}
              quantity={quantity}
              canRemove={canRemove}
            />
          ))
        : "Bag is empty"}
    </div>
  );
}

function BagItem({
  tier,
  quantity,
  canRemove,
}: {
  tier: TierOrNft;
  quantity: number;
  canRemove?: boolean;
}) {
  const { tierId, metadata, price, category } = tier;

  const { equipped, equip } = useContext(DressBannyContext);
  const { removeItem, priceFormat } = useContext(ShopContext);

  const usdPrice = useFormattedUsdPrice(tier.price);

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
          style={{ pointerEvents: "none", padding: 4 }}
        >
          <TierImage size={56} tier={tier} />
        </RoundedFrame>
      </div>

      <div style={{ flex: 1 }}>
        <div>{metadata?.productName}</div>
        <div style={{ fontSize: FONT_SIZE.sm }}>
          {quantity > 1 ? (
            <span style={{ fontWeight: "bold" }}>(x{quantity}) </span>
          ) : (
            ""
          )}
          {priceFormat === "eth"
            ? `Ξ${formatEther(price * BigInt(quantity))}`
            : usdPrice}
        </div>
      </div>

      {canRemove && (
        <div
          style={{ padding: 8, cursor: "pointer" }}
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
}
