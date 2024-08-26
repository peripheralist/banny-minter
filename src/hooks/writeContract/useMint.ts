import { BANNYVERSE_PROJECT_ID, CATEGORIES } from "@/constants/nfts";
import { AlertContext } from "@/contexts/alertContext";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { DEFAULT_METADATA, NATIVE_TOKEN } from "juice-sdk-core";
import {
  useFind721DataHook,
  useJBContractContext,
  usePreparePayMetadata,
  useWriteJbMultiTerminalPay,
} from "juice-sdk-react";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { useAccount, useTransactionReceipt } from "wagmi";

export function useMint() {
  const { address: connectedWalletAddress } = useAccount();
  const { contracts } = useJBContractContext();
  const terminalAddress = contracts.primaryNativeTerminal.data;

  const jb721DataHookQuery = useFind721DataHook();
  const jb721DataHookQueryAddress = jb721DataHookQuery.data as `0x${string}`;

  const { setAlert } = useContext(AlertContext);

  const { equipped, totalEquippedPrice } = useContext(EquipmentContext);

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
        onSuccess: () => console.log("hi"),
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
