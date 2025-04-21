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
import DressBannyContextProvider from "@/contexts/DressBannyContextProvider";

export function ConfirmMintModal({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: VoidFunction;
}) {
  const [phase, setPhase] = useState<
    "none" | "minting" | "awaitingMints" | "decorating" | "success"
  >("none");
  const appChain = useAppChain();
  const { address } = useAccount();
  const { parsedTiers } = useAllTiers();

  const { wrongNetwork, switchChain } = useContext(WalletContext);
  const {
    totalEquippedPrice,
    emptyBag,
    bag,
    purgeCache: purgeBagCache,
  } = useContext(ShopContext);
  const { unequipAll, purgeCache: purgeDressBannyCache } =
    useContext(DressBannyContext);

  const { mint, isPending, isSuccess, hash } = useMint({
    onSuccess: () => {
      setPhase("awaitingMints");
    },
  });

  const {
    data: mintEvents,
    startPolling,
    stopPolling,
  } = useMintNftEventsQuery({
    variables: {
      where: {
        chainId: appChain.id,
        txHash: hash ?? zeroAddress, // effectively disable query from returning any events until hash exists
      },
    },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (phase === "awaitingMints") return;

    if (phase === "decorating" || phase === "success") {
      purgeBagCache?.();
      purgeDressBannyCache?.();
      stopPolling();
      return;
    }

    startPolling(2000);

    // wait max 60s for the mint transaction
    const timeout = setTimeout(() => {
      setPhase("success");
    }, 60000);

    return () => clearTimeout(timeout);
  }, [startPolling, stopPolling, phase, purgeBagCache, purgeDressBannyCache]);

  const mintedNfts = useMemo(() => {
    return mintEvents?.mintNftEvents.items
      ?.map(({ tokenId }) => {
        const tier = parsedTiers?.find(
          (t) => t.tierId === tierIdOfTokenId(Number(tokenId))
        );

        if (!tier) return;

        return { ...tier, tokenId: Number(tokenId) } as TierOrNft<true>;
      })
      .filter((t) => !!t);
  }, [mintEvents]);

  // build the category lib of items that can be dressed
  const mintedLib = useMemo(() => {
    if (!mintedNfts?.length || mintedNfts.length !== bag.length) {
      // wait for all mintEvents
      return;
    }

    // must have minted at least two items
    if (!mintedNfts || mintedNfts.length < 2) {
      setPhase("success");
      return;
    }

    // must have minted exactly one body
    if (mintedNfts.filter(({ category }) => category === "body").length !== 1) {
      setPhase("success");
      return;
    }

    // ensure all minted items are compatible
    if (
      mintedNfts.some((nft) =>
        categoryIncompatibles[nft.category]?.some((c) =>
          mintedNfts.some((_nft) => _nft.category === c)
        )
      )
    ) {
      setPhase("success");
      return;
    }

    setPhase("decorating");

    return mintedNfts.reduce(
      (acc, curr) => ({ ...acc, [curr.category]: curr }),
      {} as CategoryLib<TierOrNft<true>>
    );
  }, [mintedNfts, parsedTiers, bag]);

  const _onClose = useCallback(() => {
    if (isSuccess) {
      emptyBag?.();
      unequipAll?.();
      setPhase("none"); // reset
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
      {mintedLib && mintedNfts?.length && (
        <DressBannyContextProvider availableTiers={mintedNfts}>
          <ConfirmDecorateModal
            open={open && phase === "decorating"}
            equipped={mintedLib}
            onClose={_onClose}
          />
        </DressBannyContextProvider>
      )}

      <Modal
        id="mint-success"
        open={open && phase === "success"}
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
        open={
          open &&
          (phase === "none" || phase === "minting" || phase === "awaitingMints")
        }
        size="sm"
        action={
          phase === "none"
            ? wrongNetwork && switchChain
              ? {
                  onClick: switchChain,
                  text: `Unsupported network!`,
                }
              : {
                  onClick: () => {
                    mint();
                    setPhase("minting");
                  },
                  text: `Mint (${formattedPrice})`,
                }
            : undefined
        }
        onClose={phase === "none" ? onClose : undefined}
      >
        {
          // TODO separate state for awaitingMints? We know ahead of time if there are decoratable items in bag, could skip this step if not
          phase === "minting" || phase === "awaitingMints" ? (
            <TransactionPending hash={hash} text="Minting..." />
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <h1 style={{ fontSize: FONT_SIZE["3xl"] }}>Mint NFTs</h1>

              <BagItems />

              {bag.some((b) => b.tier.category === "body") && (
                <p>
                  Heads up: after you mint, you{"'"}ll need to dress your Banny
                  in a second transaction!
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
                <Link
                  href={`https://app.revnet.eth.sucks/eth:4`}
                  target="blank"
                >
                  $BAN Revnet
                </Link>{" "}
                earning $BAN in return.
              </p>
            </div>
          )
        }
      </Modal>
    </>
  );
}
