export const BANNYVERSE_COLLECTION_ID = process.env
  .NEXT_PUBLIC_BANNYVERSE_COLLECTION_ID as `0x${string}`;

if (!BANNYVERSE_COLLECTION_ID) {
  throw new Error("Missing Bannyverse collection ID");
}

export const BANNYVERSE_PROJECT_ID =
  process.env.NEXT_PUBLIC_BANNYVERSE_PROJECT_ID!;

if (!BANNYVERSE_PROJECT_ID) {
  throw new Error("Missing Bannyverse projectId");
}
