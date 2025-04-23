import { useEtherPrice } from "juice-sdk-react";
import { formatEther } from "viem";

export function useFormattedUsdPrice(tierPrice: bigint) {
  const { data: price } = useEtherPrice();

  return `$${(Number(formatEther(tierPrice)) * (price ?? 0)).toFixed(0)}`;
}
