import { categoryOfId } from "@/constants/category";
import { NfTsQuery, NftTiersQuery } from "@/generated/graphql";
import { TierOrNft } from "@/model/tierOrNft";
import { config } from "../../config.wagmi";

type _Tier = NftTiersQuery["nftTiers"]["items"][number];
type _Nft = NfTsQuery["nfts"]["items"][number];

export const parseTierOrNft = (
  tierOrNft: (_Tier | _Nft) & { tokenId?: _Nft["tokenId"] }
) => {
  const imgHref = '<image href="';

  let embeddedSvgUrl: string | undefined = undefined;

  const svg = (tierOrNft as _Tier).svg || (tierOrNft as _Nft).tier?.svg;

  if (svg?.includes(imgHref)) {
    // Pre-load images embedded in SVG to ensure they load in browser. May not be necessary.
    let embeddedImageUrl = svg.split(imgHref)[1];
    embeddedImageUrl = embeddedImageUrl.split('"')[0].replace(
      "bannyverse.infura-ipfs.io",
      "ipfs.io" // bannyverse gateway returning SSL error, issue unclear
    );
    const img = new Image();
    img.src = embeddedImageUrl;

    embeddedSvgUrl = embeddedImageUrl;
  }

  const _nft = (tierOrNft as _Nft).tokenId ? (tierOrNft as _Nft) : undefined;

  const _tier = _nft?.tier ?? tierOrNft;

  const initialSupply =
    _nft?.tier?.initialSupply ?? (tierOrNft as _Tier).initialSupply;
  const remainingSupply =
    _nft?.tier?.remainingSupply ?? (tierOrNft as _Tier).remainingSupply;
  const reserveFrequency =
    _nft?.tier?.reserveFrequency ?? (tierOrNft as _Tier).reserveFrequency ?? 0;

  const reserveQuantity =
    reserveFrequency > 0 ? Math.ceil(initialSupply / reserveFrequency) : 0;

  return {
    ..._tier,
    name: tierOrNft?.metadata.productName,
    svg: svg?.toLowerCase().includes("<script") ? null : svg ?? null, // crude injected script protection
    category: categoryOfId[tierOrNft?.category!],
    embeddedSvgUrl,
    tokenId: _nft?.tokenId ? Number(_nft.tokenId) : undefined,
    chain: _nft?.chainId
      ? config.chains.find((c) => c.id === _nft.chainId)
      : undefined,
    owner: _nft?.wallet ? (_nft.wallet?.address as `0x${string}`) : undefined,
    initialSupply: initialSupply - reserveQuantity,
    remainingSupply: remainingSupply - reserveQuantity,
    reserveQuantity,
    metadata: _nft?.metadata || _tier.metadata,
  } as TierOrNft<typeof tierOrNft.tokenId extends undefined ? false : true>;
};
