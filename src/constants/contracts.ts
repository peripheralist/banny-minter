import { Address } from "viem";
import { arbitrum, base, mainnet, optimism } from "viem/chains";

export const BAN_REVNET_IDS = (chainId: number) => {
  switch (chainId) {
    case mainnet.id:
    case arbitrum.id:
    case optimism.id:
    case base.id:
      return 4;
  }

  // testnets
  return 6;
};

export const BAN_HOOK = "0x2da41cdc79ae49f2725ab549717b2dbcfc42b958" as Address;

export const RESOLVER_ADDRESS =
  "0xa5f8911d4cfd60a6697479f078409434424fe666" as Address;

export const TERMINAL_ADDRESS = process.env
  .NEXT_PUBLIC_TERMINAL_ADDRESS! as Address;

if (!TERMINAL_ADDRESS) {
  throw new Error("Missing terminal address");
}
