export const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;

if (!API_URL) {
  throw new Error("Missing NEXT_PUBLIC_GRAPHQL_API_URL in .env");
}
