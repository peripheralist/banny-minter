import ButtonPad from "@/components/shared/ButtonPad";
import { CategoryGroupGrid } from "@/components/shared/CategoryGroupGrid";
import DressedBannyNftImage from "@/components/shared/DressedBannyNftImage";
import Loading from "@/components/shared/Loading";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { CATEGORY_IDS, categoryOfId } from "@/constants/category";
import { FONT_SIZE } from "@/constants/fontSize";
import { useNftsOf } from "@/hooks/queries/useNftsOf";
import { useWindowSize } from "@/hooks/useWindowSize";
import { parseTier } from "@/utils/parseTier";
import { formatEthAddress } from "juice-sdk-core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { Address, isAddress } from "viem";
import { useEnsName } from "wagmi";

export default function Index() {
  const router = useRouter();

  const address = router.query.address as Address | undefined;

  const { data: ensName } = useEnsName({ address });

  const { data: nfts, loading } = useNftsOf(address);

  const { isSmallScreen, width } = useWindowSize();

  const imgSize = useMemo(
    () => (isSmallScreen ? (width ? (width - 40) / 2 : 320) : 240),
    [isSmallScreen, width]
  );

  if (!address || Array.isArray(address) || !isAddress(address)) {
    return <div>Bad route</div>;
  }

  return (
    <ToolbarBagView
      frame
      header={`${ensName ?? formatEthAddress(address)}'s locker`}
      frameStyle={{
        position: "relative",
        ...(isSmallScreen
          ? {
              paddingTop: 16,
            }
          : {
              padding: 48,
              paddingLeft: 120,
              paddingTop: 16,
            }),
      }}
    >
      {loading ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: 200, height: 200 }}>
            <Loading />
          </div>
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
          <CategoryGroupGrid
            label
            items={nfts?.nfts.map((nft) => ({
              ...nft,
              category: categoryOfId[nft.category],
            }))}
            gridStyle={{
              gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
              gap: 16,
            }}
            render={(nft) => (
              <Link key={nft.tokenId} href={`/nft/${nft.tokenId}`}>
                <div>
                  <RoundedFrame
                    background={"white"}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pointerEvents: "none",
                    }}
                  >
                    {nft.category === "naked" ? (
                      <DressedBannyNftImage
                        size={imgSize - 8}
                        nft={{ ...nft, category: CATEGORY_IDS[nft.category] }}
                      />
                    ) : (
                      <TierImage
                        tier={parseTier(nft.tier)}
                        size={imgSize - 8}
                      />
                    )}

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
                      #{nft.tokenId.toString()}
                    </div>
                  </RoundedFrame>
                </div>

                {nft.category === "naked" && (
                  <Link href={`/dress/${nft.tokenId.toString()}`}>
                    <ButtonPad
                      containerStyle={{ marginTop: 12 }}
                      style={{ padding: 8 }}
                    >
                      Dress
                    </ButtonPad>
                  </Link>
                )}
              </Link>
            )}
          />
        </div>
      )}
    </ToolbarBagView>
  );
}
