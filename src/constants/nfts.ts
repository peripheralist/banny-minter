import { zeroAddress } from "viem";
import { chainId } from "./chain";

export const BANNYVERSE_COLLECTION = {
  1155511: "0x2df7e6d24396e0af69d51344d10f1d2a30cf6321".toLowerCase(),
  1: zeroAddress,
}[chainId];

export const TIER_NAMES: Record<number, string> = {
  1: "alien banny",
  2: "pink banny",
  3: "orange banny",
  4: "banny",
};
