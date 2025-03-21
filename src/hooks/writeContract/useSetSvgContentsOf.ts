import { RESOLVER_ADDRESS } from "@/constants/contracts";
import {
  WriteContractHandlerOptions,
  useWriteContractHandler,
} from "./useWriteContractHandler";
import { useAllTiers } from "../queries/useAllTiers";
import { Tier } from "@/model/tier";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useSetSvgContentsOf(
  tiers: Tier[] | undefined,
  options?: WriteContractHandlerOptions
) {
  const { refetch } = useAllTiers();

  const { data: args } = useQuery({
    queryKey: ["embedded-svgs", tiers?.map((t) => t.tierId).sort()],
    queryFn: async () =>
      tiers
        ? Promise.all(
            tiers
              .filter((t) => t.embeddedSvgUrl)
              .map((t) =>
                axios.get<string>(t.embeddedSvgUrl!).then((res) => ({
                  tierId: t.tierId,
                  svg: res.data
                    // format svg for storing, remove <svg> wrapper
                    .replace(
                      `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' fill='none'>`,
                      ""
                    )
                    .replace("</svg>", ""),
                }))
              )
          )
        : [],
  });

  const { write: setSvgContentsOf, ...data } = useWriteContractHandler(
    {
      address: RESOLVER_ADDRESS,
      abi: [
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "upcs",
              type: "uint256[]",
            },
            {
              internalType: "string[]",
              name: "svgContents",
              type: "string[]",
            },
          ],
          name: "setSvgContentsOf",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      functionName: "setSvgContentsOf",
      args: [args?.map(({ tierId }) => tierId), args?.map(({ svg }) => svg)],
    },
    {
      ...options,
      onSuccess: (v) => {
        refetch();
        options?.onSuccess?.(v);
      },
    }
  );

  return { setSvgContentsOf, ready: !!args, ...data };
}
