import { RESOLVER_ADDRESS } from "@/constants/contracts";
import { useGetRelayrTxQuote } from "@/hooks/relayr/useGetRelayrTxQuote";
import { useSupportedChains } from "@/hooks/useSupportedChains";
import { JBChainId } from "juice-sdk-core";
import {
  RelayrPostBundleResponse,
  useGetRelayrTxBundle,
  useSendRelayrTx,
} from "juice-sdk-react";
import { useCallback, useEffect, useState } from "react";
import { encodeFunctionData } from "viem";
import { useAccount } from "wagmi";

const QUOTE_STORAGE_KEY = "omnichain_set_product_names_quote";

const setProductNamesAbi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "upcs",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "names",
        type: "string[]",
      },
    ],
    name: "setProductNames",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export type SetProductNamesArgs = {
  upcs: string[];
  names: string[];
};

const GAS_ESTIMATE = BigInt(200_000);

// Load/save quote from localStorage
function loadStoredQuote(): RelayrPostBundleResponse | null {
  try {
    const stored = localStorage.getItem(QUOTE_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function saveStoredQuote(quote: RelayrPostBundleResponse): void {
  localStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(quote));
}

function clearStoredQuote(): void {
  localStorage.removeItem(QUOTE_STORAGE_KEY);
}

/**
 * Hook to set product names across multiple chains using relayr.
 */
export function useOmnichainSetProductNames() {
  const { address } = useAccount();
  const chains = useSupportedChains();

  const {
    getRelayrTxQuote,
    resumeSigning,
    pendingProgress,
    signingProgress,
    data: freshQuoteData,
    isPending: isQuoting,
    reset: resetQuote,
  } = useGetRelayrTxQuote();

  const {
    sendRelayrTx,
    isPending: isSending,
    isSuccess: isSendSuccess,
    error: sendError,
  } = useSendRelayrTx();

  const {
    startPolling,
    isPolling,
    isComplete,
    response: bundleResponse,
    error: bundleError,
  } = useGetRelayrTxBundle();

  const [error, setError] = useState<Error | null>(null);
  const [storedQuote, setStoredQuote] = useState<RelayrPostBundleResponse | null>(null);

  // Load stored quote on mount
  useEffect(() => {
    setStoredQuote(loadStoredQuote());
  }, []);

  // Save fresh quote when received
  useEffect(() => {
    if (freshQuoteData) {
      saveStoredQuote(freshQuoteData);
      setStoredQuote(freshQuoteData);
    }
  }, [freshQuoteData]);

  // Use stored quote if available, otherwise use fresh
  const quoteData = storedQuote ?? freshQuoteData;

  const getQuote = useCallback(
    async (
      args: SetProductNamesArgs
    ): Promise<RelayrPostBundleResponse | undefined> => {
      if (!address) {
        setError(new Error("Wallet not connected"));
        return;
      }

      setError(null);

      try {
        const encodedData = encodeFunctionData({
          abi: setProductNamesAbi,
          functionName: "setProductNames",
          args: [
            args.upcs.map((upc) => BigInt(upc)),
            args.names,
          ],
        });

        const txs = chains.map((chain) => ({
          chainId: chain.id as JBChainId,
          data: {
            from: address,
            to: RESOLVER_ADDRESS,
            value: BigInt(0),
            gas: GAS_ESTIMATE,
            data: encodedData,
          },
        }));

        const quote = await getRelayrTxQuote(txs);
        return quote;
      } catch (e) {
        const err = e instanceof Error ? e : new Error("Failed to get quote");
        setError(err);
        throw err;
      }
    },
    [address, chains, getRelayrTxQuote]
  );

  const resumeQuote = useCallback(async (): Promise<RelayrPostBundleResponse | undefined> => {
    setError(null);
    try {
      return await resumeSigning();
    } catch (e) {
      const err = e instanceof Error ? e : new Error("Failed to resume signing");
      setError(err);
      throw err;
    }
  }, [resumeSigning]);

  const sendTransaction = useCallback(
    async (paymentInfo: RelayrPostBundleResponse["payment_info"][number]) => {
      try {
        setError(null);
        const hash = await sendRelayrTx(paymentInfo);
        return hash;
      } catch (e) {
        const err =
          e instanceof Error ? e : new Error("Failed to send transaction");
        setError(err);
        throw err;
      }
    },
    [sendRelayrTx]
  );

  const reset = useCallback(() => {
    resetQuote();
    clearStoredQuote();
    setStoredQuote(null);
    setError(null);
  }, [resetQuote]);

  return {
    getQuote,
    resumeQuote,
    quoteData,
    isQuoting,
    signingProgress,
    pendingProgress,
    hasPendingProgress: !!pendingProgress,
    sendTransaction,
    isSending,
    isSendSuccess,
    sendError,
    startPolling,
    isPolling,
    isComplete,
    bundleResponse,
    bundleError,
    error,
    reset,
    chains,
  };
}
