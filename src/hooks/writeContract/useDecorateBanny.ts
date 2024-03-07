import { useCallback } from "react";

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
    }) => {
      // writeContract({
      //   address: ADDRESS.asdf,
      //   abi: ABI.asdf,
      //   functionName: "decorateBannyWith",
      //   args: [hook, nakedBannyId, worldId, outfitIds],
      // });
    },
    []
  );

  return { decorateBanny };
}
