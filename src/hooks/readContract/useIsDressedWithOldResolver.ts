import { BAN_HOOK, RESOLVER_ADDRESS_OLD } from "@/constants/contracts";
import { readContract } from "@wagmi/core";
import { useEffect, useState } from "react";
import { config } from "../../../config.wagmi";

export function useIsDressedWithOldResolver(bannyBodyId: number) {
  const [loading, setLoading] = useState(false);

  const [dressedTokenIds, setDressedTokenIds] = useState<bigint[]>();

  useEffect(() => {
    async function getOutfitIds() {
      setLoading(true);

      const result = await readContract(config, {
        abi: [
          {
            inputs: [
              {
                internalType: "address",
                name: "hook",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "bannyBodyId",
                type: "uint256",
              },
            ],
            name: "assetIdsOf",
            outputs: [
              {
                internalType: "uint256",
                name: "backgroundId",
                type: "uint256",
              },
              {
                internalType: "uint256[]",
                name: "outfitIds",
                type: "uint256[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        address: RESOLVER_ADDRESS_OLD,
        functionName: "assetIdsOf",
        args: [BAN_HOOK, BigInt(bannyBodyId)],
      });

      setDressedTokenIds([result[0], ...result[1]].filter((x) => !!x));

      setLoading(false);
    }

    getOutfitIds();
  }, [bannyBodyId]);

  return { dressedTokenIds, loading };
}
