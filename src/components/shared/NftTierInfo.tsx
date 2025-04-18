import { CATEGORIES } from "@/constants/category";
import { DROPS } from "@/constants/drops";
import { FONT_SIZE } from "@/constants/fontSize";
import { ITEM_DESCRIPTIONS } from "@/constants/itemDescriptions";
import { useBannyEquippedTiers } from "@/hooks/queries/useBannyEquippedTiers";
import { useMultichainSupplies } from "@/hooks/queries/useMultichainSupplies";
import { useSupportedChains } from "@/hooks/useSupportedChains";
import { useWindowSize } from "@/hooks/useWindowSize";
import { NFTMetadata } from "@/model/nftInfo";
import { TierOrNft } from "@/model/tierOrNft";
import { formatEther } from "juice-sdk-core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { isAddressEqual } from "viem";
import { useAccount } from "wagmi";
import ButtonPad from "./ButtonPad";
import FormattedAddress from "./FormattedAddress";
import RoundedFrame from "./RoundedFrame";

export default function NftTierInfo({ tierOrNft }: { tierOrNft: TierOrNft }) {
  const { address } = useAccount();

  const chains = useSupportedChains();

  const { data: equippedTiers } = useBannyEquippedTiers(
    tierOrNft.tokenId ? (tierOrNft as TierOrNft<true>) : undefined
  );

  const multiChainSupplies = useMultichainSupplies();

  const multiChainSupply = useMemo(
    () => multiChainSupplies?.[tierOrNft.tierId],
    [multiChainSupplies, tierOrNft.tierId]
  );

  const router = useRouter();

  const isOwned = useMemo(
    () =>
      address && tierOrNft?.owner
        ? isAddressEqual(tierOrNft.owner, address)
        : false,
    [tierOrNft, address]
  );

  const { isSmallScreen } = useWindowSize();

  const NftInfoRow = useCallback(
    ({
      label,
      value,
    }: {
      label: string;
      value: JSX.Element | string | number | undefined;
    }) => (
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          boxSizing: "border-box",
          gap: 24,
          width: "100%",
        }}
      >
        <div
          style={{
            fontWeight: "bolder",
            minWidth: 144,
            textTransform: "uppercase",
            opacity: 0.5,
          }}
        >
          {label}
        </div>
        <div style={{ flex: 1, maxWidth: 240 }}>{value}</div>
      </div>
    ),
    []
  );

  const NameDesc = useCallback(() => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <h1 style={{ fontSize: FONT_SIZE["3xl"], marginTop: 24 }}>
          {tierOrNft.metadata?.productName}
        </h1>

        <div style={{ display: "flex" }}>
          <RoundedFrame
            background={"black"}
            containerStyle={{ width: "auto" }}
            style={{
              padding: "8px 12px",
              color: "white",
              fontSize: FONT_SIZE.sm,
            }}
          >
            {formatEther(BigInt(tierOrNft.price))} ETH
          </RoundedFrame>
        </div>

        <p
          style={{
            fontSize: FONT_SIZE.sm,
            maxWidth: isSmallScreen ? "calc(100vw - 48px)" : 400,
          }}
        >
          {ITEM_DESCRIPTIONS[tierOrNft.tierId]}
        </p>
      </div>
    );
  }, [tierOrNft, isSmallScreen]);

  const Stock = useCallback(() => {
    if (!multiChainSupply) return null;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: FONT_SIZE.sm,
          gap: 8,
        }}
      >
        {chains.map(({ id, name }) => (
          <NftInfoRow
            key={id}
            label={name}
            value={`${multiChainSupply[id]?.remaining.toString() ?? "--"}/${
              multiChainSupply[id]?.initial.toString() ?? "--"
            }`}
          />
        ))}
      </div>
    );
  }, [NftInfoRow, chains, multiChainSupply]);

  const Specs = useCallback(() => {
    const drop = DROPS.find((d) => d.tierIds.includes(tierOrNft.tierId));

    const unstoredTiers =
      equippedTiers &&
      CATEGORIES.reduce((acc, category) => {
        const tier = equippedTiers[category];

        if (!tier?.embeddedSvgUrl) return acc;
        return [...acc, tier];
      }, [] as TierOrNft[]);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          fontSize: FONT_SIZE.sm,
        }}
      >
        {tierOrNft.owner && (
          <NftInfoRow
            label="Owner"
            value={
              <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                <Link href={`/locker/${tierOrNft.owner}`}>
                  <FormattedAddress
                    position="left"
                    address={tierOrNft.owner}
                    style={{ cursor: "pointer" }}
                  />
                </Link>{" "}
                {isOwned ? "(You) " : ""}
              </div>
            }
          />
        )}
        {drop && <NftInfoRow label="Drop" value={`#${drop.id} ${drop.name}`} />}
        <NftInfoRow label="Type" value={tierOrNft.category} />
        {(tierOrNft?.metadata as NFTMetadata)?.wornByBannyBodyId ? (
          <NftInfoRow
            label="Equipped"
            value={
              (tierOrNft?.metadata).wornByBannyBodyId === "0" ? "NO" : "YES"
            }
          />
        ) : null}
        {tierOrNft?.metadata?.outfitIds?.length && equippedTiers ? (
          <NftInfoRow
            label="Wearing"
            value={Object.values(equippedTiers)
              .filter((t) => t?.category !== "body")
              .map((t) => t.metadata?.productName)
              .join(", ")}
          />
        ) : null}
        {tierOrNft.tokenId && (
          <NftInfoRow label="Token Id" value={tierOrNft.tokenId} />
        )}
        {tierOrNft.chain && (
          <NftInfoRow label="Chain" value={tierOrNft.chain.name} />
        )}
        {tierOrNft.tokenId ? (
          <NftInfoRow
            label="SVGs"
            value={
              unstoredTiers?.length ? (
                <div>
                  {unstoredTiers.length} off-chain{" "}
                  <Link
                    href={`${
                      router.asPath.split("?")[0]
                    }?store-svgs=${unstoredTiers
                      .map((t) => t.tierId)
                      .join(",")}`}
                  >
                    Store on-chain
                  </Link>
                </div>
              ) : (
                "On-chain"
              )
            }
          />
        ) : tierOrNft.embeddedSvgUrl ? (
          <NftInfoRow
            label="SVG"
            value={
              <span>
                Not on-chain{" "}
                <Link
                  href={`${router.asPath.split("?")[0]}?store-svgs=${
                    tierOrNft.tierId
                  }`}
                >
                  Store
                </Link>
              </span>
            }
          />
        ) : null}
      </div>
    );
  }, [NftInfoRow, tierOrNft, equippedTiers, isOwned, router.asPath]);

  const Details = useCallback(() => {
    if (multiChainSupply) {
      return (
        <>
          <div>
            <div
              style={{
                fontSize: FONT_SIZE.sm,
                textTransform: "uppercase",
              }}
            >
              Available Stock
            </div>
            <RoundedFrame
              borderColor={"#ffffff88"}
              background={"#ffffff88"}
              style={{ padding: 12 }}
              containerStyle={{ marginTop: 4 }}
            >
              {tierOrNft.initialSupply < BigInt(999999999) ? (
                <Stock />
              ) : (
                <div style={{ fontSize: FONT_SIZE.sm }}>Unlimited</div>
              )}
            </RoundedFrame>
          </div>

          <div>
            <div
              style={{
                fontSize: FONT_SIZE.sm,
                textTransform: "uppercase",
              }}
            >
              Specs
            </div>
            <RoundedFrame
              borderColor={"#ffffff88"}
              background={"#ffffff88"}
              style={{ padding: 12 }}
              containerStyle={{ marginTop: 4 }}
            >
              <Specs />
            </RoundedFrame>
          </div>
        </>
      );
    }

    return <Specs />;
  }, [multiChainSupply, tierOrNft.initialSupply, Stock, Specs]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
      {tierOrNft.category === "body" ? <div /> : <NameDesc />}

      <Details />

      {isOwned && tierOrNft?.category === "body" && tierOrNft.tokenId && (
        <Link
          style={{ display: "block" }}
          href={`/dress/${tierOrNft.tokenId.toString()}`}
        >
          <ButtonPad style={{ padding: 16 }} dimension>
            Dressing room
          </ButtonPad>
        </Link>
      )}
    </div>
  );
}
