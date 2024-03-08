# Bannyverse Minting App

Obnoxiously fun. Full of itself. Might crash your browser.

## Dev

1. Install dependencies: `yarn install`

2. Generate graphql types: `yarn codegen`

3. Define .env variables:

```
NEXT_PUBLIC_CHAIN_ID= # 1, 1155511
SUBGRAPH_URL= # url used for requests from server
NEXT_PUBLIC_SUBGRAPH_URL= # url used for requests from client
NEXT_PUBLIC_INFURA_API_KEY= # Infura api key. If not provided, a public provider url will be used
```

4. Serve app: `yarn dev`

## Infrastructure

### Subgraph

A subgraph url is used to query NFT tokens and tiers, using [Apollo graphql client](https://www.apollographql.com/). Types are generated at build time, using `yarn codegen`.

### juice-sdk-react

Used to interface with Juicebox contracts. [juice-sdk-v4](https://github.com/Bananapus/juice-sdk-v4)