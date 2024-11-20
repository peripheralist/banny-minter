import Modal from "@/components/shared/Modal";
import NftTierInfo from "@/components/shared/NftTierInfo";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { ShopContext } from "@/contexts/shopContext";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Tier } from "@/model/tier";
import { formatEther } from "juice-sdk-core";
import { useContext, useMemo } from "react";

export default function TierDetailModal({
  tier,
  onClose,
}: {
  tier: Tier | undefined;
  onClose?: VoidFunction;
}) {
  const { addItem } = useContext(ShopContext);

  const { width, height } = useWindowSize();

  const imgSize = useMemo(
    () => Math.max(Math.min(width, height) * 0.4, 180),
    [width, height]
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
          gap: 36,
        }}
      >
        <div>
          <RoundedFrame background={"white"}>
            <TierImage tier={tier} size={imgSize} />
          </RoundedFrame>
        </div>

        <NftTierInfo tier={tier} />
      </div>
    </Modal>
  );
}
