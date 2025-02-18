import { BAN_HOOK, RESOLVER_ADDRESS } from "@/constants/contracts";
import {
  WriteContractHandlerOptions,
  useWriteContractHandler,
} from "./useWriteContractHandler";

export function useSetApprovalForAll(options?: WriteContractHandlerOptions) {
  const { write: setApprovalForAll, ...data } = useWriteContractHandler(
    {
      address: BAN_HOOK,
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
