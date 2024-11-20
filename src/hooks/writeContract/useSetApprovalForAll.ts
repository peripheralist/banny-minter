import { BANNYVERSE_COLLECTION_ID, RESOLVER_ADDRESS } from "@/constants/nfts";
import {
  WriteContractHandlerOptions,
  useWriteContractHandler,
} from "./useWriteContractHandler";

export function useSetApprovalForAll(options?: WriteContractHandlerOptions) {
  const { write: setApprovalForAll, ...data } = useWriteContractHandler(
    {
      address: BANNYVERSE_COLLECTION_ID,
      abi: [
        {
          type: "function",
          name: "setApprovalForAll",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
      ],
      functionName: "setApprovalForAll",
      args: [RESOLVER_ADDRESS, true],
    },
    options
  );

  return { setApprovalForAll, ...data };
}
