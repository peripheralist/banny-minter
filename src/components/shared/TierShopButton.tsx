import FuzzMoment from "@/components/pixelRenderers/FuzzMoment";
import ButtonPad from "@/components/shared/ButtonPad";
import TierImage from "@/components/shared/TierImage";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Tier } from "@/model/tier";
import { useCallback, useContext, useMemo, useState } from "react";
import { formatEther } from "viem";

export default function TierShopButton({
  tier,
  buttonSize,
  onClick,
}: {
  tier: Tier;
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
    () => tier.remainingSupply <= BigInt(0) && !tier.tokenId,
    [tier.remainingSupply, tier.tokenId]
  );

  const { isSmallScreen } = useWindowSize();

  const Label = useCallback(() => {
    const { initialSupply, remainingSupply } = tier;

    const Supply = () => {
      if (initialSupply >= BigInt(999999999)) {
        return <div style={{ opacity: 0.5 }}>Unlimited</div>;
      }
      if (remainingSupply <= BigInt(0)) {
        return <div>SOLD OUT</div>;
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
          <span style={{ opacity: 0.5 }}>/{_initialSupply} available</span>
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
          {tier.name}
        </div>
        <div style={{ fontSize: FONT_SIZE.xs }}>
          <Supply />
        </div>
      </div>
    );
  }, [tier, isSmallScreen]);

  return (
    <ButtonPad
      fillFg={"white"}
      fillBorder={"white"}
      style={{ opacity: isSoldOut ? 0.7 : 1, cursor: "default" }}
      shadow="sm"
      disabled
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            paddingBottom: 8,
            gap: 12,
          }}
          onClick={onClick}
        >
          <div style={{ pointerEvents: "none", marginTop: 8 }}>
            <FuzzMoment
              width={buttonSize - 16}
              height={buttonSize - 16}
              fill={"white"}
              style={{ zIndex: 2, position: "absolute", margin: 8 }}
            />
            <TierImage tier={tier} size={buttonSize - 16} />
          </div>

          <Label />
        </div>

        <ButtonPad
          style={{ padding: 8, color: COLORS.pink }}
          fillFg={added ? COLORS.pinkLite : "white"}
          fillBorder={added ? COLORS.pink : "#00000064"}
          containerStyle={{ marginBottom: 4, width: "100%" }}
          onClick={onClickAdd}
          shadow="sm"
        >
          {added ? "Added" : `Add Ξ${formatEther(tier.price)}`}
        </ButtonPad>
      </div>
    </ButtonPad>
  );
}
