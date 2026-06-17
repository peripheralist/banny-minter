import { readContract } from "@wagmi/core";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { config } from "../../../config.wagmi";
import { useBanHook } from "../useBanHook";

export function useCreditBalance() {
  const { address } = useAccount();
  const banHook = useBanHook();
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
        address: banHook,
        functionName: "payCreditsOf",
        args: [address],
      });

      setBalance(_balance);
    }

    getBalance();
  }, [address, banHook]);

  return balance;
}
