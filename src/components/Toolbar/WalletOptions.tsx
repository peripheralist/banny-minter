import { useConnect } from "wagmi";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import ButtonPad from "../shared/ButtonPad";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <ButtonPad
      style={{ height: 32, marginBottom: 10 }}
      key={connector.id}
      onClick={() => connect({ connector })}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: 8,
          fontSize: "1.3rem",
        }}
      >
        <FuzzMoment
          height={16}
          width={68}
          onFinished={<span>{connector.name}</span>}
        />
      </div>
    </ButtonPad>
  ));
}
