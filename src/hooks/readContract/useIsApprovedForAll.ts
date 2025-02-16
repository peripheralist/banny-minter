import { BAN_HOOK, RESOLVER_ADDRESS } from "@/constants/nfts";
import { readContract } from "@wagmi/core";
import { useEffect, useState } from "react";
import { Address } from "viem";
import { config } from "../../../config.wagmi";

export function useIsApprovedForAll(wallet: Address | undefined) {
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
        address: BAN_HOOK,
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
