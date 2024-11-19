import ButtonPad from "@/components/shared/ButtonPad";
import Modal from "@/components/shared/Modal";
import NftTierInfo from "@/components/shared/NftTierInfo";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { COLORS } from "@/constants/colors";
import { ShopContext } from "@/contexts/shopContext";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Tier } from "@/model/tier";
import { useContext, useMemo } from "react";
import { formatEther } from "viem";

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
      // footer={
      //   <ButtonPad
      //     fillFg={COLORS.pink}
      //     style={{ padding: 12, color: "white" }}
      //     onClick={() => addItem?.(tier)}
      //     shadow="sm"
      //   >
      //     Add to bag Ξ{formatEther(tier.price)}
      //   </ButtonPad>
      // }
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

        <div>
          <NftTierInfo tier={tier} />

          <ButtonPad
            fillFg={COLORS.pink}
            containerStyle={{ marginTop: 36 }}
            style={{ padding: 12, color: "white" }}
            onClick={() => addItem?.(tier)}
            shadow="sm"
          >
            Add to bag Ξ{formatEther(tier.price)}
          </ButtonPad>
        </div>
      </div>
    </Modal>
  );
}
