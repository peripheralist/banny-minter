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
    <div>
      <div>
        <h4 style={{ textAlign: "center" }}>Wallet</h4>

        <RoundedFrame
          background={COLORS.bananaLite}
          style={{
            padding: 12,
            width: "100%",
            fontSize: FONT_SIZE.xs,
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: 8 }}>
            {ensName ?? <FormattedAddress address={address} />}
          </div>

          <CurrentChain />

          <ButtonPad
            onClick={() => disconnect()}
            style={{
              padding: 10,
              color: "black",
              fontSize: FONT_SIZE.xs,
            }}
            containerStyle={{ margin: -4, marginTop: 8 }}
            shadow="none"
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
