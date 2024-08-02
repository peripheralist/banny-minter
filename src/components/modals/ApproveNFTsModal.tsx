import { useApprove } from "@/hooks/writeContract/useApprove";
import { useSetApprovalForAll } from "@/hooks/writeContract/useSetApprovalForAll";
import Modal from "../shared/Modal";

export default function ApproveNFTsModal({
  tokenIds,
  onClose,
}: {
  tokenIds: bigint[] | undefined;
  onClose?: VoidFunction;
}) {
  const { setApprovalForAll } = useSetApprovalForAll();
  const { approve } = useApprove();

  if (!tokenIds) return null;

  return (
    <Modal open onClose={onClose}>
      <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
        <h1>Some tokens need to be approved</h1>
        <p>
          When dressing a Banny, wearable NFTs are transferred to the Resolver
          contract. Approve those NFTs for transfer below.
        </p>

        {tokenIds.map((t) => (
          <div key={t.toString()}>
            {t.toString()}
            <button onClick={() => approve({ tokenId: t })}>Approve</button>
          </div>
        ))}
      </div>

      {tokenIds.length > 1 && (
        <button onClick={setApprovalForAll}>Approve all</button>
      )}
    </Modal>
  );
}
