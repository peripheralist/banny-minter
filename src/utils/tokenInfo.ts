export function decodeNFTInfo(uri: string | null | undefined) {
  if (!uri) return undefined;

  try {
    const base64 = uri.split("base64,")[1];

    const jsonStr = atob(base64).replace("],", ""); // temp hack

    const json: {
      image: string;
      productName: string;
    } = JSON.parse(jsonStr);

    return json;
  } catch (e) {
    console.error("Failed to decode tokenURI", { uri, error: e });
  }
}
