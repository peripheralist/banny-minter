import { RESOLVER_ADDRESS } from "@/constants/nfts";
import {
  WriteContractHandlerOptions,
  useWriteContractHandler,
} from "./useWriteContractHandler";

export function useSetSvgContentsOf(options?: WriteContractHandlerOptions) {
  const { write: setSvgContentsOf, ...data } = useWriteContractHandler(
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
              name: "svgContents",
              type: "string[]",
            },
          ],
          name: "setSvgContentsOf",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      functionName: "setSvgContentsOf",
      args: ({
        tierId,
        svgContents,
      }: {
        tierId: number;
        svgContents: string;
      }) => [[tierId], [svgContents]],
    },
    options
  );

  return { setSvgContentsOf, ...data };
}
