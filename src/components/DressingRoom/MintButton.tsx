import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { WalletContext } from "@/contexts/walletContext";
import { useMint } from "@/hooks/writeContract/useMint";
import { formatEther } from "juice-sdk-core";
import { useCallback, useContext, useState } from "react";
import { useAccount } from "wagmi";
import BagItems from "../shared/BagItems";
import ButtonPad from "../shared/ButtonPad";
import Modal from "../shared/Modal";
import Link from "next/link";
import { EquipmentContext } from "@/contexts/equipmentContext";

export default function MintButton() {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { address } = useAccount();
  const { connect } = useContext(WalletContext);
  const { totalEquippedPrice, emptyBag } = useContext(ShopContext);
  const { unequipAll } = useContext(EquipmentContext);

  const { mint, isPending } = useMint({
    onSuccess: () => {
      setIsConfirming(false);
      setIsSuccess(true);
    },
  });

  const noMintableItems =
    !totalEquippedPrice || totalEquippedPrice == BigInt(0);

  const ConfirmCheckoutModal = useCallback(() => {
    if (!totalEquippedPrice) return null;

    return (
      <Modal open={isConfirming} onClose={() => setIsConfirming(false)}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1 style={{ margin: 0 }}>Mint NFTs</h1>

          <BagItems />

          <p>
            By minting Looks NFTs, you{"'"}re paying the on-chain{" "}
            <Link href={"https://revnet.eth.sucks/memo/"}>Looks Revnet</Link>{" "}
            treasury and earning $BAN in return.
          </p>

          <div>$BAN earned by this payment: 69420</div>

          {isPending ? (
            "Transaction pending..."
          ) : (
            <ButtonPad
              onClick={mint}
              fillFg={COLORS.pink}
              style={{
                padding: "12px 16px",
                color: "white",
                fontSize: FONT_SIZE.lg,
              }}
            >
              Mint ({formatEther(totalEquippedPrice)} ETH)
            </ButtonPad>
          )}
        </div>
      </Modal>
    );
  }, [isPending, isConfirming, totalEquippedPrice, mint]);

  const SucccessModal = useCallback(() => {
    return (
      <Modal
        open={isSuccess}
        onClose={() => {
          emptyBag?.();
          unequipAll?.();
          setIsSuccess(false);
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1 style={{ margin: 0 }}>Minted!</h1>

          <BagItems />

          <div>
            View items in your <Link href={`/closet/${address}`}>closet</Link>.
          </div>
        </div>
      </Modal>
    );
  }, [emptyBag, unequipAll, isSuccess, address]);

  return (
    <>
      <ButtonPad
        disabled={noMintableItems}
        style={{ padding: 12 }}
        fillFg={COLORS.pink}
        onClick={address ? () => setIsConfirming(true) : connect}
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

            <div>
              {totalEquippedPrice ? formatEther(totalEquippedPrice) : "--"} ETH
            </div>
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
