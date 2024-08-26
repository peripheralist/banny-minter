import { useApprove } from "@/hooks/writeContract/useApprove";
import { useSetApprovalForAll } from "@/hooks/writeContract/useSetApprovalForAll";
import Modal from "../shared/Modal";
import ButtonPad from "../shared/ButtonPad";
import { FONT_SIZE } from "@/constants/fontSize";
import { useCallback, useContext, useMemo } from "react";
import { AlertContext } from "@/contexts/alertContext";

export default function ApproveNFTsModal({
  tokenIds,
  onClose,
}: {
  tokenIds: bigint[] | undefined;
  onClose?: VoidFunction;
}) {
  const { setAlert } = useContext(AlertContext);

  const onSuccess = useCallback(() => {
    onClose?.();
    setAlert?.({ title: "Success!" });
  }, [setAlert, onClose]);

  const { setApprovalForAll } = useSetApprovalForAll({ onSuccess });
  const { approve } = useApprove({ onSuccess });

  if (!tokenIds) return null;

  return (
    <Modal open onClose={onClose}>
      <div style={{ display: "flex", flexDirection: "column", color: "black" }}>
        <h1>Some tokens need to be approved</h1>
        <p>
          When dressing a Banny, wearable NFTs are transferred to the Resolver
          contract. Approve those NFTs for transfer below.
        </p>

        {tokenIds.map((t) => (
          <div
            key={t.toString()}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 32,
            }}
          >
            <div style={{ fontSize: FONT_SIZE.lg }}>{t.toString()}</div>

            <ButtonPad
              containerStyle={{ width: 120 }}
              style={{ width: 120, height: 32 }}
              onClick={() => approve({ tokenId: t })}
              shadow="none"
            >
              Approve
            </ButtonPad>
          </div>
        ))}
      </div>

      {tokenIds.length > 1 && (
        <ButtonPad
          containerStyle={{ width: 120 }}
          style={{ width: 120, height: 32 }}
          onClick={() => setApprovalForAll(undefined)}
          shadow="none"
        >
          Approve all
        </ButtonPad>
      )}
    </Modal>
  );
}
