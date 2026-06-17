import { RESOLVER_ADDRESS } from "@/constants/contracts";
import { readContract } from "@wagmi/core";
import { useEffect, useState } from "react";
import { isAddressEqual } from "viem";
import { config } from "../../../config.wagmi";
import { useBanHook } from "../useBanHook";

/**
 * Check which tokenIds are approved for transfer to resolver contract
 */
export function useNFTApprovals(tokenIds: bigint[]) {
  const banHook = useBanHook();
  const [loading, setLoading] = useState(false);

  const [approvals, setApprovals] = useState<
    {
      tokenId: bigint;
      approved: boolean;
    }[]
  >();

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
            address: banHook,
            functionName: "getApproved",
            args: [id],
          })
        )
      );

      setApprovals(
        tokenIds.map((tokenId, i) => ({
          tokenId,
          approved: isAddressEqual(approvals[i], RESOLVER_ADDRESS),
        }))
      );

      setLoading(false);
    }

    getApprovals();
  }, [tokenIds, banHook]);

  return { approvals, loading };
}
