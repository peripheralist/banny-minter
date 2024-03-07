import { zeroAddress } from "viem";
import { chainId } from "./chain";

export const BANNYVERSE_COLLECTION = {
  1155511: "0x5f57ed4f97c0d88a93e1109f9f363ae5820a553b".toLowerCase(),
  1: zeroAddress,
}[chainId];

export const TIER_NAMES: Record<number, string> = {
  1: "alien banny",
  2: "pink banny",
  3: "orange banny",
  4: "banny",
};
