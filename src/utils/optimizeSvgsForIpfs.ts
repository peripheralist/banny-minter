import axios from "axios";

export interface IpfsUploadResponse {
  svgHash: `0x${string}`;
  svgContents: string;
}

export interface FileUploadResult extends IpfsUploadResponse {
  fileName: string;
}

/**
 * Uploads many browser `File` objects to `/api/ipfs/upload`.
 * Resolves with results in the same order as the input array.
 */
export async function optimizeSvgsForIpfs(
  files: File[]
): Promise<FileUploadResult[]> {
  const tasks = files.map(async (file) => {
    const form = new FormData();
    form.append("file", file, file.name);

    try {
      const res = await axios.post("/api/ipfs/optimize", form);

      return { fileName: file.name, ...(res.data as IpfsUploadResponse) };
    } catch (e) {
      throw new Error(
        `Optimization failed for ${file.name}: ${(e as Error).message}`
      );
    }
  });

  return Promise.all(tasks);
}
