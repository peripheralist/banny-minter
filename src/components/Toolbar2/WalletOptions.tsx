import { useConnect } from "wagmi";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import ButtonPad from "../shared/ButtonPad";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <ButtonPad
      key={connector.id}
      style={{ height: 32, padding: "0px 8px" }}
      shadow="sm"
      onClick={() => connect({ connector })}
    >
      <div style={{}}>
        <FuzzMoment
          height={16}
          width={68}
          onFinished={<span>{connector.name}</span>}
        />
      </div>
    </ButtonPad>
  ));
}
