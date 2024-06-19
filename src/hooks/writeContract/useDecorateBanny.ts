import { useCallback } from "react";
import { useWriteContract } from "wagmi";

export function useDecorateBanny() {
  const { writeContract } = useWriteContract();

  const decorateBanny = useCallback(
    ({
      hook,
      nakedBannyId,
      worldId,
      outfitIds,
    }: {
      hook: string;
      nakedBannyId: number;
      worldId: number;
      outfitIds: number[];
    }) =>
      writeContract({
        address: "0xASDF", // TOOD
        abi: [
          "function decorateBannyWith(address,uint256,uint256,uint256[]) external nonpayable",
        ],
        functionName: "decorateBannyWith",
        args: [hook, nakedBannyId, worldId, outfitIds],
      }),
    [writeContract]
  );

  return decorateBanny;
}
