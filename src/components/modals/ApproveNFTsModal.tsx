import { FONT_SIZE } from "@/constants/fontSize";
import { AlertContext } from "@/contexts/alertContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useApprove } from "@/hooks/writeContract/useApprove";
import { useSetApprovalForAll } from "@/hooks/writeContract/useSetApprovalForAll";
import { useCallback, useContext } from "react";
import ButtonPad from "../shared/ButtonPad";
import Modal from "../shared/Modal";

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

  const { setApprovalForAll, isPending: approveAllPending } =
    useSetApprovalForAll({ onSuccess });
  const { approve, isPending, usedArgs } = useApprove({ onSuccess });

  const { measuredRef, width } = useMeasuredRef();

  if (!tokenIds) return null;

  return (
    <Modal open onClose={onClose}>
      <div
        ref={measuredRef}
        style={{ display: "flex", flexDirection: "column", color: "black" }}
      >
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
              loading={
                usedArgs?.includes(t)
                  ? { fill: "black", width: 100, height: 24 }
                  : undefined
              }
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
          loading={
            approveAllPending
              ? { fill: "black", width: 100, height: 24 }
              : undefined
          }
        >
          Approve all
        </ButtonPad>
      )}
    </Modal>
  );
}
