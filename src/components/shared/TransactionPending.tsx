import { FONT_SIZE } from "@/constants/fontSize";
import Link from "next/link";
import { Address } from "viem";
import Loading from "./Loading";
import { useAppChain } from "@/hooks/useAppChain";

export default function TransactionPending({
  text,
  hash,
}: {
  text?: string;
  hash: Address | undefined;
}) {
  const appChain = useAppChain();

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
      <div style={{ width: 200, height: 200 * (80 / 136), margin: "0 auto" }}>
        <Loading />
      </div>

      <div>{text ?? "Working..."}</div>

      {hash && (
        <Link
          target="blank"
          href={appChain.blockExplorers.default.url + `/tx/${hash}`}
          style={{ fontSize: FONT_SIZE.sm }}
        >
          View transaction
        </Link>
      )}
    </div>
  );
}
