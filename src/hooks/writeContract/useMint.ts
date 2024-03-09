import { BANNYVERSE_PROJECT_ID } from "@/constants/projectId";
import { DEFAULT_METADATA, NATIVE_TOKEN } from "juice-sdk-core";
import {
  useJBContractContext,
  useJbMultiTerminalPay,
  usePreparePayMetadata,
} from "juice-sdk-react";
import { useMemo } from "react";
import { useAccount, useWaitForTransaction } from "wagmi";

export function useMint({
  amount,
  tierIds,
}: {
  amount: bigint | null | undefined;
  tierIds: bigint[];
}) {
  const { address } = useAccount();
  const { contracts } = useJBContractContext();

  const metadata = usePreparePayMetadata({
    jb721Hook: {
      tierIdsToMint: tierIds,
    },
  });

  const memo = useMemo(() => `Minted tiers ${tierIds.join(", ")}`, [tierIds]);

  const { write, isLoading, data } = useJbMultiTerminalPay({
    address: contracts.primaryNativeTerminal?.data ?? undefined,
    args:
      address && amount
        ? [
            BigInt(BANNYVERSE_PROJECT_ID),
            NATIVE_TOKEN,
            amount,
            address, // mint to connected wallet
            BigInt(0),
            memo,
            metadata ?? DEFAULT_METADATA,
          ]
        : undefined,
    value: amount ?? undefined,
  });

  const tx = useWaitForTransaction({
    hash: data?.hash,
  });

  return { mint: write, isLoading, tx, data };
}
