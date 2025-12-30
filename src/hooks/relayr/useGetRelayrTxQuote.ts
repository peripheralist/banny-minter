/**
 * Custom implementation of useGetRelayrTxQuote with signature caching.
 *
 * Signs for each chain sequentially, caching progress to localStorage.
 * This allows resuming after MetaMask causes page refreshes on chain switches.
 */

import { erc2771ForwarderAddress, JBChainId } from "juice-sdk-core";
import { RelayrPostBundleResponse } from "juice-sdk-react";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import {
  ERC2771ForwardRequestData,
  useSignErc2771ForwardRequest,
} from "./useSignErc2771ForwardRequest";

const API = "https://api.relayr.ba5ed.com";
const SIGNING_PROGRESS_KEY = "relayr_signing_progress";

type RelayrTxInput = {
  chainId: JBChainId;
  data: ERC2771ForwardRequestData;
};

type SigningProgress = {
  // The original transaction inputs (serialized)
  txInputs: { chainId: JBChainId; data: string }[];
  // Signatures collected so far, keyed by chainId
  signatures: Record<number, string>;
  // Timestamp to expire stale sessions
  timestamp: number;
};

// Serialize BigInt values for localStorage
function serializeTxData(data: ERC2771ForwardRequestData): string {
  return JSON.stringify({
    from: data.from,
    to: data.to,
    value: data.value.toString(),
    gas: data.gas.toString(),
    data: data.data,
  });
}

// Deserialize BigInt values from localStorage
function deserializeTxData(serialized: string): ERC2771ForwardRequestData {
  const parsed = JSON.parse(serialized);
  return {
    from: parsed.from,
    to: parsed.to,
    value: BigInt(parsed.value),
    gas: BigInt(parsed.gas),
    data: parsed.data,
  };
}

function loadProgress(): SigningProgress | null {
  try {
    const stored = localStorage.getItem(SIGNING_PROGRESS_KEY);
    if (!stored) return null;

    const progress = JSON.parse(stored) as SigningProgress;

    // Expire after 1 hour
    if (Date.now() - progress.timestamp > 60 * 60 * 1000) {
      localStorage.removeItem(SIGNING_PROGRESS_KEY);
      return null;
    }

    return progress;
  } catch {
    return null;
  }
}

function saveProgress(progress: SigningProgress): void {
  localStorage.setItem(SIGNING_PROGRESS_KEY, JSON.stringify(progress));
}

function clearProgress(): void {
  localStorage.removeItem(SIGNING_PROGRESS_KEY);
}

function useRequestRelayrQuote() {
  return useMutation({
    mutationFn: async (
      args: { chain: JBChainId; data: `0x${string}`; value: string }[]
    ): Promise<RelayrPostBundleResponse> => {
      const transactions = args.map((ct) => ({
        chain: ct.chain,
        data: ct.data,
        target: erc2771ForwarderAddress[ct.chain],
        value: ct.value,
      }));

      const response = await fetch(`${API}/v1/bundle/prepaid`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transactions,
          virtual_nonce_mode: "Disabled",
        }),
      });

      if (!response.ok) {
        console.error("Relayr ERROR:: ", response);
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      return await response.json();
    },
  });
}

export function useGetRelayrTxQuote() {
  const requestRelayrQuote = useRequestRelayrQuote();
  const { sign } = useSignErc2771ForwardRequest();

  // Track signing progress for UI
  const [signingProgress, setSigningProgress] = useState<{
    totalChains: number;
    signedChains: number;
    currentChain: JBChainId | null;
    chainIds: JBChainId[];
  } | null>(null);

  // Check for existing progress on mount
  const [pendingProgress, setPendingProgress] = useState<SigningProgress | null>(null);

  useEffect(() => {
    const progress = loadProgress();
    if (progress && Object.keys(progress.signatures).length > 0) {
      setPendingProgress(progress);
    }
  }, []);

  // Resume signing from cached progress
  const resumeSigning = useCallback(async (): Promise<RelayrPostBundleResponse | undefined> => {
    const progress = loadProgress();
    if (!progress) return;

    const chainIds = progress.txInputs.map((tx) => tx.chainId);
    const unsignedChains = chainIds.filter(
      (chainId) => !progress.signatures[chainId]
    );

    setSigningProgress({
      totalChains: chainIds.length,
      signedChains: Object.keys(progress.signatures).length,
      currentChain: unsignedChains[0] ?? null,
      chainIds,
    });

    // Sign remaining chains
    for (const tx of progress.txInputs) {
      if (progress.signatures[tx.chainId]) continue;

      setSigningProgress((prev) => prev ? { ...prev, currentChain: tx.chainId } : null);

      const txData = deserializeTxData(tx.data);
      const signedData = await sign(txData, tx.chainId);

      // Save progress after each signature
      progress.signatures[tx.chainId] = signedData;
      progress.timestamp = Date.now();
      saveProgress(progress);

      setSigningProgress((prev) =>
        prev ? { ...prev, signedChains: prev.signedChains + 1 } : null
      );
    }

    // All signed, submit to relayr
    const txDataRequest = progress.txInputs.map((tx) => ({
      chain: tx.chainId,
      data: progress.signatures[tx.chainId] as `0x${string}`,
      value: "0",
    }));

    clearProgress();
    setPendingProgress(null);
    setSigningProgress(null);

    return await requestRelayrQuote.mutateAsync(txDataRequest);
  }, [sign, requestRelayrQuote]);

  // Start fresh signing session
  async function getRelayrTxQuote(
    data: RelayrTxInput[]
  ): Promise<RelayrPostBundleResponse | undefined> {
    if (!data) return;

    // Initialize progress
    const progress: SigningProgress = {
      txInputs: data.map((d) => ({
        chainId: d.chainId,
        data: serializeTxData(d.data),
      })),
      signatures: {},
      timestamp: Date.now(),
    };
    saveProgress(progress);

    const chainIds = data.map((d) => d.chainId);
    setSigningProgress({
      totalChains: data.length,
      signedChains: 0,
      currentChain: data[0]?.chainId ?? null,
      chainIds,
    });

    // Sign for each chain
    for (const d of data) {
      setSigningProgress((prev) => prev ? { ...prev, currentChain: d.chainId } : null);

      const signedData = await sign(d.data, d.chainId);

      // Save progress after each signature
      progress.signatures[d.chainId] = signedData;
      progress.timestamp = Date.now();
      saveProgress(progress);

      setSigningProgress((prev) =>
        prev ? { ...prev, signedChains: prev.signedChains + 1 } : null
      );
    }

    // All signed, submit to relayr
    const txDataRequest = data.map((d) => ({
      chain: d.chainId,
      data: progress.signatures[d.chainId] as `0x${string}`,
      value: "0",
    }));

    clearProgress();
    setPendingProgress(null);
    setSigningProgress(null);

    return await requestRelayrQuote.mutateAsync(txDataRequest);
  }

  const reset = useCallback(() => {
    clearProgress();
    setPendingProgress(null);
    setSigningProgress(null);
    requestRelayrQuote.reset();
  }, [requestRelayrQuote]);

  return {
    getRelayrTxQuote,
    resumeSigning,
    pendingProgress,
    signingProgress,
    data: requestRelayrQuote.data,
    isPending: requestRelayrQuote.isPending,
    isSuccess: requestRelayrQuote.isSuccess,
    isError: requestRelayrQuote.isError,
    error: requestRelayrQuote.error,
    reset,
  };
}
