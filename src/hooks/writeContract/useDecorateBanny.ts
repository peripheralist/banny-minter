import { useCallback } from "react";
import { writeContract } from "wagmi/actions";

export function useDecorateBanny() {
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
        address: "0xASDF", // TODO
        abi: [
          "function decorateBannyWith(address,uint256,uint256,uint256[]) external nonpayable",
        ],
        functionName: "decorateBannyWith",
        args: [hook, nakedBannyId, worldId, outfitIds],
      }),
    []
  );

  return decorateBanny;
}
