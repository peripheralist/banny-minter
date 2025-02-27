import ButtonPad from "@/components/shared/ButtonPad";
import { CategoryGroupGrid } from "@/components/shared/CategoryGroupGrid";
import CustomHead from "@/components/shared/CustomHead";
import DressedBannyNftImage from "@/components/shared/DressedBannyNftImage";
import Loading from "@/components/shared/Loading";
import TierImage from "@/components/shared/TierImage";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { CATEGORY_IDS, categoryOfId } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { WalletContext } from "@/contexts/walletContext";
import { useNftsOf } from "@/hooks/queries/useNftsOf";
import { useAppChain } from "@/hooks/useAppChain";
import { useWindowSize } from "@/hooks/useWindowSize";
import { parseTier } from "@/utils/parseTier";
import { formatEthAddress } from "juice-sdk-core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useMemo } from "react";
import { Address, isAddress } from "viem";
import { useEnsName } from "wagmi";

export default function Index() {
  const router = useRouter();

  const { switchChain } = useContext(WalletContext);

  const address = router.query.address as Address | undefined;

  const { data: ensName } = useEnsName({ address, chainId: 1 });

  const appChain = useAppChain();

  const { data: nfts, loading, refetch } = useNftsOf(address);

  useEffect(() => {
    refetch();
  }, [appChain, refetch]);

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
      <CustomHead title={`Locker - ${address}`} />

      <main>
        <ToolbarBagView
          dynamicToolbar
          sections={[
            {
              header: `${
                ensName ? ensName.split(".eth")[0] : formatEthAddress(address)
              }'s locker`,
              contentStyle: {
                position: "relative",
                padding: 48,
                paddingLeft: 136,
                paddingTop: 16,
              },
              content: loading ? (
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
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                    }}
                  >
                    <h1>Network:</h1>
                    <ButtonPad
                      shadow="none"
                      fillFg={COLORS.pink}
                      onClick={switchChain}
                      style={{ padding: 8, color: "white" }}
                    >
                      {appChain.name}
                    </ButtonPad>
                  </div>

                  <CategoryGroupGrid
                    label
                    items={nfts?.nfts.map((nft) => ({
                      ...nft,
                      category: categoryOfId[nft.category],
                    }))}
                    gridStyle={{
                      gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
                      gap: 4,
                    }}
                    emptyText="None owned"
                    render={(nft) => (
                      <Link
                        key={nft.tokenId}
                        href={`${router.asPath}?nft=${nft.tokenId}`}
                      >
                        <ButtonPad
                          fillBorder="white"
                          fillFg={"white"}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: 4,
                          }}
                          shadow="sm"
                        >
                          <div style={{ pointerEvents: "none" }}>
                            {nft.category === "body" ? (
                              <DressedBannyNftImage
                                nft={{
                                  ...nft,
                                  category: CATEGORY_IDS[nft.category],
                                }}
                                size={imgSize}
                              />
                            ) : (
                              <TierImage
                                tier={parseTier(nft.tier)}
                                size={imgSize}
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
                            <div
                              style={{ fontSize: FONT_SIZE.xs, opacity: 0.5 }}
                            >
                              #{nft.tokenId.toString()}
                            </div>
                          </div>

                          {nft.category === "body" && (
                            <Link
                              href={`/dress/${nft.tokenId.toString()}`}
                              style={{ width: "100%" }}
                            >
                              <ButtonPad
                                containerStyle={{ margin: 4, marginBottom: 8 }}
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
              ),
            },
          ]}
        />
      </main>
    </>
  );
}
