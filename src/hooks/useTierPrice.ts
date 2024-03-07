import { AssetType } from "@/components/Minter/Controls";
import { chainId } from "@/constants/chain";
import { useQuery } from "@tanstack/react-query";
import { formatEther } from "juice-sdk-core";
import { useBodies } from "./queries/useBodies";

export function useTierPrice({
  assetType,
  tierId,
}: {
  assetType: AssetType;
  tierId: number | undefined;
}) {
  const bodies = useBodies();

  return useQuery({
    queryKey: [`price-${assetType}-${tierId}-${chainId}`],
    queryFn: () => {
      switch (assetType) {
        case "BODY":
          const _price = bodies.data?.nfttiers.find(
            (t) => t.tierId === tierId
          )?.price;
          return _price ? formatEther(_price) : null;
      }

      return null;
    },
  });
}
