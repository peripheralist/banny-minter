import { CATEGORIES } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { AlertContext } from "@/contexts/alertContext";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useIsApprovedForAll } from "@/hooks/useIsApprovedForAll";
import { useNFTApprovals } from "@/hooks/useNFTApprovals";
import { useDecorateBanny } from "@/hooks/writeContract/useDecorateBanny";
import { Tier } from "@/model/tier";
import { useCallback, useContext, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import ApproveNFTsModal from "../modals/ApproveNFTsModal";
import ButtonPad from "../shared/ButtonPad";

export default function DecorateButton() {
  // TODO need to disable button until unworn outfits are equipped
  const [approvedIds, setApprovedIds] = useState<BigInt[]>([]);
  const [approveModalOpen, setApproveModalOpen] = useState(false);

  const { setAlert } = useContext(AlertContext);

  const { address } = useAccount();

  const { equipped, availableTiers } = useContext(EquipmentContext);

  const nakedTokenId = equipped["naked"]?.tokenId;

  const onDressSuccess = useCallback(() => {
    setApprovedIds([]);
    setAlert?.({
      title: "Success!",
      action: {
        label: "View Banny",
        href: `/nft/${nakedTokenId}`,
      },
    });
  }, [nakedTokenId, setAlert]);

  const { decorateBanny, isPending } = useDecorateBanny({
    onSuccess: onDressSuccess,
  });

  const maybeUnapprovedTokenIds = useMemo(
    () =>
      CATEGORIES.filter(
        (c) => c !== "naked" && !!equipped[c]?.tokenId && !equipped[c]?.equipped
      )
        .map((c) => BigInt(equipped[c]!.tokenId!))
        .filter((tokenId) => !approvedIds.includes(tokenId)), // exclude any tokens that have been approved since last state update
    [equipped, approvedIds]
  );

  const { approvals } = useNFTApprovals(maybeUnapprovedTokenIds);

  const nftsNeedApproval = useMemo(
    () =>
      approvals
        ?.filter(({ approved }) => !approved)
        .map(({ tokenId }) => tokenId)
        .flatMap((tokenId) =>
          CATEGORIES.map((c) =>
            availableTiers?.[c].find(
              (_t) => BigInt(_t.tokenId || 0) === tokenId
            )
          )
        )
        .filter((t) => !!t) as Tier[],
    [approvals, availableTiers]
  );

  const { isApprovedForAll } = useIsApprovedForAll(address);

  const decorate = useCallback(() => {
    if (nftsNeedApproval?.length && !isApprovedForAll) {
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
  }, [equipped, decorateBanny, nftsNeedApproval, isApprovedForAll]);

  return (
    <>
      <ButtonPad
        fillFg={COLORS.pink}
        onClick={decorate}
        shadow="sm"
        disabled={!address}
        style={{ padding: 12, fontSize: FONT_SIZE.lg, color: "white" }}
      >
        Dress
      </ButtonPad>

      {approveModalOpen && nftsNeedApproval.length > 0 && (
        <ApproveNFTsModal
          nftTiers={nftsNeedApproval}
          onClose={() => setApproveModalOpen(false)}
          onApproved={(tokenId) => setApprovedIds((ids) => [...ids, tokenId])}
        />
      )}
    </>
  );
}
