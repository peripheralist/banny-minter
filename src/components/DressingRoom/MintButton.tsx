import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useMint } from "@/hooks/writeContract/useMint";
import { formatEther } from "juice-sdk-core";
import { useContext } from "react";
import { useAccount } from "wagmi";
import ButtonPad from "../shared/ButtonPad";

export default function MintButton() {
  // TODO need to disable button until mintable outfits are equipped
  const { address } = useAccount();

  const { totalEquippedPrice } = useContext(ShopContext);

  const { mint, isPending } = useMint();

  const { measuredRef, width, height } = useMeasuredRef();

  const loading = isPending ? { fill: "white", width, height } : undefined;

  const noMintableItems =
    !totalEquippedPrice || totalEquippedPrice == BigInt(0);

  return (
    <ButtonPad
      disabled={!address || noMintableItems}
      loading={loading}
      style={{ padding: 12 }}
      fillFg={COLORS.pink}
      onClick={mint}
    >
      <div style={{ width: "100%" }} ref={measuredRef}>
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
  );
}
