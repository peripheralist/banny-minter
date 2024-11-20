export const PUBLIC_SUBGRAPH_KEY = process.env
  .NEXT_PUBLIC_SATSUMA_KEY as string;

if (!PUBLIC_SUBGRAPH_KEY) {
  throw new Error("NEXT_PUBLIC_SATSUMA_KEY environment variable not defined");
}
