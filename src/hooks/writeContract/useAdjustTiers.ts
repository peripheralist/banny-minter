import { BAN_HOOK } from "@/constants/contracts";
import { Address } from "viem";
import {
  WriteContractHandlerOptions,
  useWriteContractHandler,
} from "./useWriteContractHandler";

export function useAdjustTiers(options?: WriteContractHandlerOptions) {
  const { write: adjustTiers, ...data } = useWriteContractHandler(
    {
      address: BAN_HOOK,
      abi: [
        {
          type: "function",
          name: "adjustTiers",
          inputs: [
            {
              name: "tiersToAdd",
              type: "tuple[]",
              internalType: "struct JB721TierConfig[]",
              components: [
                {
                  name: "price",
                  type: "uint104",
                  internalType: "uint104",
                },
                {
                  name: "initialSupply",
                  type: "uint32",
                  internalType: "uint32",
                },
                {
                  name: "votingUnits",
                  type: "uint32",
                  internalType: "uint32",
                },
                {
                  name: "reserveFrequency",
                  type: "uint16",
                  internalType: "uint16",
                },
                {
                  name: "reserveBeneficiary",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "encodedIPFSUri",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "category",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "discountPercent",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "allowOwnerMint",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "useReserveBeneficiaryAsDefault",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "transfersPausable",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "useVotingUnits",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "cannotBeRemoved",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "cannotIncreaseDiscountPercent",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
            {
              name: "tierIdsToRemove",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
      ],
      functionName: "adjustTiers",
      args: ({
        tiersToAdd,
        tierIdsToRemove,
      }: {
        tiersToAdd: {
          price: string;
          initialSupply: number;
          votingUnits: number;
          reserveFrequency: number;
          reserveBeneficiary: Address;
          encodedIpfsUri: string;
          category: number;
          discountPercent: number;
          allowOwnerMint: boolean;
          useReserveBeneficiaryAsDefault: boolean;
          transfersPausable: boolean;
          useVotingUnits: boolean;
          cannotBeRemoved: boolean;
          cannotIncreaseDiscountPercent: boolean;
        }[];
        tierIdsToRemove: string[];
      }) => [tiersToAdd, tierIdsToRemove],
    },
    options
  );

  return { adjustTiers, ...data };
}
