import Modal from "@/components/shared/Modal";
import NftTierInfo from "@/components/shared/NftTierInfo";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { ShopContext } from "@/contexts/shopContext";
import { useSingleImageSize } from "@/hooks/useSingleImageSize";
import { Tier } from "@/model/tier";
import { formatEther } from "juice-sdk-core";
import { useContext } from "react";

export default function TierDetailModal({
  tier,
  onClose,
}: {
  tier: Tier | undefined;
  onClose?: VoidFunction;
}) {
  const { addItem } = useContext(ShopContext);

  const imgSize = useSingleImageSize();

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
        <div>
          <RoundedFrame background={"white"}>
            <TierImage tier={tier} size={imgSize - 32} />
          </RoundedFrame>
        </div>

        <NftTierInfo tier={tier} />
      </div>
    </Modal>
  );
}
