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
      bannyBodyId: bigint;
      outfitIds: bigint[];
      backgroundId: bigint;
    }
  | {
      type: "mint";
      beneficiary: string;
      amount: bigint;
      note: string;
      beneficiaryTokenCount: bigint;
    }
);
