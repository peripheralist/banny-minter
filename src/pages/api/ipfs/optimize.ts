import axios from "axios";
import BASE from "base-x";
import FormData from "form-data";
import formidable from "formidable";
import { keccak256 } from "js-sha3";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "node:fs/promises";
import { IncomingMessage } from "node:http";
import { optimize } from "svgo";

export const config = { api: { bodyParser: false } }; // Important for multipart

/* ---------- helpers ---------- */

function stripSvgWrapper(svg: string) {
  return svg.replace(/^<svg[^>]*>|<\/svg>$/g, "");
}

function parseForm(req: IncomingMessage): Promise<formidable.Files> {
  const form = formidable();

  return new Promise((resolve, reject) => {
    form.parse(req, (err, _fields, files) => {
      if (err) reject(err);
      else resolve(files);
    });
  });
}

/* ---------- route ---------- */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const files = await parseForm(req);

    // ── 1. Grab the single uploaded file ──────────────────────────────
    const fileInput = files.file;
    const f = Array.isArray(fileInput) ? fileInput[0] : fileInput;

    if (!f) return res.status(400).json({ error: "No file uploaded" });

    const rawSvg = await fs.readFile(f.filepath, "utf8");

    // ── 2. Optimise SVG ───────────────────────────────────────────────
    const optimised = optimize(rawSvg, {
      multipass: true,
      plugins: [{ name: "preset-default" }],
      js2svg: { pretty: false },
    }).data.replace(/"/g, "'");

    const inner = stripSvgWrapper(optimised);

    const svgHash: `0x${string}` = `0x${keccak256(inner)}`;

    // ── 3. Upload to Infura IPFS ─────────────────────────────────────
    const fd = new FormData();
    fd.append(
      "file",
      Buffer.from(optimised),
      f.originalFilename ?? "upload.svg"
    );

    // ── 4. Respond ───────────────────────────────────────────────────
    return res.status(200).json({ svgHash, svgContents: inner });
  } catch (e) {
    return res
      .status(500)
      .json({ error: `IPFS error (${(e as Error).message})` });
  }
}
