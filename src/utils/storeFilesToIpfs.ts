import axios from "axios";
import type { Dispatch, SetStateAction } from "react";

export interface IpfsUploadResponse {
  cid: string; // e.g. Qm…
  encodedCid: `0x${string}`; // hex-encoded, ready for on-chain use
  svgHash: `0x${string}`;
}

export interface FileUploadResult extends IpfsUploadResponse {
  fileName: string;
}

/**
 * Uploads many browser `File` objects to `/api/ipfs/upload`.
 * Resolves with results in the same order as the input array.
 */
export async function storeFilesToIpfs(
  files: File[],
  onProgress?: Dispatch<SetStateAction<number>>
): Promise<FileUploadResult[]> {
  let completed = 0;

  const tasks = files.map(async (file) => {
    const form = new FormData();
    form.append("file", file, file.name);

    try {
      const res = await axios.post("/api/ipfs/upload", form);

      const { cid, encodedCid, svgHash } = res.data as IpfsUploadResponse;

      completed++;
      onProgress?.(Math.round((completed / files.length) * 100));

      return { fileName: file.name, cid, encodedCid, svgHash };
    } catch (e) {
      throw new Error(
        `Upload failed for ${file.name}: ${(e as Error).message}`
      );
    }
  });

  return Promise.all(tasks);
}
