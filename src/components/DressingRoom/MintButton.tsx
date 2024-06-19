import { COLORS } from "@/constants/colors";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useMint } from "@/hooks/writeContract/useMint";
import { formatEther } from "juice-sdk-core";
import { useContext } from "react";
import { useAccount } from "wagmi";
import Fuzz from "../pixelRenderers/Fuzz";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";

export default function MintButton() {
  const { address } = useAccount();

  const { totalEquippedPrice } = useContext(EquipmentContext);

  const { mint, isLoading, tx } = useMint();

  const isSmallScreen = useIsSmallScreen();

  const mintTxPending = isLoading || tx.status === "pending";

  if (isSmallScreen)
    return (
      <RoundedFrame>
        <ButtonPad
          disabled={mintTxPending || !address}
          style={{
            height: 80,
            padding: 1,
          }}
          fillFg={COLORS.pink}
          onClick={() => {
            mint();
          }}
        >
          {mintTxPending ? (
            <Fuzz
              width={80}
              height={32}
              fill="white"
              pixelSize={4}
              interval={500}
            />
          ) : (
            <div
              style={{
                textAlign: "center",
                fontSize: "3rem",
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
                    fontSize: "1.6rem",
                    textTransform: "uppercase",
                    color: "white",
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
            fontSize: "2rem",
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

  return (
    <RoundedFrame style={{ width: "100%", minWidth: 150 }}>
      <ButtonPad
        disabled={mintTxPending || !address}
        style={{
          height: 100,
          padding: 1,
        }}
        fillFg={COLORS.pink}
        onClick={() => {
          mint();
        }}
      >
        {mintTxPending ? (
          <Fuzz
            width={80}
            height={32}
            fill="white"
            pixelSize={4}
            interval={500}
          />
        ) : (
          <div
            style={{
              textAlign: "center",
              fontSize: "3rem",
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
                  fontSize: "1.6rem",
                  textTransform: "uppercase",
                  color: "white",
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
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          background: "#ffffff",
        }}
      >
        {totalEquippedPrice ? formatEther(totalEquippedPrice) : "--"} ETH
      </div>
    </RoundedFrame>
  );
}
