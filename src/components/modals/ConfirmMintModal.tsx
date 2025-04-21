import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { categoryIncompatibles } from "@/constants/incompatibles";
import { DressBannyContext } from "@/contexts/dressBannyContext";
import { ShopContext } from "@/contexts/shopContext";
import { WalletContext } from "@/contexts/walletContext";
import { useMintNftEventsQuery } from "@/generated/graphql";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { useAppChain } from "@/hooks/useAppChain";
import { usePayerTokens } from "@/hooks/usePayerTokens";
import { useMint } from "@/hooks/writeContract/useMint";
import { CategoryLib } from "@/model/categoryLib";
import { TierOrNft } from "@/model/tierOrNft";
import { tierIdOfTokenId } from "@/utils/tierIdOfTokenId";
import Link from "next/link";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { formatEther, zeroAddress } from "viem";
import { useAccount } from "wagmi";
import BagItems from "../shared/BagItems";
import ButtonPad from "../shared/ButtonPad";
import FormattedAddress from "../shared/FormattedAddress";
import Modal from "../shared/Modal";
import RoundedFrame from "../shared/RoundedFrame";
import TransactionPending from "../shared/TransactionPending";
import { ConfirmDecorateModal } from "./ConfirmDecorateModal";

export function ConfirmMintModal({ onClose }: { onClose?: VoidFunction }) {
  const [isPolling, setIsPolling] = useState(false);

  const appChain = useAppChain();
  const { address } = useAccount();
  const { parsedTiers } = useAllTiers();

  const { wrongNetwork, switchChain } = useContext(WalletContext);
  const { totalEquippedPrice, emptyBag, bag } = useContext(ShopContext);
  const { unequipAll } = useContext(DressBannyContext);

  const { mint, isPending, isSuccess, hash } = useMint({
    onSuccess: () => setIsPolling(true),
  });

  const { data: mintEvents } = useMintNftEventsQuery({
    variables: {
      where: {
        chainId: appChain.id,
        txHash: hash ?? zeroAddress, // effectively disable query from returning any events until hash exists
      },
    },
    pollInterval: hash && isPolling ? 2000 : undefined,
  });

  useEffect(() => {
    if (!isPolling) return;

    // wait max 60s for the mint transaction
    const timeout = setTimeout(() => {
      setIsPolling(false);
    }, 60000);

    return () => clearTimeout(timeout);
  }, [isPolling]);

  useEffect(() => {
    // stop polling once we have events
    if (mintEvents?.mintNftEvents.items.length) setIsPolling(false);
  }, [mintEvents]);

  // build the category lib of items that can be dressed
  const mintedLib = useMemo(() => {
    const _mintedNfts = mintEvents?.mintNftEvents.items
      ?.map(({ tokenId }) => {
        const tier = parsedTiers?.find(
          (t) => t.tierId === tierIdOfTokenId(Number(tokenId))
        );

        if (!tier) return;

        return { ...tier, tokenId: Number(tokenId) } as TierOrNft<true>;
      })
      .filter((t) => !!t) as TierOrNft<true>[];

    // must have minted at least two items
    if (!_mintedNfts || _mintedNfts.length < 2) {
      return;
    }

    // must have minted exactly one body
    if (
      _mintedNfts.filter(({ category }) => category === "body").length !== 1
    ) {
      return;
    }

    // ensure all minted items are compatible
    if (
      _mintedNfts.some((nft) =>
        categoryIncompatibles[nft.category]?.some((c) =>
          _mintedNfts.some((_nft) => _nft.category === c)
        )
      )
    ) {
      return;
    }

    return _mintedNfts.reduce(
      (acc, curr) => ({ ...acc, [curr.category]: curr }),
      {} as CategoryLib<TierOrNft<true>>
    );
  }, [mintEvents, parsedTiers]);

  const _onClose = useCallback(() => {
    if (isSuccess) {
      emptyBag?.();
      unequipAll?.();
    }
    onClose?.();
  }, [emptyBag, unequipAll, isSuccess, onClose]);

  const { formatted: formattedPayerTokens } =
    usePayerTokens(totalEquippedPrice);

  const formattedPrice = useMemo(
    () => `${totalEquippedPrice ? formatEther(totalEquippedPrice) : "--"} ETH`,
    [totalEquippedPrice]
  );

  return (
    <>
      {mintedLib && (
        <ConfirmDecorateModal open equipped={mintedLib} onClose={_onClose} />
      )}

      <Modal
        id="mint-success"
        open={!!isSuccess && !isPolling && !mintedLib}
        onClose={_onClose}
      >
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
            <Link onClick={_onClose} href={`/locker/${address}`}>
              locker
            </Link>
            .
          </div>
        </div>
      </Modal>

      <Modal
        id="confirm-mint"
        open={!isSuccess || isPolling}
        size="sm"
        action={
          isPending || isPolling
            ? undefined
            : wrongNetwork && switchChain
            ? {
                onClick: switchChain,
                text: `Unsupported network!`,
              }
            : {
                onClick: mint,
                text: `Mint (${formattedPrice})`,
              }
        }
        onClose={onClose}
      >
        {isPending || isPolling ? (
          <TransactionPending hash={hash} text="Minting..." />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <h1 style={{ fontSize: FONT_SIZE["3xl"] }}>Mint NFTs</h1>

            <BagItems />

            {bag.some((b) => b.tier.category === "body") && (
              <p>
                Heads up: after you mint, you{"'"}ll need to dress your Banny in
                a second transaction!
              </p>
            )}

            <ButtonPad
              fillBg={COLORS.blue100}
              fillBorder={COLORS.blue400}
              fillFg={COLORS.blue50}
              style={{ padding: 16 }}
              onClick={() => switchChain?.()}
              shadow="sm"
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                Network:
                <div style={{ color: COLORS.blue500 }}>{appChain.name}</div>
              </div>
            </ButtonPad>

            <RoundedFrame
              background={"white"}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                padding: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <div>Total:</div>
                <div>{formattedPrice}</div>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                Earn:
                <span>{(formattedPayerTokens ?? "--").toString()} $BAN</span>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                Wallet:
                <FormattedAddress address={address} position="left" />
              </div>
            </RoundedFrame>

            <p style={{ fontSize: FONT_SIZE.sm }}>
              Payments go to the{" "}
              <Link href={`https://app.revnet.eth.sucks/eth:4`} target="blank">
                $BAN Revnet
              </Link>{" "}
              earning $BAN in return.
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
