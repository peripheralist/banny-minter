import { COLORS } from "@/constants/colors";
import Link from "next/link";
import { useState } from "react";
import { useAccount, useDisconnect, useEnsName } from "wagmi";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import { WalletOptions } from "./WalletOptions";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";

export default function Wallet() {
  const [showWalletOptions, setShowWalletOptions] = useState<boolean>();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  const isSmallScreen = useIsSmallScreen();

  return (
    <div>
      {address ? (
        <RoundedFrame>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: isSmallScreen ? "1rem" : "1.4rem",
              paddingLeft: 16,
              paddingRight: 0,
              background: COLORS.pink,
            }}
          >
            <FuzzMoment
              fill="white"
              width={80}
              height={16}
              pixelSize={4}
              onFinished={
                <Link href={`/wallet/${address}`} style={{ color: "white" }}>
                  {ensName ?? <span>0x...{address.substring(38)}</span>}
                </Link>
              }
            />
            <ButtonPad
              style={{ width: 24, height: 24, zIndex: 1 }}
              onClick={() => disconnect()}
            >
              ✖️
            </ButtonPad>
          </div>
        </RoundedFrame>
      ) : showWalletOptions ? (
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <WalletOptions />
          <ButtonPad
            style={{ width: 24, height: 24 }}
            onClick={() => setShowWalletOptions(false)}
          >
            ✖️
          </ButtonPad>
        </div>
      ) : (
        <ButtonPad
          style={{
            height: isSmallScreen ? 30 : 40,
            width: 80,
            color: "white",
            fontSize: isSmallScreen ? "1.25rem" : "1.4rem",
            textTransform: "uppercase",
          }}
          fillFg={COLORS.pink}
          onClick={() => setShowWalletOptions(true)}
        >
          Connect
        </ButtonPad>
      )}
    </div>
  );
}
