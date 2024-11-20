import { BANNYVERSE_COLLECTION_ID, RESOLVER_ADDRESS } from "@/constants/nfts";
import { readContract } from "@wagmi/core";
import { useEffect, useState } from "react";
import { config } from "../../config.wagmi";

export function useIsApprovedForAll(wallet: `0x${string}` | undefined) {
  const [loading, setLoading] = useState(false);

  const [isApprovedForAll, setIsApprovedForAll] = useState<boolean>();

  useEffect(() => {
    async function getIsApprovedForAll() {
      if (!wallet) return;

      setLoading(true);

      const result = await readContract(config, {
        abi: [
          {
            type: "function",
            name: "isApprovedForAll",
            inputs: [
              {
                name: "owner",
                type: "address",
                internalType: "address",
              },
              {
                name: "operator",
                type: "address",
                internalType: "address",
              },
            ],
            outputs: [
              {
                name: "",
                type: "bool",
                internalType: "bool",
              },
            ],
            stateMutability: "view",
          },
        ],
        address: BANNYVERSE_COLLECTION_ID,
        functionName: "isApprovedForAll",
        args: [wallet, RESOLVER_ADDRESS],
      });

      setIsApprovedForAll(result);

      setLoading(false);
    }

    getIsApprovedForAll();
  }, [wallet]);

  return { isApprovedForAll, loading };
}
