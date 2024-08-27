import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { CATEGORIES } from "@/constants/nfts";
import { AlertContext } from "@/contexts/alertContext";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useNFTApprovals } from "@/hooks/useNFTApprovals";
import { useDecorateBanny } from "@/hooks/writeContract/useDecorateBanny";
import { useCallback, useContext, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import ApproveNFTsModal from "../modals/ApproveNFTsModal";
import ButtonPad from "../shared/ButtonPad";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";

export default function DecorateButton() {
  // TODO need to disable button until unworn outfits are equipped
  const [approveModalOpen, setApproveModalOpen] = useState(false);

  const { setAlert } = useContext(AlertContext);

  const { address } = useAccount();

  const { equipped } = useContext(EquipmentContext);

  const onSuccess = useCallback(() => {
    setAlert?.({
      title: "Success!",
      action: {
        label: "View Banny",
        href: `/nft/${equipped["naked"]?.tokenId}`,
      },
    });
  }, [equipped["naked"]?.tokenId, setAlert]);

  const { decorateBanny, isPending } = useDecorateBanny({
    onSuccess,
  });

  const maybeUnapprovedTokenIds = useMemo(
    () =>
      CATEGORIES.filter(
        (c) => c !== "naked" && !!equipped[c]?.tokenId && !equipped[c]?.equipped
      ).map((c) => BigInt(equipped[c]!.tokenId!)),
    [equipped]
  );

  const { approvals } = useNFTApprovals(maybeUnapprovedTokenIds);

  const tokenIdsNeedApproval = useMemo(
    () =>
      approvals
        ?.filter(({ approved }) => !approved)
        .map(({ tokenId }) => tokenId),
    [approvals]
  );

  const decorate = useCallback(() => {
    if (tokenIdsNeedApproval?.length) {
      setApproveModalOpen(true);
      return;
    }

    const outfits = CATEGORIES.filter(
      (c) => c !== "world" && c !== "naked" && !!equipped[c]
    ).map((c) => equipped[c]!);

    decorateBanny({
      nakedBanny: equipped.naked,
      world: equipped.world,
      outfits,
    });
  }, [equipped, decorateBanny, tokenIdsNeedApproval]);

  const { measuredRef, width, height } = useMeasuredRef();

  const loading = isPending ? { fill: "white", width, height } : undefined;

  return (
    <>
      <ButtonPad
        fillFg={COLORS.pink}
        onClick={decorate}
        shadow="sm"
        disabled={!address}
        style={{ padding: 24 }}
        loading={loading}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div
            ref={measuredRef}
            style={{
              opacity: address ? 1 : 0.25,
              color: address ? "white" : "black",
              fontSize: FONT_SIZE["2xl"],
            }}
          >
            Dress
          </div>

          {!address && (
            <div
              style={{
                fontSize: FONT_SIZE.lg,
                textTransform: "uppercase",
                color: "white",
              }}
            >
              No wallet
            </div>
          )}
        </div>
      </ButtonPad>

      {approveModalOpen && (
        <ApproveNFTsModal
          tokenIds={tokenIdsNeedApproval}
          onClose={() => setApproveModalOpen(false)}
        />
      )}
    </>
  );
}
