import { BANNYVERSE_COLLECTION_ID, RESOLVER_ADDRESS } from "@/constants/nfts";
import {
  WriteContractHandlerOptions,
  useWriteContractHandler,
} from "./useWriteContractHandler";

export function useApprove(options?: WriteContractHandlerOptions) {
  const { write: approve, ...data } = useWriteContractHandler(
    {
      address: BANNYVERSE_COLLECTION_ID,
      abi: [
        {
          type: "function",
          name: "approve",
          inputs: [
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
      ],
      functionName: "approve",
      args: ({ tokenId }: { tokenId: bigint }) => [RESOLVER_ADDRESS, tokenId],
    },
    options
  );

  return { approve, ...data };
}
