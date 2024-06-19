import { BANNYVERSE_PROJECT_ID, CATEGORIES } from "@/constants/nfts";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { DEFAULT_METADATA, NATIVE_TOKEN } from "juice-sdk-core";
import {
  useFind721DataHook,
  usePreparePayMetadata,
  useWriteJbMultiTerminalPay,
} from "juice-sdk-react";
import { useCallback, useContext, useMemo } from "react";
import { useAccount, useWaitForTransactionReceipt } from "wagmi";

export function useMint() {
  const { address } = useAccount();
  const jb721DataHookQuery = useFind721DataHook();

  const { equipped, totalEquippedPrice } = useContext(EquipmentContext);

  const jb721DataHookQueryAddress = jb721DataHookQuery.data as `0x${string}`;

  const tierIds = useMemo(
    () =>
      CATEGORIES.filter((c) => !!equipped[c]).map((c) =>
        BigInt(equipped[c]!.tierId)
      ),
    [equipped]
  );

  const metadata = usePreparePayMetadata({
    jb721Hook: {
      dataHookAddress: jb721DataHookQueryAddress,
      tierIdsToMint: tierIds,
    },
  });

  const memo = useMemo(() => `Minted tiers ${tierIds.join(", ")}`, [tierIds]);

  const { writeContract, isPending, data } = useWriteJbMultiTerminalPay();

  const pay = useCallback(() => {
    if (!address || !totalEquippedPrice) return;

    writeContract({
      address: jb721DataHookQueryAddress,
      args: [
        BigInt(BANNYVERSE_PROJECT_ID),
        NATIVE_TOKEN,
        totalEquippedPrice,
        address, // mint to connected wallet
        BigInt(0),
        memo,
        metadata ?? DEFAULT_METADATA,
      ],
      value: totalEquippedPrice ?? undefined,
    });
  }, [
    writeContract,
    totalEquippedPrice,
    address,
    memo,
    metadata,
    jb721DataHookQueryAddress,
  ]);

  const tx = useWaitForTransactionReceipt({
    hash: data,
  });

  return { mint: pay, isLoading: isPending, tx };
}
