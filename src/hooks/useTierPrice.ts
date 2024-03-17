import { AssetType } from "@/model/assetType";
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
    queryKey: [`price-${assetType}-${tierId}-${bodies.loading}`],
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
