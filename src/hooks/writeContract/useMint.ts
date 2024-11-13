import { BANNYVERSE_PROJECT_ID } from "@/constants/nfts";
import { AlertContext } from "@/contexts/alertContext";
import { ShopContext } from "@/contexts/shopContext";
import { DEFAULT_METADATA, NATIVE_TOKEN } from "juice-sdk-core";
import {
  useJBContractContext,
  usePreparePayMetadata,
  useWriteJbMultiTerminalPay,
} from "juice-sdk-react";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { useAccount, useTransactionReceipt } from "wagmi";
import { useTiered721HookOf } from "../readContract/useTiered721HookOf";

export function useMint(props?: { onSuccess?: VoidFunction }) {
  const { address: connectedWalletAddress } = useAccount();
  const { contracts } = useJBContractContext();
  const { setAlert } = useContext(AlertContext);
  const { bag, totalEquippedPrice } = useContext(ShopContext);

  const { data: jb721DataHookQueryAddress } = useTiered721HookOf(
    parseInt(BANNYVERSE_PROJECT_ID)
  );
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

  const mint = useCallback(() => {
    if (!tierIds.length) return;

    if (!connectedWalletAddress || !terminalAddress || !totalEquippedPrice) {
      console.error("Missing something smh", {
        connectedWalletAddress,
        terminalAddress,
        totalEquippedPrice,
      });
      setAlert?.({ body: "Something went wrong :(" });
      return;
    }

    writeContract(
      {
        address: terminalAddress,
        args: [
          BigInt(BANNYVERSE_PROJECT_ID),
          NATIVE_TOKEN,
          totalEquippedPrice,
          connectedWalletAddress, // mint to connected wallet
          BigInt(0),
          memo,
          metadata ?? DEFAULT_METADATA,
        ],
        value: totalEquippedPrice ?? undefined,
      },
      {
        onSuccess: props?.onSuccess,
      }
    );
  }, [
    writeContract,
    totalEquippedPrice,
    connectedWalletAddress,
    memo,
    metadata,
    terminalAddress,
    setAlert,
    tierIds,
    props,
  ]);

  const tx = useTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (error) {
      if (error.message.includes("User rejected the request")) {
        setAlert?.({ title: "Transaction rejected" });
      } else {
        setAlert?.({ title: "Error", body: error.message });
      }

      return;
    }

    switch (tx.status) {
      case "success":
        setAlert?.({
          title: "Minted!",
          action: {
            label: "View in your closet",
            href: `/closet/${connectedWalletAddress}`,
          },
        });
        break;
      case "error":
        if (tx.error.name !== "TransactionReceiptNotFoundError") {
          // TODO seems silly...
          setAlert?.({ body: "Something may have gone wrong..." });
        }
        break;
    }
  }, [tx.status, tx.error?.name, setAlert, connectedWalletAddress, error]);

  return { mint, isPending: isPending || tx.isLoading };
}
