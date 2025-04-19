import { FONT_SIZE } from "@/constants/fontSize";
import { DressBannyContext } from "@/contexts/dressBannyContext";
import { ShopContext } from "@/contexts/shopContext";
import Link from "next/link";
import { useContext, useMemo } from "react";
import { useAccount } from "wagmi";
import BagItems from "../shared/BagItems";
import Modal from "../shared/Modal";
import { useMintNftEventsQuery } from "@/generated/graphql";
import { useAppChain } from "@/hooks/useAppChain";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { tierIdOfTokenId } from "@/utils/tierIdOfTokenId";
import { TierOrNft } from "@/model/tierOrNft";
import { DecorateBannyModal } from "./DecorateBannyModal";
import { CategoryLib } from "@/model/categoryLib";

export function MintSuccessModal({
  txHash,
}: {
  txHash?: `0x${string}` | undefined;
}) {
  const { parsedTiers } = useAllTiers();

  const appChain = useAppChain();
  const { address } = useAccount();

  const { emptyBag } = useContext(ShopContext);
  const { unequipAll } = useContext(DressBannyContext);

  const onClose = () => {
    emptyBag?.();
    unequipAll?.();
  };

  const { data: mintEvents } = useMintNftEventsQuery({
    variables: {
      where: {
        chainId: appChain.id,
        txHash,
      },
    },
  });

  const mintedNfts = useMemo(() => {
    const _mintedNfts = mintEvents?.mintNftEvents.items
      ?.map(({ tokenId }) => {
        const tier = parsedTiers?.find(
          (t) => t.tierId === tierIdOfTokenId(Number(tokenId))
        );

        if (!tier) return;

        return { ...tier, tokenId: Number(tokenId) } as TierOrNft<true>;
      })
      .filter((t) => !!t);

    if (!_mintedNfts || _mintedNfts.length < 2) {
      return [];
    }

    // must have minted exactly one body
    if (
      _mintedNfts.filter(({ category }) => category === "body").length !== 1
    ) {
      return [];
    }

    return _mintedNfts;
  }, [mintEvents]);

  if (mintedNfts) {
    const lib: CategoryLib<TierOrNft<true>> = mintedNfts.reduce(
      (acc, curr) => ({ ...acc, [curr.category]: curr }),
      {}
    );

    return <DecorateBannyModal equipped={lib} onClose={onClose} />;
  }

  return (
    <Modal id="mint-success" open onClose={onClose}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 48,
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: FONT_SIZE["3xl"] }}>Minted!</h1>

        <BagItems />

        <div>
          Dress Banny in your{" "}
          <Link onClick={onClose} href={`/locker/${address}`}>
            locker
          </Link>
          .
        </div>

        <div style={{ fontSize: FONT_SIZE.xs }}>
          It may take a minute or two for items to appear in your Locker.
        </div>
      </div>
    </Modal>
  );
}
