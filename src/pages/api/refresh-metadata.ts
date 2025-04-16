import { BAN_HOOK } from "@/constants/contracts";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.OS_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405);
    }

    if (!apiKey) {
      throw new Error("Missing API key");
    }

    const { chainId, tokenId } = req.body;
    if (!chainId || !tokenId) {
      return res.status(400);
    }

    await axios.post(
      `https://api.opensea.io/api/v2/chain/${chainId}/contract/${BAN_HOOK}/nfts/${tokenId}/refresh`,
      {
        headers: {
          "x-api-key": apiKey,
        },
      }
    );

    res.status(201);
  } catch (e) {
    res.status(500);
  }
}
