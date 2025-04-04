import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: bigint; output: bigint; }
  JSON: { input: any; output: any; }
};

export type Meta = {
  status: Maybe<Scalars['JSON']['output']>;
};

export type PageInfo = {
  endCursor: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Maybe<Scalars['String']['output']>;
};

export type Query = {
  _meta: Maybe<Meta>;
  addToBalanceEvent: Maybe<AddToBalanceEvent>;
  addToBalanceEvents: AddToBalanceEventPage;
  cashOutTokensEvent: Maybe<CashOutTokensEvent>;
  cashOutTokensEvents: CashOutTokensEventPage;
  decorateBannyEvent: Maybe<DecorateBannyEvent>;
  decorateBannyEvents: DecorateBannyEventPage;
  internal: Maybe<Internal>;
  internals: InternalPage;
  mintNftEvent: Maybe<MintNftEvent>;
  mintNftEvents: MintNftEventPage;
  mintTokensEvent: Maybe<MintTokensEvent>;
  mintTokensEvents: MintTokensEventPage;
  nft: Maybe<Nft>;
  nftHook: Maybe<NftHook>;
  nftHooks: NftHookPage;
  nftTier: Maybe<NftTier>;
  nftTiers: NftTierPage;
  nfts: NftPage;
  payEvent: Maybe<PayEvent>;
  payEvents: PayEventPage;
  project: Maybe<Project>;
  projects: ProjectPage;
  sendPayoutToSplitEvent: Maybe<SendPayoutToSplitEvent>;
  sendPayoutToSplitEvents: SendPayoutToSplitEventPage;
  sendPayoutsEvent: Maybe<SendPayoutsEvent>;
  sendPayoutsEvents: SendPayoutsEventPage;
  sendReservedTokensToSplitEvent: Maybe<SendReservedTokensToSplitEvent>;
  sendReservedTokensToSplitEvents: SendReservedTokensToSplitEventPage;
  sendReservedTokensToSplitsEvent: Maybe<SendReservedTokensToSplitsEvent>;
  sendReservedTokensToSplitsEvents: SendReservedTokensToSplitsEventPage;
  useAllowanceEvent: Maybe<UseAllowanceEvent>;
  useAllowanceEvents: UseAllowanceEventPage;
};


export type QueryAddToBalanceEventArgs = {
  chainId: Scalars['Float']['input'];
  txHash: Scalars['String']['input'];
  txIndex: Scalars['Float']['input'];
};


export type QueryAddToBalanceEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AddToBalanceEventFilter>;
};


export type QueryCashOutTokensEventArgs = {
  chainId: Scalars['Float']['input'];
  txHash: Scalars['String']['input'];
  txIndex: Scalars['Float']['input'];
};


export type QueryCashOutTokensEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<CashOutTokensEventFilter>;
};


export type QueryDecorateBannyEventArgs = {
  chainId: Scalars['Float']['input'];
  txHash: Scalars['String']['input'];
  txIndex: Scalars['Float']['input'];
};


export type QueryDecorateBannyEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DecorateBannyEventFilter>;
};


export type QueryInternalArgs = {
  chainId: Scalars['Int']['input'];
};


export type QueryInternalsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<InternalFilter>;
};


export type QueryMintNftEventArgs = {
  caller: Scalars['String']['input'];
  chainId: Scalars['Float']['input'];
  txHash: Scalars['String']['input'];
};


export type QueryMintNftEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<MintNftEventFilter>;
};


export type QueryMintTokensEventArgs = {
  chainId: Scalars['Float']['input'];
  txHash: Scalars['String']['input'];
  txIndex: Scalars['Float']['input'];
};


export type QueryMintTokensEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<MintTokensEventFilter>;
};


export type QueryNftArgs = {
  chainId: Scalars['Float']['input'];
  hook: Scalars['String']['input'];
  tokenId: Scalars['BigInt']['input'];
};


export type QueryNftHookArgs = {
  address: Scalars['String']['input'];
  chainId: Scalars['Float']['input'];
};


export type QueryNftHooksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<NftHookFilter>;
};


export type QueryNftTierArgs = {
  chainId: Scalars['Float']['input'];
  hook: Scalars['String']['input'];
  tierId: Scalars['Float']['input'];
};


export type QueryNftTiersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<NftTierFilter>;
};


export type QueryNftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<NftFilter>;
};


export type QueryPayEventArgs = {
  chainId: Scalars['Float']['input'];
  txHash: Scalars['String']['input'];
  txIndex: Scalars['Float']['input'];
};


export type QueryPayEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayEventFilter>;
};


export type QueryProjectArgs = {
  chainId: Scalars['Float']['input'];
  projectId: Scalars['Float']['input'];
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ProjectFilter>;
};


export type QuerySendPayoutToSplitEventArgs = {
  chainId: Scalars['Float']['input'];
  txHash: Scalars['String']['input'];
  txIndex: Scalars['Float']['input'];
};


export type QuerySendPayoutToSplitEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SendPayoutToSplitEventFilter>;
};


export type QuerySendPayoutsEventArgs = {
  chainId: Scalars['Float']['input'];
  txHash: Scalars['String']['input'];
  txIndex: Scalars['Float']['input'];
};


export type QuerySendPayoutsEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SendPayoutsEventFilter>;
};


export type QuerySendReservedTokensToSplitEventArgs = {
  chainId: Scalars['Float']['input'];
  txHash: Scalars['String']['input'];
  txIndex: Scalars['Float']['input'];
};


export type QuerySendReservedTokensToSplitEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SendReservedTokensToSplitEventFilter>;
};


export type QuerySendReservedTokensToSplitsEventArgs = {
  chainId: Scalars['Float']['input'];
  txHash: Scalars['String']['input'];
  txIndex: Scalars['Float']['input'];
};


export type QuerySendReservedTokensToSplitsEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SendReservedTokensToSplitsEventFilter>;
};


export type QueryUseAllowanceEventArgs = {
  chainId: Scalars['Float']['input'];
  txHash: Scalars['String']['input'];
  txIndex: Scalars['Float']['input'];
};


export type QueryUseAllowanceEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<UseAllowanceEventFilter>;
};

export type AddToBalanceEvent = {
  amount: Scalars['BigInt']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  memo: Maybe<Scalars['String']['output']>;
  metadata: Scalars['String']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  returnedFees: Scalars['BigInt']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  txIndex: Scalars['Int']['output'];
};

export type AddToBalanceEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<AddToBalanceEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AddToBalanceEventFilter>>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  caller?: InputMaybe<Scalars['String']['input']>;
  caller_contains?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  memo_contains?: InputMaybe<Scalars['String']['input']>;
  memo_ends_with?: InputMaybe<Scalars['String']['input']>;
  memo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  memo_not?: InputMaybe<Scalars['String']['input']>;
  memo_not_contains?: InputMaybe<Scalars['String']['input']>;
  memo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  memo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  memo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  memo_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  returnedFees?: InputMaybe<Scalars['BigInt']['input']>;
  returnedFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  returnedFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  returnedFees_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  returnedFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  returnedFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  returnedFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  returnedFees_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txIndex?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AddToBalanceEventPage = {
  items: Array<AddToBalanceEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CashOutTokensEvent = {
  beneficiary: Scalars['String']['output'];
  caller: Scalars['String']['output'];
  cashOutCount: Scalars['BigInt']['output'];
  cashOutTaxRate: Scalars['BigInt']['output'];
  chainId: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  holder: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  reclaimAmount: Scalars['BigInt']['output'];
  rulesetCycleNumber: Scalars['BigInt']['output'];
  rulesetId: Scalars['BigInt']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  txIndex: Scalars['Int']['output'];
};

export type CashOutTokensEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<CashOutTokensEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CashOutTokensEventFilter>>>;
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller?: InputMaybe<Scalars['String']['input']>;
  caller_contains?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with?: InputMaybe<Scalars['String']['input']>;
  cashOutCount?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutCount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  cashOutCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  cashOutTaxRate?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutTaxRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutTaxRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutTaxRate_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  cashOutTaxRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutTaxRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutTaxRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutTaxRate_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  holder?: InputMaybe<Scalars['String']['input']>;
  holder_contains?: InputMaybe<Scalars['String']['input']>;
  holder_ends_with?: InputMaybe<Scalars['String']['input']>;
  holder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  holder_not?: InputMaybe<Scalars['String']['input']>;
  holder_not_contains?: InputMaybe<Scalars['String']['input']>;
  holder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  holder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  holder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  holder_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  reclaimAmount?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  reclaimAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  rulesetCycleNumber?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetCycleNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetCycleNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetCycleNumber_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  rulesetCycleNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetCycleNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetCycleNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetCycleNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  rulesetId?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  rulesetId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_not?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txIndex?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type CashOutTokensEventPage = {
  items: Array<CashOutTokensEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DecorateBannyEvent = {
  backgroundId: Maybe<Scalars['BigInt']['output']>;
  bannyBodyId: Scalars['BigInt']['output'];
  bannyNft: Maybe<Nft>;
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  outfitIds: Maybe<Array<Scalars['BigInt']['output']>>;
  timestamp: Scalars['Int']['output'];
  tokenUri: Maybe<Scalars['String']['output']>;
  txHash: Scalars['String']['output'];
  txIndex: Scalars['Int']['output'];
};

export type DecorateBannyEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<DecorateBannyEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DecorateBannyEventFilter>>>;
  backgroundId?: InputMaybe<Scalars['BigInt']['input']>;
  backgroundId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  backgroundId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  backgroundId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  backgroundId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  backgroundId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  backgroundId_not?: InputMaybe<Scalars['BigInt']['input']>;
  backgroundId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  bannyBodyId?: InputMaybe<Scalars['BigInt']['input']>;
  bannyBodyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  bannyBodyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  bannyBodyId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  bannyBodyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  bannyBodyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  bannyBodyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  bannyBodyId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  caller?: InputMaybe<Scalars['String']['input']>;
  caller_contains?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  outfitIds?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  outfitIds_has?: InputMaybe<Scalars['BigInt']['input']>;
  outfitIds_not?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  outfitIds_not_has?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenUri?: InputMaybe<Scalars['String']['input']>;
  tokenUri_contains?: InputMaybe<Scalars['String']['input']>;
  tokenUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenUri_not?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txIndex?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type DecorateBannyEventPage = {
  items: Array<DecorateBannyEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Internal = {
  chainId: Scalars['Int']['output'];
  totalPaid: Scalars['BigInt']['output'];
};

export type InternalFilter = {
  AND?: InputMaybe<Array<InputMaybe<InternalFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InternalFilter>>>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalPaid?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaid_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalPaid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaid_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaid_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type InternalPage = {
  items: Array<Internal>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MintNftEvent = {
  beneficiary: Scalars['String']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  hook: Scalars['String']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  tierId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  tokenId: Scalars['BigInt']['output'];
  totalAmountPaid: Scalars['BigInt']['output'];
  txHash: Scalars['String']['output'];
  txIndex: Scalars['Int']['output'];
};

export type MintNftEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<MintNftEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MintNftEventFilter>>>;
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller?: InputMaybe<Scalars['String']['input']>;
  caller_contains?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  hook?: InputMaybe<Scalars['String']['input']>;
  hook_contains?: InputMaybe<Scalars['String']['input']>;
  hook_ends_with?: InputMaybe<Scalars['String']['input']>;
  hook_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hook_not?: InputMaybe<Scalars['String']['input']>;
  hook_not_contains?: InputMaybe<Scalars['String']['input']>;
  hook_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hook_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hook_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hook_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tierId?: InputMaybe<Scalars['Int']['input']>;
  tierId_gt?: InputMaybe<Scalars['Int']['input']>;
  tierId_gte?: InputMaybe<Scalars['Int']['input']>;
  tierId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tierId_lt?: InputMaybe<Scalars['Int']['input']>;
  tierId_lte?: InputMaybe<Scalars['Int']['input']>;
  tierId_not?: InputMaybe<Scalars['Int']['input']>;
  tierId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalAmountPaid?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountPaid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountPaid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountPaid_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalAmountPaid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountPaid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountPaid_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountPaid_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txIndex?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MintNftEventPage = {
  items: Array<MintNftEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MintTokensEvent = {
  beneficiary: Scalars['String']['output'];
  beneficiaryTokenCount: Scalars['BigInt']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  memo: Maybe<Scalars['String']['output']>;
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  reservedPercent: Scalars['BigInt']['output'];
  timestamp: Scalars['Int']['output'];
  tokenCount: Scalars['BigInt']['output'];
  txHash: Scalars['String']['output'];
  txIndex: Scalars['Int']['output'];
};

export type MintTokensEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<MintTokensEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MintTokensEventFilter>>>;
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  beneficiaryTokenCount?: InputMaybe<Scalars['BigInt']['input']>;
  beneficiaryTokenCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  beneficiaryTokenCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  beneficiaryTokenCount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  beneficiaryTokenCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  beneficiaryTokenCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  beneficiaryTokenCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  beneficiaryTokenCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  beneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller?: InputMaybe<Scalars['String']['input']>;
  caller_contains?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  memo_contains?: InputMaybe<Scalars['String']['input']>;
  memo_ends_with?: InputMaybe<Scalars['String']['input']>;
  memo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  memo_not?: InputMaybe<Scalars['String']['input']>;
  memo_not_contains?: InputMaybe<Scalars['String']['input']>;
  memo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  memo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  memo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  memo_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  reservedPercent?: InputMaybe<Scalars['BigInt']['input']>;
  reservedPercent_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reservedPercent_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reservedPercent_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  reservedPercent_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reservedPercent_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reservedPercent_not?: InputMaybe<Scalars['BigInt']['input']>;
  reservedPercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenCount?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txIndex?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MintTokensEventPage = {
  items: Array<MintTokensEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Nft = {
  category: Scalars['Int']['output'];
  chainId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  hook: Maybe<NftHook>;
  owner: Scalars['String']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  tier: Maybe<NftTier>;
  tierId: Scalars['Int']['output'];
  tokenId: Scalars['BigInt']['output'];
  tokenUri: Maybe<Scalars['String']['output']>;
};

export type NftFilter = {
  AND?: InputMaybe<Array<InputMaybe<NftFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NftFilter>>>;
  category?: InputMaybe<Scalars['Int']['input']>;
  category_gt?: InputMaybe<Scalars['Int']['input']>;
  category_gte?: InputMaybe<Scalars['Int']['input']>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category_lt?: InputMaybe<Scalars['Int']['input']>;
  category_lte?: InputMaybe<Scalars['Int']['input']>;
  category_not?: InputMaybe<Scalars['Int']['input']>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  hook?: InputMaybe<Scalars['String']['input']>;
  hook_contains?: InputMaybe<Scalars['String']['input']>;
  hook_ends_with?: InputMaybe<Scalars['String']['input']>;
  hook_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hook_not?: InputMaybe<Scalars['String']['input']>;
  hook_not_contains?: InputMaybe<Scalars['String']['input']>;
  hook_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hook_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hook_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hook_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tierId?: InputMaybe<Scalars['Int']['input']>;
  tierId_gt?: InputMaybe<Scalars['Int']['input']>;
  tierId_gte?: InputMaybe<Scalars['Int']['input']>;
  tierId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tierId_lt?: InputMaybe<Scalars['Int']['input']>;
  tierId_lte?: InputMaybe<Scalars['Int']['input']>;
  tierId_not?: InputMaybe<Scalars['Int']['input']>;
  tierId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tokenUri?: InputMaybe<Scalars['String']['input']>;
  tokenUri_contains?: InputMaybe<Scalars['String']['input']>;
  tokenUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenUri_not?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NftHook = {
  address: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  name: Maybe<Scalars['String']['output']>;
  nftTiers: Maybe<NftTierPage>;
  nfts: Maybe<NftPage>;
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  symbol: Maybe<Scalars['String']['output']>;
};


export type NftHookNftTiersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<NftTierFilter>;
};


export type NftHookNftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<NftFilter>;
};

export type NftHookFilter = {
  AND?: InputMaybe<Array<InputMaybe<NftHookFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NftHookFilter>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NftHookPage = {
  items: Array<NftHook>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NftPage = {
  items: Array<Nft>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type NftTier = {
  allowOnwerMint: Maybe<Scalars['Boolean']['output']>;
  cannotBeRemoved: Maybe<Scalars['Boolean']['output']>;
  category: Scalars['Int']['output'];
  chainId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  encodedIpfsUri: Maybe<Scalars['String']['output']>;
  hook: Maybe<NftHook>;
  initialSupply: Scalars['Int']['output'];
  nfts: Maybe<NftPage>;
  price: Scalars['BigInt']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  remainingSupply: Scalars['Int']['output'];
  reserveBeneficiary: Maybe<Scalars['String']['output']>;
  reserveFrequency: Maybe<Scalars['Int']['output']>;
  resolvedUri: Maybe<Scalars['String']['output']>;
  svg: Maybe<Scalars['String']['output']>;
  tierId: Scalars['Int']['output'];
  transfersPausable: Maybe<Scalars['Boolean']['output']>;
  votingUnits: Maybe<Scalars['BigInt']['output']>;
};


export type NftTierNftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<NftFilter>;
};

export type NftTierFilter = {
  AND?: InputMaybe<Array<InputMaybe<NftTierFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NftTierFilter>>>;
  allowOnwerMint?: InputMaybe<Scalars['Boolean']['input']>;
  allowOnwerMint_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  allowOnwerMint_not?: InputMaybe<Scalars['Boolean']['input']>;
  allowOnwerMint_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  cannotBeRemoved?: InputMaybe<Scalars['Boolean']['input']>;
  cannotBeRemoved_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  cannotBeRemoved_not?: InputMaybe<Scalars['Boolean']['input']>;
  cannotBeRemoved_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  category?: InputMaybe<Scalars['Int']['input']>;
  category_gt?: InputMaybe<Scalars['Int']['input']>;
  category_gte?: InputMaybe<Scalars['Int']['input']>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category_lt?: InputMaybe<Scalars['Int']['input']>;
  category_lte?: InputMaybe<Scalars['Int']['input']>;
  category_not?: InputMaybe<Scalars['Int']['input']>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  encodedIpfsUri?: InputMaybe<Scalars['String']['input']>;
  encodedIpfsUri_contains?: InputMaybe<Scalars['String']['input']>;
  encodedIpfsUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  encodedIpfsUri_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  encodedIpfsUri_not?: InputMaybe<Scalars['String']['input']>;
  encodedIpfsUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  encodedIpfsUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  encodedIpfsUri_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  encodedIpfsUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  encodedIpfsUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  hook?: InputMaybe<Scalars['String']['input']>;
  hook_contains?: InputMaybe<Scalars['String']['input']>;
  hook_ends_with?: InputMaybe<Scalars['String']['input']>;
  hook_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hook_not?: InputMaybe<Scalars['String']['input']>;
  hook_not_contains?: InputMaybe<Scalars['String']['input']>;
  hook_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hook_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hook_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hook_starts_with?: InputMaybe<Scalars['String']['input']>;
  initialSupply?: InputMaybe<Scalars['Int']['input']>;
  initialSupply_gt?: InputMaybe<Scalars['Int']['input']>;
  initialSupply_gte?: InputMaybe<Scalars['Int']['input']>;
  initialSupply_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  initialSupply_lt?: InputMaybe<Scalars['Int']['input']>;
  initialSupply_lte?: InputMaybe<Scalars['Int']['input']>;
  initialSupply_not?: InputMaybe<Scalars['Int']['input']>;
  initialSupply_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  remainingSupply?: InputMaybe<Scalars['Int']['input']>;
  remainingSupply_gt?: InputMaybe<Scalars['Int']['input']>;
  remainingSupply_gte?: InputMaybe<Scalars['Int']['input']>;
  remainingSupply_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  remainingSupply_lt?: InputMaybe<Scalars['Int']['input']>;
  remainingSupply_lte?: InputMaybe<Scalars['Int']['input']>;
  remainingSupply_not?: InputMaybe<Scalars['Int']['input']>;
  remainingSupply_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  reserveBeneficiary?: InputMaybe<Scalars['String']['input']>;
  reserveBeneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  reserveBeneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  reserveBeneficiary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reserveBeneficiary_not?: InputMaybe<Scalars['String']['input']>;
  reserveBeneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  reserveBeneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reserveBeneficiary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reserveBeneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reserveBeneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  reserveFrequency?: InputMaybe<Scalars['Int']['input']>;
  reserveFrequency_gt?: InputMaybe<Scalars['Int']['input']>;
  reserveFrequency_gte?: InputMaybe<Scalars['Int']['input']>;
  reserveFrequency_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  reserveFrequency_lt?: InputMaybe<Scalars['Int']['input']>;
  reserveFrequency_lte?: InputMaybe<Scalars['Int']['input']>;
  reserveFrequency_not?: InputMaybe<Scalars['Int']['input']>;
  reserveFrequency_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  resolvedUri?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_contains?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  resolvedUri_not?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  resolvedUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  svg?: InputMaybe<Scalars['String']['input']>;
  svg_contains?: InputMaybe<Scalars['String']['input']>;
  svg_ends_with?: InputMaybe<Scalars['String']['input']>;
  svg_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  svg_not?: InputMaybe<Scalars['String']['input']>;
  svg_not_contains?: InputMaybe<Scalars['String']['input']>;
  svg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  svg_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  svg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  svg_starts_with?: InputMaybe<Scalars['String']['input']>;
  tierId?: InputMaybe<Scalars['Int']['input']>;
  tierId_gt?: InputMaybe<Scalars['Int']['input']>;
  tierId_gte?: InputMaybe<Scalars['Int']['input']>;
  tierId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tierId_lt?: InputMaybe<Scalars['Int']['input']>;
  tierId_lte?: InputMaybe<Scalars['Int']['input']>;
  tierId_not?: InputMaybe<Scalars['Int']['input']>;
  tierId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  transfersPausable?: InputMaybe<Scalars['Boolean']['input']>;
  transfersPausable_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  transfersPausable_not?: InputMaybe<Scalars['Boolean']['input']>;
  transfersPausable_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  votingUnits?: InputMaybe<Scalars['BigInt']['input']>;
  votingUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  votingUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  votingUnits_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  votingUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  votingUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  votingUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  votingUnits_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type NftTierPage = {
  items: Array<NftTier>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PayEvent = {
  amount: Scalars['BigInt']['output'];
  beneficiary: Scalars['String']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  distributionFromProjectId: Maybe<Scalars['Int']['output']>;
  feeFromProject: Maybe<Scalars['Int']['output']>;
  from: Scalars['String']['output'];
  memo: Maybe<Scalars['String']['output']>;
  newlyIssuedTokenCount: Scalars['BigInt']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  txIndex: Scalars['Int']['output'];
};

export type PayEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<PayEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PayEventFilter>>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller?: InputMaybe<Scalars['String']['input']>;
  caller_contains?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  distributionFromProjectId?: InputMaybe<Scalars['Int']['input']>;
  distributionFromProjectId_gt?: InputMaybe<Scalars['Int']['input']>;
  distributionFromProjectId_gte?: InputMaybe<Scalars['Int']['input']>;
  distributionFromProjectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  distributionFromProjectId_lt?: InputMaybe<Scalars['Int']['input']>;
  distributionFromProjectId_lte?: InputMaybe<Scalars['Int']['input']>;
  distributionFromProjectId_not?: InputMaybe<Scalars['Int']['input']>;
  distributionFromProjectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  feeFromProject?: InputMaybe<Scalars['Int']['input']>;
  feeFromProject_gt?: InputMaybe<Scalars['Int']['input']>;
  feeFromProject_gte?: InputMaybe<Scalars['Int']['input']>;
  feeFromProject_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  feeFromProject_lt?: InputMaybe<Scalars['Int']['input']>;
  feeFromProject_lte?: InputMaybe<Scalars['Int']['input']>;
  feeFromProject_not?: InputMaybe<Scalars['Int']['input']>;
  feeFromProject_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  memo_contains?: InputMaybe<Scalars['String']['input']>;
  memo_ends_with?: InputMaybe<Scalars['String']['input']>;
  memo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  memo_not?: InputMaybe<Scalars['String']['input']>;
  memo_not_contains?: InputMaybe<Scalars['String']['input']>;
  memo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  memo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  memo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  memo_starts_with?: InputMaybe<Scalars['String']['input']>;
  newlyIssuedTokenCount?: InputMaybe<Scalars['BigInt']['input']>;
  newlyIssuedTokenCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newlyIssuedTokenCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newlyIssuedTokenCount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  newlyIssuedTokenCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newlyIssuedTokenCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newlyIssuedTokenCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  newlyIssuedTokenCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txIndex?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type PayEventPage = {
  items: Array<PayEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Project = {
  addToBalanceEvents: Maybe<AddToBalanceEventPage>;
  balance: Scalars['BigInt']['output'];
  cashOutTokensEvents: Maybe<CashOutTokensEventPage>;
  chainId: Scalars['Int']['output'];
  contributorsCount: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  creator: Scalars['String']['output'];
  deployer: Scalars['String']['output'];
  handle: Maybe<Scalars['String']['output']>;
  metadataUri: Maybe<Scalars['String']['output']>;
  mintNftEvents: Maybe<MintNftEventPage>;
  mintTokensEvents: Maybe<MintTokensEventPage>;
  nftHooks: Maybe<NftHookPage>;
  nfts: Maybe<NftPage>;
  owner: Scalars['String']['output'];
  payEvents: Maybe<PayEventPage>;
  projectId: Scalars['Int']['output'];
  sendPayoutToSplitEvents: Maybe<SendPayoutToSplitEventPage>;
  sendPayoutsEvents: Maybe<SendPayoutsEventPage>;
  sendReservedTokensToSplitEvents: Maybe<SendReservedTokensToSplitEventPage>;
  sendReservedTokensToSplitsEvents: Maybe<SendReservedTokensToSplitsEventPage>;
  tokenSupply: Scalars['BigInt']['output'];
  totalPaid: Scalars['BigInt']['output'];
  totalPaidUSD: Scalars['BigInt']['output'];
  totalRedeemed: Scalars['BigInt']['output'];
  totalRedeemedUsd: Scalars['BigInt']['output'];
  useAllowanceEvents: Maybe<UseAllowanceEventPage>;
};


export type ProjectAddToBalanceEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AddToBalanceEventFilter>;
};


export type ProjectCashOutTokensEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<CashOutTokensEventFilter>;
};


export type ProjectMintNftEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<MintNftEventFilter>;
};


export type ProjectMintTokensEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<MintTokensEventFilter>;
};


export type ProjectNftHooksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<NftHookFilter>;
};


export type ProjectNftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<NftFilter>;
};


export type ProjectPayEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayEventFilter>;
};


export type ProjectSendPayoutToSplitEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SendPayoutToSplitEventFilter>;
};


export type ProjectSendPayoutsEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SendPayoutsEventFilter>;
};


export type ProjectSendReservedTokensToSplitEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SendReservedTokensToSplitEventFilter>;
};


export type ProjectSendReservedTokensToSplitsEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SendReservedTokensToSplitsEventFilter>;
};


export type ProjectUseAllowanceEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<UseAllowanceEventFilter>;
};

export type ProjectFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  balance?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contributorsCount?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contributorsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_not?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_contains?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  creator_not?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with?: InputMaybe<Scalars['String']['input']>;
  deployer?: InputMaybe<Scalars['String']['input']>;
  deployer_contains?: InputMaybe<Scalars['String']['input']>;
  deployer_ends_with?: InputMaybe<Scalars['String']['input']>;
  deployer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  deployer_not?: InputMaybe<Scalars['String']['input']>;
  deployer_not_contains?: InputMaybe<Scalars['String']['input']>;
  deployer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  deployer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  deployer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  deployer_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  handle_not?: InputMaybe<Scalars['String']['input']>;
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataUri?: InputMaybe<Scalars['String']['input']>;
  metadataUri_contains?: InputMaybe<Scalars['String']['input']>;
  metadataUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataUri_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadataUri_not?: InputMaybe<Scalars['String']['input']>;
  metadataUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadataUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataUri_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadataUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenSupply?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tokenSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalPaid?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaidUSD?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaidUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaidUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaidUSD_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalPaidUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaidUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaidUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaidUSD_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalPaid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaid_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalPaid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaid_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalPaid_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalRedeemed?: InputMaybe<Scalars['BigInt']['input']>;
  totalRedeemedUsd?: InputMaybe<Scalars['BigInt']['input']>;
  totalRedeemedUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalRedeemedUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalRedeemedUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalRedeemedUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalRedeemedUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalRedeemedUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalRedeemedUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalRedeemed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalRedeemed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalRedeemed_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalRedeemed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalRedeemed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalRedeemed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalRedeemed_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type ProjectPage = {
  items: Array<Project>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SendPayoutToSplitEvent = {
  amount: Scalars['BigInt']['output'];
  beneficiary: Scalars['String']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  group: Scalars['BigInt']['output'];
  hook: Scalars['String']['output'];
  lockedUntil: Scalars['Int']['output'];
  netAmount: Scalars['BigInt']['output'];
  percent: Scalars['Int']['output'];
  preferAddToBalance: Scalars['Boolean']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  rulesetId: Scalars['Int']['output'];
  splitProjectId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  txIndex: Scalars['Int']['output'];
};

export type SendPayoutToSplitEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<SendPayoutToSplitEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SendPayoutToSplitEventFilter>>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller?: InputMaybe<Scalars['String']['input']>;
  caller_contains?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['BigInt']['input']>;
  group_gt?: InputMaybe<Scalars['BigInt']['input']>;
  group_gte?: InputMaybe<Scalars['BigInt']['input']>;
  group_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  group_lt?: InputMaybe<Scalars['BigInt']['input']>;
  group_lte?: InputMaybe<Scalars['BigInt']['input']>;
  group_not?: InputMaybe<Scalars['BigInt']['input']>;
  group_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  hook?: InputMaybe<Scalars['String']['input']>;
  hook_contains?: InputMaybe<Scalars['String']['input']>;
  hook_ends_with?: InputMaybe<Scalars['String']['input']>;
  hook_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hook_not?: InputMaybe<Scalars['String']['input']>;
  hook_not_contains?: InputMaybe<Scalars['String']['input']>;
  hook_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hook_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hook_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hook_starts_with?: InputMaybe<Scalars['String']['input']>;
  lockedUntil?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_gt?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_gte?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lockedUntil_lt?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_lte?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_not?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  netAmount?: InputMaybe<Scalars['BigInt']['input']>;
  netAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  netAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  netAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  percent?: InputMaybe<Scalars['Int']['input']>;
  percent_gt?: InputMaybe<Scalars['Int']['input']>;
  percent_gte?: InputMaybe<Scalars['Int']['input']>;
  percent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  percent_lt?: InputMaybe<Scalars['Int']['input']>;
  percent_lte?: InputMaybe<Scalars['Int']['input']>;
  percent_not?: InputMaybe<Scalars['Int']['input']>;
  percent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  preferAddToBalance?: InputMaybe<Scalars['Boolean']['input']>;
  preferAddToBalance_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  preferAddToBalance_not?: InputMaybe<Scalars['Boolean']['input']>;
  preferAddToBalance_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetId?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_gt?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_gte?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetId_lt?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_lte?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_not?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  splitProjectId?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_gt?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_gte?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  splitProjectId_lt?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_lte?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_not?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txIndex?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type SendPayoutToSplitEventPage = {
  items: Array<SendPayoutToSplitEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SendPayoutsEvent = {
  amount: Scalars['BigInt']['output'];
  amountPaidOut: Scalars['BigInt']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  fee: Scalars['BigInt']['output'];
  from: Scalars['String']['output'];
  netLeftoverPayoutAmount: Scalars['BigInt']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  rulesetCycleNumber: Scalars['Int']['output'];
  rulesetId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  txIndex: Scalars['Int']['output'];
};

export type SendPayoutsEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<SendPayoutsEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SendPayoutsEventFilter>>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amountPaidOut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  caller?: InputMaybe<Scalars['String']['input']>;
  caller_contains?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  fee?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  netLeftoverPayoutAmount?: InputMaybe<Scalars['BigInt']['input']>;
  netLeftoverPayoutAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netLeftoverPayoutAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netLeftoverPayoutAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  netLeftoverPayoutAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netLeftoverPayoutAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netLeftoverPayoutAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  netLeftoverPayoutAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetCycleNumber?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetCycleNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_not?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetId?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_gt?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_gte?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetId_lt?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_lte?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_not?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txIndex?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type SendPayoutsEventPage = {
  items: Array<SendPayoutsEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SendReservedTokensToSplitEvent = {
  beneficiary: Scalars['String']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  groupId: Scalars['BigInt']['output'];
  hook: Scalars['String']['output'];
  lockedUntil: Scalars['Int']['output'];
  percent: Scalars['Int']['output'];
  preferAddToBalance: Scalars['Boolean']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  rulesetId: Scalars['Int']['output'];
  splitProjectId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  tokenCount: Scalars['BigInt']['output'];
  txHash: Scalars['String']['output'];
  txIndex: Scalars['Int']['output'];
};

export type SendReservedTokensToSplitEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<SendReservedTokensToSplitEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SendReservedTokensToSplitEventFilter>>>;
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller?: InputMaybe<Scalars['String']['input']>;
  caller_contains?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  groupId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_not?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  hook?: InputMaybe<Scalars['String']['input']>;
  hook_contains?: InputMaybe<Scalars['String']['input']>;
  hook_ends_with?: InputMaybe<Scalars['String']['input']>;
  hook_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hook_not?: InputMaybe<Scalars['String']['input']>;
  hook_not_contains?: InputMaybe<Scalars['String']['input']>;
  hook_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hook_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hook_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hook_starts_with?: InputMaybe<Scalars['String']['input']>;
  lockedUntil?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_gt?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_gte?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lockedUntil_lt?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_lte?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_not?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  percent?: InputMaybe<Scalars['Int']['input']>;
  percent_gt?: InputMaybe<Scalars['Int']['input']>;
  percent_gte?: InputMaybe<Scalars['Int']['input']>;
  percent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  percent_lt?: InputMaybe<Scalars['Int']['input']>;
  percent_lte?: InputMaybe<Scalars['Int']['input']>;
  percent_not?: InputMaybe<Scalars['Int']['input']>;
  percent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  preferAddToBalance?: InputMaybe<Scalars['Boolean']['input']>;
  preferAddToBalance_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  preferAddToBalance_not?: InputMaybe<Scalars['Boolean']['input']>;
  preferAddToBalance_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetId?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_gt?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_gte?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetId_lt?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_lte?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_not?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  splitProjectId?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_gt?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_gte?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  splitProjectId_lt?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_lte?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_not?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenCount?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txIndex?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type SendReservedTokensToSplitEventPage = {
  items: Array<SendReservedTokensToSplitEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SendReservedTokensToSplitsEvent = {
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  leftoverAmount: Scalars['BigInt']['output'];
  owner: Scalars['String']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  rulesetCycleNumber: Scalars['Int']['output'];
  rulesetId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  tokenCount: Scalars['BigInt']['output'];
  txHash: Scalars['String']['output'];
  txIndex: Scalars['Int']['output'];
};

export type SendReservedTokensToSplitsEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<SendReservedTokensToSplitsEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SendReservedTokensToSplitsEventFilter>>>;
  caller?: InputMaybe<Scalars['String']['input']>;
  caller_contains?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  leftoverAmount?: InputMaybe<Scalars['BigInt']['input']>;
  leftoverAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  leftoverAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  leftoverAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  leftoverAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  leftoverAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  leftoverAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  leftoverAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetCycleNumber?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetCycleNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_not?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetId?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_gt?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_gte?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetId_lt?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_lte?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_not?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenCount?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txIndex?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type SendReservedTokensToSplitsEventPage = {
  items: Array<SendReservedTokensToSplitsEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UseAllowanceEvent = {
  amount: Scalars['BigInt']['output'];
  amountPaidOut: Scalars['BigInt']['output'];
  beneficiary: Scalars['String']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  feeBeneficiary: Scalars['String']['output'];
  from: Scalars['String']['output'];
  memo: Maybe<Scalars['String']['output']>;
  netAmountPaidOut: Scalars['BigInt']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  rulesetCycleNumber: Scalars['Int']['output'];
  rulesetId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  txIndex: Scalars['Int']['output'];
};

export type UseAllowanceEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<UseAllowanceEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UseAllowanceEventFilter>>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amountPaidOut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller?: InputMaybe<Scalars['String']['input']>;
  caller_contains?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  feeBeneficiary?: InputMaybe<Scalars['String']['input']>;
  feeBeneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  feeBeneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  feeBeneficiary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  feeBeneficiary_not?: InputMaybe<Scalars['String']['input']>;
  feeBeneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  feeBeneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  feeBeneficiary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  feeBeneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  feeBeneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  memo_contains?: InputMaybe<Scalars['String']['input']>;
  memo_ends_with?: InputMaybe<Scalars['String']['input']>;
  memo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  memo_not?: InputMaybe<Scalars['String']['input']>;
  memo_not_contains?: InputMaybe<Scalars['String']['input']>;
  memo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  memo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  memo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  memo_starts_with?: InputMaybe<Scalars['String']['input']>;
  netAmountPaidOut?: InputMaybe<Scalars['BigInt']['input']>;
  netAmountPaidOut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netAmountPaidOut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netAmountPaidOut_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  netAmountPaidOut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netAmountPaidOut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netAmountPaidOut_not?: InputMaybe<Scalars['BigInt']['input']>;
  netAmountPaidOut_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetCycleNumber?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetCycleNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_not?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetId?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_gt?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_gte?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rulesetId_lt?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_lte?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_not?: InputMaybe<Scalars['Int']['input']>;
  rulesetId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txIndex?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  txIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  txIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not?: InputMaybe<Scalars['Int']['input']>;
  txIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type UseAllowanceEventPage = {
  items: Array<UseAllowanceEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ActivityQueryVariables = Exact<{
  payWhere?: InputMaybe<PayEventFilter>;
  decorateWhere?: InputMaybe<DecorateBannyEventFilter>;
}>;


export type ActivityQuery = { payEvents: { items: Array<{ timestamp: number, txHash: string, caller: string, chainId: number, beneficiary: string, amount: bigint, memo: string | null, newlyIssuedTokenCount: bigint }> }, decorateBannyEvents: { items: Array<{ timestamp: number, txHash: string, caller: string, chainId: number, bannyBodyId: bigint, outfitIds: Array<bigint> | null, backgroundId: bigint | null, tokenUri: string | null }> } };

export type PayEventsQueryVariables = Exact<{
  where?: InputMaybe<PayEventFilter>;
}>;


export type PayEventsQuery = { payEvents: { items: Array<{ timestamp: number, txHash: string, caller: string, chainId: number, beneficiary: string, amount: bigint, memo: string | null, newlyIssuedTokenCount: bigint }> } };

export type DecorateBannyEventsQueryVariables = Exact<{
  where?: InputMaybe<DecorateBannyEventFilter>;
}>;


export type DecorateBannyEventsQuery = { decorateBannyEvents: { items: Array<{ timestamp: number, txHash: string, caller: string, chainId: number, bannyBodyId: bigint, outfitIds: Array<bigint> | null, backgroundId: bigint | null, tokenUri: string | null }> } };

export type TierDataFragment = { tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number };

export type NfTsQueryVariables = Exact<{
  where?: InputMaybe<NftFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
}>;


export type NfTsQuery = { nfts: { items: Array<{ chainId: number, tokenId: bigint, owner: string, tokenUri: string | null, category: number, tierId: number, createdAt: number, tier: { tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number } | null }> } };

export type NftTiersQueryVariables = Exact<{
  where?: InputMaybe<NftTierFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
}>;


export type NftTiersQuery = { nftTiers: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> } };

export type AllNftTiersQueryVariables = Exact<{
  hook?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
}>;


export type AllNftTiersQuery = { body: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, background: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, backside: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, necklace: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, head: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, glasses: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, mouth: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, legs: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, suit: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, suitBottom: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, suitTop: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, headTop: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, hand: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, specialSuit: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, specialLegs: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, specialHead: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> }, specialBody: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, category: number, chainId: number }> } };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Meta: ResolverTypeWrapper<Meta>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  addToBalanceEvent: ResolverTypeWrapper<AddToBalanceEvent>;
  addToBalanceEventFilter: AddToBalanceEventFilter;
  addToBalanceEventPage: ResolverTypeWrapper<AddToBalanceEventPage>;
  cashOutTokensEvent: ResolverTypeWrapper<CashOutTokensEvent>;
  cashOutTokensEventFilter: CashOutTokensEventFilter;
  cashOutTokensEventPage: ResolverTypeWrapper<CashOutTokensEventPage>;
  decorateBannyEvent: ResolverTypeWrapper<DecorateBannyEvent>;
  decorateBannyEventFilter: DecorateBannyEventFilter;
  decorateBannyEventPage: ResolverTypeWrapper<DecorateBannyEventPage>;
  internal: ResolverTypeWrapper<Internal>;
  internalFilter: InternalFilter;
  internalPage: ResolverTypeWrapper<InternalPage>;
  mintNftEvent: ResolverTypeWrapper<MintNftEvent>;
  mintNftEventFilter: MintNftEventFilter;
  mintNftEventPage: ResolverTypeWrapper<MintNftEventPage>;
  mintTokensEvent: ResolverTypeWrapper<MintTokensEvent>;
  mintTokensEventFilter: MintTokensEventFilter;
  mintTokensEventPage: ResolverTypeWrapper<MintTokensEventPage>;
  nft: ResolverTypeWrapper<Nft>;
  nftFilter: NftFilter;
  nftHook: ResolverTypeWrapper<NftHook>;
  nftHookFilter: NftHookFilter;
  nftHookPage: ResolverTypeWrapper<NftHookPage>;
  nftPage: ResolverTypeWrapper<NftPage>;
  nftTier: ResolverTypeWrapper<NftTier>;
  nftTierFilter: NftTierFilter;
  nftTierPage: ResolverTypeWrapper<NftTierPage>;
  payEvent: ResolverTypeWrapper<PayEvent>;
  payEventFilter: PayEventFilter;
  payEventPage: ResolverTypeWrapper<PayEventPage>;
  project: ResolverTypeWrapper<Project>;
  projectFilter: ProjectFilter;
  projectPage: ResolverTypeWrapper<ProjectPage>;
  sendPayoutToSplitEvent: ResolverTypeWrapper<SendPayoutToSplitEvent>;
  sendPayoutToSplitEventFilter: SendPayoutToSplitEventFilter;
  sendPayoutToSplitEventPage: ResolverTypeWrapper<SendPayoutToSplitEventPage>;
  sendPayoutsEvent: ResolverTypeWrapper<SendPayoutsEvent>;
  sendPayoutsEventFilter: SendPayoutsEventFilter;
  sendPayoutsEventPage: ResolverTypeWrapper<SendPayoutsEventPage>;
  sendReservedTokensToSplitEvent: ResolverTypeWrapper<SendReservedTokensToSplitEvent>;
  sendReservedTokensToSplitEventFilter: SendReservedTokensToSplitEventFilter;
  sendReservedTokensToSplitEventPage: ResolverTypeWrapper<SendReservedTokensToSplitEventPage>;
  sendReservedTokensToSplitsEvent: ResolverTypeWrapper<SendReservedTokensToSplitsEvent>;
  sendReservedTokensToSplitsEventFilter: SendReservedTokensToSplitsEventFilter;
  sendReservedTokensToSplitsEventPage: ResolverTypeWrapper<SendReservedTokensToSplitsEventPage>;
  useAllowanceEvent: ResolverTypeWrapper<UseAllowanceEvent>;
  useAllowanceEventFilter: UseAllowanceEventFilter;
  useAllowanceEventPage: ResolverTypeWrapper<UseAllowanceEventPage>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt']['output'];
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  Meta: Meta;
  PageInfo: PageInfo;
  Query: {};
  String: Scalars['String']['output'];
  addToBalanceEvent: AddToBalanceEvent;
  addToBalanceEventFilter: AddToBalanceEventFilter;
  addToBalanceEventPage: AddToBalanceEventPage;
  cashOutTokensEvent: CashOutTokensEvent;
  cashOutTokensEventFilter: CashOutTokensEventFilter;
  cashOutTokensEventPage: CashOutTokensEventPage;
  decorateBannyEvent: DecorateBannyEvent;
  decorateBannyEventFilter: DecorateBannyEventFilter;
  decorateBannyEventPage: DecorateBannyEventPage;
  internal: Internal;
  internalFilter: InternalFilter;
  internalPage: InternalPage;
  mintNftEvent: MintNftEvent;
  mintNftEventFilter: MintNftEventFilter;
  mintNftEventPage: MintNftEventPage;
  mintTokensEvent: MintTokensEvent;
  mintTokensEventFilter: MintTokensEventFilter;
  mintTokensEventPage: MintTokensEventPage;
  nft: Nft;
  nftFilter: NftFilter;
  nftHook: NftHook;
  nftHookFilter: NftHookFilter;
  nftHookPage: NftHookPage;
  nftPage: NftPage;
  nftTier: NftTier;
  nftTierFilter: NftTierFilter;
  nftTierPage: NftTierPage;
  payEvent: PayEvent;
  payEventFilter: PayEventFilter;
  payEventPage: PayEventPage;
  project: Project;
  projectFilter: ProjectFilter;
  projectPage: ProjectPage;
  sendPayoutToSplitEvent: SendPayoutToSplitEvent;
  sendPayoutToSplitEventFilter: SendPayoutToSplitEventFilter;
  sendPayoutToSplitEventPage: SendPayoutToSplitEventPage;
  sendPayoutsEvent: SendPayoutsEvent;
  sendPayoutsEventFilter: SendPayoutsEventFilter;
  sendPayoutsEventPage: SendPayoutsEventPage;
  sendReservedTokensToSplitEvent: SendReservedTokensToSplitEvent;
  sendReservedTokensToSplitEventFilter: SendReservedTokensToSplitEventFilter;
  sendReservedTokensToSplitEventPage: SendReservedTokensToSplitEventPage;
  sendReservedTokensToSplitsEvent: SendReservedTokensToSplitsEvent;
  sendReservedTokensToSplitsEventFilter: SendReservedTokensToSplitsEventFilter;
  sendReservedTokensToSplitsEventPage: SendReservedTokensToSplitsEventPage;
  useAllowanceEvent: UseAllowanceEvent;
  useAllowanceEventFilter: UseAllowanceEventFilter;
  useAllowanceEventPage: UseAllowanceEventPage;
};

export type OneOfDirectiveArgs = { };

export type OneOfDirectiveResolver<Result, Parent, ContextType = any, Args = OneOfDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']> = {
  status?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  addToBalanceEvent?: Resolver<Maybe<ResolversTypes['addToBalanceEvent']>, ParentType, ContextType, RequireFields<QueryAddToBalanceEventArgs, 'chainId' | 'txHash' | 'txIndex'>>;
  addToBalanceEvents?: Resolver<ResolversTypes['addToBalanceEventPage'], ParentType, ContextType, Partial<QueryAddToBalanceEventsArgs>>;
  cashOutTokensEvent?: Resolver<Maybe<ResolversTypes['cashOutTokensEvent']>, ParentType, ContextType, RequireFields<QueryCashOutTokensEventArgs, 'chainId' | 'txHash' | 'txIndex'>>;
  cashOutTokensEvents?: Resolver<ResolversTypes['cashOutTokensEventPage'], ParentType, ContextType, Partial<QueryCashOutTokensEventsArgs>>;
  decorateBannyEvent?: Resolver<Maybe<ResolversTypes['decorateBannyEvent']>, ParentType, ContextType, RequireFields<QueryDecorateBannyEventArgs, 'chainId' | 'txHash' | 'txIndex'>>;
  decorateBannyEvents?: Resolver<ResolversTypes['decorateBannyEventPage'], ParentType, ContextType, Partial<QueryDecorateBannyEventsArgs>>;
  internal?: Resolver<Maybe<ResolversTypes['internal']>, ParentType, ContextType, RequireFields<QueryInternalArgs, 'chainId'>>;
  internals?: Resolver<ResolversTypes['internalPage'], ParentType, ContextType, Partial<QueryInternalsArgs>>;
  mintNftEvent?: Resolver<Maybe<ResolversTypes['mintNftEvent']>, ParentType, ContextType, RequireFields<QueryMintNftEventArgs, 'caller' | 'chainId' | 'txHash'>>;
  mintNftEvents?: Resolver<ResolversTypes['mintNftEventPage'], ParentType, ContextType, Partial<QueryMintNftEventsArgs>>;
  mintTokensEvent?: Resolver<Maybe<ResolversTypes['mintTokensEvent']>, ParentType, ContextType, RequireFields<QueryMintTokensEventArgs, 'chainId' | 'txHash' | 'txIndex'>>;
  mintTokensEvents?: Resolver<ResolversTypes['mintTokensEventPage'], ParentType, ContextType, Partial<QueryMintTokensEventsArgs>>;
  nft?: Resolver<Maybe<ResolversTypes['nft']>, ParentType, ContextType, RequireFields<QueryNftArgs, 'chainId' | 'hook' | 'tokenId'>>;
  nftHook?: Resolver<Maybe<ResolversTypes['nftHook']>, ParentType, ContextType, RequireFields<QueryNftHookArgs, 'address' | 'chainId'>>;
  nftHooks?: Resolver<ResolversTypes['nftHookPage'], ParentType, ContextType, Partial<QueryNftHooksArgs>>;
  nftTier?: Resolver<Maybe<ResolversTypes['nftTier']>, ParentType, ContextType, RequireFields<QueryNftTierArgs, 'chainId' | 'hook' | 'tierId'>>;
  nftTiers?: Resolver<ResolversTypes['nftTierPage'], ParentType, ContextType, Partial<QueryNftTiersArgs>>;
  nfts?: Resolver<ResolversTypes['nftPage'], ParentType, ContextType, Partial<QueryNftsArgs>>;
  payEvent?: Resolver<Maybe<ResolversTypes['payEvent']>, ParentType, ContextType, RequireFields<QueryPayEventArgs, 'chainId' | 'txHash' | 'txIndex'>>;
  payEvents?: Resolver<ResolversTypes['payEventPage'], ParentType, ContextType, Partial<QueryPayEventsArgs>>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType, RequireFields<QueryProjectArgs, 'chainId' | 'projectId'>>;
  projects?: Resolver<ResolversTypes['projectPage'], ParentType, ContextType, Partial<QueryProjectsArgs>>;
  sendPayoutToSplitEvent?: Resolver<Maybe<ResolversTypes['sendPayoutToSplitEvent']>, ParentType, ContextType, RequireFields<QuerySendPayoutToSplitEventArgs, 'chainId' | 'txHash' | 'txIndex'>>;
  sendPayoutToSplitEvents?: Resolver<ResolversTypes['sendPayoutToSplitEventPage'], ParentType, ContextType, Partial<QuerySendPayoutToSplitEventsArgs>>;
  sendPayoutsEvent?: Resolver<Maybe<ResolversTypes['sendPayoutsEvent']>, ParentType, ContextType, RequireFields<QuerySendPayoutsEventArgs, 'chainId' | 'txHash' | 'txIndex'>>;
  sendPayoutsEvents?: Resolver<ResolversTypes['sendPayoutsEventPage'], ParentType, ContextType, Partial<QuerySendPayoutsEventsArgs>>;
  sendReservedTokensToSplitEvent?: Resolver<Maybe<ResolversTypes['sendReservedTokensToSplitEvent']>, ParentType, ContextType, RequireFields<QuerySendReservedTokensToSplitEventArgs, 'chainId' | 'txHash' | 'txIndex'>>;
  sendReservedTokensToSplitEvents?: Resolver<ResolversTypes['sendReservedTokensToSplitEventPage'], ParentType, ContextType, Partial<QuerySendReservedTokensToSplitEventsArgs>>;
  sendReservedTokensToSplitsEvent?: Resolver<Maybe<ResolversTypes['sendReservedTokensToSplitsEvent']>, ParentType, ContextType, RequireFields<QuerySendReservedTokensToSplitsEventArgs, 'chainId' | 'txHash' | 'txIndex'>>;
  sendReservedTokensToSplitsEvents?: Resolver<ResolversTypes['sendReservedTokensToSplitsEventPage'], ParentType, ContextType, Partial<QuerySendReservedTokensToSplitsEventsArgs>>;
  useAllowanceEvent?: Resolver<Maybe<ResolversTypes['useAllowanceEvent']>, ParentType, ContextType, RequireFields<QueryUseAllowanceEventArgs, 'chainId' | 'txHash' | 'txIndex'>>;
  useAllowanceEvents?: Resolver<ResolversTypes['useAllowanceEventPage'], ParentType, ContextType, Partial<QueryUseAllowanceEventsArgs>>;
};

export type AddToBalanceEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['addToBalanceEvent'] = ResolversParentTypes['addToBalanceEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returnedFees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddToBalanceEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['addToBalanceEventPage'] = ResolversParentTypes['addToBalanceEventPage']> = {
  items?: Resolver<Array<ResolversTypes['addToBalanceEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CashOutTokensEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['cashOutTokensEvent'] = ResolversParentTypes['cashOutTokensEvent']> = {
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cashOutCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cashOutTaxRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  holder?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reclaimAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rulesetCycleNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rulesetId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CashOutTokensEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['cashOutTokensEventPage'] = ResolversParentTypes['cashOutTokensEventPage']> = {
  items?: Resolver<Array<ResolversTypes['cashOutTokensEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DecorateBannyEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['decorateBannyEvent'] = ResolversParentTypes['decorateBannyEvent']> = {
  backgroundId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  bannyBodyId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  bannyNft?: Resolver<Maybe<ResolversTypes['nft']>, ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  outfitIds?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DecorateBannyEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['decorateBannyEventPage'] = ResolversParentTypes['decorateBannyEventPage']> = {
  items?: Resolver<Array<ResolversTypes['decorateBannyEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InternalResolvers<ContextType = any, ParentType extends ResolversParentTypes['internal'] = ResolversParentTypes['internal']> = {
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPaid?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InternalPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['internalPage'] = ResolversParentTypes['internalPage']> = {
  items?: Resolver<Array<ResolversTypes['internal']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MintNftEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['mintNftEvent'] = ResolversParentTypes['mintNftEvent']> = {
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hook?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tierId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountPaid?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MintNftEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['mintNftEventPage'] = ResolversParentTypes['mintNftEventPage']> = {
  items?: Resolver<Array<ResolversTypes['mintNftEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MintTokensEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['mintTokensEvent'] = ResolversParentTypes['mintTokensEvent']> = {
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  beneficiaryTokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reservedPercent?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MintTokensEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['mintTokensEventPage'] = ResolversParentTypes['mintTokensEventPage']> = {
  items?: Resolver<Array<ResolversTypes['mintTokensEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftResolvers<ContextType = any, ParentType extends ResolversParentTypes['nft'] = ResolversParentTypes['nft']> = {
  category?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hook?: Resolver<Maybe<ResolversTypes['nftHook']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tier?: Resolver<Maybe<ResolversTypes['nftTier']>, ParentType, ContextType>;
  tierId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftHookResolvers<ContextType = any, ParentType extends ResolversParentTypes['nftHook'] = ResolversParentTypes['nftHook']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nftTiers?: Resolver<Maybe<ResolversTypes['nftTierPage']>, ParentType, ContextType, Partial<NftHookNftTiersArgs>>;
  nfts?: Resolver<Maybe<ResolversTypes['nftPage']>, ParentType, ContextType, Partial<NftHookNftsArgs>>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftHookPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['nftHookPage'] = ResolversParentTypes['nftHookPage']> = {
  items?: Resolver<Array<ResolversTypes['nftHook']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['nftPage'] = ResolversParentTypes['nftPage']> = {
  items?: Resolver<Array<ResolversTypes['nft']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftTierResolvers<ContextType = any, ParentType extends ResolversParentTypes['nftTier'] = ResolversParentTypes['nftTier']> = {
  allowOnwerMint?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cannotBeRemoved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  category?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  encodedIpfsUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hook?: Resolver<Maybe<ResolversTypes['nftHook']>, ParentType, ContextType>;
  initialSupply?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nfts?: Resolver<Maybe<ResolversTypes['nftPage']>, ParentType, ContextType, Partial<NftTierNftsArgs>>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  remainingSupply?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reserveBeneficiary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reserveFrequency?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  resolvedUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  svg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tierId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transfersPausable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  votingUnits?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftTierPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['nftTierPage'] = ResolversParentTypes['nftTierPage']> = {
  items?: Resolver<Array<ResolversTypes['nftTier']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['payEvent'] = ResolversParentTypes['payEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  distributionFromProjectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  feeFromProject?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newlyIssuedTokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['payEventPage'] = ResolversParentTypes['payEventPage']> = {
  items?: Resolver<Array<ResolversTypes['payEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['project'] = ResolversParentTypes['project']> = {
  addToBalanceEvents?: Resolver<Maybe<ResolversTypes['addToBalanceEventPage']>, ParentType, ContextType, Partial<ProjectAddToBalanceEventsArgs>>;
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cashOutTokensEvents?: Resolver<Maybe<ResolversTypes['cashOutTokensEventPage']>, ParentType, ContextType, Partial<ProjectCashOutTokensEventsArgs>>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributorsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deployer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  handle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadataUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mintNftEvents?: Resolver<Maybe<ResolversTypes['mintNftEventPage']>, ParentType, ContextType, Partial<ProjectMintNftEventsArgs>>;
  mintTokensEvents?: Resolver<Maybe<ResolversTypes['mintTokensEventPage']>, ParentType, ContextType, Partial<ProjectMintTokensEventsArgs>>;
  nftHooks?: Resolver<Maybe<ResolversTypes['nftHookPage']>, ParentType, ContextType, Partial<ProjectNftHooksArgs>>;
  nfts?: Resolver<Maybe<ResolversTypes['nftPage']>, ParentType, ContextType, Partial<ProjectNftsArgs>>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payEvents?: Resolver<Maybe<ResolversTypes['payEventPage']>, ParentType, ContextType, Partial<ProjectPayEventsArgs>>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sendPayoutToSplitEvents?: Resolver<Maybe<ResolversTypes['sendPayoutToSplitEventPage']>, ParentType, ContextType, Partial<ProjectSendPayoutToSplitEventsArgs>>;
  sendPayoutsEvents?: Resolver<Maybe<ResolversTypes['sendPayoutsEventPage']>, ParentType, ContextType, Partial<ProjectSendPayoutsEventsArgs>>;
  sendReservedTokensToSplitEvents?: Resolver<Maybe<ResolversTypes['sendReservedTokensToSplitEventPage']>, ParentType, ContextType, Partial<ProjectSendReservedTokensToSplitEventsArgs>>;
  sendReservedTokensToSplitsEvents?: Resolver<Maybe<ResolversTypes['sendReservedTokensToSplitsEventPage']>, ParentType, ContextType, Partial<ProjectSendReservedTokensToSplitsEventsArgs>>;
  tokenSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalPaid?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalPaidUSD?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalRedeemed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalRedeemedUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  useAllowanceEvents?: Resolver<Maybe<ResolversTypes['useAllowanceEventPage']>, ParentType, ContextType, Partial<ProjectUseAllowanceEventsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['projectPage'] = ResolversParentTypes['projectPage']> = {
  items?: Resolver<Array<ResolversTypes['project']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendPayoutToSplitEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['sendPayoutToSplitEvent'] = ResolversParentTypes['sendPayoutToSplitEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  hook?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lockedUntil?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  netAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  percent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  preferAddToBalance?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  splitProjectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendPayoutToSplitEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['sendPayoutToSplitEventPage'] = ResolversParentTypes['sendPayoutToSplitEventPage']> = {
  items?: Resolver<Array<ResolversTypes['sendPayoutToSplitEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendPayoutsEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['sendPayoutsEvent'] = ResolversParentTypes['sendPayoutsEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountPaidOut?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  netLeftoverPayoutAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetCycleNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendPayoutsEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['sendPayoutsEventPage'] = ResolversParentTypes['sendPayoutsEventPage']> = {
  items?: Resolver<Array<ResolversTypes['sendPayoutsEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendReservedTokensToSplitEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['sendReservedTokensToSplitEvent'] = ResolversParentTypes['sendReservedTokensToSplitEvent']> = {
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  groupId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  hook?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lockedUntil?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  percent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  preferAddToBalance?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  splitProjectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendReservedTokensToSplitEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['sendReservedTokensToSplitEventPage'] = ResolversParentTypes['sendReservedTokensToSplitEventPage']> = {
  items?: Resolver<Array<ResolversTypes['sendReservedTokensToSplitEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendReservedTokensToSplitsEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['sendReservedTokensToSplitsEvent'] = ResolversParentTypes['sendReservedTokensToSplitsEvent']> = {
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  leftoverAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetCycleNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendReservedTokensToSplitsEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['sendReservedTokensToSplitsEventPage'] = ResolversParentTypes['sendReservedTokensToSplitsEventPage']> = {
  items?: Resolver<Array<ResolversTypes['sendReservedTokensToSplitsEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UseAllowanceEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['useAllowanceEvent'] = ResolversParentTypes['useAllowanceEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountPaidOut?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  feeBeneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  netAmountPaidOut?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetCycleNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UseAllowanceEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['useAllowanceEventPage'] = ResolversParentTypes['useAllowanceEventPage']> = {
  items?: Resolver<Array<ResolversTypes['useAllowanceEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BigInt?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  Meta?: MetaResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  addToBalanceEvent?: AddToBalanceEventResolvers<ContextType>;
  addToBalanceEventPage?: AddToBalanceEventPageResolvers<ContextType>;
  cashOutTokensEvent?: CashOutTokensEventResolvers<ContextType>;
  cashOutTokensEventPage?: CashOutTokensEventPageResolvers<ContextType>;
  decorateBannyEvent?: DecorateBannyEventResolvers<ContextType>;
  decorateBannyEventPage?: DecorateBannyEventPageResolvers<ContextType>;
  internal?: InternalResolvers<ContextType>;
  internalPage?: InternalPageResolvers<ContextType>;
  mintNftEvent?: MintNftEventResolvers<ContextType>;
  mintNftEventPage?: MintNftEventPageResolvers<ContextType>;
  mintTokensEvent?: MintTokensEventResolvers<ContextType>;
  mintTokensEventPage?: MintTokensEventPageResolvers<ContextType>;
  nft?: NftResolvers<ContextType>;
  nftHook?: NftHookResolvers<ContextType>;
  nftHookPage?: NftHookPageResolvers<ContextType>;
  nftPage?: NftPageResolvers<ContextType>;
  nftTier?: NftTierResolvers<ContextType>;
  nftTierPage?: NftTierPageResolvers<ContextType>;
  payEvent?: PayEventResolvers<ContextType>;
  payEventPage?: PayEventPageResolvers<ContextType>;
  project?: ProjectResolvers<ContextType>;
  projectPage?: ProjectPageResolvers<ContextType>;
  sendPayoutToSplitEvent?: SendPayoutToSplitEventResolvers<ContextType>;
  sendPayoutToSplitEventPage?: SendPayoutToSplitEventPageResolvers<ContextType>;
  sendPayoutsEvent?: SendPayoutsEventResolvers<ContextType>;
  sendPayoutsEventPage?: SendPayoutsEventPageResolvers<ContextType>;
  sendReservedTokensToSplitEvent?: SendReservedTokensToSplitEventResolvers<ContextType>;
  sendReservedTokensToSplitEventPage?: SendReservedTokensToSplitEventPageResolvers<ContextType>;
  sendReservedTokensToSplitsEvent?: SendReservedTokensToSplitsEventResolvers<ContextType>;
  sendReservedTokensToSplitsEventPage?: SendReservedTokensToSplitsEventPageResolvers<ContextType>;
  useAllowanceEvent?: UseAllowanceEventResolvers<ContextType>;
  useAllowanceEventPage?: UseAllowanceEventPageResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  oneOf?: OneOfDirectiveResolver<any, any, ContextType>;
};

export const TierDataFragmentDoc = gql`
    fragment TierData on nftTier {
  tierId
  price
  encodedIpfsUri
  resolvedUri
  svg
  initialSupply
  remainingSupply
  category
  chainId
}
    `;
export const ActivityDocument = gql`
    query Activity($payWhere: payEventFilter, $decorateWhere: decorateBannyEventFilter) {
  payEvents(where: $payWhere, limit: 100) {
    items {
      timestamp
      txHash
      caller
      chainId
      beneficiary
      amount
      memo
      newlyIssuedTokenCount
    }
  }
  decorateBannyEvents(where: $decorateWhere, limit: 100) {
    items {
      timestamp
      txHash
      caller
      chainId
      bannyBodyId
      outfitIds
      backgroundId
      tokenUri
    }
  }
}
    `;

/**
 * __useActivityQuery__
 *
 * To run a query within a React component, call `useActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityQuery({
 *   variables: {
 *      payWhere: // value for 'payWhere'
 *      decorateWhere: // value for 'decorateWhere'
 *   },
 * });
 */
export function useActivityQuery(baseOptions?: Apollo.QueryHookOptions<ActivityQuery, ActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActivityQuery, ActivityQueryVariables>(ActivityDocument, options);
      }
export function useActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivityQuery, ActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActivityQuery, ActivityQueryVariables>(ActivityDocument, options);
        }
export function useActivitySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ActivityQuery, ActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ActivityQuery, ActivityQueryVariables>(ActivityDocument, options);
        }
export type ActivityQueryHookResult = ReturnType<typeof useActivityQuery>;
export type ActivityLazyQueryHookResult = ReturnType<typeof useActivityLazyQuery>;
export type ActivitySuspenseQueryHookResult = ReturnType<typeof useActivitySuspenseQuery>;
export type ActivityQueryResult = Apollo.QueryResult<ActivityQuery, ActivityQueryVariables>;
export const PayEventsDocument = gql`
    query PayEvents($where: payEventFilter) {
  payEvents(where: $where, limit: 1000) {
    items {
      timestamp
      txHash
      caller
      chainId
      beneficiary
      amount
      memo
      newlyIssuedTokenCount
    }
  }
}
    `;

/**
 * __usePayEventsQuery__
 *
 * To run a query within a React component, call `usePayEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePayEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePayEventsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePayEventsQuery(baseOptions?: Apollo.QueryHookOptions<PayEventsQuery, PayEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PayEventsQuery, PayEventsQueryVariables>(PayEventsDocument, options);
      }
export function usePayEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PayEventsQuery, PayEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PayEventsQuery, PayEventsQueryVariables>(PayEventsDocument, options);
        }
export function usePayEventsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PayEventsQuery, PayEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PayEventsQuery, PayEventsQueryVariables>(PayEventsDocument, options);
        }
export type PayEventsQueryHookResult = ReturnType<typeof usePayEventsQuery>;
export type PayEventsLazyQueryHookResult = ReturnType<typeof usePayEventsLazyQuery>;
export type PayEventsSuspenseQueryHookResult = ReturnType<typeof usePayEventsSuspenseQuery>;
export type PayEventsQueryResult = Apollo.QueryResult<PayEventsQuery, PayEventsQueryVariables>;
export const DecorateBannyEventsDocument = gql`
    query DecorateBannyEvents($where: decorateBannyEventFilter) {
  decorateBannyEvents(where: $where, limit: 1000) {
    items {
      timestamp
      txHash
      caller
      chainId
      bannyBodyId
      outfitIds
      backgroundId
      tokenUri
    }
  }
}
    `;

/**
 * __useDecorateBannyEventsQuery__
 *
 * To run a query within a React component, call `useDecorateBannyEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDecorateBannyEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDecorateBannyEventsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDecorateBannyEventsQuery(baseOptions?: Apollo.QueryHookOptions<DecorateBannyEventsQuery, DecorateBannyEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DecorateBannyEventsQuery, DecorateBannyEventsQueryVariables>(DecorateBannyEventsDocument, options);
      }
export function useDecorateBannyEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DecorateBannyEventsQuery, DecorateBannyEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DecorateBannyEventsQuery, DecorateBannyEventsQueryVariables>(DecorateBannyEventsDocument, options);
        }
export function useDecorateBannyEventsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<DecorateBannyEventsQuery, DecorateBannyEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DecorateBannyEventsQuery, DecorateBannyEventsQueryVariables>(DecorateBannyEventsDocument, options);
        }
export type DecorateBannyEventsQueryHookResult = ReturnType<typeof useDecorateBannyEventsQuery>;
export type DecorateBannyEventsLazyQueryHookResult = ReturnType<typeof useDecorateBannyEventsLazyQuery>;
export type DecorateBannyEventsSuspenseQueryHookResult = ReturnType<typeof useDecorateBannyEventsSuspenseQuery>;
export type DecorateBannyEventsQueryResult = Apollo.QueryResult<DecorateBannyEventsQuery, DecorateBannyEventsQueryVariables>;
export const NfTsDocument = gql`
    query NFTs($where: nftFilter, $orderBy: String, $orderDirection: String) {
  nfts(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    limit: 1000
  ) {
    items {
      chainId
      tokenId
      owner
      tokenUri
      category
      tierId
      createdAt
      tier {
        ...TierData
      }
    }
  }
}
    ${TierDataFragmentDoc}`;

/**
 * __useNfTsQuery__
 *
 * To run a query within a React component, call `useNfTsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNfTsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNfTsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *   },
 * });
 */
export function useNfTsQuery(baseOptions?: Apollo.QueryHookOptions<NfTsQuery, NfTsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NfTsQuery, NfTsQueryVariables>(NfTsDocument, options);
      }
export function useNfTsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NfTsQuery, NfTsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NfTsQuery, NfTsQueryVariables>(NfTsDocument, options);
        }
export function useNfTsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<NfTsQuery, NfTsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<NfTsQuery, NfTsQueryVariables>(NfTsDocument, options);
        }
export type NfTsQueryHookResult = ReturnType<typeof useNfTsQuery>;
export type NfTsLazyQueryHookResult = ReturnType<typeof useNfTsLazyQuery>;
export type NfTsSuspenseQueryHookResult = ReturnType<typeof useNfTsSuspenseQuery>;
export type NfTsQueryResult = Apollo.QueryResult<NfTsQuery, NfTsQueryVariables>;
export const NftTiersDocument = gql`
    query NFTTiers($where: nftTierFilter, $orderBy: String) {
  nftTiers(where: $where, orderBy: $orderBy, limit: 1000) {
    items {
      ...TierData
    }
  }
}
    ${TierDataFragmentDoc}`;

/**
 * __useNftTiersQuery__
 *
 * To run a query within a React component, call `useNftTiersQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftTiersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftTiersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useNftTiersQuery(baseOptions?: Apollo.QueryHookOptions<NftTiersQuery, NftTiersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NftTiersQuery, NftTiersQueryVariables>(NftTiersDocument, options);
      }
export function useNftTiersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftTiersQuery, NftTiersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NftTiersQuery, NftTiersQueryVariables>(NftTiersDocument, options);
        }
export function useNftTiersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<NftTiersQuery, NftTiersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<NftTiersQuery, NftTiersQueryVariables>(NftTiersDocument, options);
        }
export type NftTiersQueryHookResult = ReturnType<typeof useNftTiersQuery>;
export type NftTiersLazyQueryHookResult = ReturnType<typeof useNftTiersLazyQuery>;
export type NftTiersSuspenseQueryHookResult = ReturnType<typeof useNftTiersSuspenseQuery>;
export type NftTiersQueryResult = Apollo.QueryResult<NftTiersQuery, NftTiersQueryVariables>;
export const AllNftTiersDocument = gql`
    query AllNFTTiers($hook: String, $orderBy: String) {
  body: nftTiers(
    where: {category: 0, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  background: nftTiers(
    where: {category: 1, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  backside: nftTiers(
    where: {category: 2, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  necklace: nftTiers(
    where: {category: 3, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  head: nftTiers(
    where: {category: 4, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  glasses: nftTiers(
    where: {category: 5, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  mouth: nftTiers(
    where: {category: 6, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  legs: nftTiers(
    where: {category: 7, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  suit: nftTiers(
    where: {category: 8, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  suitBottom: nftTiers(
    where: {category: 9, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  suitTop: nftTiers(
    where: {category: 10, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  headTop: nftTiers(
    where: {category: 11, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  hand: nftTiers(
    where: {category: 12, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  specialSuit: nftTiers(
    where: {category: 13, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  specialLegs: nftTiers(
    where: {category: 13, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  specialHead: nftTiers(
    where: {category: 13, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
  specialBody: nftTiers(
    where: {category: 13, hook: $hook}
    orderBy: $orderBy
    limit: 1000
  ) {
    items {
      ...TierData
    }
  }
}
    ${TierDataFragmentDoc}`;

/**
 * __useAllNftTiersQuery__
 *
 * To run a query within a React component, call `useAllNftTiersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllNftTiersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllNftTiersQuery({
 *   variables: {
 *      hook: // value for 'hook'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useAllNftTiersQuery(baseOptions?: Apollo.QueryHookOptions<AllNftTiersQuery, AllNftTiersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllNftTiersQuery, AllNftTiersQueryVariables>(AllNftTiersDocument, options);
      }
export function useAllNftTiersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllNftTiersQuery, AllNftTiersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllNftTiersQuery, AllNftTiersQueryVariables>(AllNftTiersDocument, options);
        }
export function useAllNftTiersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AllNftTiersQuery, AllNftTiersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllNftTiersQuery, AllNftTiersQueryVariables>(AllNftTiersDocument, options);
        }
export type AllNftTiersQueryHookResult = ReturnType<typeof useAllNftTiersQuery>;
export type AllNftTiersLazyQueryHookResult = ReturnType<typeof useAllNftTiersLazyQuery>;
export type AllNftTiersSuspenseQueryHookResult = ReturnType<typeof useAllNftTiersSuspenseQuery>;
export type AllNftTiersQueryResult = Apollo.QueryResult<AllNftTiersQuery, AllNftTiersQueryVariables>;