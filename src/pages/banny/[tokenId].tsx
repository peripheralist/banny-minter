import DressingRoom from "@/components/DressingRoom";
import DecorateButton from "@/components/DressingRoom/DecorateButton";
import EquippedTiersPreview from "@/components/EquippedTiersPreview";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import { Category } from "@/constants/nfts";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { useDecoratedBanny } from "@/hooks/queries/useDecoratedBanny";
import { useOwnedCategorizedTiers } from "@/hooks/queries/useOwnedCategorizedTiers";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import { useAccount } from "wagmi";

export default function Index() {
  const { address } = useAccount();

  const router = useRouter();

  const tokenId = router.query.tokenId as string | undefined;

  const _tokenId =
    !tokenId || isNaN(parseInt(tokenId)) ? undefined : parseInt(tokenId);

  const { tiers: allTiers } = useCategorizedTiers();

  const { tiers: ownedTiers, loading: tiersLoading } =
    useOwnedCategorizedTiers(address);

  const { data: banny, loading: bannyLoading } = useDecoratedBanny(_tokenId);

  const equippedTierIds = useMemo(() => {
    if (!banny?.decoratedBanny || !allTiers) return;

    const { id, ...categories } = banny.decoratedBanny;

    return Object.entries(categories).reduce((acc, [category, tierId]) => {
      const _category = category as Category;

      const tierIdOfCategory = allTiers[_category].find(
        (t) => BigInt(t.tierId) === tierId
      )?.tierId;

      return tierIdOfCategory
        ? {
            ...acc,
            [_category]: tierIdOfCategory,
          }
        : acc;
    }, {} as Partial<Record<Category, number>>);
  }, [banny, allTiers]);

  const isOwner = useMemo(
    () => address === banny?.decoratedBanny?.nft.owner.address,
    [address, banny]
  );

  if (!equippedTierIds || !allTiers || !_tokenId) return null;

  if (tiersLoading || bannyLoading) return <FullscreenLoading />;

  if (isOwner && ownedTiers) {
    return (
      <EquipmentContextProvider
        availableTiers={ownedTiers}
        defaultEquippedTierIds={equippedTierIds}
      >
        <DressingRoom button={<DecorateButton />} />
      </EquipmentContextProvider>
    );
  }

  return (
    <EquipmentContextProvider
      availableTiers={allTiers}
      defaultEquippedTierIds={equippedTierIds}
    >
      <UnOwnedBannyPreview />
    </EquipmentContextProvider>
  );
}

function UnOwnedBannyPreview() {
  const { equipped } = useContext(EquipmentContext);

  return <EquippedTiersPreview size={400} equipped={equipped} />;
}
