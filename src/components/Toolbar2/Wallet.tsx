import { COLORS } from "@/constants/colors";
import Link from "next/link";
import { useState } from "react";
import { useAccount, useDisconnect, useEnsName } from "wagmi";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import { WalletOptions } from "./WalletOptions";

export default function Wallet() {
  const [showWalletOptions, setShowWalletOptions] = useState<boolean>();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  return (
    <div>
      {address ? (
        <RoundedFrame background={COLORS.pink}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              paddingLeft: 16,
            }}
          >
            <FuzzMoment
              fill="white"
              width={80}
              height={16}
              onFinished={
                <Link href={`/closet/${address}`} style={{ color: "white" }}>
                  {ensName ?? <span>0x...{address.substring(38)}</span>}
                </Link>
              }
            />
            <ButtonPad
              shadow="none"
              containerStyle={{ margin: -4 }}
              style={{ width: 32, height: 32 }}
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
            shadow="sm"
            style={{ width: 32, height: 32 }}
            onClick={() => setShowWalletOptions(false)}
          >
            ✖️
          </ButtonPad>
        </div>
      ) : (
        <ButtonPad
          style={{
            color: "white",
            textTransform: "uppercase",
            height: 32,
            padding: "0px 16px",
          }}
          shadow="sm"
          fillFg={COLORS.pink}
          onClick={() => setShowWalletOptions(true)}
        >
          Connect
        </ButtonPad>
      )}
    </div>
  );
}
