const networks = {
  1155511: {
    name: "sepolia",
    id: 1155511,
  },
  1: { name: "mainnet", id: 1 },
} as const;

const id = process.env.NEXT_PUBLIC_NETWORK_ID as number | undefined;

function isNetworkId(id: number): id is keyof typeof networks {
  return Number.isInteger(id) && Object.keys(networks).includes(id.toString());
}

if (!id) throw new Error("Missing network id");
if (!isNetworkId(id)) throw new Error("Invalid network id");

export const network = networks[id];
