import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.IPFS_INFURA_API_KEY;
const apiKeySecret = process.env.IPFS_INFURA_API_KEY_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!apiKey || !apiKeySecret) {
      throw new Error("Missing apiKey or apiKeySecret");
    }

    const cid = req.query["cid"];

    if (typeof cid !== "string") {
      return res.status(400);
    }

    const _uri = `https://ipfs.infura.io:5001/api/v0/get?arg=${cid}`;

    await axios
      .post(
        _uri,
        {},
        {
          headers: {
            Authorization: `Basic ${btoa(`${apiKey}:${apiKeySecret}`)}`,
          },
          timeout: 10000,
        }
      )
      .then((_res) => {
        const formattedRes = `{${_res.data.split("{")[1].split("}")[0]}}`;

        try {
          return res.status(200).send(formattedRes);
        } catch (e) {
          console.log("Error formatting metadata response", formattedRes);
          return res.status(500);
        }
      });
  } catch (e) {
    res.status(500);
  }
}
