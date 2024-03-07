const chains = {
  1155511: {
    name: "sepolia",
    id: 1155511,
  },
  1: { name: "mainnet", id: 1 },
} as const;

export type ChainId = keyof typeof chains;

function isChainId(id: number): id is ChainId {
  return Number.isInteger(id) && Object.keys(chains).includes(id.toString());
}

const id = process.env.NEXT_PUBLIC_CHAIN_ID as string | undefined;
if (!id) throw new Error("Missing chain id");

const _id = parseInt(id);
if (isNaN(_id) || !isChainId(_id)) throw new Error("Invalid chain id");

export const chainId = _id;
export const chain = chains[_id];
