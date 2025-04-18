import ButtonPad from "@/components/shared/ButtonPad";
import TierImage from "@/components/shared/TierImage";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { useIsHover } from "@/hooks/useIsHover";
import { useWindowSize } from "@/hooks/useWindowSize";
import { TierOrNft } from "@/model/tierOrNft";
import { useCallback, useContext, useMemo, useState } from "react";
import { formatEther } from "viem";

export default function TierShopButton({
  tier,
  buttonSize,
  onClick,
}: {
  tier: TierOrNft;
  buttonSize: number;
  onClick?: VoidFunction;
}) {
  const [added, setAdded] = useState(false);
  const { addItem } = useContext(ShopContext);

  const onClickAdd = useCallback(() => {
    addItem?.(tier);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  }, [tier, addItem]);

  // Only use sold out treatment if tier is not a NFT
  const isSoldOut = useMemo(
    () => tier.remainingSupply <= BigInt(0),
    [tier.remainingSupply]
  );

  const { isSmallScreen } = useWindowSize();

  const { isHover, ...hoverProps } = useIsHover();

  const Label = useCallback(() => {
    const { initialSupply, remainingSupply } = tier;

    const Supply = () => {
      if (isSoldOut) {
        return <div>SOLD OUT</div>;
      }
      if (initialSupply >= BigInt(999999999)) {
        return <div style={{ opacity: 0.5 }}>Unlimited</div>;
      }

      let _initialSupply = initialSupply.toString();
      if (_initialSupply.endsWith("000000")) {
        _initialSupply =
          _initialSupply.substring(0, _initialSupply.length - 6) + "M";
      } else if (_initialSupply.endsWith("000")) {
        _initialSupply =
          _initialSupply.substring(0, _initialSupply.length - 3) + "K";
      }

      return (
        <div>
          <span>{remainingSupply.toString()}</span>
          <span style={{ opacity: 0.5 }}>/{_initialSupply} in stock</span>
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
        <div style={{ fontSize: FONT_SIZE.xs }}>
          <Supply />
        </div>
      </div>
    );
  }, [tier, isSmallScreen, isSoldOut]);

  return (
    <ButtonPad
      fillFg={"white"}
      fillBorder={"white"}
      style={{
        opacity: isSoldOut ? 0.7 : 1,
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
          style={{ padding: 8, color: COLORS.pink }}
          fillFg={added ? COLORS.pinkLite : "white"}
          fillBorder={added ? COLORS.pink : isHover ? "#000000aa" : "#00000064"}
          containerStyle={{ marginBottom: 8, width: "100%" }}
          onClick={onClickAdd}
          shadow="sm"
        >
          {added ? "Added" : `Add Ξ${formatEther(tier.price)}`}
        </ButtonPad>
      </div>
    </ButtonPad>
  );
}
