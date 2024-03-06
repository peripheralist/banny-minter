import { usePreparePayMetadata } from "@/constants/delegate";
import { BANNYVERSE } from "@/constants/projectId";
import { NATIVE_TOKEN } from "juice-sdk-core";
import {
  useJBContractContext,
  useJBDataHookContext,
  useJbMultiTerminalPay,
} from "juice-sdk-react";
import { useMemo } from "react";
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

  const dataHookContext = useJBDataHookContext();

  const metadata = usePreparePayMetadata({
    jb721Delegate: {
      tierIdsToMint: tierIds,
      address: dataHookContext.data?.address,
    },
  });

  const memo = useMemo(() => `Minted tiers ${tierIds.join(", ")}`, [tierIds]);

  const { write, isLoading, data } = useJbMultiTerminalPay({
    address: primaryNativeTerminal?.data,
    args: address
      ? [
          BANNYVERSE,
          NATIVE_TOKEN,
          amount,
          address, // mint to connected wallet
          BigInt(0),
          memo,
          metadata,
        ]
      : undefined,
    value: amount,
  });

  const tx = useWaitForTransactionReceipt({
    hash: data?.hash,
  });

  return { mint: write, isLoading, tx, data };
}
