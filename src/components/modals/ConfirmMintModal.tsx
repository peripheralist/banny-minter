import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { WalletContext } from "@/contexts/walletContext";
import { useAppChain } from "@/hooks/useAppChain";
import { useMint } from "@/hooks/writeContract/useMint";
import { FixedInt } from "fpnum";
import { getTokenAToBQuote } from "juice-sdk-core";
import { useJBRuleset, useJBRulesetMetadata } from "juice-sdk-react";
import Link from "next/link";
import { useContext, useMemo } from "react";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import BagItems from "../shared/BagItems";
import ButtonPad from "../shared/ButtonPad";
import FormattedAddress from "../shared/FormattedAddress";
import Modal from "../shared/Modal";
import RoundedFrame from "../shared/RoundedFrame";
import TransactionPending from "../shared/TransactionPending";
import { MintSuccessModal } from "./MintSuccessModal";

export function ConfirmMintModal({ onClose }: { onClose?: VoidFunction }) {
  const appChain = useAppChain();

  const { address } = useAccount();

  const { wrongNetwork, switchChain } = useContext(WalletContext);

  const { totalEquippedPrice } = useContext(ShopContext);

  const { mint, isPending, isSuccess, hash } = useMint();

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

  if (isSuccess && hash) {
    return <MintSuccessModal txHash={hash} />;
  }

  return (
    <Modal
      id="confirm-mint"
      open
      onClose={onClose}
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
              text: `Mint (${formattedPrice})`,
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
}
