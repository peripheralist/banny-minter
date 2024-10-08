import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { useResolverAddress } from "../useResolverAddress";
import {
  WriteContractHandlerOptions,
  useWriteContractHandler,
} from "./useWriteContractHandler";

export function useApprove(options?: WriteContractHandlerOptions) {
  const resolverAddress = useResolverAddress();

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
      args: ({ tokenId }: { tokenId: bigint }) => [resolverAddress, tokenId],
    },
    options
  );

  return { approve, ...data };
}
