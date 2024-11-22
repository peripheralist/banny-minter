import Modal from "@/components/shared/Modal";
import NftTierInfo from "@/components/shared/NftTierInfo";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { FONT_SIZE } from "@/constants/fontSize";
import { categoryIncompatibles } from "@/constants/incompatibles";
import { ShopContext } from "@/contexts/shopContext";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Tier } from "@/model/tier";
import { formatEther } from "juice-sdk-core";
import { useCallback, useContext, useMemo } from "react";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import EquippedTiersPreview from "../shared/EquippedTiersPreview";

export default function TierDetailModal({
  tier,
  onClose,
}: {
  tier: Tier | undefined;
  onClose?: VoidFunction;
}) {
  const { addItem } = useContext(ShopContext);

  const { width } = useWindowSize();

  const imgSize = useMemo(
    () => Math.min(Math.max(width ? width - 96 : 0, 240), 420),
    [width]
  );

  if (!tier) return null;

  return (
    <Modal
      open
      onClose={onClose}
      action={{
        onClick: () => addItem?.(tier),
        text: `Add to bag Ξ${formatEther(tier.price)}`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 36,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <RoundedFrame borderColor="white" background={"white"}>
            <TierImage tier={tier} size={imgSize} />
          </RoundedFrame>

          <div>
            <div style={{ fontSize: FONT_SIZE.sm, marginBottom: 8 }}>
              Wear it like:
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              <Look key={1} tier={tier} size={imgSize / 3 - (4 * 2) / 3} />
              <Look key={2} tier={tier} size={imgSize / 3 - (4 * 2) / 3} />
              <Look key={3} tier={tier} size={imgSize / 3 - (4 * 2) / 3} />
            </div>
          </div>
        </div>

        <NftTierInfo tier={tier} />
      </div>
    </Modal>
  );
}

function Look({ tier, size }: { tier: Tier; size: number }) {
  const { tiers } = useAllTiers();

  const count = 3;

  const displayTiers = useMemo(() => {
    const _displayTiers: Tier[] = [tier];

    for (let i = 0; i < count; i++) {
      const options = tiers?.filter(
        (t) =>
          _displayTiers.every((_t) => t.tierId !== _t.tierId) &&
          !categoryIncompatibles[tier.category]?.includes(t.category) &&
          t.category !== tier.category &&
          t.category !== "world" && // no worlds
          (i === 0 ? t.category === "naked" : t.category !== "naked") // ensure 1 naked
      );

      if (options?.length) {
        _displayTiers.push(options[Math.floor(Math.random() * options.length)]);
      }
    }

    return _displayTiers;
  }, [tiers, tier]);

  const Preview = useCallback(
    () => (
      <FuzzMoment
        width={size}
        height={size}
        fill="#ccc"
        onFinished={
          <EquippedTiersPreview
            size={size + 24}
            equipped={displayTiers.reduce(
              (acc, _tier) => ({
                ...acc,
                [_tier.category]: _tier,
              }),
              { [tier.category]: tier }
            )}
          />
        }
      />
    ),
    [displayTiers, size, tier]
  );

  if (!displayTiers) return null;

  return (
    <RoundedFrame
      containerStyle={{ width: size, height: size }}
      background={"white"}
      borderColor="white"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Preview />
    </RoundedFrame>
  );
}
