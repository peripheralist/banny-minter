import { COLORS } from "@/constants/colors";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { Tier } from "@/model/tier";
import { useCallback, useContext, useMemo } from "react";
import { formatEther } from "viem";
import Fuzz from "../pixelRenderers/Fuzz";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import ButtonPad from "../shared/ButtonPad";
import TierImage from "../shared/TierImage";

export default function TierSelectorButton({
  tier,
  buttonSize,
}: {
  tier: Tier;
  buttonSize: number;
}) {
  const { equipped, equip, displayStrategy } = useContext(EquipmentContext);

  const { onClick, active } = useMemo(() => {
    const { category, tierId } = tier;

    const active = equipped[category]?.tierId === tierId;

    // Equip, or unequip if already equipped
    const onClick = () => equip?.[category]?.(active ? undefined : tierId);

    return { active, onClick };
  }, [tier, equipped, equip]);

  // Only use sold out treatment if tier is not a NFT
  const isSoldOut = useMemo(
    () => tier.remainingSupply <= BigInt(0) && !tier.tokenId,
    [tier.remainingSupply, tier.tokenId]
  );

  const Label = useCallback(() => {
    const { initialSupply, remainingSupply, ownedSupply } = tier;

    switch (displayStrategy) {
      case "mint":
        const Price = () => (
          <div style={{ color: COLORS.pink, fontWeight: "bold" }}>
            Ξ{formatEther(tier.price)}
          </div>
        );

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
              <span style={{ opacity: 0.5 }}>/{_initialSupply}</span>
            </div>
          );
        };

        return (
          <div
            style={{
              position: "absolute",
              bottom: 4,
              right: 8,
              left: 8,
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Price />

            <Supply />
          </div>
        );
      case "dress":
        return (
          <div
            style={{
              position: "absolute",
              bottom: 4,
              right: 0,
              left: 0,
              textAlign: "center",
            }}
          >
            {ownedSupply === undefined ? "Dripped" : `${ownedSupply} owned`}
          </div>
        );
    }
  }, [tier, displayStrategy]);

  return (
    <ButtonPad
      fillFg={active ? COLORS.pinkLite : "white"}
      fillBorder={active ? COLORS.pink : "black"}
      onClick={onClick}
      pressed={active}
      style={{ opacity: isSoldOut ? 0.7 : 1 }}
      containerStyle={{ maxWidth: buttonSize + 8 }}
      shadow="sm"
    >
      <div
        style={{
          position: "relative",
          width: buttonSize,
          height: buttonSize,
          borderRadius: 2,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {tier ? (
          <>
            <FuzzMoment
              width={buttonSize - 8}
              height={buttonSize - 8}
              fill={"white"}
              style={{ zIndex: 2, position: "absolute" }}
              pixelSize={8}
            />
            <TierImage tier={tier} size={buttonSize - 32} />
          </>
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
            inset: 0,
          }}
        >
          <Label />
        </div>
      </div>
    </ButtonPad>
  );
}
