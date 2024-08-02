import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { useResolverAddress } from "../useResolverAddress";
import { useWriteContractHandler } from "./useWriteContractHandler";

export function useSetApprovalForAll() {
  const resolverAddress = useResolverAddress();

  const { write: setApprovalForAll, ...data } = useWriteContractHandler({
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
    args: [resolverAddress, true],
  });

  return { setApprovalForAll, ...data };
}
