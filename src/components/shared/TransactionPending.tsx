import { FONT_SIZE } from "@/constants/fontSize";
import { useChain } from "juice-sdk-react";
import Link from "next/link";
import { Address } from "viem";
import Loading from "./Loading";

export default function TransactionPending({
  text,
  hash,
}: {
  text?: string;
  hash: Address | undefined;
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
          href={chain.blockExplorers?.default.url + `/tx/${hash}`}
          style={{ fontSize: FONT_SIZE.sm }}
        >
          View transaction
        </Link>
      )}
    </div>
  );
}
