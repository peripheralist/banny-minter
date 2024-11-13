import { TOOLBAR_HEIGHT } from "@/components/Toolbar";
import ToolbarBagView from "@/components/ToolbarBagView";
import Fuzz from "@/components/pixelRenderers/Fuzz";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import {
  CATEGORY_GROUPS,
  CATEGORY_GROUP_NAMES,
  CATEGORY_IDS,
  CategoryGroup,
  categoryOfId,
} from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { NfTsQuery } from "@/generated/graphql";
import { useNftsOf } from "@/hooks/queries/useNftsOf";
import { parseTier } from "@/utils/parseTier";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { isAddress } from "viem";
import { useEnsName } from "wagmi";
import DressedBannyNftImage from "./DressedBannyNftImage";

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
          bottom: -12,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "black",
          fontSize: FONT_SIZE.xs,
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
        const content =
          nft.category === CATEGORY_IDS["naked"] ? (
            <>
              <DressedBannyNftImage size={IMG_SIZE - 16} nft={nft} />
              <TokenId tokenId={nft.tokenId} />
            </>
          ) : (
            <>
              <TierImage tier={parseTier(nft.tier)} size={IMG_SIZE - 16} />
              <TokenId tokenId={nft.tokenId} />
            </>
          );

        return (
          <Link key={nft.tokenId} href={`/nft/${nft.tokenId}`}>
            <RoundedFrame
              style={{ width: IMG_SIZE, height: IMG_SIZE }}
              background={"white"}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  pointerEvents: "none",
                }}
              >
                {content}
              </div>
            </RoundedFrame>
          </Link>
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
