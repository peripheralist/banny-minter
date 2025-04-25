import ButtonPad from "@/components/shared/ButtonPad";
import TierImage from "@/components/shared/TierImage";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { useFormattedUsdPrice } from "@/hooks/useFormattedUsdPrice";
import { useIsHover } from "@/hooks/useIsHover";
import { useWindowSize } from "@/hooks/useWindowSize";
import { TierOrNft } from "@/model/tierOrNft";
import { useCallback, useContext, useMemo, useState } from "react";
import { formatEther } from "viem";

export default function TierShopButton({
  tier,
  buttonSize,
  onClick,
  category,
}: {
  tier: TierOrNft;
  buttonSize: number;
  onClick?: VoidFunction;
  category?: boolean;
}) {
  const [added, setAdded] = useState(false);
  const { addItem, priceFormat } = useContext(ShopContext);

  const onClickAdd = useCallback(() => {
    addItem?.(tier);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  }, [tier, addItem]);

  const isSoldOut = useMemo(() => tier.remainingSupply <= BigInt(0), [tier]);

  const { isSmallScreen } = useWindowSize();

  const { isHover, ...hoverProps } = useIsHover();

  const formattedCategory = useMemo(() => {
    if (!category) return null;

    switch (tier.category) {
      case "specialBody":
        return "special (body)";
      case "specialLegs":
        return "special (legs)";
      case "specialHead":
        return "special (head)";
      case "specialSuit":
        return "special (suit)";
      case "suitBottom":
        return "suit (bottom)";
      case "suitTop":
        return "suit (top)";
      case "headTop":
        return "head (top)";
      default:
        return tier.category;
    }
  }, [category, tier]);

  const Label = useCallback(() => {
    const { initialSupply, remainingSupply } = tier;

    const Supply = () => {
      if (initialSupply >= BigInt(999999999)) {
        return <div style={{ opacity: 0.5 }}>Unlimited</div>;
      }

      let initialSupplyStr = initialSupply.toString();
      if (initialSupplyStr.endsWith("000000")) {
        initialSupplyStr =
          initialSupplyStr.substring(0, initialSupplyStr.length - 6) + "M";
      } else if (initialSupplyStr.endsWith("000")) {
        initialSupplyStr =
          initialSupplyStr.substring(0, initialSupplyStr.length - 3) + "K";
      }

      return (
        <div>
          <span>{remainingSupply.toString()}</span>
          <span style={{ opacity: 0.5 }}>/{initialSupplyStr} in stock</span>
        </div>
      );
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          paddingLeft: 8,
          paddingRight: 8,
        }}
      >
        <div style={{ fontSize: isSmallScreen ? FONT_SIZE.sm : FONT_SIZE.md }}>
          {tier.metadata?.productName}
        </div>
        {formattedCategory && (
          <div
            style={{
              textTransform: "uppercase",
              fontSize: FONT_SIZE.xs,
              color: COLORS.gray,
            }}
          >
            {formattedCategory}
          </div>
        )}
        <div style={{ fontSize: FONT_SIZE.xs }}>
          <Supply />
        </div>
      </div>
    );
  }, [tier, isSmallScreen, formattedCategory]);

  const usdPrice = useFormattedUsdPrice(tier.price);

  return (
    <ButtonPad
      fillFg={"white"}
      fillBorder={"white"}
      style={{
        opacity: 1,
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 8,
      }}
      shadow="sm"
      disabled
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          gap: 8,
          width: "calc(100% - 16px)",
        }}
        onClick={onClick}
      >
        <div style={{ pointerEvents: "none", marginTop: 12 }}>
          <TierImage tier={tier} size={buttonSize - 16} />
        </div>

        <Label />
      </div>

      <div style={{ width: "calc(100% - 16px)" }} {...hoverProps}>
        <ButtonPad
          style={{ padding: 8, color: isSoldOut ? "black" : COLORS.pink }}
          fillFg={added ? COLORS.pinkLite : "white"}
          fillBorder={added ? COLORS.pink : isHover ? "#000000aa" : "#00000064"}
          containerStyle={{ marginBottom: 8, width: "100%" }}
          onClick={onClickAdd}
          disabled={isSoldOut}
          shadow="sm"
        >
          {isSoldOut ? (
            "Sold out"
          ) : added ? (
            "Added"
          ) : (
            <span>
              Add{" "}
              {priceFormat === "eth" ? `Ξ${formatEther(tier.price)}` : usdPrice}
            </span>
          )}
        </ButtonPad>
      </div>
    </ButtonPad>
  );
}
