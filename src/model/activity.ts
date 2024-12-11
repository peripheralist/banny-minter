import { Chain } from "./chain";

export type ActivityEvent = {
  id: string;
  timestamp: number;
  caller: string;
  txHash: string;
  chain: Chain;
} & (
  | {
      type: "decorate";
      nakedBannyId: bigint;
      outfitIds: bigint[];
      worldId: bigint;
    }
  | {
      type: "mint";
      beneficiary: string;
      amount: bigint;
      note: string;
      beneficiaryTokenCount: bigint;
    }
);
