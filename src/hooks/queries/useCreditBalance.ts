import { BAN_HOOK } from "@/constants/contracts";
import { readContract } from "@wagmi/core";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { config } from "../../../config.wagmi";

export function useCreditBalance() {
  const { address } = useAccount();
  const [balance, setBalance] = useState<bigint>();

  useEffect(() => {
    async function getBalance() {
      if (!address) {
        setBalance(BigInt(0));
        return;
      }

      const _balance = await readContract(config, {
        abi: [
          {
            type: "function",
            name: "payCreditsOf",
            inputs: [
              {
                name: "addr",
                type: "address",
                internalType: "address",
              },
            ],
            outputs: [
              {
                name: "",
                type: "uint256",
                internalType: "uint256",
              },
            ],
            stateMutability: "view",
          },
        ],
        address: BAN_HOOK,
        functionName: "payCreditsOf",
        args: [address],
      });

      setBalance(_balance);
    }

    getBalance();
  }, [address]);

  return balance;
}
