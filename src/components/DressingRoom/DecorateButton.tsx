import { CATEGORIES } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { AlertContext } from "@/contexts/alertContext";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useIsApprovedForAll } from "@/hooks/useIsApprovedForAll";
import { useNFTApprovals } from "@/hooks/useNFTApprovals";
import { useApprove } from "@/hooks/writeContract/useApprove";
import { useDecorateBanny } from "@/hooks/writeContract/useDecorateBanny";
import { useSetApprovalForAll } from "@/hooks/writeContract/useSetApprovalForAll";
import { Tier } from "@/model/tier";
import { useCallback, useContext, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import ButtonPad from "../shared/ButtonPad";
import Modal from "../shared/Modal";
import RoundedFrame from "../shared/RoundedFrame";
import TierImage from "../shared/TierImage";

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

function ApproveNFTsModal({
  nftTiers,
  onClose,
  onApproved,
}: {
  nftTiers: Tier[] | undefined;
  onClose?: VoidFunction;
  onApproved?: (tokenId: BigInt) => void;
}) {
  const { setAlert } = useContext(AlertContext);

  const { setApprovalForAll, isPending: approveAllPending } =
    useSetApprovalForAll({
      onSuccess: () => {
        onClose?.();
        setAlert?.({ title: "Success!" });
      },
    });

  const { approve, isPending, usedArgs } = useApprove({
    onSuccess: (args: unknown) => {
      console.log("asdf onapproved", args);
      onApproved?.((args as [`0x${string}`, BigInt])[1]);
    },
  });

  if (!nftTiers) return null;

  return (
    <Modal open onClose={onClose}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "black",
          gap: 8,
        }}
      >
        <h1>Some tokens need to be approved</h1>
        <p>
          When dressing a Banny, wearable NFTs are transferred to the Resolver
          contract. Approve those NFTs for transfer below.
        </p>

        {nftTiers.map((t) => (
          <div
            key={t.tokenId?.toString()}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <div>
              <RoundedFrame background={"white"}>
                <TierImage tier={t} size={64} />
              </RoundedFrame>
            </div>

            <div style={{ flex: 1 }}>
              {t.name}{" "}
              <span style={{ fontSize: FONT_SIZE.xs }}>
                #{t.tokenId?.toString()}
              </span>
            </div>

            <ButtonPad
              containerStyle={{ width: 120 }}
              style={{ padding: "8px 12px" }}
              onClick={() => approve({ tokenId: BigInt(t.tokenId || 0) })}
              shadow="none"
              loading={
                isPending && usedArgs?.includes(BigInt(t.tokenId || 0))
                  ? { fill: "black", width: 100, height: 24 }
                  : undefined
              }
            >
              Approve
            </ButtonPad>
          </div>
        ))}

        {nftTiers.length > 1 && (
          <ButtonPad
            containerStyle={{ marginTop: 24 }}
            style={{ padding: "8px 12px" }}
            onClick={() => setApprovalForAll(undefined)}
            shadow="none"
            loading={
              approveAllPending
                ? { fill: "black", width: 160, height: 24 }
                : undefined
            }
          >
            Approve all
          </ButtonPad>
        )}
      </div>
    </Modal>
  );
}
