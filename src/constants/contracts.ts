import { Address } from "viem";
import { arbitrum, base, mainnet, optimism } from "viem/chains";

export const TESTNET_REVNET_ID = 6;
export const MAINNET_REVNET_ID = 4;

export const BAN_REVNET_IDS = (chainId: number) => {
  switch (chainId) {
    case mainnet.id:
    case arbitrum.id:
    case optimism.id:
    case base.id:
      return MAINNET_REVNET_ID;
  }

  // testnets
  return TESTNET_REVNET_ID;
};

export const BAN_HOOK = "0x2da41cdc79ae49f2725ab549717b2dbcfc42b958" as Address;

export const RESOLVER_ADDRESS =
  "0xa5f8911d4cfd60a6697479f078409434424fe666" as Address;

export const TERMINAL_ADDRESS =
  "0xdb9644369c79c3633cde70d2df50d827d7dc7dbc" as Address;
