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

export default function MintButton() {
  const [isConfirming, setIsConfirming] = useState(false);

  const { address } = useAccount();
  const { connect } = useContext(WalletContext);
  const { totalEquippedPrice, emptyBag } = useContext(ShopContext);

  const { mint, isPending } = useMint({
    onSuccess: () => {
      setIsConfirming(false);
      emptyBag?.();
    },
  });

  const noMintableItems =
    !totalEquippedPrice || totalEquippedPrice == BigInt(0);

  const ConfirmCheckoutModal = useCallback(() => {
    if (!totalEquippedPrice) return null;

    return (
      <Modal open={isConfirming}>
        <h1>Mint items for {formatEther(totalEquippedPrice)}?</h1>

        <BagItems />

        {isPending ? (
          <ButtonPad onClick={mint}>Mint</ButtonPad>
        ) : (
          "Transaction pending"
        )}
      </Modal>
    );
  }, [isPending, isConfirming, totalEquippedPrice, mint]);

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
    </>
  );
}
