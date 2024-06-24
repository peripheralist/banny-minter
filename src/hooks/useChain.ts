import { useAccount } from "wagmi";

const DEFAULT_CHAIN = process.env.NEXT_PUBLIC_DEFAULT_CHAIN;

if (!DEFAULT_CHAIN) {
  throw new Error("NEXT_PUBLIC_DEFAULT_CHAIN environment variable not defined");
}

export const useChain = () => {
  const { chain } = useAccount();

  return chain?.name.toLowerCase() ?? DEFAULT_CHAIN;
};
