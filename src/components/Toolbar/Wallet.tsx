import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { WalletContext } from "@/contexts/walletContext";
import { useContext } from "react";
import { useAccount, useDisconnect, useEnsName } from "wagmi";
import ButtonPad from "../shared/ButtonPad";
import FormattedAddress from "../shared/FormattedAddress";
import RoundedFrame from "../shared/RoundedFrame";
import CurrentChain from "./CurrentChain";

export default function Wallet() {
  const { connect } = useContext(WalletContext);

  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  return address ? (
    <div style={{}}>
      <div>
        <h4 style={{ margin: 0, textAlign: "center" }}>Wallet</h4>

        <RoundedFrame
          background={COLORS.bananaLite}
          style={{
            padding: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 8,
            width: "100%",
            fontSize: FONT_SIZE.sm,
          }}
        >
          <CurrentChain />

          <div style={{ fontWeight: "bold" }}>
            {ensName ?? <FormattedAddress address={address} />}
          </div>

          <ButtonPad
            onClick={() => disconnect()}
            style={{
              padding: 10,
              color: "black",
            }}
            shadow="sm"
          >
            Disconnect
          </ButtonPad>
        </RoundedFrame>
      </div>
    </div>
  ) : (
    <ButtonPad
      style={{
        color: "white",
        textTransform: "uppercase",
        padding: 12,
      }}
      shadow="sm"
      fillFg={COLORS.pink}
      onClick={connect}
    >
      Connect
    </ButtonPad>
  );
}
