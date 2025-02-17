import { BAN_HOOK, BAN_REVNET_ID, TERMINAL_ADDRESS } from "@/constants/nfts";
import { AlertContext } from "@/contexts/alertContext";
import { ShopContext } from "@/contexts/shopContext";
import { NATIVE_TOKEN } from "juice-sdk-core";
import {
  usePreparePayMetadata,
  useWriteJbMultiTerminalPay,
} from "juice-sdk-react";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useAccount, useWaitForTransactionReceipt } from "wagmi";

export function useMint(props?: { onSuccess?: VoidFunction }) {
  const [isComplete, setIsComplete] = useState(false);
  const { address: connectedWalletAddress } = useAccount();
  const { setAlert } = useContext(AlertContext);
  const { bag, totalEquippedPrice } = useContext(ShopContext);

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

  const metadata = usePreparePayMetadata({
    jb721Hook: {
      dataHookAddress: BAN_HOOK,
      tierIdsToMint: tierIds,
    },
  });

  const memo = useMemo(() => `Minted tiers ${tierIds.join(", ")}`, [tierIds]);

  const {
    writeContract,
    isPending,
    data: hash,
    error,
  } = useWriteJbMultiTerminalPay();

  const { chain } = useAccount();

  console.log("Mint using params:", {
    chain,
    revnetId: BAN_REVNET_ID,
    value: totalEquippedPrice,
    wallet: connectedWalletAddress,
    hook: BAN_HOOK,
    tierIds,
    memo,
    metadata,
  });

  const mint = useCallback(() => {
    if (!chain || !connectedWalletAddress || !totalEquippedPrice || !metadata) {
      console.error("Missing something smh", {
        chain,
        connectedWalletAddress,
        totalEquippedPrice,
        metadata,
      });
      setAlert?.({ body: "Something went wrong :(" });
      return;
    }

    setIsComplete(false);

    writeContract({
      address: TERMINAL_ADDRESS,
      args: [
        BigInt(BAN_REVNET_ID),
        NATIVE_TOKEN,
        totalEquippedPrice,
        connectedWalletAddress, // mint to connected wallet
        BigInt(0),
        memo,
        metadata,
      ],
      value: totalEquippedPrice ?? undefined,
    });
  }, [
    chain,
    connectedWalletAddress,
    totalEquippedPrice,
    metadata,
    setAlert,
    writeContract,
    memo,
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
          setAlert?.({
            title: "Error :(",
            body: "Transaction may have failed...",
            action: {
              label: "View transaction",
              href: chain?.blockExplorers?.default.url + `/tx/${hash}`,
              blank: true,
            },
          });
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
    chain?.blockExplorers?.default.url,
    hash,
  ]);

  return {
    mint,
    isPending: isPending || tx.isLoading,
    isSuccess: tx.isSuccess,
    hash,
  };
}
