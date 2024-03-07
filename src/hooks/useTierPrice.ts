import { AssetType } from "@/components/Minter/Controls";
import { chainId } from "@/constants/chain";
import { useQuery } from "@tanstack/react-query";
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
    queryKey: [`price-${assetType}-${tierId}-${chainId}-${bodies.loading}`],
    queryFn: () => {
      switch (assetType) {
        case "BODY":
          return (
            bodies.data?.nfttiers.find((t) => t.tierId === tierId)?.price ||
            null
          );
      }

      return null;
    },
  });
}
