export function decodeNFTInfo(uri: string | null | undefined) {
  if (!uri) return undefined;

  try {
    const json: { [image: string]: string } = JSON.parse(
      atob(uri.split("base64,")[1])
    );

    return json as { image: string; name: string };
  } catch (e) {
    console.error("Failed to decode tokenURI", { uri, error: e });
  }
}
