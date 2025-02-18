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

export const BAN_HOOK = "0x0ecd60cd86662fe95c5897b839d012c518ef55cd" as Address;

export const RESOLVER_ADDRESS =
  "0x5d0f47befe669cc0df4e89a6b0d841a99749b243" as Address;

export const TERMINAL_ADDRESS = process.env
  .NEXT_PUBLIC_TERMINAL_ADDRESS! as Address;

if (!TERMINAL_ADDRESS) {
  throw new Error("Missing terminal address");
}
