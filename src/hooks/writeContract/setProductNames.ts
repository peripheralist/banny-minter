import { RESOLVER_ADDRESS } from "@/constants/contracts";
import {
  WriteContractHandlerOptions,
  useWriteContractHandler,
} from "./useWriteContractHandler";

export function useSetProductNames(options?: WriteContractHandlerOptions) {
  const { write: setProductNames, ...data } = useWriteContractHandler(
    {
      address: RESOLVER_ADDRESS,
      abi: [
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
      ],
      functionName: "setProductNames",
      args: ({ upcs, names }: { upcs: string[]; names: string[] }) => [
        upcs,
        names,
      ],
    },
    options
  );

  return { setProductNames, ...data };
}
