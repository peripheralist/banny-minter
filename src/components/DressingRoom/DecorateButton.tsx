import { CATEGORIES } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { DressBannyContext } from "@/contexts/dressBannyContext";
import { CategoryLib } from "@/model/categoryLib";
import { TierOrNft } from "@/model/tierOrNft";
import { libRequiresNfts } from "@/utils/libRequiresNfts";
import { useContext, useEffect, useMemo, useState } from "react";
import { ConfirmDecorateModal } from "../modals/ConfirmDecorateModal";
import ButtonPad from "../shared/ButtonPad";

export default function DecorateButton() {
  const [initialEquipped, setInitialEquipped] =
    useState<CategoryLib<TierOrNft<true>>>();

  const { equipped } = useContext(DressBannyContext);

  const _equipped = libRequiresNfts(equipped);

  useEffect(() => {
    // wait for equipped to update
    if (
      initialEquipped ||
      !_equipped ||
      CATEGORIES.every((c) => !_equipped[c])
    ) {
      return;
    }

    setInitialEquipped(_equipped);
  }, [_equipped, initialEquipped]);

  const disabled = useMemo(() => {
    if (!initialEquipped || !_equipped) return;

    return CATEGORIES.every(
      (c) => initialEquipped[c]?.tierId === _equipped[c]?.tierId
    );
  }, [initialEquipped, _equipped]);

  const [isConfirming, setIsConfirming] = useState(false);

  return (
    <>
      <ButtonPad
        fillFg={COLORS.pink}
        onClick={() => setIsConfirming(true)}
        disabled={disabled}
        shadow="sm"
        style={{ padding: 12, fontSize: FONT_SIZE.lg, color: "white" }}
        dimension
      >
        Dress
      </ButtonPad>

      <ConfirmDecorateModal
        open={isConfirming}
        equipped={_equipped}
        onClose={() => setIsConfirming(false)}
      />
    </>
  );
}
