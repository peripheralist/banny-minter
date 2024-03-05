import { usePreparePayMetadata } from "@/constants/delegate";
import { BANNYVERSE } from "@/constants/projectId";
import { NATIVE_TOKEN } from "juice-sdk-core";
import { useJBContractContext, useJbMultiTerminalPay } from "juice-sdk-react";
import { useAccount, useWaitForTransactionReceipt } from "wagmi";

export function useMint({
  amount,
  tierIds,
}: {
  amount: bigint;
  tierIds: bigint[];
}) {
  const { address } = useAccount();
  const {
    contracts: { primaryNativeTerminal },
  } = useJBContractContext();

  const metadata = usePreparePayMetadata({
    jb721Delegate: { tierIdsToMint: tierIds },
  });

  const { write, isLoading, data } = useJbMultiTerminalPay({
    address: primaryNativeTerminal?.data,
    args: address
      ? [
          BANNYVERSE,
          NATIVE_TOKEN,
          amount,
          address, // mint to connected wallet
          BigInt(0),
          `Minted`, // memo
          "0x0",
        ]
      : undefined,
    value: amount,
  });

  const tx = useWaitForTransactionReceipt({
    hash: data?.hash,
  });

  return { mint: write, isLoading, tx, data };
}
