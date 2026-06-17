import { BAN_HOOK_MAINNET, BAN_HOOK_TESTNET } from "@/constants/contracts";
import { useAppChain } from "./useAppChain";

/**
 * Get the Banny hook address for the network currently preferred by the UI.
 * Uses the testnet hook when on a testnet, otherwise the mainnet hook.
 */
export const useBanHook = () => {
  const appChain = useAppChain();

  return appChain.testnet ? BAN_HOOK_TESTNET : BAN_HOOK_MAINNET;
};
