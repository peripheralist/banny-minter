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
        <RoundedFrame
          background={"black"}
          containerStyle={{ marginBottom: -16, paddingBottom: 10 }}
        >
          <h4
            style={{
              color: COLORS.banana,
              fontSize: FONT_SIZE.sm,
              textAlign: "center",
            }}
          >
            WALLET
          </h4>
        </RoundedFrame>

        <RoundedFrame
          background={COLORS.bananaLite}
          style={{
            padding: 12,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ fontSize: FONT_SIZE.md }}>
            <CurrentChain />
          </div>

          <div style={{ fontSize: FONT_SIZE.sm }}>
            {ensName ?? <FormattedAddress address={address} />}
          </div>

          <ButtonPad
            onClick={() => disconnect()}
            style={{
              padding: 10,
              color: "black",
              fontSize: FONT_SIZE.xs,
            }}
            containerStyle={{ margin: -4 }}
            shadow="none"
            dimension
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
      dimension
    >
      Connect
    </ButtonPad>
  );
}
