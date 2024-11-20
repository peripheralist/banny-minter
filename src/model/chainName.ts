import { SUPPORTED_CHAINS } from "@/constants/supportedChains";

export type ChainName = (typeof SUPPORTED_CHAINS)[number]["name"];
