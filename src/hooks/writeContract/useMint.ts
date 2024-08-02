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

  const { writeContract, isPending, data: hash } = useWriteJbMultiTerminalPay();

  const mint = useCallback(() => {
    if (!connectedWalletAddress || !terminalAddress || !totalEquippedPrice) {
      console.error("Missing something smh", {
        connectedWalletAddress,
        terminalAddress,
        totalEquippedPrice,
      });
      setAlert?.("Something went wrong :(");
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
  ]);

  const tx = useTransactionReceipt({
    hash,
  });

  useEffect(() => {
    switch (tx.status) {
      case "success":
        setAlert?.("Minted!", {
          label: "Go to closet",
          href: `/closet/${connectedWalletAddress}`,
        });
        break;
      case "error":
        if (tx.error.name !== "TransactionReceiptNotFoundError") {
          // TODO seems silly...
          setAlert?.("Something may have gone wrong...");
        }
        break;
    }
  }, [tx.status, tx.error?.name, setAlert, connectedWalletAddress]);

  return { mint, isPending };
}
