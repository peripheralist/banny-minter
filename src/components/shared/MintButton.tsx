import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { WalletContext } from "@/contexts/walletContext";
import { formatEther } from "juice-sdk-core";
import { useContext, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { ConfirmMintModal } from "../modals/ConfirmMintModal";
import ButtonPad from "./ButtonPad";

export default function MintButton() {
  const [isConfirming, setIsConfirming] = useState(false);

  const { address } = useAccount();

  const { connect } = useContext(WalletContext);
  const { totalEquippedPrice, bag } = useContext(ShopContext);

  const formattedPrice = useMemo(
    () => `${totalEquippedPrice ? formatEther(totalEquippedPrice) : "--"} ETH`,
    [totalEquippedPrice]
  );

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

      {isConfirming && (
        <ConfirmMintModal onClose={() => setIsConfirming(false)} />
      )}
    </>
  );
}
