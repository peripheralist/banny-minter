import { config } from "../../config.wagmi";

type AllChains = (typeof config)["chains"];

export type Chain = AllChains[number];

export type ChainId = Chain["id"];
