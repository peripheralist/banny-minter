import { FONT_SIZE } from "@/constants/fontSize";
import { AlertContext } from "@/contexts/alertContext";
import { useApprove } from "@/hooks/writeContract/useApprove";
import { useSetApprovalForAll } from "@/hooks/writeContract/useSetApprovalForAll";
import { useCallback, useContext } from "react";
import ButtonPad from "../shared/ButtonPad";
import Modal from "../shared/Modal";
import { Tier } from "@/model/tier";
import TierImage from "../shared/TierImage";
import RoundedFrame from "../shared/RoundedFrame";

export default function ApproveNFTsModal({
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
