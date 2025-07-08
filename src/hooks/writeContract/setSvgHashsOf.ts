import { RESOLVER_ADDRESS } from "@/constants/contracts";
import {
  WriteContractHandlerOptions,
  useWriteContractHandler,
} from "./useWriteContractHandler";

export function useSetSvgHashsOf(options?: WriteContractHandlerOptions) {
  const { write: setSvgHashsOf, ...data } = useWriteContractHandler(
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
              internalType: "bytes32[]",
              name: "svgHashs",
              type: "bytes32[]",
            },
          ],
          name: "setSvgHashsOf",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      functionName: "setSvgHashsOf",
      args: ({ upcs, svgHashs }: { upcs: string[]; svgHashs: string[] }) => [
        upcs,
        svgHashs,
      ],
    },
    options
  );

  return { setSvgHashsOf, ...data };
}
