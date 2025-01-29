import ButtonPad from "@/components/shared/ButtonPad";
import { CategoryGroupGrid } from "@/components/shared/CategoryGroupGrid";
import DressedBannyNftImage from "@/components/shared/DressedBannyNftImage";
import Loading from "@/components/shared/Loading";
import TierImage from "@/components/shared/TierImage";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { CATEGORY_IDS, categoryOfId } from "@/constants/category";
import { FONT_SIZE } from "@/constants/fontSize";
import { useNftsOf } from "@/hooks/queries/useNftsOf";
import { useWindowSize } from "@/hooks/useWindowSize";
import { parseTier } from "@/utils/parseTier";
import { formatEthAddress } from "juice-sdk-core";
import Head from "next/head";
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
    () => (isSmallScreen ? (width ? (width - 32) / 2 : 320) : 240),
    [isSmallScreen, width]
  );

  if (!address || Array.isArray(address) || !isAddress(address)) {
    return <div>Bad route</div>;
  }

  return (
    <>
      <Head>
        <title>Locker - {address}</title>
        <meta property="og:image" content="/assets/homepage.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToolbarBagView
          frame
          dynamicToolbar
          header={`${ensName ?? formatEthAddress(address)}'s locker`}
          frameStyle={{
            position: "relative",
            padding: 48,
            paddingLeft: 120,
            paddingTop: 16,
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
                  gridTemplateColumns: `repeat(auto-fit, ${imgSize + 2}px)`,
                  gap: 4,
                }}
                emptyText="None owned"
                render={(nft) => (
                  <Link key={nft.tokenId} href={`/nft/${nft.tokenId}`}>
                    <ButtonPad
                      fillBorder="white"
                      fillFg={"white"}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: 4,
                        paddingTop: 8,
                      }}
                      shadow="sm"
                    >
                      <div style={{ pointerEvents: "none" }}>
                        {nft.category === "naked" ? (
                          <DressedBannyNftImage
                            size={imgSize - 16}
                            nft={{
                              ...nft,
                              category: CATEGORY_IDS[nft.category],
                            }}
                          />
                        ) : (
                          <TierImage
                            tier={parseTier(nft.tier)}
                            size={imgSize - 16}
                          />
                        )}
                      </div>

                      <div
                        style={{
                          color: "black",
                          background: "white",
                          width: "100%",
                          padding: 8,
                          boxSizing: "border-box",
                        }}
                      >
                        <div>{parseTier(nft.tier)?.name}</div>
                        <div style={{ fontSize: FONT_SIZE.xs, opacity: 0.5 }}>
                          #{nft.tokenId.toString()}
                        </div>
                      </div>

                      {nft.category === "naked" && (
                        <Link
                          href={`/dress/${nft.tokenId.toString()}`}
                          style={{ width: "100%" }}
                        >
                          <ButtonPad
                            containerStyle={{ marginBottom: 4 }}
                            style={{ padding: 8 }}
                            shadow="sm"
                          >
                            Dress
                          </ButtonPad>
                        </Link>
                      )}
                    </ButtonPad>
                  </Link>
                )}
              />
            </div>
          )}
        </ToolbarBagView>
      </main>
    </>
  );
}
