import { useApprove } from "@/hooks/writeContract/useApprove";
import { useSetApprovalForAll } from "@/hooks/writeContract/useSetApprovalForAll";
import { TierOrNft } from "@/model/tierOrNft";
import { Address } from "viem";
import Modal from "../shared/Modal";
import Link from "next/link";
import { useAppChain } from "@/hooks/useAppChain";
import { FONT_SIZE } from "@/constants/fontSize";
import { RESOLVER_ADDRESS } from "@/constants/contracts";
import RoundedFrame from "../shared/RoundedFrame";
import TierImage from "../shared/TierImage";
import ButtonPad from "../shared/ButtonPad";

export function ApproveNFTsModal({
  nftTiers,
  onApproved,
  onClose,
}: {
  nftTiers: TierOrNft<true>[] | undefined;
  onApproved?: (tokenIds: BigInt[]) => void;
  onClose?: VoidFunction;
}) {
  const appChain = useAppChain();

  const { setApprovalForAll, isPending: approveAllPending } =
    useSetApprovalForAll({
      onSuccess: () => {
        onApproved?.(nftTiers?.map((t) => BigInt(t.tokenId)) ?? []);
      },
    });

  const { approve, isPending, usedArgs } = useApprove({
    onSuccess: (args: unknown) => {
      onApproved?.([(args as [Address, BigInt])[1]]);
    },
  });

  if (!nftTiers) return null;

  return (
    <Modal id="approve-nfts" open onClose={onClose} size="sm">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "black",
          gap: 8,
        }}
      >
        <h1>Some tokens need to be approved</h1>

        <p style={{ marginTop: 12, marginBottom: 24, fontSize: FONT_SIZE.sm }}>
          When dressing a Banny, the accessory NFTs are transferred to the{" "}
          <Link
            href={`${appChain.blockExplorers.default.url}/address/${RESOLVER_ADDRESS}`}
            target="_blank"
          >
            Resolver contract
          </Link>
          . When undressed, the NFTs will be returned to whichever wallet owns
          the Banny.
        </p>

        {nftTiers.map((t) => (
          <div
            key={t.tokenId.toString()}
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
                #{t.tokenId.toString()}
              </span>
            </div>

            <ButtonPad
              containerStyle={{ width: 120 }}
              style={{ padding: "8px 12px" }}
              onClick={() => approve({ tokenId: BigInt(t.tokenId) })}
              shadow="none"
              loading={
                isPending && usedArgs?.includes(BigInt(t.tokenId))
                  ? { fill: "black", width: 100, height: 24 }
                  : undefined
              }
            >
              Approve
            </ButtonPad>
          </div>
        ))}

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
          Approve all NFTs
        </ButtonPad>
      </div>
    </Modal>
  );
}
