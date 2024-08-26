import { COLORS } from "@/constants/colors";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import { useMint } from "@/hooks/writeContract/useMint";
import { formatEther } from "juice-sdk-core";
import { useContext } from "react";
import { useAccount } from "wagmi";
import Fuzz from "../pixelRenderers/Fuzz";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import { FONT_SIZE } from "@/constants/fontSize";

export default function MintButton() {
  const { address } = useAccount();

  const { totalEquippedPrice } = useContext(EquipmentContext);

  const { mint, isPending } = useMint();

  const isSmallScreen = useIsSmallScreen();

  const mintTxPending = isPending;

  if (isSmallScreen) {
    return (
      <RoundedFrame>
        <ButtonPad
          style={{
            padding: 20,
          }}
          disabled={mintTxPending || !address}
          fillFg={COLORS.pink}
          onClick={() => {
            mint();
          }}
        >
          {mintTxPending ? (
            <Fuzz width={80} height={32} fill="white" interval={500} />
          ) : (
            <div
              style={{
                textAlign: "center",
                fontSize: FONT_SIZE["2xl"],
              }}
            >
              <div
                style={{
                  opacity: address ? 1 : 0.25,
                  color: address ? "white" : "black",
                }}
              >
                Mint
              </div>

              {!address && (
                <div
                  style={{
                    textTransform: "uppercase",
                    color: "white",
                    fontSize: FONT_SIZE.md,
                  }}
                >
                  No wallet
                </div>
              )}
            </div>
          )}
        </ButtonPad>

        <div
          style={{
            padding: 8,
            textAlign: "center",
            fontWeight: "bold",
            background: "#ffffff",
          }}
        >
          {totalEquippedPrice
            ? formatEther(totalEquippedPrice).substring(0, 6)
            : "--"}{" "}
          ETH
        </div>
      </RoundedFrame>
    );
  }

  return (
    <RoundedFrame
      background="white"
      style={{
        padding: "0px 0px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <ButtonPad
        disabled={mintTxPending || !address}
        style={{
          width: 180,
          padding: 24,
          height: "100%",
        }}
        containerStyle={{ flex: 1 }}
        fillFg={COLORS.pink}
        onClick={mint}
      >
        {mintTxPending ? (
          <Fuzz width={80} height={32} fill="white" interval={500} />
        ) : (
          <div
            style={{
              textAlign: "center",
              fontSize: FONT_SIZE["2xl"],
            }}
          >
            <div
              style={{
                opacity: address ? 1 : 0.25,
                color: address ? "white" : "black",
              }}
            >
              Mint
            </div>
            {!address && (
              <div
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  fontSize: FONT_SIZE.lg,
                }}
              >
                No wallet
              </div>
            )}
          </div>
        )}
      </ButtonPad>

      <div
        style={{
          padding: 12,
          paddingTop: 16,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {totalEquippedPrice ? formatEther(totalEquippedPrice) : "--"} ETH
      </div>
    </RoundedFrame>
  );
}
