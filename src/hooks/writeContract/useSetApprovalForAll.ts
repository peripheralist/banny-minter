import { RESOLVER_ADDRESS } from "@/constants/contracts";
import { useBanHook } from "../useBanHook";
import {
  WriteContractHandlerOptions,
  useWriteContractHandler,
} from "./useWriteContractHandler";

export function useSetApprovalForAll(options?: WriteContractHandlerOptions) {
  const banHook = useBanHook();

  const { write: setApprovalForAll, ...data } = useWriteContractHandler(
    {
      address: banHook,
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
