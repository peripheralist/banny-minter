import { NfTsQuery } from "@/generated/graphql";

export type NFT = NfTsQuery["nfts"][number];
