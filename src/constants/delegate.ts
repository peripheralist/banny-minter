import { DEFAULT_ALLOW_OVERSPENDING } from "juice-sdk-core";
import { createMetadata } from "juicebox-metadata-helper";
import { Hash, encodeAbiParameters } from "viem";

// const IJBTiered721Delegate_V3_4_PAY_ID = "0x37323150"; // "721P", encoded as bytes4

interface Jb721DelegateV3_2PayMetadata {
  tierIdsToMint: bigint[];
  allowOverspending?: boolean;
}

function encodeJB721DelegateV3_4PayMetadata(
  metadata: Jb721DelegateV3_2PayMetadata
) {
  const args = [
    metadata.allowOverspending ?? DEFAULT_ALLOW_OVERSPENDING,
    metadata.tierIdsToMint.map(Number),
  ] as [boolean, readonly number[]];

  const encoded = encodeAbiParameters(
    [{ type: "bool" }, { type: "uint16[]" }],
    args
  );

  return encoded;
}

/**
 * Returns pay metadata for the given arguments, depending on the current datasource.
 * @note only supports JB721Delegate V3.4 datasource.
 * @note depends on JBDataSourceContext.
 * @todo support buy-back delegate.
 */
export function usePreparePayMetadata({
  address,
  tierIdsToMint,
}: {
  address?: string;
  tierIdsToMint?: bigint[];
}): Hash | null {
  if (!tierIdsToMint?.length || !address) {
    return null;
  }

  const jb721DelegateMetadata = encodeJB721DelegateV3_4PayMetadata({
    tierIdsToMint,
    allowOverspending: DEFAULT_ALLOW_OVERSPENDING,
  });

  const delegateId = address.substring(0, 10); // first 4 bytes of contract address, including 0x prefix

  const delegateIds: string[] = [delegateId];
  const metadatas: string[] = [jb721DelegateMetadata];

  return createMetadata(delegateIds, metadatas) as Hash;
}
