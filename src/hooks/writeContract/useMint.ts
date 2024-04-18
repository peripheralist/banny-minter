import { BANNYVERSE_PROJECT_ID, CATEGORIES } from "@/constants/nfts";
import { MinterContext } from "@/contexts/minterContext";
import { DEFAULT_METADATA, NATIVE_TOKEN } from "juice-sdk-core";
import {
  useFind721DataHook,
  useJBContractContext,
  useJbMultiTerminalPay,
  usePreparePayMetadata,
} from "juice-sdk-react";
import { useContext, useMemo } from "react";
import { zeroAddress } from "viem";
import { useAccount, useWaitForTransaction } from "wagmi";

export function useMint() {
  const { address } = useAccount();
  const { contracts } = useJBContractContext();
  const jb721DataHookQuery = useFind721DataHook();

  const { equipped, totalEquippedPrice } = useContext(MinterContext);

  const tierIds = useMemo(
    () =>
      CATEGORIES.filter((c) => !!equipped[c]).map((c) =>
        BigInt(equipped[c]!.tierId)
      ),
    [equipped]
  );

  const metadata = usePreparePayMetadata({
    jb721Hook: {
      dataHookAddress: jb721DataHookQuery.data ?? zeroAddress,
      tierIdsToMint: tierIds,
    },
  });

  const memo = useMemo(() => `Minted tiers ${tierIds.join(", ")}`, [tierIds]);

  const { write, isLoading, data } = useJbMultiTerminalPay({
    address: contracts.primaryNativeTerminal?.data ?? undefined,
    args:
      address && totalEquippedPrice
        ? [
            BigInt(BANNYVERSE_PROJECT_ID),
            NATIVE_TOKEN,
            totalEquippedPrice,
            address, // mint to connected wallet
            BigInt(0),
            memo,
            metadata ?? DEFAULT_METADATA,
          ]
        : undefined,
    value: totalEquippedPrice ?? undefined,
  });

  const tx = useWaitForTransaction({
    hash: data?.hash,
  });

  return { mint: write, isLoading, tx, data };
}
