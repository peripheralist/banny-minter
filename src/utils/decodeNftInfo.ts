import { NFTInfo } from "@/model/nftInfo";

export function decodeNFTInfo(
  uri: string | null | undefined
): NFTInfo | undefined {
  if (!uri) return undefined;

  try {
    const base64 = uri.split("base64,")[1];

    const jsonStr = atob(base64);

    const json = JSON.parse(jsonStr.replaceAll(",]", "]"));

    console.log("asdf json", json);

    return json;
  } catch (e) {
    console.error("Failed to decode nft info", { uri, error: e });
  }
}
