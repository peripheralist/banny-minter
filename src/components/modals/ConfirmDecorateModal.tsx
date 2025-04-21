import { CATEGORIES } from "@/constants/category";
import { DressBannyContext } from "@/contexts/dressBannyContext";
import { useIsApprovedForAll } from "@/hooks/readContract/useIsApprovedForAll";
import { useNFTApprovals } from "@/hooks/readContract/useNFTApprovals";
import { CategoryLib } from "@/model/categoryLib";
import { TierOrNft } from "@/model/tierOrNft";
import { useContext, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { ApproveNFTsModal } from "./ApproveNftsModal";
import { DecorateBannyModal } from "./DecorateBannyModal";

export function ConfirmDecorateModal({
  equipped,
  open,
  onClose,
}: {
  equipped: CategoryLib<TierOrNft<true>>;
  open?: boolean;
  onClose?: VoidFunction;
}) {
  const [didApproveIds, setDidApproveIds] = useState<BigInt[]>([]);

  const { availableTiers } = useContext(DressBannyContext);

  const { address } = useAccount();

  const maybeUnapprovedTokenIds = useMemo(
    () =>
      CATEGORIES.filter((c) => {
        const tier = equipped?.[c];

        return c !== "body" && tier && !!tier.tokenId && !tier.dressed;
      }).map((c) => BigInt(equipped![c]?.tokenId!)),
    [equipped]
  );

  const { approvals } = useNFTApprovals(maybeUnapprovedTokenIds);

  const { isApprovedForAll } = useIsApprovedForAll(address);

  const nftsNeedApproval = useMemo(() => {
    if (isApprovedForAll) return [];

    return approvals
      ?.filter(
        ({ approved, tokenId }) => !approved && !didApproveIds.includes(tokenId)
      )
      .map(({ tokenId }) =>
        availableTiers?.find(
          (_t) => _t.tokenId && BigInt(_t.tokenId) === tokenId
        )
      )
      .filter((t) => !!t) as TierOrNft<true>[];
  }, [approvals, availableTiers, didApproveIds, isApprovedForAll]);

  if (!open) return null;

  return (
    <>
      <DecorateBannyModal
        title="Dress your Banny"
        equipped={equipped}
        onClose={onClose}
      />
      <ApproveNFTsModal
        open={!!nftsNeedApproval?.length}
        nftTiers={nftsNeedApproval}
        onApproved={(newIds) => setDidApproveIds((ids) => [...ids, ...newIds])}
      />
    </>
  );
}
