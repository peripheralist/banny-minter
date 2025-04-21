import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { WalletContext } from "@/contexts/walletContext";
import { formatEther } from "juice-sdk-core";
import { useContext, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { ConfirmMintModal } from "../modals/ConfirmMintModal";
import ButtonPad from "./ButtonPad";
import RoundedFrame from "./RoundedFrame";
import { usePayerTokens } from "@/hooks/usePayerTokens";

export default function MintButton() {
  const [isConfirming, setIsConfirming] = useState(false);

  const { address } = useAccount();

  const { connect } = useContext(WalletContext);
  const { totalEquippedPrice, bag } = useContext(ShopContext);

  const formattedPrice = useMemo(
    () => `${totalEquippedPrice ? formatEther(totalEquippedPrice) : "--"} ETH`,
    [totalEquippedPrice]
  );

  const { formatted: formattedPayerTokens } =
    usePayerTokens(totalEquippedPrice);

  return (
    <>
      <RoundedFrame background={"white"}>
        <div
          style={{
            textAlign: "center",
            fontSize: FONT_SIZE.xs,
            color: COLORS.pink,
            margin: 8,
            marginBottom: 4,
          }}
        >
          RECEIVE {formattedPayerTokens} $BAN
        </div>

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

        <ConfirmMintModal
          open={isConfirming}
          onClose={() => setIsConfirming(false)}
        />
      </RoundedFrame>
    </>
  );
}
