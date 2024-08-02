import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { readContract } from "@wagmi/core";
import { config } from "../../config.wagmi";
import { useEffect, useState } from "react";
import { useResolverAddress } from "./useResolverAddress";
import { isAddressEqual } from "viem";

export function useNFTApprovals(tokenIds: bigint[]) {
  const [loading, setLoading] = useState(false);

  const [approvals, setApprovals] = useState<
    {
      tokenId: bigint;
      approved: boolean;
    }[]
  >();

  const resolverAddress = useResolverAddress();

  useEffect(() => {
    async function getApprovals() {
      setLoading(true);

      const approvals = await Promise.all(
        tokenIds.map((id) =>
          readContract(config, {
            abi: [
              {
                type: "function",
                name: "getApproved",
                inputs: [
                  {
                    name: "tokenId",
                    type: "uint256",
                    internalType: "uint256",
                  },
                ],
                outputs: [
                  {
                    name: "",
                    type: "address",
                    internalType: "address",
                  },
                ],
                stateMutability: "view",
              },
            ],
            address: BANNYVERSE_COLLECTION_ID,
            functionName: "getApproved",
            args: [id],
          })
        )
      );

      setApprovals(
        tokenIds.map((tokenId, i) => ({
          tokenId,
          approved: isAddressEqual(approvals[i], resolverAddress),
        }))
      );

      setLoading(false);
    }

    getApprovals();
  }, [tokenIds, resolverAddress]);

  return { approvals, loading };
}
