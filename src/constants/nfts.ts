import { zeroAddress } from "viem";
import { chainId } from "./chain";

export const BANNYVERSE_COLLECTION = {
  1155511: "0x954b09cae03458b7ea916141b1e0b8621b890912".toLowerCase(),
  1: zeroAddress,
}[chainId];

export const TIER_NAMES: Record<number, string> = {
  1: "alien banny",
  2: "pink banny",
  3: "orange banny",
  4: "banny",
};
