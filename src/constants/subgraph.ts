export const SUBGRAPH_KEY = process.env.NEXT_PUBLIC_SATSUMA_KEY;

if (!SUBGRAPH_KEY) {
  throw new Error("NEXT_PUBLIC_SATSUMA_KEY environment variable not defined");
}
