import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { readContract } from "@wagmi/core";
import { useEffect, useState } from "react";
import { config } from "../../config.wagmi";
import { useResolverAddress } from "./useResolverAddress";

export function useIsApprovedForAll(wallet: `0x${string}` | undefined) {
  const [loading, setLoading] = useState(false);

  const [isApprovedForAll, setIsApprovedForAll] = useState<boolean>();

  const resolverAddress = useResolverAddress();

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
        args: [wallet, resolverAddress],
      });

      setIsApprovedForAll(result);

      setLoading(false);
    }

    getIsApprovedForAll();
  }, [wallet, resolverAddress]);

  return { isApprovedForAll, loading };
}
