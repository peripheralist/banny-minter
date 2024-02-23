import { COLORS } from "@/constants/colors";
import { useState } from "react";
import { useAccount, useDisconnect, useEnsName } from "wagmi";
import { WalletOptions } from "./WalletOptions";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import Link from "next/link";

export default function Wallet() {
  const [showWalletOptions, setShowWalletOptions] = useState<boolean>();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  return (
    <div>
      {address ? (
        <RoundedFrame>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: "1.4rem",
              padding: 12,
              background: COLORS.pink,
            }}
          >
            <Link href={`/wallet/${address}`} style={{ color: "white" }}>
              {ensName ?? <span>0x...{address.substring(38)}</span>}
            </Link>
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
            height: 40,
            width: 120,
            color: "white",
            fontSize: "1.8rem",
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
