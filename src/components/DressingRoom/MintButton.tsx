import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useMint } from "@/hooks/writeContract/useMint";
import { formatEther } from "juice-sdk-core";
import { useContext } from "react";
import { useAccount } from "wagmi";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";

export default function MintButton() {
  // TODO need to disable button until mintable outfits are equipped
  const { address } = useAccount();

  const { totalEquippedPrice } = useContext(EquipmentContext);

  const { mint, isPending } = useMint();

  const isSmallScreen = useIsSmallScreen();

  const { measuredRef, width, height } = useMeasuredRef();

  const loading = isPending ? { fill: "white", width, height } : undefined;

  if (isSmallScreen) {
    return (
      <RoundedFrame>
        <ButtonPad
          style={{ padding: 24 }}
          disabled={!address}
          loading={loading}
          fillFg={COLORS.pink}
          onClick={() => {
            mint();
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: FONT_SIZE["2xl"],
            }}
          >
            <div
              ref={measuredRef}
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
        disabled={!address}
        loading={loading}
        style={{
          minWidth: 180,
          padding: 24,
          height: "100%",
        }}
        containerStyle={{ flex: 1 }}
        fillFg={COLORS.pink}
        onClick={mint}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: FONT_SIZE["2xl"],
          }}
        >
          <div
            ref={measuredRef}
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
