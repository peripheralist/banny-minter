import { Address } from "viem";

export const BAN_HOOK = process.env.NEXT_PUBLIC_BAN_HOOK as Address;

if (!BAN_HOOK) {
  throw new Error("Missing BAN hook");
}

export const BAN_REVNET_ID = process.env.NEXT_PUBLIC_BAN_REVNET_ID!;

if (!BAN_REVNET_ID) {
  throw new Error("Missing BAN Revnet ID");
}

export const RESOLVER_ADDRESS = process.env
  .NEXT_PUBLIC_RESOLVER_ADDRESS! as Address;

if (!RESOLVER_ADDRESS) {
  throw new Error("Missing resolver address");
}

export const TERMINAL_ADDRESS = process.env
  .NEXT_PUBLIC_TERMINAL_ADDRESS! as Address;

if (!TERMINAL_ADDRESS) {
  throw new Error("Missing terminal address");
}
