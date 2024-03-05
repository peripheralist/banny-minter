import { ADDRESS } from "@/constants/contracts/addresses";
import { useCallback } from "react";
import { useWriteContract } from "wagmi";
import { ABI } from "./abi";

export function useDecorateBanny() {
  const { writeContract, ...data } = useWriteContract();

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
      writeContract({
        address: ADDRESS.asdf,
        abi: ABI.asdf,
        functionName: "decorateBannyWith",
        args: [hook, nakedBannyId, worldId, outfitIds],
      });
    },
    [writeContract]
  );

  return { decorateBanny, ...data };
}
