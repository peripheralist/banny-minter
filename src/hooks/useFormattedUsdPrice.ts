import { useEtherPrice } from "juice-sdk-react";
import { useMemo } from "react";
import { formatEther } from "viem";

export function useFormattedUsdPrice(tierPrice: bigint) {
  const { data: price } = useEtherPrice();

  const number = useMemo(
    () => Number(formatEther(tierPrice)) * (price ?? 0),
    [tierPrice, price]
  );

  return `$${Number(number.toFixed(number < 100 ? 2 : 0)).toLocaleString()}`;
}
