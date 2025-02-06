import { Address } from "viem";

export const LOOKS_COLLECTION_ID = process.env
  .NEXT_PUBLIC_LOOKS_COLLECTION_ID as Address;

if (!LOOKS_COLLECTION_ID) {
  throw new Error("Missing Looks collection ID");
}

export const LOOKS_REVNET_ID =
  process.env.NEXT_PUBLIC_LOOKS_REVNET_ID!;

if (!LOOKS_REVNET_ID) {
  throw new Error("Missing Looks revnet id");
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
