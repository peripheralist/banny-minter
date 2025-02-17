import { CATEGORY_GROUPS, CATEGORY_GROUP_NAMES } from "@/constants/category";
import { DROPS } from "@/constants/drops";
import { FONT_SIZE } from "@/constants/fontSize";
import { ITEM_DESCRIPTIONS } from "@/constants/itemDescriptions";
import { useBannyEquippedTiers } from "@/hooks/queries/useBannyEquippedTiers";
import { useSupportedChains } from "@/hooks/useSupportedChains";
import { useWindowSize } from "@/hooks/useWindowSize";
import { NFT } from "@/model/nft";
import { Tier } from "@/model/tier";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { formatEther } from "juice-sdk-core";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { isAddressEqual } from "viem";
import { useAccount } from "wagmi";
import ButtonPad from "./ButtonPad";
import FormattedAddress from "./FormattedAddress";
import RoundedFrame from "./RoundedFrame";

export default function NftTierInfo({ tier, nft }: { tier: Tier; nft?: NFT }) {
  const { address } = useAccount();

  const chains = useSupportedChains();

  const { data: equippedTiers } = useBannyEquippedTiers(nft);

  const isOwned = useMemo(
    () =>
      address && nft?.owner.address
        ? isAddressEqual(nft?.owner.address, address)
        : false,
    [nft?.owner.address, address]
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
        <div style={{ flex: 1 }}>{value}</div>
      </div>
    ),
    []
  );

  const NameDesc = useCallback(() => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <h1 style={{ fontSize: FONT_SIZE["3xl"], marginTop: 24 }}>
          {tier.name}
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
            {formatEther(BigInt(tier.price))} ETH
          </RoundedFrame>
        </div>

        <p
          style={{
            fontSize: FONT_SIZE.sm,
            maxWidth: isSmallScreen ? "calc(100vw - 48px)" : 400,
          }}
        >
          {ITEM_DESCRIPTIONS[tier.tierId]}
        </p>
      </div>
    );
  }, [tier, isSmallScreen]);

  const Stock = useCallback(() => {
    if (!tier.multiChainSupply) return null;

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
            value={`${
              tier.multiChainSupply?.[id]?.remaining.toString() ?? "--"
            }/${tier.multiChainSupply?.[id]?.initial.toString() ?? "--"}`}
          />
        ))}
      </div>
    );
  }, [tier.multiChainSupply, NftInfoRow, chains]);

  const Specs = useCallback(() => {
    const decoded = decodeNFTInfo(nft?.tokenUri);

    const drop = DROPS.find((d) => d.tierIds.includes(tier.tierId));

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          fontSize: FONT_SIZE.sm,
        }}
      >
        {nft && (
          <NftInfoRow
            label="Owner"
            value={
              <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                <FormattedAddress address={nft?.owner.address} />{" "}
                {isOwned ? "(You) " : ""}
              </div>
            }
          />
        )}
        {drop && <NftInfoRow label="Drop" value={`#${drop.id} ${drop.name}`} />}
        <NftInfoRow label="Type" value={tier.category} />
        {decoded?.wornByBannyBodyId ? (
          <NftInfoRow
            label="Equipped"
            value={decoded.wornByBannyBodyId === "0" ? "NO" : "YES"}
          />
        ) : null}
        {decoded?.outfitIds?.length && equippedTiers ? (
          <NftInfoRow
            label="Wearing"
            value={Object.values(equippedTiers)
              .filter((t) => t?.category !== "body")
              .map((t) => t?.name)
              .join(", ")}
          />
        ) : null}
        {nft && <NftInfoRow label="Token Id" value={nft.tokenId.toString()} />}
        {tier.embeddedSvgUrl && (
          <NftInfoRow
            label="SVG"
            value={
              <span>
                Not stored <Link href={`/svg/${tier.tierId}`}>Store</Link>
              </span>
            }
          />
        )}
      </div>
    );
  }, [NftInfoRow, nft, equippedTiers, isOwned, tier]);

  const Details = useCallback(() => {
    if (tier.multiChainSupply) {
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
              <Stock />
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
  }, [tier.multiChainSupply, Stock, Specs]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
      <NameDesc />

      <Details />

      {nft && isOwned && nft?.category === 0 && (
        <Link
          style={{ display: "block" }}
          href={`/dress/${nft.tokenId.toString()}`}
        >
          <ButtonPad style={{ padding: 16 }} dimension>
            Dressing room
          </ButtonPad>
        </Link>
      )}
    </div>
  );
}
