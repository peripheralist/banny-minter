import { useConnect } from "wagmi";
import ButtonPad from "./shared/ButtonPad";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <ButtonPad key={connector.uid} onClick={() => connect({ connector })}>
      <div style={{ padding: 8 }}>{connector.name}</div>
    </ButtonPad>
  ));
}
