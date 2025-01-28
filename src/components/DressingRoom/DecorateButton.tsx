import { CATEGORIES, Category } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useIsApprovedForAll } from "@/hooks/readContract/useIsApprovedForAll";
import { useNFTApprovals } from "@/hooks/readContract/useNFTApprovals";
import { useApprove } from "@/hooks/writeContract/useApprove";
import { useDecorateBanny } from "@/hooks/writeContract/useDecorateBanny";
import { useSetApprovalForAll } from "@/hooks/writeContract/useSetApprovalForAll";
import { Tier } from "@/model/tier";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Address } from "viem";
import { useAccount } from "wagmi";
import ButtonPad from "../shared/ButtonPad";
import EquippedTiersPreview from "../shared/EquippedTiersPreview";
import Modal from "../shared/Modal";
import RoundedFrame from "../shared/RoundedFrame";
import TierImage from "../shared/TierImage";
import TransactionPending from "../shared/TransactionPending";

export default function DecorateButton() {
  const [initialEquipped, setInitialEquipped] =
    useState<Partial<Record<Category, Tier | undefined>>>();

  const { equipped } = useContext(EquipmentContext);

  useEffect(() => {
    // wait for equipped to update
    if (initialEquipped || CATEGORIES.every((c) => !equipped[c])) return;

    setInitialEquipped(equipped);
  }, [equipped, initialEquipped]);

  const disabled = useMemo(() => {
    if (!initialEquipped || !equipped) return;

    return CATEGORIES.every(
      (c) => initialEquipped[c]?.tierId === equipped[c]?.tierId
    );
  }, [initialEquipped, equipped]);

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

      <ConfirmDressModal
        open={isConfirming}
        onClose={() => setIsConfirming(false)}
      />
    </>
  );
}

function ConfirmDressModal({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: VoidFunction;
}) {
  const [approvedIds, setApprovedIds] = useState<BigInt[]>([]);

  const { address } = useAccount();
  const { equipped, availableTiers } = useContext(EquipmentContext);

  const maybeUnapprovedTokenIds = useMemo(
    () =>
      CATEGORIES.filter(
        (c) => c !== "naked" && !!equipped[c]?.tokenId && !equipped[c]?.equipped
      ).map((c) => BigInt(equipped[c]!.tokenId!)),

    [equipped]
  );

  const { approvals } = useNFTApprovals(maybeUnapprovedTokenIds);

  const { isApprovedForAll } = useIsApprovedForAll(address);

  const nftsNeedApproval = useMemo(() => {
    if (isApprovedForAll) return [];

    return approvals
      ?.filter(
        ({ approved, tokenId }) => !approved && !approvedIds.includes(tokenId)
      )
      .map(({ tokenId }) =>
        availableTiers?.find(
          (_t) => _t.tokenId && BigInt(_t.tokenId) === tokenId
        )
      )
      .filter((t) => !!t) as Tier[];
  }, [approvals, availableTiers, approvedIds, isApprovedForAll]);

  if (!open) return null;

  if (nftsNeedApproval?.length) {
    return (
      <ApproveNFTsModal
        nftTiers={nftsNeedApproval}
        onApproved={(newIds) => setApprovedIds((ids) => [...ids, ...newIds])}
        onClose={onClose}
      />
    );
  }

  return <DressModal onClose={onClose} />;
}

function ApproveNFTsModal({
  nftTiers,
  onApproved,
  onClose,
}: {
  nftTiers: Tier[] | undefined;
  onApproved?: (tokenIds: BigInt[]) => void;
  onClose?: VoidFunction;
}) {
  const { setApprovalForAll, isPending: approveAllPending } =
    useSetApprovalForAll({
      onSuccess: () => {
        onApproved?.(nftTiers?.map((t) => BigInt(t.tokenId ?? 0)) ?? []);
      },
    });

  const { approve, isPending, usedArgs } = useApprove({
    onSuccess: (args: unknown) => {
      onApproved?.([(args as [Address, BigInt])[1]]);
    },
  });

  if (!nftTiers) return null;

  return (
    <Modal open onClose={onClose} size="sm">
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

function DressModal({ onClose }: { onClose?: VoidFunction }) {
  const { decorateBanny, isPending, isSuccess, hash } = useDecorateBanny();

  const { equipped } = useContext(EquipmentContext);

  const decorate = useCallback(() => {
    const outfits = CATEGORIES.filter(
      (c) => c !== "world" && c !== "naked" && !!equipped[c]
    ).map((c) => equipped[c]!);

    decorateBanny({
      nakedBanny: equipped.naked,
      world: equipped.world,
      outfits,
    });
  }, [equipped, decorateBanny]);

  const router = useRouter();

  const _onClose = useCallback(
    () => (isSuccess ? router.reload() : onClose?.()),
    [isSuccess, onClose, router]
  );

  const { content, action } = useMemo(() => {
    if (isSuccess) {
      return {
        content: (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>Success!</h1>

              <div>
                <RoundedFrame background={"white"}>
                  <EquippedTiersPreview size={240} equipped={equipped} />
                </RoundedFrame>
              </div>
            </div>
          </>
        ),
      };
    }

    if (isPending) {
      return {
        content: <TransactionPending text="Dressing Banny..." hash={hash} />,
      };
    }

    return {
      action: { onClick: decorate, text: "Dress" },
      content: (
        <>
          <h1 style={{ fontSize: FONT_SIZE["3xl"] }}>New fit?</h1>

          <p
            style={{ marginTop: 12, marginBottom: 24, fontSize: FONT_SIZE.sm }}
          >
            When dressing a Banny, outfits & backgrounds will be transferred to
            the Resolver contract. When removed, they{"'"}ll be returned to
            whichever wallet owns the Banny.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <div>
              <RoundedFrame background={"white"}>
                <EquippedTiersPreview size={240} equipped={equipped} />
              </RoundedFrame>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {CATEGORIES.filter((c) => c !== "naked" && !!equipped[c]).map(
                (c) => {
                  const tier = equipped[c];

                  return (
                    <div
                      key={c}
                      style={{ display: "flex", gap: 12, alignItems: "center" }}
                    >
                      <div>
                        <RoundedFrame
                          background={"white"}
                          style={{ pointerEvents: "none" }}
                        >
                          <TierImage size={56} tier={tier} />
                        </RoundedFrame>
                      </div>

                      <div>{tier?.name}</div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
      ),
    };
  }, [decorate, hash, isPending, isSuccess, equipped]);

  return (
    <Modal open onClose={_onClose} action={action} size="sm">
      {content}
    </Modal>
  );
}
