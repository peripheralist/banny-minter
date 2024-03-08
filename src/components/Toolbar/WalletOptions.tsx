import { sepolia, useConnect } from "wagmi";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import ButtonPad from "../shared/ButtonPad";
import { InjectedConnector } from "wagmi/connectors/injected";

export function WalletOptions() {
  const { connectors, connect } = useConnect({
    connector: new InjectedConnector({
      chains: [sepolia],
    }),
  });

  return connectors.map((connector) => (
    <ButtonPad key={connector.id} onClick={() => connect({ connector })}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: 8,
        }}
      >
        <FuzzMoment
          height={16}
          width={80}
          fill="black"
          onFinished={<span>{connector.name}</span>}
          pixelSize={4}
        />
      </div>
    </ButtonPad>
  ));
}
