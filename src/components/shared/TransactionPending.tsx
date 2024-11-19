import React from "react";
import Loading from "./Loading";
import Link from "next/link";
import { useChain } from "juice-sdk-react";
import { FONT_SIZE } from "@/constants/fontSize";

export default function TransactionPending({
  text,
  hash,
}: {
  text?: string;
  hash: `0x${string}` | undefined;
}) {
  const chain = useChain();

  return (
    <div
      style={{
        textAlign: "center",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <div style={{ width: 200, height: 200 * (80 / 138), margin: "0 auto" }}>
        <Loading />
      </div>

      <div>{text ?? "Working..."}</div>

      {chain && hash && (
        <Link
          target="blank"
          href={`https://${
            chain.name !== "mainnet" ? `${chain.name}.` : ""
          }etherscan.io/tx/${hash}`}
          style={{ fontSize: FONT_SIZE.sm }}
        >
          View transaction
        </Link>
      )}
    </div>
  );
}
