import { FONT_SIZE } from "@/constants/fontSize";
import { useChain } from "@/hooks/useChain";
import React, { useMemo } from "react";
import { useAccount } from "wagmi";

export default function CurrentChain() {
  const { address, chain } = useAccount();

  const text = useMemo(() => {
    if (address && !chain) return "Unsupported chain";

    if (chain) return chain.name;

    return null;
  }, [address, chain]);

  return (
    <div style={{ textTransform: "uppercase", fontSize: FONT_SIZE.sm }}>
      {text}
    </div>
  );
}
