export const API_URL = process.env.NEXT_PUBLIC_BENDYSTRAW_URL;
export const TESTNET_API_URL = process.env.NEXT_PUBLIC_TESTNET_BENDYSTRAW_URL;

if (!API_URL) {
  throw new Error("Missing NEXT_PUBLIC_BENDYSTRAW_URL in .env");
}
if (!TESTNET_API_URL) {
  throw new Error("Missing NEXT_PUBLIC_TESTNET_BENDYSTRAW_URL in .env");
}
