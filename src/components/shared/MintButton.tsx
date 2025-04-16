import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { ShopContext } from "@/contexts/shopContext";
import { WalletContext } from "@/contexts/walletContext";
import { useAppChain } from "@/hooks/useAppChain";
import { useMint } from "@/hooks/writeContract/useMint";
import { FixedInt } from "fpnum";
import { formatEther, getTokenAToBQuote } from "juice-sdk-core";
import { useJBRuleset, useJBRulesetMetadata } from "juice-sdk-react";
import Link from "next/link";
import { useCallback, useContext, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import BagItems from "./BagItems";
import ButtonPad from "./ButtonPad";
import FormattedAddress from "./FormattedAddress";
import Modal from "./Modal";
import RoundedFrame from "./RoundedFrame";
import TransactionPending from "./TransactionPending";

export default function MintButton() {
  const [isConfirming, setIsConfirming] = useState(false);

  const appChain = useAppChain();

  const { address } = useAccount();
  const { connect, wrongNetwork, switchChain } = useContext(WalletContext);
  const { totalEquippedPrice, emptyBag, bag } = useContext(ShopContext);
  const { unequipAll } = useContext(EquipmentContext);

  const { mint, isPending, isSuccess, hash } = useMint({
    onSuccess: () => {
      setIsConfirming(false);
    },
  });

  const ruleset = useJBRuleset();
  const rulesetMetadata = useJBRulesetMetadata();

  const formattedPayerTokens = useMemo(() => {
    if (!totalEquippedPrice || !ruleset.data || !rulesetMetadata.data) {
      return "--";
    }

    const { weight } = ruleset.data;

    const { reservedPercent } = rulesetMetadata.data;

    const tokenAAmt = new FixedInt(BigInt(totalEquippedPrice), 18);

    const { payerTokens } = getTokenAToBQuote(tokenAAmt, {
      weight,
      reservedPercent,
    });

    return new FixedInt(payerTokens, 18).format(18);
  }, [ruleset, rulesetMetadata, totalEquippedPrice]);

  const formattedPrice = useMemo(
    () => `${totalEquippedPrice ? formatEther(totalEquippedPrice) : "--"} ETH`,
    [totalEquippedPrice]
  );

  const ConfirmCheckoutModal = useCallback(() => {
    if (!totalEquippedPrice) return null;

    return (
      <Modal
        id="confirmCheckout"
        open={isConfirming}
        onClose={() => setIsConfirming(false)}
        size="sm"
        action={
          isPending
            ? undefined
            : wrongNetwork && switchChain
            ? {
                onClick: switchChain,
                text: `Unsupported network!`,
              }
            : {
                onClick: mint,
                text: `Mint (${formatEther(totalEquippedPrice)} ETH)`,
              }
        }
      >
        {isPending ? (
          <TransactionPending hash={hash} text="Minting..." />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <h1 style={{ fontSize: FONT_SIZE["3xl"] }}>Mint NFTs</h1>

            <BagItems />

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
    );
  }, [
    switchChain,
    wrongNetwork,
    isPending,
    isConfirming,
    totalEquippedPrice,
    mint,
    hash,
    formattedPayerTokens,
    formattedPrice,
    appChain,
    address,
  ]);

  const SucccessModal = useCallback(() => {
    if (!isSuccess) return null;

    const onClose = () => {
      emptyBag?.();
      unequipAll?.();
    };

    return (
      <Modal open onClose={onClose}>
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
  }, [emptyBag, unequipAll, isSuccess, address]);

  return (
    <>
      <ButtonPad
        disabled={!bag.length}
        style={{ padding: 12 }}
        fillFg={COLORS.pink}
        onClick={address ? () => setIsConfirming(true) : connect}
        shadow="sm"
        dimension
      >
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              width: "100%",
              gap: 8,
              fontSize: FONT_SIZE.lg,
              opacity: address ? 1 : 0.4,
              color: address ? "white" : "black",
            }}
          >
            <div>Checkout</div>

            <div>{formattedPrice}</div>
          </div>

          {!address && (
            <div
              style={{
                textTransform: "uppercase",
                color: "white",
              }}
            >
              Connect wallet
            </div>
          )}
        </div>
      </ButtonPad>

      <ConfirmCheckoutModal />
      <SucccessModal />
    </>
  );
}
