import { FONT_SIZE } from "@/constants/fontSize";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { useDecorateBanny } from "@/hooks/writeContract/useDecorateBanny";
import { TierOrNft } from "@/model/tierOrNft";
import { tierIdOfTokenId } from "@/utils/tierIdOfTokenId";
import Link from "next/link";
import { useState } from "react";
import ButtonPad from "../shared/ButtonPad";
import Modal from "../shared/Modal";
import RoundedFrame from "../shared/RoundedFrame";
import TierImage from "../shared/TierImage";

export function MigrateOutfitModal({
  open,
  bannyNft,
  dressedTokenIds,
  onClose,
}: {
  open?: boolean;
  bannyNft: TierOrNft<true>;
  dressedTokenIds: bigint[];
  onClose?: VoidFunction;
}) {
  const [didUndress, setDidUndress] = useState(false);

  const undress = useDecorateBanny({
    useOldResolver: true,
    onSuccess: () => setDidUndress(true),
  });

  const { parsedTiers } = useAllTiers();

  const dressedNfts = dressedTokenIds.map((t) => {
    const tokenId = Number(t);
    const tier = parsedTiers?.find(
      (t) => t.tierId === tierIdOfTokenId(tokenId)
    ) as TierOrNft<true>;

    return { ...tier, tokenId };
  });

  return (
    <Modal id="migrate-outfits" open={open} onClose={onClose} size="sm">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "black",
          gap: 8,
        }}
      >
        <h1>{`Why is my banny naked?`}</h1>

        <p style={{ marginTop: 12, marginBottom: 24, fontSize: FONT_SIZE.sm }}>
          Banny recently made a jump over to a new version, due to updates to
          the money system Banny is built on (More info in{" "}
          <Link href={`https://docs.juicebox.money/dev`} target="_blank">
            the docs
          </Link>
          ). This banny was dressed before using the previous version, but is
          showing up bare now. Use the button below to get this banny{"'"}s outfits
          back in your Locker.
        </p>

        <h2>Previously wearing:</h2>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {dressedNfts.map((nft) => {
            return (
              <div
                key={nft.tokenId}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <RoundedFrame background={"white"}>
                  <TierImage tier={nft} size={80} />
                </RoundedFrame>
              </div>
            );
          })}
        </div>

        <br />
        <br />

        <ButtonPad
          disabled={didUndress}
          style={{ padding: "12px 16px" }}
          onClick={() =>
            undress.decorateBanny({
              body: bannyNft,
              outfits: [],
              background: undefined,
            })
          }
          shadow="none"
          loading={
            undress.isPending
              ? { fill: "black", width: 160, height: 24 }
              : undefined
          }
        >
          Undress previous version
        </ButtonPad>
      </div>
    </Modal>
  );
}
