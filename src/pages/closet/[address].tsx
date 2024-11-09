import { TOOLBAR_HEIGHT } from "@/components/Toolbar";
import ToolbarBagView from "@/components/ToolbarBagView";
import Fuzz from "@/components/pixelRenderers/Fuzz";
import TierImage from "@/components/shared/TierImage";
import { FONT_SIZE } from "@/constants/fontSize";
import { useNftsOf } from "@/hooks/queries/useNftsOf";
import { parseTier } from "@/utils/parseTier";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { isAddress } from "viem";
import { useEnsName } from "wagmi";
import DressedBannyNftImage from "./DressedBannyNftImage";
import {
  CATEGORIES,
  CATEGORY_GROUPS,
  CATEGORY_GROUP_NAMES,
  CATEGORY_IDS,
  CategoryGroup,
  categoryOfId,
} from "@/constants/category";
import { NfTsQuery } from "@/generated/graphql";
import RoundedFrame from "@/components/shared/RoundedFrame";
import { COLORS } from "@/constants/colors";

const IMG_SIZE = 200;

export default function Index() {
  const router = useRouter();

  const address = router.query.address as `0x${string}` | undefined;

  const { data: ensName } = useEnsName({ address });

  const { data: nfts, loading } = useNftsOf(address);

  const nftsByCategoryGroup = useMemo(() => {
    return Object.entries(CATEGORY_GROUPS).reduce(
      (acc, [group, categories]) => {
        const _nfts = nfts?.nfts.filter((nft) =>
          categories.includes(categoryOfId[nft.category])
        );

        return {
          ...acc,
          [group]: [...(acc[group as CategoryGroup] ?? []), ...(_nfts ?? [])],
        };
      },
      {} as Record<CategoryGroup, NfTsQuery["nfts"][number][]>
    );
  }, [nfts]);

  const TokenId = useCallback(
    ({ tokenId }: { tokenId: bigint }) => (
      <div
        style={{
          position: "absolute",
          bottom: -16,
          left: 0,
          right: 0,
          color: "#00000088",
          textAlign: "center",
          fontSize: FONT_SIZE.sm,
        }}
      >
        #{tokenId.toString()}
      </div>
    ),
    []
  );

  const CategoryGrids = useCallback(() => {
    return CATEGORY_GROUP_NAMES.map((g) => {
      const contents = nftsByCategoryGroup[g].map((nft) => {
        const item =
          nft.category === CATEGORY_IDS["naked"] ? (
            <Link href={`/nft/${nft.tokenId}`}>
              <div style={{ pointerEvents: "none", position: "relative" }}>
                <DressedBannyNftImage size={IMG_SIZE} nft={nft} />
                <TokenId tokenId={nft.tokenId} />
              </div>
            </Link>
          ) : (
            <Link href={`/nft/${nft.tokenId}`}>
              <div
                style={{
                  width: IMG_SIZE,
                  height: IMG_SIZE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                  position: "relative",
                }}
              >
                <TierImage tier={parseTier(nft.tier)} size={160} />
                <TokenId tokenId={nft.tokenId} />
              </div>
            </Link>
          );

        return (
          <RoundedFrame key={nft.tokenId} background={"white"}>
            {item}
          </RoundedFrame>
        );
      });

      return (
        <div key={g + "_grid"} style={{ padding: 12, paddingLeft: 160 }}>
          <div
            style={{
              position: "sticky",
              top: 12,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: -168,
              }}
            >
              <RoundedFrame
                background={"black"}
                style={{
                  padding: "12px 16px",
                  height: 40,
                  color: COLORS.bananaLite,
                }}
              >
                {g} ({contents.length})
              </RoundedFrame>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fit, ${IMG_SIZE}px)`,
              gap: 12,
            }}
          >
            {contents?.length ? (
              contents
            ) : (
              <div key={g} style={{ padding: "12px 0" }}>
                No items
              </div>
            )}
          </div>
        </div>
      );
    });
  }, [TokenId, nftsByCategoryGroup]);

  if (!address || Array.isArray(address) || !isAddress(address)) {
    return <div>Bad route</div>;
  }

  return (
    <ToolbarBagView frame header={`${ensName ?? address}'s closet`}>
      <div>
        {loading ? (
          <div
            style={{
              height: `calc(84vh - ${TOOLBAR_HEIGHT}px)`,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Fuzz height={120} width={120} />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 64,
              paddingBottom: 64,
            }}
          >
            <CategoryGrids />
          </div>
        )}
      </div>
    </ToolbarBagView>
  );
}
