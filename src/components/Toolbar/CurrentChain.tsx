import { FONT_SIZE } from "@/constants/fontSize";
import { useMemo } from "react";
import { useAccount } from "wagmi";
import Blinker from "../shared/Blinker";

export default function CurrentChain() {
  const { address, chain } = useAccount();

  const text = useMemo(() => {
    if (address && !chain)
      return (
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
      );

    if (chain) return chain.name;

    return null;
  }, [address, chain]);

  return (
    <div
      style={{
        textTransform: "uppercase",
        fontSize: FONT_SIZE.xs,
      }}
    >
      {text}
    </div>
  );
}
