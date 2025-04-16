import { NextRouter } from "next/router";

function nftPath({
  chainId,
  tokenId,
}: {
  chainId: number;
  tokenId: number | string | bigint;
}) {
  return `?nft=${chainId}:${tokenId.toString()}`;
}

function toTier({ router, tierId }: { router: NextRouter; tierId: number }) {
  router.push(router.asPath + `?item=${tierId}`, undefined, {
    shallow: true,
  });
}

function tierPath({ tierId }: { tierId: number }) {
  return `?item=${tierId}`;
}

export const ROUTES = {
  nftPath,
  toTier,
  tierPath,
};
