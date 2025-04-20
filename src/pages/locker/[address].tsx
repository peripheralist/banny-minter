import ButtonPad from "@/components/shared/ButtonPad";
import { CategoryGroupGrid } from "@/components/shared/CategoryGroupGrid";
import CustomHead from "@/components/shared/CustomHead";
import DressedBannyNftImage from "@/components/shared/DressedBannyNftImage";
import Loading from "@/components/shared/Loading";
import TierImage from "@/components/shared/TierImage";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { WalletContext } from "@/contexts/walletContext";
import { useNftsOf } from "@/hooks/queries/useNftsOf";
import { useAppChain } from "@/hooks/useAppChain";
import { useWindowSize } from "@/hooks/useWindowSize";
import { chainName } from "@/utils/chainName";
import { parseTierOrNft } from "@/utils/parseTier";
import { ROUTES } from "@/utils/routes";
import { formatEthAddress } from "juice-sdk-core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import { Address, isAddress } from "viem";
import { useEnsName } from "wagmi";

export default function Index() {
  const router = useRouter();

  const address = router.query.address as Address | undefined;

  const { data: ensName } = useEnsName({ address, chainId: 1 });

  const { switchChain } = useContext(WalletContext);

  const appChain = useAppChain();

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
                  <CategoryGroupGrid
                    label
                    items={nfts?.nfts.items.map((nft) => parseTierOrNft(nft))}
                    gridStyle={{
                      gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
                      gap: 4,
                    }}
                    emptyText="None owned"
                    render={(nft) => {
                      return (
                        <ButtonPad
                          key={`${nft.chainId}-${nft.tokenId}`}
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
                          <Link
                            href={`${router.asPath}${ROUTES.nftPath({
                              chainId: nft.chainId,
                              tokenId: nft.tokenId,
                            })}`}
                          >
                            <div style={{ pointerEvents: "none" }}>
                              {nft.category === "body" ? (
                                <DressedBannyNftImage
                                  nft={nft}
                                  size={imgSize}
                                />
                              ) : (
                                <TierImage tier={nft} size={imgSize} />
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
                              <div>{nft.name}</div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  fontSize: FONT_SIZE.xs,
                                }}
                              >
                                <span style={{ opacity: 0.5 }}>
                                  #{nft.tokenId.toString()}
                                </span>
                                <span
                                  style={{
                                    color: COLORS.blue400,
                                    textTransform: "uppercase",
                                  }}
                                >
                                  {chainName(nft.chainId)}
                                </span>
                              </div>
                            </div>
                          </Link>

                          {nft.category === "body" &&
                            (nft.chainId === appChain.id ? (
                              <Link
                                href={`/dress/${nft.tokenId.toString()}`}
                                style={{ width: "100%" }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ButtonPad
                                  containerStyle={{
                                    margin: 4,
                                    marginTop: 0,
                                    marginBottom: 8,
                                  }}
                                  style={{ padding: 8 }}
                                  shadow="sm"
                                >
                                  Dress
                                </ButtonPad>
                              </Link>
                            ) : (
                              <div
                                style={{ width: "100%" }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ButtonPad
                                  containerStyle={{
                                    margin: 4,
                                    marginTop: 0,
                                    marginBottom: 8,
                                  }}
                                  style={{
                                    padding: 8,
                                    color: COLORS.blue400,
                                    fontSize: FONT_SIZE.sm,
                                    lineHeight: 1.4,
                                  }}
                                  shadow="sm"
                                  onClick={() => switchChain?.(nft.chainId)}
                                >
                                  Dress on {chainName(nft.chainId)}
                                </ButtonPad>
                              </div>
                            ))}
                        </ButtonPad>
                      );
                    }}
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
