import { COLORS } from "@/constants/colors";
import { CATEGORIES } from "@/constants/nfts";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useDecorateBanny } from "@/hooks/writeContract/useDecorateBanny";
import { useCallback, useContext, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import Fuzz from "../pixelRenderers/Fuzz";
import ButtonPad from "../shared/ButtonPad";
import { useNFTApprovals } from "@/hooks/useNFTApprovals";
import ApproveNFTsModal from "../modals/ApproveNFTsModal";

export default function DecorateButton() {
  const [approveModalOpen, setApproveModalOpen] = useState(false);

  const { address } = useAccount();

  const { equipped } = useContext(EquipmentContext);

  const { decorateBanny, isPending } = useDecorateBanny();

  const wearableTokenIds = useMemo(
    () =>
      CATEGORIES.filter((c) => c !== "naked" && !!equipped[c]?.tokenId).map(
        (c) => BigInt(equipped[c]!.tokenId!)
      ),
    [equipped]
  );

  const { approvals } = useNFTApprovals(wearableTokenIds);

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

  return (
    <>
      <ButtonPad
        style={{
          padding: 1,
        }}
        fillFg={COLORS.pink}
        onClick={decorate}
      >
        {isPending ? (
          <div style={{ padding: 10 }}>
            <Fuzz width={80} height={32} fill="white" interval={500} />
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              fontSize: "2.4rem",
            }}
          >
            <div
              style={{
                opacity: address ? 1 : 0.25,
                padding: 10,
                minWidth: 120,
                color: address ? "white" : "black",
              }}
            >
              Dress
            </div>

            {!address && (
              <div
                style={{
                  fontSize: "1.25rem",
                  textTransform: "uppercase",
                  color: "white",
                }}
              >
                No wallet
              </div>
            )}
          </div>
        )}
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
