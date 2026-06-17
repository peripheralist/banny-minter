import { RESOLVER_ADDRESS } from "@/constants/contracts";
import { useBanHook } from "../useBanHook";
import {
  WriteContractHandlerOptions,
  useWriteContractHandler,
} from "./useWriteContractHandler";

export function useApprove(options?: WriteContractHandlerOptions) {
  const banHook = useBanHook();

  const { write: approve, ...data } = useWriteContractHandler(
    {
      address: banHook,
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
