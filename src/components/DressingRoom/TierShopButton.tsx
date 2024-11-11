import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { Tier } from "@/model/tier";
import Link from "next/link";
import { useCallback, useContext, useMemo, useState } from "react";
import { formatEther } from "viem";
import Fuzz from "../pixelRenderers/Fuzz";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import ButtonPad from "../shared/ButtonPad";
import TierImage from "../shared/TierImage";

export default function TierShopButton({
  tier,
  buttonSize,
}: {
  tier: Tier;
  buttonSize: number;
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

  const Label = useCallback(() => {
    const { initialSupply, remainingSupply } = tier;

    const Supply = () => {
      if (initialSupply === BigInt(999999999)) {
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
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ fontSize: FONT_SIZE.md }}>{tier.name}</div>
        <div style={{ fontSize: FONT_SIZE.xs }}>
          <Supply />
        </div>
      </div>
    );
  }, [tier]);

  return (
    <ButtonPad
      fillFg={"white"}
      fillBorder={"white"}
      style={{ opacity: isSoldOut ? 0.7 : 1 }}
      containerStyle={{ maxWidth: buttonSize }}
      shadow="sm"
    >
      <div
        style={{
          position: "relative",
          width: buttonSize,
          height: buttonSize + 72,
          borderRadius: 2,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href={`/item/${tier.tierId}`} style={{ color: "black" }}>
          {tier ? (
            <div style={{ marginTop: 12, pointerEvents: "none" }}>
              <FuzzMoment
                width={buttonSize - 16}
                height={buttonSize - 16}
                fill={"white"}
                style={{ zIndex: 2, position: "absolute", margin: 8 }}
              />
              <TierImage tier={tier} size={buttonSize - 36} />
            </div>
          ) : (
            <Fuzz
              width={buttonSize}
              height={buttonSize}
              pixelSize={8}
              fill="black"
            />
          )}

          <div
            style={{
              position: "absolute",
              bottom: 52,
              right: 12,
              left: 12,
            }}
          >
            <Label />
          </div>
        </Link>

        <ButtonPad
          style={{ display: "flex", padding: 10, color: COLORS.pink }}
          fillFg={added ? COLORS.pinkLite : "white"}
          fillBorder={added ? COLORS.pink : "black"}
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
