export function decodeNFTInfo(uri: string | null | undefined) {
  if (!uri) return undefined;

  try {
    const base64 = uri.split("base64,")[1];

    const json: {
      image: string;
      name: string;
    } = JSON.parse(atob(base64));

    return json;
  } catch (e) {
    console.error("Failed to decode tokenURI", { uri, error: e });
  }
}
