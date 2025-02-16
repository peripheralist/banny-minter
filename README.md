# Banny Retail App

Interface for Banny Retail ($BAN Revnet). Supports NFT minting, dressing Bannys, and exploring NFTs + activity in the BAN ecosystem across all supported blockchains.

## Dev

1. Install dependencies: `yarn install`

2. Generate graphql types: `yarn codegen`

3. Define .env variables: (see .example.env)

4. Serve app: `yarn dev`

> **Useful terms:**
> * `nft`: Unique minted token.
> * `tier`: Unique asset that can be minted as an NFT.
>   * e.g. "Banny Vision Pro", "Punk jacket"
>   * `tier:nft == 1:N`
> * `category`: Describes a type of tier asset. 16 total.
>   * e.g. "headgear", "suitTop"
>   * `category:tier == 1:N`
> * `categoryGroup`: Group of similar categories.
>   * e.g. `body` includes categories `suitTop`, `suitBottom`
>   * `categoryGroup:category == 1:N`
>   * An abstraction used by the UI that is *not* recognized by any on-chain smart contract.

## Scripts

`yarn download-svgs` downloads tier SVGs from Github and stores them in `src/constants/assetSvgs.ts` for use in displaying tier images. `assetSvgs.ts` is git tracked. You should only need this script if assets have changed.

## Infrastructure

### Subgraph

A subgraph url is used to query NFT tokens and tiers, using [Apollo graphql client](https://www.apollographql.com/). Types are generated at build time, using `yarn codegen`.

### juice-sdk-react

Used to interface with Juicebox contracts. [juice-sdk-v4](https://github.com/Bananapus/juice-sdk-v4)