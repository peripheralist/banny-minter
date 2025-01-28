import { LOOKS_REVNET_ID } from "@/constants/nfts";
import { AlertContext } from "@/contexts/alertContext";
import { ShopContext } from "@/contexts/shopContext";
import { DEFAULT_METADATA, NATIVE_TOKEN } from "juice-sdk-core";
import {
  useJBContractContext,
  usePreparePayMetadata,
  useWriteJbMultiTerminalPay,
} from "juice-sdk-react";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useAccount, useWaitForTransactionReceipt } from "wagmi";
import { useTiered721Hook } from "../readContract/useTiered721HookOf";

export function useMint(props?: { onSuccess?: VoidFunction }) {
  const [isComplete, setIsComplete] = useState(false);
  const { address: connectedWalletAddress } = useAccount();
  const { contracts } = useJBContractContext();
  const { setAlert } = useContext(AlertContext);
  const { bag, totalEquippedPrice } = useContext(ShopContext);

  const { data: jb721DataHookQueryAddress } = useTiered721Hook();
  const terminalAddress = contracts.primaryNativeTerminal.data;

  const tierIds = useMemo(
    () =>
      bag.flatMap(({ tier, quantity }) => {
        let _tierIds = [];
        for (let i = 0; i < quantity; i++) {
          _tierIds.push(BigInt(tier.tierId));
        }
        return _tierIds;
      }),
    [bag]
  );

  const metadata = usePreparePayMetadata(
    jb721DataHookQueryAddress
      ? {
          jb721Hook: {
            dataHookAddress: jb721DataHookQueryAddress,
            tierIdsToMint: tierIds,
          },
        }
      : undefined
  );

  const memo = useMemo(() => `Minted tiers ${tierIds.join(", ")}`, [tierIds]);

  const {
    writeContract,
    isPending,
    data: hash,
    error,
  } = useWriteJbMultiTerminalPay();

  const { chain } = useAccount();

  const mint = useCallback(() => {
    if (
      !tierIds.length ||
      !chain ||
      !connectedWalletAddress ||
      !terminalAddress ||
      !totalEquippedPrice
    ) {
      console.error("Missing something smh", {
        connectedWalletAddress,
        terminalAddress,
        totalEquippedPrice,
      });
      setAlert?.({ body: "Something went wrong :(" });
      return;
    }

    setIsComplete(false);

    writeContract({
      address: terminalAddress,
      args: [
        BigInt(LOOKS_REVNET_ID),
        NATIVE_TOKEN,
        totalEquippedPrice,
        connectedWalletAddress, // mint to connected wallet
        BigInt(0),
        memo,
        metadata ?? DEFAULT_METADATA,
      ],
      value: totalEquippedPrice ?? undefined,
    });
  }, [
    writeContract,
    totalEquippedPrice,
    connectedWalletAddress,
    memo,
    metadata,
    terminalAddress,
    setAlert,
    tierIds,
    chain,
  ]);

  const tx = useWaitForTransactionReceipt({
    hash,
    pollingInterval: 1000,
    retryCount: 3,
    retryDelay: 5000,
  });

  useEffect(() => {
    if (isComplete) return;

    if (error) {
      if (error.message.includes("User rejected the request")) {
        setAlert?.({ title: "Transaction rejected" });
      } else {
        setAlert?.({ title: "Error", body: error.message });
      }

      setIsComplete(true);

      return;
    }

    switch (tx.status) {
      case "success":
        // setAlert?.({
        //   title: "Minted!",
        //   action: {
        //     label: "View in your closet",
        //     href: `/closet/${connectedWalletAddress}`,
        //   },
        // });
        props?.onSuccess?.();
        setIsComplete(true);
        break;
      case "error":
        if (tx.error.name !== "TransactionReceiptNotFoundError") {
          // TODO seems silly...
          setAlert?.({ body: "Something may have gone wrong..." });
          setIsComplete(true);
        }
        break;
    }
  }, [
    tx.status,
    tx.error?.name,
    setAlert,
    connectedWalletAddress,
    error,
    props,
    isComplete,
  ]);

  return {
    mint,
    isPending: isPending || tx.isLoading,
    isSuccess: tx.isSuccess,
    hash,
  };
}
