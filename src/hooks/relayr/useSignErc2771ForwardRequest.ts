/**
 * ERC2771 forward request signing with chain switching.
 *
 * MetaMask requires the active chain to match the domain chainId for eth_signTypedData_v4.
 * This hook switches chains before signing, which may cause page refreshes.
 * The calling code should handle caching/resuming across refreshes.
 */

import {
  erc2771ForwarderAbi,
  erc2771ForwarderAddress,
} from "juice-sdk-core";
import { JBChainId } from "juice-sdk-core";
import { Address, encodeFunctionData } from "viem";
import { useAccount, useConfig, useSignTypedData, useSwitchChain } from "wagmi";
import { getPublicClient } from "@wagmi/core";

export type ERC2771ForwardRequestData = {
  from: Address;
  to: Address;
  value: bigint;
  gas: bigint;
  data: `0x${string}`;
};

export function useSignErc2771ForwardRequest() {
  const { address } = useAccount();
  const config = useConfig();
  const { switchChainAsync } = useSwitchChain();
  const { signTypedDataAsync } = useSignTypedData();

  async function sign(
    messageData: ERC2771ForwardRequestData,
    chainId: JBChainId
  ): Promise<`0x${string}`> {
    if (!address) {
      throw new Error("Wallet not connected");
    }

    // Switch to the target chain - this may cause a page refresh in MetaMask
    await switchChainAsync({ chainId });

    // Get the public client for the target chain
    const publicClient = getPublicClient(config, { chainId });
    if (!publicClient) {
      throw new Error(`No public client available for chain: ${chainId}`);
    }

    // Read nonce from the target chain
    const nonce = await publicClient.readContract({
      address: erc2771ForwarderAddress[chainId],
      abi: erc2771ForwarderAbi,
      functionName: "nonces",
      args: [address],
    });

    // Deadline 48 hours from now
    const deadline = Number(((Date.now() + 3600 * 48 * 1000) / 1000).toFixed(0));

    const domain = {
      name: "Juicebox",
      chainId,
      verifyingContract: erc2771ForwarderAddress[chainId],
      version: "1",
    } as const;

    const types = {
      ForwardRequest: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "value", type: "uint256" },
        { name: "gas", type: "uint256" },
        { name: "nonce", type: "uint256" },
        { name: "deadline", type: "uint48" },
        { name: "data", type: "bytes" },
      ],
    } as const;

    const message = {
      from: messageData.from,
      to: messageData.to,
      value: messageData.value,
      gas: messageData.gas,
      nonce,
      deadline,
      data: messageData.data,
    };

    const signature = await signTypedDataAsync({
      domain,
      types,
      primaryType: "ForwardRequest",
      message,
    });

    // Encode the signature into an execute function call on the ERC2771Forwarder
    const executeFnEncodedData = encodeFunctionData({
      abi: erc2771ForwarderAbi,
      functionName: "execute",
      args: [
        {
          from: messageData.from,
          to: messageData.to,
          value: messageData.value,
          gas: messageData.gas,
          deadline,
          data: messageData.data,
          signature,
        },
      ],
    });

    return executeFnEncodedData;
  }

  return { sign };
}
