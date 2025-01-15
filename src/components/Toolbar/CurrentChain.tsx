import { COLORS } from "@/constants/colors";
import { useAccount } from "wagmi";
import { config } from "../../../config.wagmi";
import Blinker from "../shared/Blinker";

export default function CurrentChain() {
  const { address, chain } = useAccount();

  return (
    <div
      style={{
        color: COLORS.blue400,
      }}
    >
      {config.chains.map((c) => (
        <div
          key={c.id}
          style={{ color: c.id === chain?.id ? COLORS.blue400 : "black" }}
        >
          {c.name}
        </div>
      ))}

      {address && !chain && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "#f42",
            fontWeight: "bold",
          }}
        >
          <Blinker offColor={"#f42"} /> Unsupported chain
        </div>
      )}
    </div>
  );
}
