import { Chain } from "./chain";

export type ActivityEvent = {
  timestamp: number;
  caller: string;
  txHash: string;
  chainId: Chain["id"];
} & (
  | {
      type: "decorate";
      bannyBodyId: bigint;
      outfitIds: bigint[];
      backgroundId: bigint;
      tokenUri: string;
    }
  | {
      type: "pay";
      beneficiary: string;
      amount: bigint;
      memo: string;
      newlyIssuedTokenCount: bigint;
    }
);
