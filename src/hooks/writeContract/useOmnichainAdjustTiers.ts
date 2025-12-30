import { BAN_HOOK } from "@/constants/contracts";
import { useSupportedChains } from "@/hooks/useSupportedChains";
import { JBChainId } from "juice-sdk-core";
import {
  RelayrPostBundleResponse,
  useGetRelayrTxBundle,
  useGetRelayrTxQuote,
  useSendRelayrTx,
} from "juice-sdk-react";
import { useCallback, useState } from "react";
import { Address, encodeFunctionData } from "viem";
import { useAccount } from "wagmi";

const adjustTiersAbi = [
  {
    type: "function",
    name: "adjustTiers",
    inputs: [
      {
        name: "tiersToAdd",
        type: "tuple[]",
        internalType: "struct JB721TierConfig[]",
        components: [
          { name: "price", type: "uint104", internalType: "uint104" },
          { name: "initialSupply", type: "uint32", internalType: "uint32" },
          { name: "votingUnits", type: "uint32", internalType: "uint32" },
          { name: "reserveFrequency", type: "uint16", internalType: "uint16" },
          {
            name: "reserveBeneficiary",
            type: "address",
            internalType: "address",
          },
          { name: "encodedIPFSUri", type: "bytes32", internalType: "bytes32" },
          { name: "category", type: "uint24", internalType: "uint24" },
          { name: "discountPercent", type: "uint8", internalType: "uint8" },
          { name: "allowOwnerMint", type: "bool", internalType: "bool" },
          {
            name: "useReserveBeneficiaryAsDefault",
            type: "bool",
            internalType: "bool",
          },
          { name: "transfersPausable", type: "bool", internalType: "bool" },
          { name: "useVotingUnits", type: "bool", internalType: "bool" },
          { name: "cannotBeRemoved", type: "bool", internalType: "bool" },
          {
            name: "cannotIncreaseDiscountPercent",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
      {
        name: "tierIdsToRemove",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export type TierConfig = {
  price: string;
  initialSupply: number;
  votingUnits: number;
  reserveFrequency: number;
  reserveBeneficiary: Address;
  encodedIpfsUri: string;
  category: number;
  discountPercent: number;
  allowOwnerMint: boolean;
  useReserveBeneficiaryAsDefault: boolean;
  transfersPausable: boolean;
  useVotingUnits: boolean;
  cannotBeRemoved: boolean;
  cannotIncreaseDiscountPercent: boolean;
};

export type AdjustTiersArgs = {
  tiersToAdd: TierConfig[];
  tierIdsToRemove: string[];
};

// Gas estimate per chain for adjustTiers (with buffer for trusted forwarder)
const GAS_ESTIMATE = BigInt(500_000);

/**
 * Hook to adjust NFT tiers across multiple chains using relayr.
 *
 * Flow:
 * 1. Call `getQuote(args)` to get a relayr quote for all chains
 * 2. Present payment options to user from `quoteData.payment_info`
 * 3. Call `sendTransaction(paymentInfo)` with selected payment option
 * 4. Poll bundle status with `startPolling(bundleUuid)`
 */
export function useOmnichainAdjustTiers() {
  const { address } = useAccount();
  const chains = useSupportedChains();

  const { getRelayrTxQuote, data: quoteData, isPending: isQuoting, reset: resetQuote } = useGetRelayrTxQuote();
  const { sendRelayrTx, isPending: isSending, isSuccess: isSendSuccess, error: sendError } = useSendRelayrTx();
  const { startPolling, isPolling, isComplete, response: bundleResponse, error: bundleError } = useGetRelayrTxBundle();

  const [error, setError] = useState<Error | null>(null);

  /**
   * Get a relayr quote for adjusting tiers across all supported chains.
   */
  const getQuote = useCallback(
    async (args: AdjustTiersArgs): Promise<RelayrPostBundleResponse | undefined> => {
      if (!address) {
        setError(new Error("Wallet not connected"));
        return;
      }

      setError(null);

      try {
        const encodedData = encodeFunctionData({
          abi: adjustTiersAbi,
          functionName: "adjustTiers",
          args: [
            args.tiersToAdd.map((t) => ({
              price: BigInt(t.price),
              initialSupply: t.initialSupply,
              votingUnits: t.votingUnits,
              reserveFrequency: t.reserveFrequency,
              reserveBeneficiary: t.reserveBeneficiary,
              encodedIPFSUri: t.encodedIpfsUri as `0x${string}`,
              category: t.category,
              discountPercent: t.discountPercent,
              allowOwnerMint: t.allowOwnerMint,
              useReserveBeneficiaryAsDefault: t.useReserveBeneficiaryAsDefault,
              transfersPausable: t.transfersPausable,
              useVotingUnits: t.useVotingUnits,
              cannotBeRemoved: t.cannotBeRemoved,
              cannotIncreaseDiscountPercent: t.cannotIncreaseDiscountPercent,
            })),
            args.tierIdsToRemove.map((id) => BigInt(id)),
          ],
        });

        // Build transactions for each chain
        const txs = chains.map((chain) => ({
          chainId: chain.id as JBChainId,
          data: {
            from: address,
            to: BAN_HOOK,
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

  const sendTransaction = useCallback(
    async (paymentInfo: RelayrPostBundleResponse["payment_info"][number]) => {
      try {
        setError(null);
        const hash = await sendRelayrTx(paymentInfo);
        return hash;
      } catch (e) {
        const err = e instanceof Error ? e : new Error("Failed to send transaction");
        setError(err);
        throw err;
      }
    },
    [sendRelayrTx]
  );

  // Reset hook state for a new transaction
  const reset = useCallback(() => {
    resetQuote();
    setError(null);
  }, [resetQuote]);

  return {
    // Quote
    getQuote,
    quoteData,
    isQuoting,

    // Send
    sendTransaction,
    isSending,
    isSendSuccess,
    sendError,

    // Bundle tracking
    startPolling,
    isPolling,
    isComplete,
    bundleResponse,
    bundleError,

    // General
    error,
    reset,
    chains,
  };
}
