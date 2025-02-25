export function tierIdOfTokenId(tokenId: number) {
  return Math.floor(tokenId / 1000000000);
}
