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
  BigDecimal: { input: any; output: any; }
  BigInt: { input: bigint; output: bigint; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type AddToBalanceEvent = {
  amount: Scalars['BigInt']['output'];
  amountUSD: Maybe<Scalars['BigInt']['output']>;
  caller: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  note: Maybe<Scalars['String']['output']>;
  project: Project;
  projectId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type AddToBalanceEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AddToBalanceEvent_Filter>>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  note?: InputMaybe<Scalars['String']['input']>;
  note_contains?: InputMaybe<Scalars['String']['input']>;
  note_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  note_ends_with?: InputMaybe<Scalars['String']['input']>;
  note_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  note_gt?: InputMaybe<Scalars['String']['input']>;
  note_gte?: InputMaybe<Scalars['String']['input']>;
  note_in?: InputMaybe<Array<Scalars['String']['input']>>;
  note_lt?: InputMaybe<Scalars['String']['input']>;
  note_lte?: InputMaybe<Scalars['String']['input']>;
  note_not?: InputMaybe<Scalars['String']['input']>;
  note_not_contains?: InputMaybe<Scalars['String']['input']>;
  note_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  note_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  note_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  note_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  note_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  note_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  note_starts_with?: InputMaybe<Scalars['String']['input']>;
  note_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AddToBalanceEvent_Filter>>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AddToBalanceEvent_OrderBy {
  amount = 'amount',
  amountUSD = 'amountUSD',
  caller = 'caller',
  from = 'from',
  id = 'id',
  note = 'note',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  timestamp = 'timestamp',
  txHash = 'txHash'
}

export enum Aggregation_Interval {
  day = 'day',
  hour = 'hour'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type BurnEvent = {
  amount: Scalars['BigInt']['output'];
  caller: Maybe<Scalars['Bytes']['output']>;
  erc20Amount: Scalars['BigInt']['output'];
  from: Scalars['Bytes']['output'];
  holder: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  project: Project;
  projectId: Scalars['Int']['output'];
  stakedAmount: Scalars['BigInt']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type BurnEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<BurnEvent_Filter>>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  erc20Amount?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  erc20Amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  holder?: InputMaybe<Scalars['Bytes']['input']>;
  holder_contains?: InputMaybe<Scalars['Bytes']['input']>;
  holder_gt?: InputMaybe<Scalars['Bytes']['input']>;
  holder_gte?: InputMaybe<Scalars['Bytes']['input']>;
  holder_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  holder_lt?: InputMaybe<Scalars['Bytes']['input']>;
  holder_lte?: InputMaybe<Scalars['Bytes']['input']>;
  holder_not?: InputMaybe<Scalars['Bytes']['input']>;
  holder_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  holder_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BurnEvent_Filter>>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BurnEvent_OrderBy {
  amount = 'amount',
  caller = 'caller',
  erc20Amount = 'erc20Amount',
  from = 'from',
  holder = 'holder',
  id = 'id',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  stakedAmount = 'stakedAmount',
  timestamp = 'timestamp',
  txHash = 'txHash'
}

export type CashOutEvent = {
  beneficiary: Scalars['Bytes']['output'];
  caller: Scalars['Bytes']['output'];
  cashOutCount: Scalars['BigInt']['output'];
  from: Scalars['Bytes']['output'];
  holder: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  metadata: Maybe<Scalars['Bytes']['output']>;
  project: Project;
  projectId: Scalars['Int']['output'];
  reclaimAmount: Scalars['BigInt']['output'];
  reclaimAmountUSD: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type CashOutEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CashOutEvent_Filter>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  cashOutCount?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cashOutCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  cashOutCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  holder?: InputMaybe<Scalars['Bytes']['input']>;
  holder_contains?: InputMaybe<Scalars['Bytes']['input']>;
  holder_gt?: InputMaybe<Scalars['Bytes']['input']>;
  holder_gte?: InputMaybe<Scalars['Bytes']['input']>;
  holder_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  holder_lt?: InputMaybe<Scalars['Bytes']['input']>;
  holder_lte?: InputMaybe<Scalars['Bytes']['input']>;
  holder_not?: InputMaybe<Scalars['Bytes']['input']>;
  holder_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  holder_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  metadata?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_contains?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_gt?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_gte?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadata_lt?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_lte?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_not?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  metadata_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CashOutEvent_Filter>>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reclaimAmount?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmountUSD?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmountUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmountUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmountUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reclaimAmountUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmountUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmountUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmountUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reclaimAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reclaimAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CashOutEvent_OrderBy {
  beneficiary = 'beneficiary',
  caller = 'caller',
  cashOutCount = 'cashOutCount',
  from = 'from',
  holder = 'holder',
  id = 'id',
  metadata = 'metadata',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  reclaimAmount = 'reclaimAmount',
  reclaimAmountUSD = 'reclaimAmountUSD',
  timestamp = 'timestamp',
  txHash = 'txHash'
}

export type DecorateBannyEvent = {
  caller: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  nakedBannyId: Scalars['BigInt']['output'];
  outfitIds: Array<Scalars['BigInt']['output']>;
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['Bytes']['output'];
  worldId: Scalars['BigInt']['output'];
};

export type DecorateBannyEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DecorateBannyEvent_Filter>>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nakedBannyId?: InputMaybe<Scalars['BigInt']['input']>;
  nakedBannyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nakedBannyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nakedBannyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nakedBannyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nakedBannyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nakedBannyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  nakedBannyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DecorateBannyEvent_Filter>>>;
  outfitIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outfitIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outfitIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outfitIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outfitIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outfitIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  worldId?: InputMaybe<Scalars['BigInt']['input']>;
  worldId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  worldId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  worldId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  worldId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  worldId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  worldId_not?: InputMaybe<Scalars['BigInt']['input']>;
  worldId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum DecorateBannyEvent_OrderBy {
  caller = 'caller',
  id = 'id',
  nakedBannyId = 'nakedBannyId',
  outfitIds = 'outfitIds',
  timestamp = 'timestamp',
  txHash = 'txHash',
  worldId = 'worldId'
}

export type DeployedErc20Event = {
  address: Scalars['Bytes']['output'];
  caller: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  project: Project;
  projectId: Scalars['Int']['output'];
  symbol: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type DeployedErc20Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<DeployedErc20Event_Filter>>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DeployedErc20Event_Filter>>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum DeployedErc20Event_OrderBy {
  address = 'address',
  caller = 'caller',
  from = 'from',
  id = 'id',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  symbol = 'symbol',
  timestamp = 'timestamp',
  txHash = 'txHash'
}

export type DistributePayoutsEvent = {
  amount: Scalars['BigInt']['output'];
  amountPaidOut: Scalars['BigInt']['output'];
  amountPaidOutUSD: Maybe<Scalars['BigInt']['output']>;
  amountUSD: Maybe<Scalars['BigInt']['output']>;
  caller: Scalars['Bytes']['output'];
  fee: Scalars['BigInt']['output'];
  feeUSD: Maybe<Scalars['BigInt']['output']>;
  from: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  project: Project;
  projectId: Scalars['Int']['output'];
  rulesetCycleNumber: Scalars['BigInt']['output'];
  rulesetId: Scalars['BigInt']['output'];
  splitDistributions: Array<DistributeToPayoutSplitEvent>;
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['Bytes']['output'];
};


export type DistributePayoutsEventSplitDistributionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributeToPayoutSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DistributeToPayoutSplitEvent_Filter>;
};

export type DistributePayoutsEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOutUSD?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOutUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOutUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOutUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountPaidOutUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOutUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOutUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOutUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountPaidOut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountPaidOut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountUSD?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<DistributePayoutsEvent_Filter>>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  fee?: InputMaybe<Scalars['BigInt']['input']>;
  feeUSD?: InputMaybe<Scalars['BigInt']['input']>;
  feeUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DistributePayoutsEvent_Filter>>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rulesetCycleNumber?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetCycleNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetCycleNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetCycleNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rulesetCycleNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetCycleNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetCycleNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetCycleNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rulesetId?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rulesetId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_not?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  splitDistributions_?: InputMaybe<DistributeToPayoutSplitEvent_Filter>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum DistributePayoutsEvent_OrderBy {
  amount = 'amount',
  amountPaidOut = 'amountPaidOut',
  amountPaidOutUSD = 'amountPaidOutUSD',
  amountUSD = 'amountUSD',
  caller = 'caller',
  fee = 'fee',
  feeUSD = 'feeUSD',
  from = 'from',
  id = 'id',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  rulesetCycleNumber = 'rulesetCycleNumber',
  rulesetId = 'rulesetId',
  splitDistributions = 'splitDistributions',
  timestamp = 'timestamp',
  txHash = 'txHash'
}

export type DistributeReservedTokensEvent = {
  caller: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  project: Project;
  projectId: Scalars['Int']['output'];
  rulesetCycleNumber: Scalars['Int']['output'];
  splitDistributions: Array<DistributeToReservedTokenSplitEvent>;
  timestamp: Scalars['Int']['output'];
  tokenCount: Scalars['BigInt']['output'];
  txHash: Scalars['Bytes']['output'];
};


export type DistributeReservedTokensEventSplitDistributionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributeToReservedTokenSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DistributeToReservedTokenSplitEvent_Filter>;
};

export type DistributeReservedTokensEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DistributeReservedTokensEvent_Filter>>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DistributeReservedTokensEvent_Filter>>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rulesetCycleNumber?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  rulesetCycleNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_not?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  splitDistributions_?: InputMaybe<DistributeToReservedTokenSplitEvent_Filter>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenCount?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum DistributeReservedTokensEvent_OrderBy {
  caller = 'caller',
  from = 'from',
  id = 'id',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  rulesetCycleNumber = 'rulesetCycleNumber',
  splitDistributions = 'splitDistributions',
  timestamp = 'timestamp',
  tokenCount = 'tokenCount',
  txHash = 'txHash'
}

export type DistributeToPayoutSplitEvent = {
  amount: Scalars['BigInt']['output'];
  amountUSD: Maybe<Scalars['BigInt']['output']>;
  beneficiary: Scalars['Bytes']['output'];
  caller: Scalars['Bytes']['output'];
  distributePayoutsEvent: DistributePayoutsEvent;
  from: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  lockedUntil: Scalars['Int']['output'];
  percent: Scalars['Int']['output'];
  preferAddToBalance: Scalars['Boolean']['output'];
  project: Project;
  projectId: Scalars['Int']['output'];
  splitProjectId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type DistributeToPayoutSplitEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<DistributeToPayoutSplitEvent_Filter>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  distributePayoutsEvent?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_?: InputMaybe<DistributePayoutsEvent_Filter>;
  distributePayoutsEvent_contains?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_gt?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_gte?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  distributePayoutsEvent_lt?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_lte?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_not?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  distributePayoutsEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lockedUntil?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_gt?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_gte?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lockedUntil_lt?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_lte?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_not?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DistributeToPayoutSplitEvent_Filter>>>;
  percent?: InputMaybe<Scalars['Int']['input']>;
  percent_gt?: InputMaybe<Scalars['Int']['input']>;
  percent_gte?: InputMaybe<Scalars['Int']['input']>;
  percent_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  percent_lt?: InputMaybe<Scalars['Int']['input']>;
  percent_lte?: InputMaybe<Scalars['Int']['input']>;
  percent_not?: InputMaybe<Scalars['Int']['input']>;
  percent_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  preferAddToBalance?: InputMaybe<Scalars['Boolean']['input']>;
  preferAddToBalance_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  preferAddToBalance_not?: InputMaybe<Scalars['Boolean']['input']>;
  preferAddToBalance_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  splitProjectId?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_gt?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_gte?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  splitProjectId_lt?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_lte?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_not?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum DistributeToPayoutSplitEvent_OrderBy {
  amount = 'amount',
  amountUSD = 'amountUSD',
  beneficiary = 'beneficiary',
  caller = 'caller',
  distributePayoutsEvent = 'distributePayoutsEvent',
  distributePayoutsEvent__amount = 'distributePayoutsEvent__amount',
  distributePayoutsEvent__amountPaidOut = 'distributePayoutsEvent__amountPaidOut',
  distributePayoutsEvent__amountPaidOutUSD = 'distributePayoutsEvent__amountPaidOutUSD',
  distributePayoutsEvent__amountUSD = 'distributePayoutsEvent__amountUSD',
  distributePayoutsEvent__caller = 'distributePayoutsEvent__caller',
  distributePayoutsEvent__fee = 'distributePayoutsEvent__fee',
  distributePayoutsEvent__feeUSD = 'distributePayoutsEvent__feeUSD',
  distributePayoutsEvent__from = 'distributePayoutsEvent__from',
  distributePayoutsEvent__id = 'distributePayoutsEvent__id',
  distributePayoutsEvent__projectId = 'distributePayoutsEvent__projectId',
  distributePayoutsEvent__rulesetCycleNumber = 'distributePayoutsEvent__rulesetCycleNumber',
  distributePayoutsEvent__rulesetId = 'distributePayoutsEvent__rulesetId',
  distributePayoutsEvent__timestamp = 'distributePayoutsEvent__timestamp',
  distributePayoutsEvent__txHash = 'distributePayoutsEvent__txHash',
  from = 'from',
  id = 'id',
  lockedUntil = 'lockedUntil',
  percent = 'percent',
  preferAddToBalance = 'preferAddToBalance',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  splitProjectId = 'splitProjectId',
  timestamp = 'timestamp',
  txHash = 'txHash'
}

export type DistributeToReservedTokenSplitEvent = {
  beneficiary: Scalars['Bytes']['output'];
  caller: Scalars['Bytes']['output'];
  distributeReservedTokensEvent: DistributeReservedTokensEvent;
  from: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  lockedUntil: Scalars['Int']['output'];
  percent: Scalars['Int']['output'];
  preferAddToBalance: Scalars['Boolean']['output'];
  project: Project;
  projectId: Scalars['Int']['output'];
  splitProjectId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  tokenCount: Scalars['BigInt']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type DistributeToReservedTokenSplitEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DistributeToReservedTokenSplitEvent_Filter>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  distributeReservedTokensEvent?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_?: InputMaybe<DistributeReservedTokensEvent_Filter>;
  distributeReservedTokensEvent_contains?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_gt?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_gte?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  distributeReservedTokensEvent_lt?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_lte?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_not?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  distributeReservedTokensEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lockedUntil?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_gt?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_gte?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lockedUntil_lt?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_lte?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_not?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DistributeToReservedTokenSplitEvent_Filter>>>;
  percent?: InputMaybe<Scalars['Int']['input']>;
  percent_gt?: InputMaybe<Scalars['Int']['input']>;
  percent_gte?: InputMaybe<Scalars['Int']['input']>;
  percent_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  percent_lt?: InputMaybe<Scalars['Int']['input']>;
  percent_lte?: InputMaybe<Scalars['Int']['input']>;
  percent_not?: InputMaybe<Scalars['Int']['input']>;
  percent_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  preferAddToBalance?: InputMaybe<Scalars['Boolean']['input']>;
  preferAddToBalance_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  preferAddToBalance_not?: InputMaybe<Scalars['Boolean']['input']>;
  preferAddToBalance_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  splitProjectId?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_gt?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_gte?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  splitProjectId_lt?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_lte?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_not?: InputMaybe<Scalars['Int']['input']>;
  splitProjectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenCount?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum DistributeToReservedTokenSplitEvent_OrderBy {
  beneficiary = 'beneficiary',
  caller = 'caller',
  distributeReservedTokensEvent = 'distributeReservedTokensEvent',
  distributeReservedTokensEvent__caller = 'distributeReservedTokensEvent__caller',
  distributeReservedTokensEvent__from = 'distributeReservedTokensEvent__from',
  distributeReservedTokensEvent__id = 'distributeReservedTokensEvent__id',
  distributeReservedTokensEvent__projectId = 'distributeReservedTokensEvent__projectId',
  distributeReservedTokensEvent__rulesetCycleNumber = 'distributeReservedTokensEvent__rulesetCycleNumber',
  distributeReservedTokensEvent__timestamp = 'distributeReservedTokensEvent__timestamp',
  distributeReservedTokensEvent__tokenCount = 'distributeReservedTokensEvent__tokenCount',
  distributeReservedTokensEvent__txHash = 'distributeReservedTokensEvent__txHash',
  from = 'from',
  id = 'id',
  lockedUntil = 'lockedUntil',
  percent = 'percent',
  preferAddToBalance = 'preferAddToBalance',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  splitProjectId = 'splitProjectId',
  timestamp = 'timestamp',
  tokenCount = 'tokenCount',
  txHash = 'txHash'
}

export type EnsNode = {
  id: Scalars['ID']['output'];
  projectId: Maybe<Scalars['Int']['output']>;
};

export type EnsNode_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EnsNode_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<EnsNode_Filter>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum EnsNode_OrderBy {
  id = 'id',
  projectId = 'projectId'
}

export type MintTokensEvent = {
  amount: Scalars['BigInt']['output'];
  beneficiary: Scalars['Bytes']['output'];
  caller: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  memo: Scalars['String']['output'];
  project: Project;
  projectId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type MintTokensEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<MintTokensEvent_Filter>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  memo?: InputMaybe<Scalars['String']['input']>;
  memo_contains?: InputMaybe<Scalars['String']['input']>;
  memo_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  memo_ends_with?: InputMaybe<Scalars['String']['input']>;
  memo_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  memo_gt?: InputMaybe<Scalars['String']['input']>;
  memo_gte?: InputMaybe<Scalars['String']['input']>;
  memo_in?: InputMaybe<Array<Scalars['String']['input']>>;
  memo_lt?: InputMaybe<Scalars['String']['input']>;
  memo_lte?: InputMaybe<Scalars['String']['input']>;
  memo_not?: InputMaybe<Scalars['String']['input']>;
  memo_not_contains?: InputMaybe<Scalars['String']['input']>;
  memo_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  memo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  memo_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  memo_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  memo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  memo_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  memo_starts_with?: InputMaybe<Scalars['String']['input']>;
  memo_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<MintTokensEvent_Filter>>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MintTokensEvent_OrderBy {
  amount = 'amount',
  beneficiary = 'beneficiary',
  caller = 'caller',
  from = 'from',
  id = 'id',
  memo = 'memo',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  timestamp = 'timestamp',
  txHash = 'txHash'
}

export type Nft = {
  category: Scalars['Int']['output'];
  collection: NftCollection;
  id: Scalars['ID']['output'];
  owner: Participant;
  project: Project;
  projectId: Scalars['Int']['output'];
  tier: NftTier;
  tokenId: Scalars['BigInt']['output'];
  tokenUri: Scalars['String']['output'];
};

export type NftCollection = {
  address: Scalars['Bytes']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nfts: Array<Nft>;
  project: Project;
  projectId: Scalars['Int']['output'];
  symbol: Scalars['String']['output'];
  tiers: Array<NftTier>;
};


export type NftCollectionNftsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Nft_Filter>;
};


export type NftCollectionTiersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftTier_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NftTier_Filter>;
};

export type NftCollection_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<NftCollection_Filter>>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nfts_?: InputMaybe<Nft_Filter>;
  or?: InputMaybe<Array<InputMaybe<NftCollection_Filter>>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tiers_?: InputMaybe<NftTier_Filter>;
};

export enum NftCollection_OrderBy {
  address = 'address',
  createdAt = 'createdAt',
  id = 'id',
  name = 'name',
  nfts = 'nfts',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  symbol = 'symbol',
  tiers = 'tiers'
}

export type NftTier = {
  allowOwnerMint: Scalars['Boolean']['output'];
  cannotBeRemoved: Scalars['Boolean']['output'];
  category: Scalars['Int']['output'];
  collection: NftCollection;
  createdAt: Scalars['Int']['output'];
  encodedIpfsUri: Maybe<Scalars['Bytes']['output']>;
  id: Scalars['ID']['output'];
  initialSupply: Scalars['BigInt']['output'];
  nfts: Array<Nft>;
  price: Scalars['BigInt']['output'];
  remainingSupply: Scalars['BigInt']['output'];
  reserveBeneficiary: Scalars['Bytes']['output'];
  reserveFrequency: Scalars['Int']['output'];
  resolvedUri: Maybe<Scalars['String']['output']>;
  svg: Maybe<Scalars['String']['output']>;
  tierId: Scalars['Int']['output'];
  transfersPausable: Scalars['Boolean']['output'];
  votingUnits: Scalars['BigInt']['output'];
};


export type NftTierNftsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Nft_Filter>;
};

export type NftTier_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  allowOwnerMint?: InputMaybe<Scalars['Boolean']['input']>;
  allowOwnerMint_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  allowOwnerMint_not?: InputMaybe<Scalars['Boolean']['input']>;
  allowOwnerMint_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  and?: InputMaybe<Array<InputMaybe<NftTier_Filter>>>;
  cannotBeRemoved?: InputMaybe<Scalars['Boolean']['input']>;
  cannotBeRemoved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  cannotBeRemoved_not?: InputMaybe<Scalars['Boolean']['input']>;
  cannotBeRemoved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  category?: InputMaybe<Scalars['Int']['input']>;
  category_gt?: InputMaybe<Scalars['Int']['input']>;
  category_gte?: InputMaybe<Scalars['Int']['input']>;
  category_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  category_lt?: InputMaybe<Scalars['Int']['input']>;
  category_lte?: InputMaybe<Scalars['Int']['input']>;
  category_not?: InputMaybe<Scalars['Int']['input']>;
  category_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  collection?: InputMaybe<Scalars['String']['input']>;
  collection_?: InputMaybe<NftCollection_Filter>;
  collection_contains?: InputMaybe<Scalars['String']['input']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_gt?: InputMaybe<Scalars['String']['input']>;
  collection_gte?: InputMaybe<Scalars['String']['input']>;
  collection_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_lt?: InputMaybe<Scalars['String']['input']>;
  collection_lte?: InputMaybe<Scalars['String']['input']>;
  collection_not?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  encodedIpfsUri?: InputMaybe<Scalars['Bytes']['input']>;
  encodedIpfsUri_contains?: InputMaybe<Scalars['Bytes']['input']>;
  encodedIpfsUri_gt?: InputMaybe<Scalars['Bytes']['input']>;
  encodedIpfsUri_gte?: InputMaybe<Scalars['Bytes']['input']>;
  encodedIpfsUri_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  encodedIpfsUri_lt?: InputMaybe<Scalars['Bytes']['input']>;
  encodedIpfsUri_lte?: InputMaybe<Scalars['Bytes']['input']>;
  encodedIpfsUri_not?: InputMaybe<Scalars['Bytes']['input']>;
  encodedIpfsUri_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  encodedIpfsUri_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  initialSupply?: InputMaybe<Scalars['BigInt']['input']>;
  initialSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  initialSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nfts_?: InputMaybe<Nft_Filter>;
  or?: InputMaybe<Array<InputMaybe<NftTier_Filter>>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  remainingSupply?: InputMaybe<Scalars['BigInt']['input']>;
  remainingSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  remainingSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  remainingSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  remainingSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  remainingSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  remainingSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  remainingSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveBeneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  reserveBeneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  reserveBeneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  reserveBeneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  reserveBeneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  reserveBeneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  reserveBeneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  reserveBeneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  reserveBeneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  reserveBeneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  reserveFrequency?: InputMaybe<Scalars['Int']['input']>;
  reserveFrequency_gt?: InputMaybe<Scalars['Int']['input']>;
  reserveFrequency_gte?: InputMaybe<Scalars['Int']['input']>;
  reserveFrequency_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  reserveFrequency_lt?: InputMaybe<Scalars['Int']['input']>;
  reserveFrequency_lte?: InputMaybe<Scalars['Int']['input']>;
  reserveFrequency_not?: InputMaybe<Scalars['Int']['input']>;
  reserveFrequency_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  resolvedUri?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_contains?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_gt?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_gte?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  resolvedUri_lt?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_lte?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_not?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  resolvedUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  resolvedUri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  svg?: InputMaybe<Scalars['String']['input']>;
  svg_contains?: InputMaybe<Scalars['String']['input']>;
  svg_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  svg_ends_with?: InputMaybe<Scalars['String']['input']>;
  svg_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  svg_gt?: InputMaybe<Scalars['String']['input']>;
  svg_gte?: InputMaybe<Scalars['String']['input']>;
  svg_in?: InputMaybe<Array<Scalars['String']['input']>>;
  svg_lt?: InputMaybe<Scalars['String']['input']>;
  svg_lte?: InputMaybe<Scalars['String']['input']>;
  svg_not?: InputMaybe<Scalars['String']['input']>;
  svg_not_contains?: InputMaybe<Scalars['String']['input']>;
  svg_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  svg_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  svg_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  svg_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  svg_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  svg_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  svg_starts_with?: InputMaybe<Scalars['String']['input']>;
  svg_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tierId?: InputMaybe<Scalars['Int']['input']>;
  tierId_gt?: InputMaybe<Scalars['Int']['input']>;
  tierId_gte?: InputMaybe<Scalars['Int']['input']>;
  tierId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tierId_lt?: InputMaybe<Scalars['Int']['input']>;
  tierId_lte?: InputMaybe<Scalars['Int']['input']>;
  tierId_not?: InputMaybe<Scalars['Int']['input']>;
  tierId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transfersPausable?: InputMaybe<Scalars['Boolean']['input']>;
  transfersPausable_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  transfersPausable_not?: InputMaybe<Scalars['Boolean']['input']>;
  transfersPausable_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  votingUnits?: InputMaybe<Scalars['BigInt']['input']>;
  votingUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  votingUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  votingUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  votingUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  votingUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  votingUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  votingUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum NftTier_OrderBy {
  allowOwnerMint = 'allowOwnerMint',
  cannotBeRemoved = 'cannotBeRemoved',
  category = 'category',
  collection = 'collection',
  collection__address = 'collection__address',
  collection__createdAt = 'collection__createdAt',
  collection__id = 'collection__id',
  collection__name = 'collection__name',
  collection__projectId = 'collection__projectId',
  collection__symbol = 'collection__symbol',
  createdAt = 'createdAt',
  encodedIpfsUri = 'encodedIpfsUri',
  id = 'id',
  initialSupply = 'initialSupply',
  nfts = 'nfts',
  price = 'price',
  remainingSupply = 'remainingSupply',
  reserveBeneficiary = 'reserveBeneficiary',
  reserveFrequency = 'reserveFrequency',
  resolvedUri = 'resolvedUri',
  svg = 'svg',
  tierId = 'tierId',
  transfersPausable = 'transfersPausable',
  votingUnits = 'votingUnits'
}

export type Nft_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Nft_Filter>>>;
  category?: InputMaybe<Scalars['Int']['input']>;
  category_gt?: InputMaybe<Scalars['Int']['input']>;
  category_gte?: InputMaybe<Scalars['Int']['input']>;
  category_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  category_lt?: InputMaybe<Scalars['Int']['input']>;
  category_lte?: InputMaybe<Scalars['Int']['input']>;
  category_not?: InputMaybe<Scalars['Int']['input']>;
  category_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  collection?: InputMaybe<Scalars['String']['input']>;
  collection_?: InputMaybe<NftCollection_Filter>;
  collection_contains?: InputMaybe<Scalars['String']['input']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_gt?: InputMaybe<Scalars['String']['input']>;
  collection_gte?: InputMaybe<Scalars['String']['input']>;
  collection_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_lt?: InputMaybe<Scalars['String']['input']>;
  collection_lte?: InputMaybe<Scalars['String']['input']>;
  collection_not?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Nft_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Participant_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tier?: InputMaybe<Scalars['String']['input']>;
  tier_?: InputMaybe<NftTier_Filter>;
  tier_contains?: InputMaybe<Scalars['String']['input']>;
  tier_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tier_ends_with?: InputMaybe<Scalars['String']['input']>;
  tier_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tier_gt?: InputMaybe<Scalars['String']['input']>;
  tier_gte?: InputMaybe<Scalars['String']['input']>;
  tier_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tier_lt?: InputMaybe<Scalars['String']['input']>;
  tier_lte?: InputMaybe<Scalars['String']['input']>;
  tier_not?: InputMaybe<Scalars['String']['input']>;
  tier_not_contains?: InputMaybe<Scalars['String']['input']>;
  tier_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tier_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tier_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tier_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tier_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tier_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tier_starts_with?: InputMaybe<Scalars['String']['input']>;
  tier_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenUri?: InputMaybe<Scalars['String']['input']>;
  tokenUri_contains?: InputMaybe<Scalars['String']['input']>;
  tokenUri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_gt?: InputMaybe<Scalars['String']['input']>;
  tokenUri_gte?: InputMaybe<Scalars['String']['input']>;
  tokenUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenUri_lt?: InputMaybe<Scalars['String']['input']>;
  tokenUri_lte?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Nft_OrderBy {
  category = 'category',
  collection = 'collection',
  collection__address = 'collection__address',
  collection__createdAt = 'collection__createdAt',
  collection__id = 'collection__id',
  collection__name = 'collection__name',
  collection__projectId = 'collection__projectId',
  collection__symbol = 'collection__symbol',
  id = 'id',
  owner = 'owner',
  owner__address = 'owner__address',
  owner__balance = 'owner__balance',
  owner__erc20Balance = 'owner__erc20Balance',
  owner__id = 'owner__id',
  owner__lastPaidTimestamp = 'owner__lastPaidTimestamp',
  owner__paymentsCount = 'owner__paymentsCount',
  owner__projectId = 'owner__projectId',
  owner__stakedBalance = 'owner__stakedBalance',
  owner__volume = 'owner__volume',
  owner__volumeUSD = 'owner__volumeUSD',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  tier = 'tier',
  tier__allowOwnerMint = 'tier__allowOwnerMint',
  tier__cannotBeRemoved = 'tier__cannotBeRemoved',
  tier__category = 'tier__category',
  tier__createdAt = 'tier__createdAt',
  tier__encodedIpfsUri = 'tier__encodedIpfsUri',
  tier__id = 'tier__id',
  tier__initialSupply = 'tier__initialSupply',
  tier__price = 'tier__price',
  tier__remainingSupply = 'tier__remainingSupply',
  tier__reserveBeneficiary = 'tier__reserveBeneficiary',
  tier__reserveFrequency = 'tier__reserveFrequency',
  tier__resolvedUri = 'tier__resolvedUri',
  tier__svg = 'tier__svg',
  tier__tierId = 'tier__tierId',
  tier__transfersPausable = 'tier__transfersPausable',
  tier__votingUnits = 'tier__votingUnits',
  tokenId = 'tokenId',
  tokenUri = 'tokenUri'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  asc = 'asc',
  desc = 'desc'
}

export type Participant = {
  address: Scalars['Bytes']['output'];
  balance: Scalars['BigInt']['output'];
  erc20Balance: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  jb721DelegateTokens: Array<Nft>;
  lastPaidTimestamp: Scalars['Int']['output'];
  paymentsCount: Scalars['Int']['output'];
  project: Project;
  projectId: Scalars['Int']['output'];
  stakedBalance: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
  volumeUSD: Scalars['BigInt']['output'];
  wallet: Wallet;
};


export type ParticipantJb721DelegateTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Nft_Filter>;
};

export type Participant_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Participant_Filter>>>;
  balance?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  erc20Balance?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  erc20Balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  jb721DelegateTokens_?: InputMaybe<Nft_Filter>;
  lastPaidTimestamp?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastPaidTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Participant_Filter>>>;
  paymentsCount?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  paymentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_not?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakedBalance?: InputMaybe<Scalars['BigInt']['input']>;
  stakedBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wallet?: InputMaybe<Scalars['String']['input']>;
  wallet_?: InputMaybe<Wallet_Filter>;
  wallet_contains?: InputMaybe<Scalars['String']['input']>;
  wallet_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_ends_with?: InputMaybe<Scalars['String']['input']>;
  wallet_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_gt?: InputMaybe<Scalars['String']['input']>;
  wallet_gte?: InputMaybe<Scalars['String']['input']>;
  wallet_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wallet_lt?: InputMaybe<Scalars['String']['input']>;
  wallet_lte?: InputMaybe<Scalars['String']['input']>;
  wallet_not?: InputMaybe<Scalars['String']['input']>;
  wallet_not_contains?: InputMaybe<Scalars['String']['input']>;
  wallet_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  wallet_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wallet_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  wallet_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_starts_with?: InputMaybe<Scalars['String']['input']>;
  wallet_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Participant_OrderBy {
  address = 'address',
  balance = 'balance',
  erc20Balance = 'erc20Balance',
  id = 'id',
  jb721DelegateTokens = 'jb721DelegateTokens',
  lastPaidTimestamp = 'lastPaidTimestamp',
  paymentsCount = 'paymentsCount',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  stakedBalance = 'stakedBalance',
  volume = 'volume',
  volumeUSD = 'volumeUSD',
  wallet = 'wallet',
  wallet__id = 'wallet__id',
  wallet__lastPaidTimestamp = 'wallet__lastPaidTimestamp',
  wallet__volume = 'wallet__volume',
  wallet__volumeUSD = 'wallet__volumeUSD'
}

export type PayEvent = {
  amount: Scalars['BigInt']['output'];
  amountUSD: Maybe<Scalars['BigInt']['output']>;
  beneficiary: Scalars['Bytes']['output'];
  beneficiaryTokenCount: Scalars['BigInt']['output'];
  caller: Scalars['Bytes']['output'];
  distributionFromProjectId: Maybe<Scalars['Int']['output']>;
  feeFromProject: Maybe<Scalars['Int']['output']>;
  from: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  note: Scalars['String']['output'];
  project: Project;
  projectId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type PayEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PayEvent_Filter>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiaryTokenCount?: InputMaybe<Scalars['BigInt']['input']>;
  beneficiaryTokenCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  beneficiaryTokenCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  beneficiaryTokenCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  beneficiaryTokenCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  beneficiaryTokenCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  beneficiaryTokenCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  beneficiaryTokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  distributionFromProjectId?: InputMaybe<Scalars['Int']['input']>;
  distributionFromProjectId_gt?: InputMaybe<Scalars['Int']['input']>;
  distributionFromProjectId_gte?: InputMaybe<Scalars['Int']['input']>;
  distributionFromProjectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  distributionFromProjectId_lt?: InputMaybe<Scalars['Int']['input']>;
  distributionFromProjectId_lte?: InputMaybe<Scalars['Int']['input']>;
  distributionFromProjectId_not?: InputMaybe<Scalars['Int']['input']>;
  distributionFromProjectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeFromProject?: InputMaybe<Scalars['Int']['input']>;
  feeFromProject_gt?: InputMaybe<Scalars['Int']['input']>;
  feeFromProject_gte?: InputMaybe<Scalars['Int']['input']>;
  feeFromProject_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeFromProject_lt?: InputMaybe<Scalars['Int']['input']>;
  feeFromProject_lte?: InputMaybe<Scalars['Int']['input']>;
  feeFromProject_not?: InputMaybe<Scalars['Int']['input']>;
  feeFromProject_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  note?: InputMaybe<Scalars['String']['input']>;
  note_contains?: InputMaybe<Scalars['String']['input']>;
  note_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  note_ends_with?: InputMaybe<Scalars['String']['input']>;
  note_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  note_gt?: InputMaybe<Scalars['String']['input']>;
  note_gte?: InputMaybe<Scalars['String']['input']>;
  note_in?: InputMaybe<Array<Scalars['String']['input']>>;
  note_lt?: InputMaybe<Scalars['String']['input']>;
  note_lte?: InputMaybe<Scalars['String']['input']>;
  note_not?: InputMaybe<Scalars['String']['input']>;
  note_not_contains?: InputMaybe<Scalars['String']['input']>;
  note_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  note_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  note_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  note_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  note_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  note_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  note_starts_with?: InputMaybe<Scalars['String']['input']>;
  note_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<PayEvent_Filter>>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PayEvent_OrderBy {
  amount = 'amount',
  amountUSD = 'amountUSD',
  beneficiary = 'beneficiary',
  beneficiaryTokenCount = 'beneficiaryTokenCount',
  caller = 'caller',
  distributionFromProjectId = 'distributionFromProjectId',
  feeFromProject = 'feeFromProject',
  from = 'from',
  id = 'id',
  note = 'note',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  timestamp = 'timestamp',
  txHash = 'txHash'
}

export type PermissionsHolder = {
  account: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  operator: Scalars['Bytes']['output'];
  permissions: Array<Scalars['Int']['output']>;
  project: Project;
  projectId: Scalars['Int']['output'];
};

export type PermissionsHolder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PermissionsHolder_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PermissionsHolder_Filter>>>;
  permissions?: InputMaybe<Array<Scalars['Int']['input']>>;
  permissions_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  permissions_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  permissions_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  permissions_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  permissions_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum PermissionsHolder_OrderBy {
  account = 'account',
  id = 'id',
  operator = 'operator',
  permissions = 'permissions',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD'
}

export type Project = {
  addToBalanceEvents: Array<AddToBalanceEvent>;
  burnEvents: Array<BurnEvent>;
  cashOutEvents: Array<CashOutEvent>;
  contributorsCount: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdWithinTrendingWindow: Maybe<Scalars['Boolean']['output']>;
  creator: Scalars['Bytes']['output'];
  currentBalance: Scalars['BigInt']['output'];
  deployedERC20Events: Array<DeployedErc20Event>;
  deployer: Maybe<Scalars['Bytes']['output']>;
  distributePayoutsEvents: Array<DistributePayoutsEvent>;
  distributeReservedTokensEvents: Array<DistributeReservedTokensEvent>;
  distributeToPayoutSplitEvents: Array<DistributeToPayoutSplitEvent>;
  distributeToReservedTokenSplitEvents: Array<DistributeToReservedTokenSplitEvent>;
  handle: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  jb721DelegateTokens: Array<Nft>;
  metadataUri: Maybe<Scalars['String']['output']>;
  mintTokensEvents: Array<MintTokensEvent>;
  nftCollections: Array<NftCollection>;
  nftsMintedCount: Scalars['Int']['output'];
  owner: Scalars['Bytes']['output'];
  participants: Array<Participant>;
  payEvents: Array<PayEvent>;
  paymentsCount: Scalars['Int']['output'];
  permissionsHolders: Array<PermissionsHolder>;
  projectEvents: Array<ProjectEvent>;
  projectId: Scalars['Int']['output'];
  redeemCount: Scalars['Int']['output'];
  redeemVolume: Scalars['BigInt']['output'];
  redeemVolumeUSD: Scalars['BigInt']['output'];
  tokenSupply: Scalars['BigInt']['output'];
  trendingPaymentsCount: Scalars['Int']['output'];
  trendingScore: Scalars['BigInt']['output'];
  trendingVolume: Scalars['BigInt']['output'];
  useAllowanceEvents: Array<UseAllowanceEvent>;
  volume: Scalars['BigInt']['output'];
  volumeUSD: Scalars['BigInt']['output'];
};


export type ProjectAddToBalanceEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddToBalanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddToBalanceEvent_Filter>;
};


export type ProjectBurnEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BurnEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BurnEvent_Filter>;
};


export type ProjectCashOutEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CashOutEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CashOutEvent_Filter>;
};


export type ProjectDeployedErc20EventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DeployedErc20Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DeployedErc20Event_Filter>;
};


export type ProjectDistributePayoutsEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributePayoutsEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DistributePayoutsEvent_Filter>;
};


export type ProjectDistributeReservedTokensEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributeReservedTokensEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DistributeReservedTokensEvent_Filter>;
};


export type ProjectDistributeToPayoutSplitEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributeToPayoutSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DistributeToPayoutSplitEvent_Filter>;
};


export type ProjectDistributeToReservedTokenSplitEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributeToReservedTokenSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DistributeToReservedTokenSplitEvent_Filter>;
};


export type ProjectJb721DelegateTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Nft_Filter>;
};


export type ProjectMintTokensEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MintTokensEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MintTokensEvent_Filter>;
};


export type ProjectNftCollectionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftCollection_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NftCollection_Filter>;
};


export type ProjectParticipantsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Participant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Participant_Filter>;
};


export type ProjectPayEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PayEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PayEvent_Filter>;
};


export type ProjectPermissionsHoldersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PermissionsHolder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PermissionsHolder_Filter>;
};


export type ProjectProjectEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProjectEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectEvent_Filter>;
};


export type ProjectUseAllowanceEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UseAllowanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UseAllowanceEvent_Filter>;
};

export type ProjectCreateEvent = {
  caller: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  project: Project;
  projectId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type ProjectCreateEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProjectCreateEvent_Filter>>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ProjectCreateEvent_Filter>>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ProjectCreateEvent_OrderBy {
  caller = 'caller',
  from = 'from',
  id = 'id',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  timestamp = 'timestamp',
  txHash = 'txHash'
}

export type ProjectEvent = {
  addToBalanceEvent: Maybe<AddToBalanceEvent>;
  burnEvent: Maybe<BurnEvent>;
  caller: Maybe<Scalars['Bytes']['output']>;
  cashOutEvent: Maybe<CashOutEvent>;
  deployedERC20Event: Maybe<DeployedErc20Event>;
  distributePayoutsEvent: Maybe<DistributePayoutsEvent>;
  distributeReservedTokensEvent: Maybe<DistributeReservedTokensEvent>;
  distributeToPayoutSplitEvent: Maybe<DistributeToPayoutSplitEvent>;
  distributeToReservedTokenSplitEvent: Maybe<DistributeToReservedTokenSplitEvent>;
  from: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  mintTokensEvent: Maybe<MintTokensEvent>;
  payEvent: Maybe<PayEvent>;
  project: Project;
  projectCreateEvent: Maybe<ProjectCreateEvent>;
  projectId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  useAllowanceEvent: Maybe<UseAllowanceEvent>;
};

export type ProjectEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addToBalanceEvent?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_?: InputMaybe<AddToBalanceEvent_Filter>;
  addToBalanceEvent_contains?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_gt?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_gte?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addToBalanceEvent_lt?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_lte?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_not?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addToBalanceEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<ProjectEvent_Filter>>>;
  burnEvent?: InputMaybe<Scalars['String']['input']>;
  burnEvent_?: InputMaybe<BurnEvent_Filter>;
  burnEvent_contains?: InputMaybe<Scalars['String']['input']>;
  burnEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  burnEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  burnEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  burnEvent_gt?: InputMaybe<Scalars['String']['input']>;
  burnEvent_gte?: InputMaybe<Scalars['String']['input']>;
  burnEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  burnEvent_lt?: InputMaybe<Scalars['String']['input']>;
  burnEvent_lte?: InputMaybe<Scalars['String']['input']>;
  burnEvent_not?: InputMaybe<Scalars['String']['input']>;
  burnEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  burnEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  burnEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  burnEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  burnEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  burnEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  burnEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  burnEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  burnEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  cashOutEvent?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_?: InputMaybe<CashOutEvent_Filter>;
  cashOutEvent_contains?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_gt?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_gte?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cashOutEvent_lt?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_lte?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_not?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cashOutEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  cashOutEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_?: InputMaybe<DeployedErc20Event_Filter>;
  deployedERC20Event_contains?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_ends_with?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_gt?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_gte?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deployedERC20Event_lt?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_lte?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_not?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_not_contains?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deployedERC20Event_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_starts_with?: InputMaybe<Scalars['String']['input']>;
  deployedERC20Event_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_?: InputMaybe<DistributePayoutsEvent_Filter>;
  distributePayoutsEvent_contains?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_gt?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_gte?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  distributePayoutsEvent_lt?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_lte?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_not?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  distributePayoutsEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  distributePayoutsEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_?: InputMaybe<DistributeReservedTokensEvent_Filter>;
  distributeReservedTokensEvent_contains?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_gt?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_gte?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  distributeReservedTokensEvent_lt?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_lte?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_not?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  distributeReservedTokensEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  distributeReservedTokensEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_?: InputMaybe<DistributeToPayoutSplitEvent_Filter>;
  distributeToPayoutSplitEvent_contains?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_gt?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_gte?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  distributeToPayoutSplitEvent_lt?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_lte?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_not?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  distributeToPayoutSplitEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  distributeToPayoutSplitEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_?: InputMaybe<DistributeToReservedTokenSplitEvent_Filter>;
  distributeToReservedTokenSplitEvent_contains?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_gt?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_gte?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  distributeToReservedTokenSplitEvent_lt?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_lte?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_not?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  distributeToReservedTokenSplitEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  distributeToReservedTokenSplitEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  mintTokensEvent?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_?: InputMaybe<MintTokensEvent_Filter>;
  mintTokensEvent_contains?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_gt?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_gte?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mintTokensEvent_lt?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_lte?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_not?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mintTokensEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ProjectEvent_Filter>>>;
  payEvent?: InputMaybe<Scalars['String']['input']>;
  payEvent_?: InputMaybe<PayEvent_Filter>;
  payEvent_contains?: InputMaybe<Scalars['String']['input']>;
  payEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  payEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  payEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  payEvent_gt?: InputMaybe<Scalars['String']['input']>;
  payEvent_gte?: InputMaybe<Scalars['String']['input']>;
  payEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  payEvent_lt?: InputMaybe<Scalars['String']['input']>;
  payEvent_lte?: InputMaybe<Scalars['String']['input']>;
  payEvent_not?: InputMaybe<Scalars['String']['input']>;
  payEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  payEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  payEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  payEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  payEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  payEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  payEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  payEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  payEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_?: InputMaybe<ProjectCreateEvent_Filter>;
  projectCreateEvent_contains?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_gt?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_gte?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  projectCreateEvent_lt?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_lte?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_not?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  projectCreateEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  useAllowanceEvent?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_?: InputMaybe<UseAllowanceEvent_Filter>;
  useAllowanceEvent_contains?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_gt?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_gte?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  useAllowanceEvent_lt?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_lte?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_not?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  useAllowanceEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum ProjectEvent_OrderBy {
  addToBalanceEvent = 'addToBalanceEvent',
  addToBalanceEvent__amount = 'addToBalanceEvent__amount',
  addToBalanceEvent__amountUSD = 'addToBalanceEvent__amountUSD',
  addToBalanceEvent__caller = 'addToBalanceEvent__caller',
  addToBalanceEvent__from = 'addToBalanceEvent__from',
  addToBalanceEvent__id = 'addToBalanceEvent__id',
  addToBalanceEvent__note = 'addToBalanceEvent__note',
  addToBalanceEvent__projectId = 'addToBalanceEvent__projectId',
  addToBalanceEvent__timestamp = 'addToBalanceEvent__timestamp',
  addToBalanceEvent__txHash = 'addToBalanceEvent__txHash',
  burnEvent = 'burnEvent',
  burnEvent__amount = 'burnEvent__amount',
  burnEvent__caller = 'burnEvent__caller',
  burnEvent__erc20Amount = 'burnEvent__erc20Amount',
  burnEvent__from = 'burnEvent__from',
  burnEvent__holder = 'burnEvent__holder',
  burnEvent__id = 'burnEvent__id',
  burnEvent__projectId = 'burnEvent__projectId',
  burnEvent__stakedAmount = 'burnEvent__stakedAmount',
  burnEvent__timestamp = 'burnEvent__timestamp',
  burnEvent__txHash = 'burnEvent__txHash',
  caller = 'caller',
  cashOutEvent = 'cashOutEvent',
  cashOutEvent__beneficiary = 'cashOutEvent__beneficiary',
  cashOutEvent__caller = 'cashOutEvent__caller',
  cashOutEvent__cashOutCount = 'cashOutEvent__cashOutCount',
  cashOutEvent__from = 'cashOutEvent__from',
  cashOutEvent__holder = 'cashOutEvent__holder',
  cashOutEvent__id = 'cashOutEvent__id',
  cashOutEvent__metadata = 'cashOutEvent__metadata',
  cashOutEvent__projectId = 'cashOutEvent__projectId',
  cashOutEvent__reclaimAmount = 'cashOutEvent__reclaimAmount',
  cashOutEvent__reclaimAmountUSD = 'cashOutEvent__reclaimAmountUSD',
  cashOutEvent__timestamp = 'cashOutEvent__timestamp',
  cashOutEvent__txHash = 'cashOutEvent__txHash',
  deployedERC20Event = 'deployedERC20Event',
  deployedERC20Event__address = 'deployedERC20Event__address',
  deployedERC20Event__caller = 'deployedERC20Event__caller',
  deployedERC20Event__from = 'deployedERC20Event__from',
  deployedERC20Event__id = 'deployedERC20Event__id',
  deployedERC20Event__projectId = 'deployedERC20Event__projectId',
  deployedERC20Event__symbol = 'deployedERC20Event__symbol',
  deployedERC20Event__timestamp = 'deployedERC20Event__timestamp',
  deployedERC20Event__txHash = 'deployedERC20Event__txHash',
  distributePayoutsEvent = 'distributePayoutsEvent',
  distributePayoutsEvent__amount = 'distributePayoutsEvent__amount',
  distributePayoutsEvent__amountPaidOut = 'distributePayoutsEvent__amountPaidOut',
  distributePayoutsEvent__amountPaidOutUSD = 'distributePayoutsEvent__amountPaidOutUSD',
  distributePayoutsEvent__amountUSD = 'distributePayoutsEvent__amountUSD',
  distributePayoutsEvent__caller = 'distributePayoutsEvent__caller',
  distributePayoutsEvent__fee = 'distributePayoutsEvent__fee',
  distributePayoutsEvent__feeUSD = 'distributePayoutsEvent__feeUSD',
  distributePayoutsEvent__from = 'distributePayoutsEvent__from',
  distributePayoutsEvent__id = 'distributePayoutsEvent__id',
  distributePayoutsEvent__projectId = 'distributePayoutsEvent__projectId',
  distributePayoutsEvent__rulesetCycleNumber = 'distributePayoutsEvent__rulesetCycleNumber',
  distributePayoutsEvent__rulesetId = 'distributePayoutsEvent__rulesetId',
  distributePayoutsEvent__timestamp = 'distributePayoutsEvent__timestamp',
  distributePayoutsEvent__txHash = 'distributePayoutsEvent__txHash',
  distributeReservedTokensEvent = 'distributeReservedTokensEvent',
  distributeReservedTokensEvent__caller = 'distributeReservedTokensEvent__caller',
  distributeReservedTokensEvent__from = 'distributeReservedTokensEvent__from',
  distributeReservedTokensEvent__id = 'distributeReservedTokensEvent__id',
  distributeReservedTokensEvent__projectId = 'distributeReservedTokensEvent__projectId',
  distributeReservedTokensEvent__rulesetCycleNumber = 'distributeReservedTokensEvent__rulesetCycleNumber',
  distributeReservedTokensEvent__timestamp = 'distributeReservedTokensEvent__timestamp',
  distributeReservedTokensEvent__tokenCount = 'distributeReservedTokensEvent__tokenCount',
  distributeReservedTokensEvent__txHash = 'distributeReservedTokensEvent__txHash',
  distributeToPayoutSplitEvent = 'distributeToPayoutSplitEvent',
  distributeToPayoutSplitEvent__amount = 'distributeToPayoutSplitEvent__amount',
  distributeToPayoutSplitEvent__amountUSD = 'distributeToPayoutSplitEvent__amountUSD',
  distributeToPayoutSplitEvent__beneficiary = 'distributeToPayoutSplitEvent__beneficiary',
  distributeToPayoutSplitEvent__caller = 'distributeToPayoutSplitEvent__caller',
  distributeToPayoutSplitEvent__from = 'distributeToPayoutSplitEvent__from',
  distributeToPayoutSplitEvent__id = 'distributeToPayoutSplitEvent__id',
  distributeToPayoutSplitEvent__lockedUntil = 'distributeToPayoutSplitEvent__lockedUntil',
  distributeToPayoutSplitEvent__percent = 'distributeToPayoutSplitEvent__percent',
  distributeToPayoutSplitEvent__preferAddToBalance = 'distributeToPayoutSplitEvent__preferAddToBalance',
  distributeToPayoutSplitEvent__projectId = 'distributeToPayoutSplitEvent__projectId',
  distributeToPayoutSplitEvent__splitProjectId = 'distributeToPayoutSplitEvent__splitProjectId',
  distributeToPayoutSplitEvent__timestamp = 'distributeToPayoutSplitEvent__timestamp',
  distributeToPayoutSplitEvent__txHash = 'distributeToPayoutSplitEvent__txHash',
  distributeToReservedTokenSplitEvent = 'distributeToReservedTokenSplitEvent',
  distributeToReservedTokenSplitEvent__beneficiary = 'distributeToReservedTokenSplitEvent__beneficiary',
  distributeToReservedTokenSplitEvent__caller = 'distributeToReservedTokenSplitEvent__caller',
  distributeToReservedTokenSplitEvent__from = 'distributeToReservedTokenSplitEvent__from',
  distributeToReservedTokenSplitEvent__id = 'distributeToReservedTokenSplitEvent__id',
  distributeToReservedTokenSplitEvent__lockedUntil = 'distributeToReservedTokenSplitEvent__lockedUntil',
  distributeToReservedTokenSplitEvent__percent = 'distributeToReservedTokenSplitEvent__percent',
  distributeToReservedTokenSplitEvent__preferAddToBalance = 'distributeToReservedTokenSplitEvent__preferAddToBalance',
  distributeToReservedTokenSplitEvent__projectId = 'distributeToReservedTokenSplitEvent__projectId',
  distributeToReservedTokenSplitEvent__splitProjectId = 'distributeToReservedTokenSplitEvent__splitProjectId',
  distributeToReservedTokenSplitEvent__timestamp = 'distributeToReservedTokenSplitEvent__timestamp',
  distributeToReservedTokenSplitEvent__tokenCount = 'distributeToReservedTokenSplitEvent__tokenCount',
  distributeToReservedTokenSplitEvent__txHash = 'distributeToReservedTokenSplitEvent__txHash',
  from = 'from',
  id = 'id',
  mintTokensEvent = 'mintTokensEvent',
  mintTokensEvent__amount = 'mintTokensEvent__amount',
  mintTokensEvent__beneficiary = 'mintTokensEvent__beneficiary',
  mintTokensEvent__caller = 'mintTokensEvent__caller',
  mintTokensEvent__from = 'mintTokensEvent__from',
  mintTokensEvent__id = 'mintTokensEvent__id',
  mintTokensEvent__memo = 'mintTokensEvent__memo',
  mintTokensEvent__projectId = 'mintTokensEvent__projectId',
  mintTokensEvent__timestamp = 'mintTokensEvent__timestamp',
  mintTokensEvent__txHash = 'mintTokensEvent__txHash',
  payEvent = 'payEvent',
  payEvent__amount = 'payEvent__amount',
  payEvent__amountUSD = 'payEvent__amountUSD',
  payEvent__beneficiary = 'payEvent__beneficiary',
  payEvent__beneficiaryTokenCount = 'payEvent__beneficiaryTokenCount',
  payEvent__caller = 'payEvent__caller',
  payEvent__distributionFromProjectId = 'payEvent__distributionFromProjectId',
  payEvent__feeFromProject = 'payEvent__feeFromProject',
  payEvent__from = 'payEvent__from',
  payEvent__id = 'payEvent__id',
  payEvent__note = 'payEvent__note',
  payEvent__projectId = 'payEvent__projectId',
  payEvent__timestamp = 'payEvent__timestamp',
  payEvent__txHash = 'payEvent__txHash',
  project = 'project',
  projectCreateEvent = 'projectCreateEvent',
  projectCreateEvent__caller = 'projectCreateEvent__caller',
  projectCreateEvent__from = 'projectCreateEvent__from',
  projectCreateEvent__id = 'projectCreateEvent__id',
  projectCreateEvent__projectId = 'projectCreateEvent__projectId',
  projectCreateEvent__timestamp = 'projectCreateEvent__timestamp',
  projectCreateEvent__txHash = 'projectCreateEvent__txHash',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  timestamp = 'timestamp',
  useAllowanceEvent = 'useAllowanceEvent',
  useAllowanceEvent__amount = 'useAllowanceEvent__amount',
  useAllowanceEvent__amountUSD = 'useAllowanceEvent__amountUSD',
  useAllowanceEvent__beneficiary = 'useAllowanceEvent__beneficiary',
  useAllowanceEvent__caller = 'useAllowanceEvent__caller',
  useAllowanceEvent__distributedAmount = 'useAllowanceEvent__distributedAmount',
  useAllowanceEvent__distributedAmountUSD = 'useAllowanceEvent__distributedAmountUSD',
  useAllowanceEvent__from = 'useAllowanceEvent__from',
  useAllowanceEvent__id = 'useAllowanceEvent__id',
  useAllowanceEvent__memo = 'useAllowanceEvent__memo',
  useAllowanceEvent__netDistributedamount = 'useAllowanceEvent__netDistributedamount',
  useAllowanceEvent__netDistributedamountUSD = 'useAllowanceEvent__netDistributedamountUSD',
  useAllowanceEvent__projectId = 'useAllowanceEvent__projectId',
  useAllowanceEvent__rulesetCycleNumber = 'useAllowanceEvent__rulesetCycleNumber',
  useAllowanceEvent__rulesetId = 'useAllowanceEvent__rulesetId',
  useAllowanceEvent__timestamp = 'useAllowanceEvent__timestamp',
  useAllowanceEvent__txHash = 'useAllowanceEvent__txHash'
}

export type Project_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addToBalanceEvents_?: InputMaybe<AddToBalanceEvent_Filter>;
  and?: InputMaybe<Array<InputMaybe<Project_Filter>>>;
  burnEvents_?: InputMaybe<BurnEvent_Filter>;
  cashOutEvents_?: InputMaybe<CashOutEvent_Filter>;
  contributorsCount?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  contributorsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_not?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdWithinTrendingWindow?: InputMaybe<Scalars['Boolean']['input']>;
  createdWithinTrendingWindow_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  createdWithinTrendingWindow_not?: InputMaybe<Scalars['Boolean']['input']>;
  createdWithinTrendingWindow_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  creator?: InputMaybe<Scalars['Bytes']['input']>;
  creator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currentBalance?: InputMaybe<Scalars['BigInt']['input']>;
  currentBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deployedERC20Events_?: InputMaybe<DeployedErc20Event_Filter>;
  deployer?: InputMaybe<Scalars['Bytes']['input']>;
  deployer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  deployer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  deployer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  deployer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  deployer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  deployer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  deployer_not?: InputMaybe<Scalars['Bytes']['input']>;
  deployer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  deployer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  distributePayoutsEvents_?: InputMaybe<DistributePayoutsEvent_Filter>;
  distributeReservedTokensEvents_?: InputMaybe<DistributeReservedTokensEvent_Filter>;
  distributeToPayoutSplitEvents_?: InputMaybe<DistributeToPayoutSplitEvent_Filter>;
  distributeToReservedTokenSplitEvents_?: InputMaybe<DistributeToReservedTokenSplitEvent_Filter>;
  handle?: InputMaybe<Scalars['String']['input']>;
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  handle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_gt?: InputMaybe<Scalars['String']['input']>;
  handle_gte?: InputMaybe<Scalars['String']['input']>;
  handle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  handle_lt?: InputMaybe<Scalars['String']['input']>;
  handle_lte?: InputMaybe<Scalars['String']['input']>;
  handle_not?: InputMaybe<Scalars['String']['input']>;
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  handle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  jb721DelegateTokens_?: InputMaybe<Nft_Filter>;
  metadataUri?: InputMaybe<Scalars['String']['input']>;
  metadataUri_contains?: InputMaybe<Scalars['String']['input']>;
  metadataUri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataUri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataUri_gt?: InputMaybe<Scalars['String']['input']>;
  metadataUri_gte?: InputMaybe<Scalars['String']['input']>;
  metadataUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataUri_lt?: InputMaybe<Scalars['String']['input']>;
  metadataUri_lte?: InputMaybe<Scalars['String']['input']>;
  metadataUri_not?: InputMaybe<Scalars['String']['input']>;
  metadataUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadataUri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataUri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataUri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataUri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvents_?: InputMaybe<MintTokensEvent_Filter>;
  nftCollections_?: InputMaybe<NftCollection_Filter>;
  nftsMintedCount?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_gt?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_gte?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  nftsMintedCount_lt?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_lte?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_not?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Project_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  participants_?: InputMaybe<Participant_Filter>;
  payEvents_?: InputMaybe<PayEvent_Filter>;
  paymentsCount?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  paymentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_not?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  permissionsHolders_?: InputMaybe<PermissionsHolder_Filter>;
  projectEvents_?: InputMaybe<ProjectEvent_Filter>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  redeemCount?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_gt?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_gte?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  redeemCount_lt?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_lte?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_not?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  redeemVolume?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUSD?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  redeemVolumeUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  redeemVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  redeemVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenSupply?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trendingPaymentsCount?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  trendingPaymentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_not?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  trendingScore?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trendingScore_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_not?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trendingVolume?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  trendingVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  useAllowanceEvents_?: InputMaybe<UseAllowanceEvent_Filter>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Project_OrderBy {
  addToBalanceEvents = 'addToBalanceEvents',
  burnEvents = 'burnEvents',
  cashOutEvents = 'cashOutEvents',
  contributorsCount = 'contributorsCount',
  createdAt = 'createdAt',
  createdWithinTrendingWindow = 'createdWithinTrendingWindow',
  creator = 'creator',
  currentBalance = 'currentBalance',
  deployedERC20Events = 'deployedERC20Events',
  deployer = 'deployer',
  distributePayoutsEvents = 'distributePayoutsEvents',
  distributeReservedTokensEvents = 'distributeReservedTokensEvents',
  distributeToPayoutSplitEvents = 'distributeToPayoutSplitEvents',
  distributeToReservedTokenSplitEvents = 'distributeToReservedTokenSplitEvents',
  handle = 'handle',
  id = 'id',
  jb721DelegateTokens = 'jb721DelegateTokens',
  metadataUri = 'metadataUri',
  mintTokensEvents = 'mintTokensEvents',
  nftCollections = 'nftCollections',
  nftsMintedCount = 'nftsMintedCount',
  owner = 'owner',
  participants = 'participants',
  payEvents = 'payEvents',
  paymentsCount = 'paymentsCount',
  permissionsHolders = 'permissionsHolders',
  projectEvents = 'projectEvents',
  projectId = 'projectId',
  redeemCount = 'redeemCount',
  redeemVolume = 'redeemVolume',
  redeemVolumeUSD = 'redeemVolumeUSD',
  tokenSupply = 'tokenSupply',
  trendingPaymentsCount = 'trendingPaymentsCount',
  trendingScore = 'trendingScore',
  trendingVolume = 'trendingVolume',
  useAllowanceEvents = 'useAllowanceEvents',
  volume = 'volume',
  volumeUSD = 'volumeUSD'
}

export type ProtocolLog = {
  erc20Count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  oldestTrendingPayEvent: Maybe<PayEvent>;
  paymentsCount: Scalars['Int']['output'];
  projectsCount: Scalars['Int']['output'];
  redeemCount: Scalars['Int']['output'];
  trendingLastUpdatedTimestamp: Scalars['Int']['output'];
  volume: Scalars['BigInt']['output'];
  volumeRedeemed: Scalars['BigInt']['output'];
  volumeRedeemedUSD: Scalars['BigInt']['output'];
  volumeUSD: Scalars['BigInt']['output'];
};

export type ProtocolLog_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProtocolLog_Filter>>>;
  erc20Count?: InputMaybe<Scalars['Int']['input']>;
  erc20Count_gt?: InputMaybe<Scalars['Int']['input']>;
  erc20Count_gte?: InputMaybe<Scalars['Int']['input']>;
  erc20Count_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  erc20Count_lt?: InputMaybe<Scalars['Int']['input']>;
  erc20Count_lte?: InputMaybe<Scalars['Int']['input']>;
  erc20Count_not?: InputMaybe<Scalars['Int']['input']>;
  erc20Count_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  oldestTrendingPayEvent?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_?: InputMaybe<PayEvent_Filter>;
  oldestTrendingPayEvent_contains?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_gt?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_gte?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oldestTrendingPayEvent_lt?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_lte?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_not?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oldestTrendingPayEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  oldestTrendingPayEvent_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ProtocolLog_Filter>>>;
  paymentsCount?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  paymentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_not?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectsCount?: InputMaybe<Scalars['Int']['input']>;
  projectsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  projectsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  projectsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  projectsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  projectsCount_not?: InputMaybe<Scalars['Int']['input']>;
  projectsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  redeemCount?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_gt?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_gte?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  redeemCount_lt?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_lte?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_not?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  trendingLastUpdatedTimestamp?: InputMaybe<Scalars['Int']['input']>;
  trendingLastUpdatedTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  trendingLastUpdatedTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  trendingLastUpdatedTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  trendingLastUpdatedTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  trendingLastUpdatedTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  trendingLastUpdatedTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  trendingLastUpdatedTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volumeRedeemed?: InputMaybe<Scalars['BigInt']['input']>;
  volumeRedeemedUSD?: InputMaybe<Scalars['BigInt']['input']>;
  volumeRedeemedUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeRedeemedUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeRedeemedUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeRedeemedUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeRedeemedUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeRedeemedUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeRedeemedUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeRedeemed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeRedeemed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeRedeemed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeRedeemed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeRedeemed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeRedeemed_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeRedeemed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum ProtocolLog_OrderBy {
  erc20Count = 'erc20Count',
  id = 'id',
  oldestTrendingPayEvent = 'oldestTrendingPayEvent',
  oldestTrendingPayEvent__amount = 'oldestTrendingPayEvent__amount',
  oldestTrendingPayEvent__amountUSD = 'oldestTrendingPayEvent__amountUSD',
  oldestTrendingPayEvent__beneficiary = 'oldestTrendingPayEvent__beneficiary',
  oldestTrendingPayEvent__beneficiaryTokenCount = 'oldestTrendingPayEvent__beneficiaryTokenCount',
  oldestTrendingPayEvent__caller = 'oldestTrendingPayEvent__caller',
  oldestTrendingPayEvent__distributionFromProjectId = 'oldestTrendingPayEvent__distributionFromProjectId',
  oldestTrendingPayEvent__feeFromProject = 'oldestTrendingPayEvent__feeFromProject',
  oldestTrendingPayEvent__from = 'oldestTrendingPayEvent__from',
  oldestTrendingPayEvent__id = 'oldestTrendingPayEvent__id',
  oldestTrendingPayEvent__note = 'oldestTrendingPayEvent__note',
  oldestTrendingPayEvent__projectId = 'oldestTrendingPayEvent__projectId',
  oldestTrendingPayEvent__timestamp = 'oldestTrendingPayEvent__timestamp',
  oldestTrendingPayEvent__txHash = 'oldestTrendingPayEvent__txHash',
  paymentsCount = 'paymentsCount',
  projectsCount = 'projectsCount',
  redeemCount = 'redeemCount',
  trendingLastUpdatedTimestamp = 'trendingLastUpdatedTimestamp',
  volume = 'volume',
  volumeRedeemed = 'volumeRedeemed',
  volumeRedeemedUSD = 'volumeRedeemedUSD',
  volumeUSD = 'volumeUSD'
}

export type Query = {
  /** Access to subgraph metadata */
  _meta: Maybe<_Meta_>;
  addToBalanceEvent: Maybe<AddToBalanceEvent>;
  addToBalanceEvents: Array<AddToBalanceEvent>;
  burnEvent: Maybe<BurnEvent>;
  burnEvents: Array<BurnEvent>;
  cashOutEvent: Maybe<CashOutEvent>;
  cashOutEvents: Array<CashOutEvent>;
  decorateBannyEvent: Maybe<DecorateBannyEvent>;
  decorateBannyEvents: Array<DecorateBannyEvent>;
  deployedERC20Event: Maybe<DeployedErc20Event>;
  deployedERC20Events: Array<DeployedErc20Event>;
  distributePayoutsEvent: Maybe<DistributePayoutsEvent>;
  distributePayoutsEvents: Array<DistributePayoutsEvent>;
  distributeReservedTokensEvent: Maybe<DistributeReservedTokensEvent>;
  distributeReservedTokensEvents: Array<DistributeReservedTokensEvent>;
  distributeToPayoutSplitEvent: Maybe<DistributeToPayoutSplitEvent>;
  distributeToPayoutSplitEvents: Array<DistributeToPayoutSplitEvent>;
  distributeToReservedTokenSplitEvent: Maybe<DistributeToReservedTokenSplitEvent>;
  distributeToReservedTokenSplitEvents: Array<DistributeToReservedTokenSplitEvent>;
  ensnode: Maybe<EnsNode>;
  ensnodes: Array<EnsNode>;
  mintTokensEvent: Maybe<MintTokensEvent>;
  mintTokensEvents: Array<MintTokensEvent>;
  nft: Maybe<Nft>;
  nftcollection: Maybe<NftCollection>;
  nftcollections: Array<NftCollection>;
  nfts: Array<Nft>;
  nfttier: Maybe<NftTier>;
  nfttiers: Array<NftTier>;
  participant: Maybe<Participant>;
  participants: Array<Participant>;
  payEvent: Maybe<PayEvent>;
  payEvents: Array<PayEvent>;
  permissionsHolder: Maybe<PermissionsHolder>;
  permissionsHolders: Array<PermissionsHolder>;
  project: Maybe<Project>;
  projectCreateEvent: Maybe<ProjectCreateEvent>;
  projectCreateEvents: Array<ProjectCreateEvent>;
  projectEvent: Maybe<ProjectEvent>;
  projectEvents: Array<ProjectEvent>;
  projectSearch: Array<Project>;
  projects: Array<Project>;
  protocolLog: Maybe<ProtocolLog>;
  protocolLogs: Array<ProtocolLog>;
  storeAutoIssuanceAmountEvent: Maybe<StoreAutoIssuanceAmountEvent>;
  storeAutoIssuanceAmountEvents: Array<StoreAutoIssuanceAmountEvent>;
  useAllowanceEvent: Maybe<UseAllowanceEvent>;
  useAllowanceEvents: Array<UseAllowanceEvent>;
  wallet: Maybe<Wallet>;
  wallets: Array<Wallet>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAddToBalanceEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAddToBalanceEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddToBalanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddToBalanceEvent_Filter>;
};


export type QueryBurnEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBurnEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BurnEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BurnEvent_Filter>;
};


export type QueryCashOutEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCashOutEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CashOutEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CashOutEvent_Filter>;
};


export type QueryDecorateBannyEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDecorateBannyEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DecorateBannyEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DecorateBannyEvent_Filter>;
};


export type QueryDeployedErc20EventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDeployedErc20EventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DeployedErc20Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DeployedErc20Event_Filter>;
};


export type QueryDistributePayoutsEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDistributePayoutsEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributePayoutsEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributePayoutsEvent_Filter>;
};


export type QueryDistributeReservedTokensEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDistributeReservedTokensEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributeReservedTokensEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeReservedTokensEvent_Filter>;
};


export type QueryDistributeToPayoutSplitEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDistributeToPayoutSplitEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributeToPayoutSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeToPayoutSplitEvent_Filter>;
};


export type QueryDistributeToReservedTokenSplitEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDistributeToReservedTokenSplitEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributeToReservedTokenSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeToReservedTokenSplitEvent_Filter>;
};


export type QueryEnsnodeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEnsnodesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EnsNode_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EnsNode_Filter>;
};


export type QueryMintTokensEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMintTokensEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MintTokensEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MintTokensEvent_Filter>;
};


export type QueryNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftcollectionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftcollectionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftCollection_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftCollection_Filter>;
};


export type QueryNftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nft_Filter>;
};


export type QueryNfttierArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNfttiersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftTier_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftTier_Filter>;
};


export type QueryParticipantArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryParticipantsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Participant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Participant_Filter>;
};


export type QueryPayEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPayEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PayEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PayEvent_Filter>;
};


export type QueryPermissionsHolderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPermissionsHoldersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PermissionsHolder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PermissionsHolder_Filter>;
};


export type QueryProjectArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProjectCreateEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProjectCreateEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProjectCreateEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProjectCreateEvent_Filter>;
};


export type QueryProjectEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProjectEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProjectEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProjectEvent_Filter>;
};


export type QueryProjectSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String']['input'];
  where?: InputMaybe<Project_Filter>;
};


export type QueryProjectsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Project_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Project_Filter>;
};


export type QueryProtocolLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProtocolLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProtocolLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolLog_Filter>;
};


export type QueryStoreAutoIssuanceAmountEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStoreAutoIssuanceAmountEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StoreAutoIssuanceAmountEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StoreAutoIssuanceAmountEvent_Filter>;
};


export type QueryUseAllowanceEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUseAllowanceEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UseAllowanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UseAllowanceEvent_Filter>;
};


export type QueryWalletArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWalletsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Wallet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Wallet_Filter>;
};

export type StoreAutoIssuanceAmountEvent = {
  beneficiary: Scalars['Bytes']['output'];
  caller: Scalars['Bytes']['output'];
  count: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  revnetId: Scalars['BigInt']['output'];
  stageId: Scalars['BigInt']['output'];
};

export type StoreAutoIssuanceAmountEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StoreAutoIssuanceAmountEvent_Filter>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  count?: InputMaybe<Scalars['BigInt']['input']>;
  count_gt?: InputMaybe<Scalars['BigInt']['input']>;
  count_gte?: InputMaybe<Scalars['BigInt']['input']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  count_lt?: InputMaybe<Scalars['BigInt']['input']>;
  count_lte?: InputMaybe<Scalars['BigInt']['input']>;
  count_not?: InputMaybe<Scalars['BigInt']['input']>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<StoreAutoIssuanceAmountEvent_Filter>>>;
  revnetId?: InputMaybe<Scalars['BigInt']['input']>;
  revnetId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  revnetId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  revnetId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  revnetId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  revnetId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  revnetId_not?: InputMaybe<Scalars['BigInt']['input']>;
  revnetId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stageId?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stageId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_not?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum StoreAutoIssuanceAmountEvent_OrderBy {
  beneficiary = 'beneficiary',
  caller = 'caller',
  count = 'count',
  id = 'id',
  revnetId = 'revnetId',
  stageId = 'stageId'
}

export type Subscription = {
  /** Access to subgraph metadata */
  _meta: Maybe<_Meta_>;
  addToBalanceEvent: Maybe<AddToBalanceEvent>;
  addToBalanceEvents: Array<AddToBalanceEvent>;
  burnEvent: Maybe<BurnEvent>;
  burnEvents: Array<BurnEvent>;
  cashOutEvent: Maybe<CashOutEvent>;
  cashOutEvents: Array<CashOutEvent>;
  decorateBannyEvent: Maybe<DecorateBannyEvent>;
  decorateBannyEvents: Array<DecorateBannyEvent>;
  deployedERC20Event: Maybe<DeployedErc20Event>;
  deployedERC20Events: Array<DeployedErc20Event>;
  distributePayoutsEvent: Maybe<DistributePayoutsEvent>;
  distributePayoutsEvents: Array<DistributePayoutsEvent>;
  distributeReservedTokensEvent: Maybe<DistributeReservedTokensEvent>;
  distributeReservedTokensEvents: Array<DistributeReservedTokensEvent>;
  distributeToPayoutSplitEvent: Maybe<DistributeToPayoutSplitEvent>;
  distributeToPayoutSplitEvents: Array<DistributeToPayoutSplitEvent>;
  distributeToReservedTokenSplitEvent: Maybe<DistributeToReservedTokenSplitEvent>;
  distributeToReservedTokenSplitEvents: Array<DistributeToReservedTokenSplitEvent>;
  ensnode: Maybe<EnsNode>;
  ensnodes: Array<EnsNode>;
  mintTokensEvent: Maybe<MintTokensEvent>;
  mintTokensEvents: Array<MintTokensEvent>;
  nft: Maybe<Nft>;
  nftcollection: Maybe<NftCollection>;
  nftcollections: Array<NftCollection>;
  nfts: Array<Nft>;
  nfttier: Maybe<NftTier>;
  nfttiers: Array<NftTier>;
  participant: Maybe<Participant>;
  participants: Array<Participant>;
  payEvent: Maybe<PayEvent>;
  payEvents: Array<PayEvent>;
  permissionsHolder: Maybe<PermissionsHolder>;
  permissionsHolders: Array<PermissionsHolder>;
  project: Maybe<Project>;
  projectCreateEvent: Maybe<ProjectCreateEvent>;
  projectCreateEvents: Array<ProjectCreateEvent>;
  projectEvent: Maybe<ProjectEvent>;
  projectEvents: Array<ProjectEvent>;
  projects: Array<Project>;
  protocolLog: Maybe<ProtocolLog>;
  protocolLogs: Array<ProtocolLog>;
  storeAutoIssuanceAmountEvent: Maybe<StoreAutoIssuanceAmountEvent>;
  storeAutoIssuanceAmountEvents: Array<StoreAutoIssuanceAmountEvent>;
  useAllowanceEvent: Maybe<UseAllowanceEvent>;
  useAllowanceEvents: Array<UseAllowanceEvent>;
  wallet: Maybe<Wallet>;
  wallets: Array<Wallet>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAddToBalanceEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAddToBalanceEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AddToBalanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AddToBalanceEvent_Filter>;
};


export type SubscriptionBurnEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBurnEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BurnEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BurnEvent_Filter>;
};


export type SubscriptionCashOutEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCashOutEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CashOutEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CashOutEvent_Filter>;
};


export type SubscriptionDecorateBannyEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDecorateBannyEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DecorateBannyEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DecorateBannyEvent_Filter>;
};


export type SubscriptionDeployedErc20EventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDeployedErc20EventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DeployedErc20Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DeployedErc20Event_Filter>;
};


export type SubscriptionDistributePayoutsEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDistributePayoutsEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributePayoutsEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributePayoutsEvent_Filter>;
};


export type SubscriptionDistributeReservedTokensEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDistributeReservedTokensEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributeReservedTokensEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeReservedTokensEvent_Filter>;
};


export type SubscriptionDistributeToPayoutSplitEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDistributeToPayoutSplitEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributeToPayoutSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeToPayoutSplitEvent_Filter>;
};


export type SubscriptionDistributeToReservedTokenSplitEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDistributeToReservedTokenSplitEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DistributeToReservedTokenSplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DistributeToReservedTokenSplitEvent_Filter>;
};


export type SubscriptionEnsnodeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEnsnodesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EnsNode_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EnsNode_Filter>;
};


export type SubscriptionMintTokensEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMintTokensEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MintTokensEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MintTokensEvent_Filter>;
};


export type SubscriptionNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftcollectionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftcollectionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftCollection_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftCollection_Filter>;
};


export type SubscriptionNftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nft_Filter>;
};


export type SubscriptionNfttierArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNfttiersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftTier_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftTier_Filter>;
};


export type SubscriptionParticipantArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionParticipantsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Participant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Participant_Filter>;
};


export type SubscriptionPayEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPayEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PayEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PayEvent_Filter>;
};


export type SubscriptionPermissionsHolderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPermissionsHoldersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PermissionsHolder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PermissionsHolder_Filter>;
};


export type SubscriptionProjectArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProjectCreateEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProjectCreateEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProjectCreateEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProjectCreateEvent_Filter>;
};


export type SubscriptionProjectEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProjectEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProjectEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProjectEvent_Filter>;
};


export type SubscriptionProjectsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Project_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Project_Filter>;
};


export type SubscriptionProtocolLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProtocolLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProtocolLog_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolLog_Filter>;
};


export type SubscriptionStoreAutoIssuanceAmountEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStoreAutoIssuanceAmountEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StoreAutoIssuanceAmountEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StoreAutoIssuanceAmountEvent_Filter>;
};


export type SubscriptionUseAllowanceEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUseAllowanceEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UseAllowanceEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UseAllowanceEvent_Filter>;
};


export type SubscriptionWalletArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWalletsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Wallet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Wallet_Filter>;
};

export type UseAllowanceEvent = {
  amount: Scalars['BigInt']['output'];
  amountUSD: Maybe<Scalars['BigInt']['output']>;
  beneficiary: Scalars['Bytes']['output'];
  caller: Scalars['Bytes']['output'];
  distributedAmount: Scalars['BigInt']['output'];
  distributedAmountUSD: Maybe<Scalars['BigInt']['output']>;
  from: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  memo: Scalars['String']['output'];
  netDistributedamount: Scalars['BigInt']['output'];
  netDistributedamountUSD: Maybe<Scalars['BigInt']['output']>;
  project: Project;
  projectId: Scalars['Int']['output'];
  rulesetCycleNumber: Scalars['Int']['output'];
  rulesetId: Scalars['BigInt']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type UseAllowanceEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<UseAllowanceEvent_Filter>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  distributedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  distributedAmountUSD?: InputMaybe<Scalars['BigInt']['input']>;
  distributedAmountUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  distributedAmountUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  distributedAmountUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  distributedAmountUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  distributedAmountUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  distributedAmountUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  distributedAmountUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  distributedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  distributedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  distributedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  distributedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  distributedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  distributedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  distributedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  memo?: InputMaybe<Scalars['String']['input']>;
  memo_contains?: InputMaybe<Scalars['String']['input']>;
  memo_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  memo_ends_with?: InputMaybe<Scalars['String']['input']>;
  memo_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  memo_gt?: InputMaybe<Scalars['String']['input']>;
  memo_gte?: InputMaybe<Scalars['String']['input']>;
  memo_in?: InputMaybe<Array<Scalars['String']['input']>>;
  memo_lt?: InputMaybe<Scalars['String']['input']>;
  memo_lte?: InputMaybe<Scalars['String']['input']>;
  memo_not?: InputMaybe<Scalars['String']['input']>;
  memo_not_contains?: InputMaybe<Scalars['String']['input']>;
  memo_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  memo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  memo_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  memo_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  memo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  memo_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  memo_starts_with?: InputMaybe<Scalars['String']['input']>;
  memo_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  netDistributedamount?: InputMaybe<Scalars['BigInt']['input']>;
  netDistributedamountUSD?: InputMaybe<Scalars['BigInt']['input']>;
  netDistributedamountUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netDistributedamountUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netDistributedamountUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netDistributedamountUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netDistributedamountUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netDistributedamountUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  netDistributedamountUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netDistributedamount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netDistributedamount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netDistributedamount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netDistributedamount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netDistributedamount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netDistributedamount_not?: InputMaybe<Scalars['BigInt']['input']>;
  netDistributedamount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<UseAllowanceEvent_Filter>>>;
  project?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  project_?: InputMaybe<Project_Filter>;
  project_contains?: InputMaybe<Scalars['String']['input']>;
  project_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_gt?: InputMaybe<Scalars['String']['input']>;
  project_gte?: InputMaybe<Scalars['String']['input']>;
  project_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_lt?: InputMaybe<Scalars['String']['input']>;
  project_lte?: InputMaybe<Scalars['String']['input']>;
  project_not?: InputMaybe<Scalars['String']['input']>;
  project_not_contains?: InputMaybe<Scalars['String']['input']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  project_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  project_starts_with?: InputMaybe<Scalars['String']['input']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rulesetCycleNumber?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  rulesetCycleNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_not?: InputMaybe<Scalars['Int']['input']>;
  rulesetCycleNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  rulesetId?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rulesetId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_not?: InputMaybe<Scalars['BigInt']['input']>;
  rulesetId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum UseAllowanceEvent_OrderBy {
  amount = 'amount',
  amountUSD = 'amountUSD',
  beneficiary = 'beneficiary',
  caller = 'caller',
  distributedAmount = 'distributedAmount',
  distributedAmountUSD = 'distributedAmountUSD',
  from = 'from',
  id = 'id',
  memo = 'memo',
  netDistributedamount = 'netDistributedamount',
  netDistributedamountUSD = 'netDistributedamountUSD',
  project = 'project',
  projectId = 'projectId',
  project__contributorsCount = 'project__contributorsCount',
  project__createdAt = 'project__createdAt',
  project__createdWithinTrendingWindow = 'project__createdWithinTrendingWindow',
  project__creator = 'project__creator',
  project__currentBalance = 'project__currentBalance',
  project__deployer = 'project__deployer',
  project__handle = 'project__handle',
  project__id = 'project__id',
  project__metadataUri = 'project__metadataUri',
  project__nftsMintedCount = 'project__nftsMintedCount',
  project__owner = 'project__owner',
  project__paymentsCount = 'project__paymentsCount',
  project__projectId = 'project__projectId',
  project__redeemCount = 'project__redeemCount',
  project__redeemVolume = 'project__redeemVolume',
  project__redeemVolumeUSD = 'project__redeemVolumeUSD',
  project__tokenSupply = 'project__tokenSupply',
  project__trendingPaymentsCount = 'project__trendingPaymentsCount',
  project__trendingScore = 'project__trendingScore',
  project__trendingVolume = 'project__trendingVolume',
  project__volume = 'project__volume',
  project__volumeUSD = 'project__volumeUSD',
  rulesetCycleNumber = 'rulesetCycleNumber',
  rulesetId = 'rulesetId',
  timestamp = 'timestamp',
  txHash = 'txHash'
}

export type Wallet = {
  id: Scalars['ID']['output'];
  lastPaidTimestamp: Scalars['Int']['output'];
  participants: Array<Participant>;
  volume: Scalars['BigInt']['output'];
  volumeUSD: Scalars['BigInt']['output'];
};


export type WalletParticipantsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Participant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Participant_Filter>;
};

export type Wallet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Wallet_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastPaidTimestamp?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastPaidTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Wallet_Filter>>>;
  participants_?: InputMaybe<Participant_Filter>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Wallet_OrderBy {
  id = 'id',
  lastPaidTimestamp = 'lastPaidTimestamp',
  participants = 'participants',
  volume = 'volume',
  volumeUSD = 'volumeUSD'
}

export type _Block_ = {
  /** The hash of the block */
  hash: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  deny = 'deny'
}

export type PayEventsQueryVariables = Exact<{
  where?: InputMaybe<PayEvent_Filter>;
}>;


export type PayEventsQuery = { payEvents: Array<{ id: string, timestamp: number, txHash: any, caller: any, beneficiary: any, amount: bigint, note: string, beneficiaryTokenCount: bigint }> };

export type DecorateBannyEventsQueryVariables = Exact<{
  where?: InputMaybe<DecorateBannyEvent_Filter>;
}>;


export type DecorateBannyEventsQuery = { decorateBannyEvents: Array<{ id: string, timestamp: number, txHash: any, caller: any, nakedBannyId: bigint, outfitIds: Array<bigint>, worldId: bigint }> };

export type TierDataFragment = { id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } };

export type NfTsQueryVariables = Exact<{
  where?: InputMaybe<Nft_Filter>;
}>;


export type NfTsQuery = { nfts: Array<{ tokenId: bigint, tokenUri: string, category: number, owner: { address: any }, collection: { address: any }, tier: { id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } } }> };

export type NftTiersQueryVariables = Exact<{
  where?: InputMaybe<NftTier_Filter>;
  orderBy?: InputMaybe<NftTier_OrderBy>;
}>;


export type NftTiersQuery = { nfttiers: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }> };

export type AllNftTiersQueryVariables = Exact<{
  orderBy?: InputMaybe<NftTier_OrderBy>;
  collection?: InputMaybe<Scalars['String']['input']>;
}>;


export type AllNftTiersQuery = { naked: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, world: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, backside: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, necklace: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, head: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, glasses: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, mouth: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, legs: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, suit: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, suitBottom: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, suitTop: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, headTop: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, hand: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, specialSuit: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, specialLegs: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, specialHead: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }>, specialBody: Array<{ id: string, tierId: number, price: bigint, encodedIpfsUri: any | null, resolvedUri: string | null, svg: string | null, initialSupply: bigint, remainingSupply: bigint, category: number, collection: { address: any } }> };



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
  AddToBalanceEvent: ResolverTypeWrapper<AddToBalanceEvent>;
  AddToBalanceEvent_filter: AddToBalanceEvent_Filter;
  AddToBalanceEvent_orderBy: AddToBalanceEvent_OrderBy;
  Aggregation_interval: Aggregation_Interval;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_Height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BurnEvent: ResolverTypeWrapper<BurnEvent>;
  BurnEvent_filter: BurnEvent_Filter;
  BurnEvent_orderBy: BurnEvent_OrderBy;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  CashOutEvent: ResolverTypeWrapper<CashOutEvent>;
  CashOutEvent_filter: CashOutEvent_Filter;
  CashOutEvent_orderBy: CashOutEvent_OrderBy;
  DecorateBannyEvent: ResolverTypeWrapper<DecorateBannyEvent>;
  DecorateBannyEvent_filter: DecorateBannyEvent_Filter;
  DecorateBannyEvent_orderBy: DecorateBannyEvent_OrderBy;
  DeployedERC20Event: ResolverTypeWrapper<DeployedErc20Event>;
  DeployedERC20Event_filter: DeployedErc20Event_Filter;
  DeployedERC20Event_orderBy: DeployedErc20Event_OrderBy;
  DistributePayoutsEvent: ResolverTypeWrapper<DistributePayoutsEvent>;
  DistributePayoutsEvent_filter: DistributePayoutsEvent_Filter;
  DistributePayoutsEvent_orderBy: DistributePayoutsEvent_OrderBy;
  DistributeReservedTokensEvent: ResolverTypeWrapper<DistributeReservedTokensEvent>;
  DistributeReservedTokensEvent_filter: DistributeReservedTokensEvent_Filter;
  DistributeReservedTokensEvent_orderBy: DistributeReservedTokensEvent_OrderBy;
  DistributeToPayoutSplitEvent: ResolverTypeWrapper<DistributeToPayoutSplitEvent>;
  DistributeToPayoutSplitEvent_filter: DistributeToPayoutSplitEvent_Filter;
  DistributeToPayoutSplitEvent_orderBy: DistributeToPayoutSplitEvent_OrderBy;
  DistributeToReservedTokenSplitEvent: ResolverTypeWrapper<DistributeToReservedTokenSplitEvent>;
  DistributeToReservedTokenSplitEvent_filter: DistributeToReservedTokenSplitEvent_Filter;
  DistributeToReservedTokenSplitEvent_orderBy: DistributeToReservedTokenSplitEvent_OrderBy;
  ENSNode: ResolverTypeWrapper<EnsNode>;
  ENSNode_filter: EnsNode_Filter;
  ENSNode_orderBy: EnsNode_OrderBy;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  MintTokensEvent: ResolverTypeWrapper<MintTokensEvent>;
  MintTokensEvent_filter: MintTokensEvent_Filter;
  MintTokensEvent_orderBy: MintTokensEvent_OrderBy;
  NFT: ResolverTypeWrapper<Nft>;
  NFTCollection: ResolverTypeWrapper<NftCollection>;
  NFTCollection_filter: NftCollection_Filter;
  NFTCollection_orderBy: NftCollection_OrderBy;
  NFTTier: ResolverTypeWrapper<NftTier>;
  NFTTier_filter: NftTier_Filter;
  NFTTier_orderBy: NftTier_OrderBy;
  NFT_filter: Nft_Filter;
  NFT_orderBy: Nft_OrderBy;
  OrderDirection: OrderDirection;
  Participant: ResolverTypeWrapper<Participant>;
  Participant_filter: Participant_Filter;
  Participant_orderBy: Participant_OrderBy;
  PayEvent: ResolverTypeWrapper<PayEvent>;
  PayEvent_filter: PayEvent_Filter;
  PayEvent_orderBy: PayEvent_OrderBy;
  PermissionsHolder: ResolverTypeWrapper<PermissionsHolder>;
  PermissionsHolder_filter: PermissionsHolder_Filter;
  PermissionsHolder_orderBy: PermissionsHolder_OrderBy;
  Project: ResolverTypeWrapper<Project>;
  ProjectCreateEvent: ResolverTypeWrapper<ProjectCreateEvent>;
  ProjectCreateEvent_filter: ProjectCreateEvent_Filter;
  ProjectCreateEvent_orderBy: ProjectCreateEvent_OrderBy;
  ProjectEvent: ResolverTypeWrapper<ProjectEvent>;
  ProjectEvent_filter: ProjectEvent_Filter;
  ProjectEvent_orderBy: ProjectEvent_OrderBy;
  Project_filter: Project_Filter;
  Project_orderBy: Project_OrderBy;
  ProtocolLog: ResolverTypeWrapper<ProtocolLog>;
  ProtocolLog_filter: ProtocolLog_Filter;
  ProtocolLog_orderBy: ProtocolLog_OrderBy;
  Query: ResolverTypeWrapper<{}>;
  StoreAutoIssuanceAmountEvent: ResolverTypeWrapper<StoreAutoIssuanceAmountEvent>;
  StoreAutoIssuanceAmountEvent_filter: StoreAutoIssuanceAmountEvent_Filter;
  StoreAutoIssuanceAmountEvent_orderBy: StoreAutoIssuanceAmountEvent_OrderBy;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  UseAllowanceEvent: ResolverTypeWrapper<UseAllowanceEvent>;
  UseAllowanceEvent_filter: UseAllowanceEvent_Filter;
  UseAllowanceEvent_orderBy: UseAllowanceEvent_OrderBy;
  Wallet: ResolverTypeWrapper<Wallet>;
  Wallet_filter: Wallet_Filter;
  Wallet_orderBy: Wallet_OrderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddToBalanceEvent: AddToBalanceEvent;
  AddToBalanceEvent_filter: AddToBalanceEvent_Filter;
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_Height;
  Boolean: Scalars['Boolean']['output'];
  BurnEvent: BurnEvent;
  BurnEvent_filter: BurnEvent_Filter;
  Bytes: Scalars['Bytes']['output'];
  CashOutEvent: CashOutEvent;
  CashOutEvent_filter: CashOutEvent_Filter;
  DecorateBannyEvent: DecorateBannyEvent;
  DecorateBannyEvent_filter: DecorateBannyEvent_Filter;
  DeployedERC20Event: DeployedErc20Event;
  DeployedERC20Event_filter: DeployedErc20Event_Filter;
  DistributePayoutsEvent: DistributePayoutsEvent;
  DistributePayoutsEvent_filter: DistributePayoutsEvent_Filter;
  DistributeReservedTokensEvent: DistributeReservedTokensEvent;
  DistributeReservedTokensEvent_filter: DistributeReservedTokensEvent_Filter;
  DistributeToPayoutSplitEvent: DistributeToPayoutSplitEvent;
  DistributeToPayoutSplitEvent_filter: DistributeToPayoutSplitEvent_Filter;
  DistributeToReservedTokenSplitEvent: DistributeToReservedTokenSplitEvent;
  DistributeToReservedTokenSplitEvent_filter: DistributeToReservedTokenSplitEvent_Filter;
  ENSNode: EnsNode;
  ENSNode_filter: EnsNode_Filter;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  MintTokensEvent: MintTokensEvent;
  MintTokensEvent_filter: MintTokensEvent_Filter;
  NFT: Nft;
  NFTCollection: NftCollection;
  NFTCollection_filter: NftCollection_Filter;
  NFTTier: NftTier;
  NFTTier_filter: NftTier_Filter;
  NFT_filter: Nft_Filter;
  Participant: Participant;
  Participant_filter: Participant_Filter;
  PayEvent: PayEvent;
  PayEvent_filter: PayEvent_Filter;
  PermissionsHolder: PermissionsHolder;
  PermissionsHolder_filter: PermissionsHolder_Filter;
  Project: Project;
  ProjectCreateEvent: ProjectCreateEvent;
  ProjectCreateEvent_filter: ProjectCreateEvent_Filter;
  ProjectEvent: ProjectEvent;
  ProjectEvent_filter: ProjectEvent_Filter;
  Project_filter: Project_Filter;
  ProtocolLog: ProtocolLog;
  ProtocolLog_filter: ProtocolLog_Filter;
  Query: {};
  StoreAutoIssuanceAmountEvent: StoreAutoIssuanceAmountEvent;
  StoreAutoIssuanceAmountEvent_filter: StoreAutoIssuanceAmountEvent_Filter;
  String: Scalars['String']['output'];
  Subscription: {};
  Timestamp: Scalars['Timestamp']['output'];
  UseAllowanceEvent: UseAllowanceEvent;
  UseAllowanceEvent_filter: UseAllowanceEvent_Filter;
  Wallet: Wallet;
  Wallet_filter: Wallet_Filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
};

export type DerivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type DerivedFromDirectiveResolver<Result, Parent, ContextType = any, Args = DerivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = { };

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SubgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type SubgraphIdDirectiveResolver<Result, Parent, ContextType = any, Args = SubgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddToBalanceEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddToBalanceEvent'] = ResolversParentTypes['AddToBalanceEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BurnEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['BurnEvent'] = ResolversParentTypes['BurnEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  erc20Amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  holder?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stakedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CashOutEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['CashOutEvent'] = ResolversParentTypes['CashOutEvent']> = {
  beneficiary?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  cashOutCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  holder?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reclaimAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reclaimAmountUSD?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DecorateBannyEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['DecorateBannyEvent'] = ResolversParentTypes['DecorateBannyEvent']> = {
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nakedBannyId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  outfitIds?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  worldId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeployedErc20EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeployedERC20Event'] = ResolversParentTypes['DeployedERC20Event']> = {
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DistributePayoutsEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['DistributePayoutsEvent'] = ResolversParentTypes['DistributePayoutsEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountPaidOut?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountPaidOutUSD?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeUSD?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetCycleNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rulesetId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  splitDistributions?: Resolver<Array<ResolversTypes['DistributeToPayoutSplitEvent']>, ParentType, ContextType, RequireFields<DistributePayoutsEventSplitDistributionsArgs, 'first' | 'skip'>>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DistributeReservedTokensEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['DistributeReservedTokensEvent'] = ResolversParentTypes['DistributeReservedTokensEvent']> = {
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetCycleNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  splitDistributions?: Resolver<Array<ResolversTypes['DistributeToReservedTokenSplitEvent']>, ParentType, ContextType, RequireFields<DistributeReservedTokensEventSplitDistributionsArgs, 'first' | 'skip'>>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DistributeToPayoutSplitEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['DistributeToPayoutSplitEvent'] = ResolversParentTypes['DistributeToPayoutSplitEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  distributePayoutsEvent?: Resolver<ResolversTypes['DistributePayoutsEvent'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lockedUntil?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  percent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  preferAddToBalance?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  splitProjectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DistributeToReservedTokenSplitEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['DistributeToReservedTokenSplitEvent'] = ResolversParentTypes['DistributeToReservedTokenSplitEvent']> = {
  beneficiary?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  distributeReservedTokensEvent?: Resolver<ResolversTypes['DistributeReservedTokensEvent'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lockedUntil?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  percent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  preferAddToBalance?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  splitProjectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnsNodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ENSNode'] = ResolversParentTypes['ENSNode']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type MintTokensEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['MintTokensEvent'] = ResolversParentTypes['MintTokensEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  memo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFT'] = ResolversParentTypes['NFT']> = {
  category?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collection?: Resolver<ResolversTypes['NFTCollection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Participant'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['NFTTier'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenUri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFTCollection'] = ResolversParentTypes['NFTCollection']> = {
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nfts?: Resolver<Array<ResolversTypes['NFT']>, ParentType, ContextType, RequireFields<NftCollectionNftsArgs, 'first' | 'skip'>>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tiers?: Resolver<Array<ResolversTypes['NFTTier']>, ParentType, ContextType, RequireFields<NftCollectionTiersArgs, 'first' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftTierResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFTTier'] = ResolversParentTypes['NFTTier']> = {
  allowOwnerMint?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  cannotBeRemoved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collection?: Resolver<ResolversTypes['NFTCollection'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  encodedIpfsUri?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  initialSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nfts?: Resolver<Array<ResolversTypes['NFT']>, ParentType, ContextType, RequireFields<NftTierNftsArgs, 'first' | 'skip'>>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  remainingSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reserveBeneficiary?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  reserveFrequency?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  resolvedUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  svg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tierId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transfersPausable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  votingUnits?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Participant'] = ResolversParentTypes['Participant']> = {
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  erc20Balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  jb721DelegateTokens?: Resolver<Array<ResolversTypes['NFT']>, ParentType, ContextType, RequireFields<ParticipantJb721DelegateTokensArgs, 'first' | 'skip'>>;
  lastPaidTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  paymentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stakedBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  wallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['PayEvent'] = ResolversParentTypes['PayEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  beneficiaryTokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  distributionFromProjectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  feeFromProject?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  note?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionsHolderResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionsHolder'] = ResolversParentTypes['PermissionsHolder']> = {
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  addToBalanceEvents?: Resolver<Array<ResolversTypes['AddToBalanceEvent']>, ParentType, ContextType, RequireFields<ProjectAddToBalanceEventsArgs, 'first' | 'skip'>>;
  burnEvents?: Resolver<Array<ResolversTypes['BurnEvent']>, ParentType, ContextType, RequireFields<ProjectBurnEventsArgs, 'first' | 'skip'>>;
  cashOutEvents?: Resolver<Array<ResolversTypes['CashOutEvent']>, ParentType, ContextType, RequireFields<ProjectCashOutEventsArgs, 'first' | 'skip'>>;
  contributorsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdWithinTrendingWindow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  currentBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  deployedERC20Events?: Resolver<Array<ResolversTypes['DeployedERC20Event']>, ParentType, ContextType, RequireFields<ProjectDeployedErc20EventsArgs, 'first' | 'skip'>>;
  deployer?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  distributePayoutsEvents?: Resolver<Array<ResolversTypes['DistributePayoutsEvent']>, ParentType, ContextType, RequireFields<ProjectDistributePayoutsEventsArgs, 'first' | 'skip'>>;
  distributeReservedTokensEvents?: Resolver<Array<ResolversTypes['DistributeReservedTokensEvent']>, ParentType, ContextType, RequireFields<ProjectDistributeReservedTokensEventsArgs, 'first' | 'skip'>>;
  distributeToPayoutSplitEvents?: Resolver<Array<ResolversTypes['DistributeToPayoutSplitEvent']>, ParentType, ContextType, RequireFields<ProjectDistributeToPayoutSplitEventsArgs, 'first' | 'skip'>>;
  distributeToReservedTokenSplitEvents?: Resolver<Array<ResolversTypes['DistributeToReservedTokenSplitEvent']>, ParentType, ContextType, RequireFields<ProjectDistributeToReservedTokenSplitEventsArgs, 'first' | 'skip'>>;
  handle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  jb721DelegateTokens?: Resolver<Array<ResolversTypes['NFT']>, ParentType, ContextType, RequireFields<ProjectJb721DelegateTokensArgs, 'first' | 'skip'>>;
  metadataUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mintTokensEvents?: Resolver<Array<ResolversTypes['MintTokensEvent']>, ParentType, ContextType, RequireFields<ProjectMintTokensEventsArgs, 'first' | 'skip'>>;
  nftCollections?: Resolver<Array<ResolversTypes['NFTCollection']>, ParentType, ContextType, RequireFields<ProjectNftCollectionsArgs, 'first' | 'skip'>>;
  nftsMintedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  participants?: Resolver<Array<ResolversTypes['Participant']>, ParentType, ContextType, RequireFields<ProjectParticipantsArgs, 'first' | 'skip'>>;
  payEvents?: Resolver<Array<ResolversTypes['PayEvent']>, ParentType, ContextType, RequireFields<ProjectPayEventsArgs, 'first' | 'skip'>>;
  paymentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  permissionsHolders?: Resolver<Array<ResolversTypes['PermissionsHolder']>, ParentType, ContextType, RequireFields<ProjectPermissionsHoldersArgs, 'first' | 'skip'>>;
  projectEvents?: Resolver<Array<ResolversTypes['ProjectEvent']>, ParentType, ContextType, RequireFields<ProjectProjectEventsArgs, 'first' | 'skip'>>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  redeemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  redeemVolume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  redeemVolumeUSD?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  trendingPaymentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trendingScore?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  trendingVolume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  useAllowanceEvents?: Resolver<Array<ResolversTypes['UseAllowanceEvent']>, ParentType, ContextType, RequireFields<ProjectUseAllowanceEventsArgs, 'first' | 'skip'>>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectCreateEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectCreateEvent'] = ResolversParentTypes['ProjectCreateEvent']> = {
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectEvent'] = ResolversParentTypes['ProjectEvent']> = {
  addToBalanceEvent?: Resolver<Maybe<ResolversTypes['AddToBalanceEvent']>, ParentType, ContextType>;
  burnEvent?: Resolver<Maybe<ResolversTypes['BurnEvent']>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  cashOutEvent?: Resolver<Maybe<ResolversTypes['CashOutEvent']>, ParentType, ContextType>;
  deployedERC20Event?: Resolver<Maybe<ResolversTypes['DeployedERC20Event']>, ParentType, ContextType>;
  distributePayoutsEvent?: Resolver<Maybe<ResolversTypes['DistributePayoutsEvent']>, ParentType, ContextType>;
  distributeReservedTokensEvent?: Resolver<Maybe<ResolversTypes['DistributeReservedTokensEvent']>, ParentType, ContextType>;
  distributeToPayoutSplitEvent?: Resolver<Maybe<ResolversTypes['DistributeToPayoutSplitEvent']>, ParentType, ContextType>;
  distributeToReservedTokenSplitEvent?: Resolver<Maybe<ResolversTypes['DistributeToReservedTokenSplitEvent']>, ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mintTokensEvent?: Resolver<Maybe<ResolversTypes['MintTokensEvent']>, ParentType, ContextType>;
  payEvent?: Resolver<Maybe<ResolversTypes['PayEvent']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectCreateEvent?: Resolver<Maybe<ResolversTypes['ProjectCreateEvent']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  useAllowanceEvent?: Resolver<Maybe<ResolversTypes['UseAllowanceEvent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProtocolLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProtocolLog'] = ResolversParentTypes['ProtocolLog']> = {
  erc20Count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  oldestTrendingPayEvent?: Resolver<Maybe<ResolversTypes['PayEvent']>, ParentType, ContextType>;
  paymentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projectsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  redeemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trendingLastUpdatedTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeRedeemed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeRedeemedUSD?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_MetaArgs>>;
  addToBalanceEvent?: Resolver<Maybe<ResolversTypes['AddToBalanceEvent']>, ParentType, ContextType, RequireFields<QueryAddToBalanceEventArgs, 'id' | 'subgraphError'>>;
  addToBalanceEvents?: Resolver<Array<ResolversTypes['AddToBalanceEvent']>, ParentType, ContextType, RequireFields<QueryAddToBalanceEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  burnEvent?: Resolver<Maybe<ResolversTypes['BurnEvent']>, ParentType, ContextType, RequireFields<QueryBurnEventArgs, 'id' | 'subgraphError'>>;
  burnEvents?: Resolver<Array<ResolversTypes['BurnEvent']>, ParentType, ContextType, RequireFields<QueryBurnEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  cashOutEvent?: Resolver<Maybe<ResolversTypes['CashOutEvent']>, ParentType, ContextType, RequireFields<QueryCashOutEventArgs, 'id' | 'subgraphError'>>;
  cashOutEvents?: Resolver<Array<ResolversTypes['CashOutEvent']>, ParentType, ContextType, RequireFields<QueryCashOutEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  decorateBannyEvent?: Resolver<Maybe<ResolversTypes['DecorateBannyEvent']>, ParentType, ContextType, RequireFields<QueryDecorateBannyEventArgs, 'id' | 'subgraphError'>>;
  decorateBannyEvents?: Resolver<Array<ResolversTypes['DecorateBannyEvent']>, ParentType, ContextType, RequireFields<QueryDecorateBannyEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  deployedERC20Event?: Resolver<Maybe<ResolversTypes['DeployedERC20Event']>, ParentType, ContextType, RequireFields<QueryDeployedErc20EventArgs, 'id' | 'subgraphError'>>;
  deployedERC20Events?: Resolver<Array<ResolversTypes['DeployedERC20Event']>, ParentType, ContextType, RequireFields<QueryDeployedErc20EventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  distributePayoutsEvent?: Resolver<Maybe<ResolversTypes['DistributePayoutsEvent']>, ParentType, ContextType, RequireFields<QueryDistributePayoutsEventArgs, 'id' | 'subgraphError'>>;
  distributePayoutsEvents?: Resolver<Array<ResolversTypes['DistributePayoutsEvent']>, ParentType, ContextType, RequireFields<QueryDistributePayoutsEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  distributeReservedTokensEvent?: Resolver<Maybe<ResolversTypes['DistributeReservedTokensEvent']>, ParentType, ContextType, RequireFields<QueryDistributeReservedTokensEventArgs, 'id' | 'subgraphError'>>;
  distributeReservedTokensEvents?: Resolver<Array<ResolversTypes['DistributeReservedTokensEvent']>, ParentType, ContextType, RequireFields<QueryDistributeReservedTokensEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  distributeToPayoutSplitEvent?: Resolver<Maybe<ResolversTypes['DistributeToPayoutSplitEvent']>, ParentType, ContextType, RequireFields<QueryDistributeToPayoutSplitEventArgs, 'id' | 'subgraphError'>>;
  distributeToPayoutSplitEvents?: Resolver<Array<ResolversTypes['DistributeToPayoutSplitEvent']>, ParentType, ContextType, RequireFields<QueryDistributeToPayoutSplitEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  distributeToReservedTokenSplitEvent?: Resolver<Maybe<ResolversTypes['DistributeToReservedTokenSplitEvent']>, ParentType, ContextType, RequireFields<QueryDistributeToReservedTokenSplitEventArgs, 'id' | 'subgraphError'>>;
  distributeToReservedTokenSplitEvents?: Resolver<Array<ResolversTypes['DistributeToReservedTokenSplitEvent']>, ParentType, ContextType, RequireFields<QueryDistributeToReservedTokenSplitEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  ensnode?: Resolver<Maybe<ResolversTypes['ENSNode']>, ParentType, ContextType, RequireFields<QueryEnsnodeArgs, 'id' | 'subgraphError'>>;
  ensnodes?: Resolver<Array<ResolversTypes['ENSNode']>, ParentType, ContextType, RequireFields<QueryEnsnodesArgs, 'first' | 'skip' | 'subgraphError'>>;
  mintTokensEvent?: Resolver<Maybe<ResolversTypes['MintTokensEvent']>, ParentType, ContextType, RequireFields<QueryMintTokensEventArgs, 'id' | 'subgraphError'>>;
  mintTokensEvents?: Resolver<Array<ResolversTypes['MintTokensEvent']>, ParentType, ContextType, RequireFields<QueryMintTokensEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nft?: Resolver<Maybe<ResolversTypes['NFT']>, ParentType, ContextType, RequireFields<QueryNftArgs, 'id' | 'subgraphError'>>;
  nftcollection?: Resolver<Maybe<ResolversTypes['NFTCollection']>, ParentType, ContextType, RequireFields<QueryNftcollectionArgs, 'id' | 'subgraphError'>>;
  nftcollections?: Resolver<Array<ResolversTypes['NFTCollection']>, ParentType, ContextType, RequireFields<QueryNftcollectionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nfts?: Resolver<Array<ResolversTypes['NFT']>, ParentType, ContextType, RequireFields<QueryNftsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nfttier?: Resolver<Maybe<ResolversTypes['NFTTier']>, ParentType, ContextType, RequireFields<QueryNfttierArgs, 'id' | 'subgraphError'>>;
  nfttiers?: Resolver<Array<ResolversTypes['NFTTier']>, ParentType, ContextType, RequireFields<QueryNfttiersArgs, 'first' | 'skip' | 'subgraphError'>>;
  participant?: Resolver<Maybe<ResolversTypes['Participant']>, ParentType, ContextType, RequireFields<QueryParticipantArgs, 'id' | 'subgraphError'>>;
  participants?: Resolver<Array<ResolversTypes['Participant']>, ParentType, ContextType, RequireFields<QueryParticipantsArgs, 'first' | 'skip' | 'subgraphError'>>;
  payEvent?: Resolver<Maybe<ResolversTypes['PayEvent']>, ParentType, ContextType, RequireFields<QueryPayEventArgs, 'id' | 'subgraphError'>>;
  payEvents?: Resolver<Array<ResolversTypes['PayEvent']>, ParentType, ContextType, RequireFields<QueryPayEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  permissionsHolder?: Resolver<Maybe<ResolversTypes['PermissionsHolder']>, ParentType, ContextType, RequireFields<QueryPermissionsHolderArgs, 'id' | 'subgraphError'>>;
  permissionsHolders?: Resolver<Array<ResolversTypes['PermissionsHolder']>, ParentType, ContextType, RequireFields<QueryPermissionsHoldersArgs, 'first' | 'skip' | 'subgraphError'>>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectArgs, 'id' | 'subgraphError'>>;
  projectCreateEvent?: Resolver<Maybe<ResolversTypes['ProjectCreateEvent']>, ParentType, ContextType, RequireFields<QueryProjectCreateEventArgs, 'id' | 'subgraphError'>>;
  projectCreateEvents?: Resolver<Array<ResolversTypes['ProjectCreateEvent']>, ParentType, ContextType, RequireFields<QueryProjectCreateEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  projectEvent?: Resolver<Maybe<ResolversTypes['ProjectEvent']>, ParentType, ContextType, RequireFields<QueryProjectEventArgs, 'id' | 'subgraphError'>>;
  projectEvents?: Resolver<Array<ResolversTypes['ProjectEvent']>, ParentType, ContextType, RequireFields<QueryProjectEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  projectSearch?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectSearchArgs, 'first' | 'skip' | 'subgraphError' | 'text'>>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectsArgs, 'first' | 'skip' | 'subgraphError'>>;
  protocolLog?: Resolver<Maybe<ResolversTypes['ProtocolLog']>, ParentType, ContextType, RequireFields<QueryProtocolLogArgs, 'id' | 'subgraphError'>>;
  protocolLogs?: Resolver<Array<ResolversTypes['ProtocolLog']>, ParentType, ContextType, RequireFields<QueryProtocolLogsArgs, 'first' | 'skip' | 'subgraphError'>>;
  storeAutoIssuanceAmountEvent?: Resolver<Maybe<ResolversTypes['StoreAutoIssuanceAmountEvent']>, ParentType, ContextType, RequireFields<QueryStoreAutoIssuanceAmountEventArgs, 'id' | 'subgraphError'>>;
  storeAutoIssuanceAmountEvents?: Resolver<Array<ResolversTypes['StoreAutoIssuanceAmountEvent']>, ParentType, ContextType, RequireFields<QueryStoreAutoIssuanceAmountEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  useAllowanceEvent?: Resolver<Maybe<ResolversTypes['UseAllowanceEvent']>, ParentType, ContextType, RequireFields<QueryUseAllowanceEventArgs, 'id' | 'subgraphError'>>;
  useAllowanceEvents?: Resolver<Array<ResolversTypes['UseAllowanceEvent']>, ParentType, ContextType, RequireFields<QueryUseAllowanceEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  wallet?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType, RequireFields<QueryWalletArgs, 'id' | 'subgraphError'>>;
  wallets?: Resolver<Array<ResolversTypes['Wallet']>, ParentType, ContextType, RequireFields<QueryWalletsArgs, 'first' | 'skip' | 'subgraphError'>>;
};

export type StoreAutoIssuanceAmountEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreAutoIssuanceAmountEvent'] = ResolversParentTypes['StoreAutoIssuanceAmountEvent']> = {
  beneficiary?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  revnetId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  stageId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_MetaArgs>>;
  addToBalanceEvent?: SubscriptionResolver<Maybe<ResolversTypes['AddToBalanceEvent']>, "addToBalanceEvent", ParentType, ContextType, RequireFields<SubscriptionAddToBalanceEventArgs, 'id' | 'subgraphError'>>;
  addToBalanceEvents?: SubscriptionResolver<Array<ResolversTypes['AddToBalanceEvent']>, "addToBalanceEvents", ParentType, ContextType, RequireFields<SubscriptionAddToBalanceEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  burnEvent?: SubscriptionResolver<Maybe<ResolversTypes['BurnEvent']>, "burnEvent", ParentType, ContextType, RequireFields<SubscriptionBurnEventArgs, 'id' | 'subgraphError'>>;
  burnEvents?: SubscriptionResolver<Array<ResolversTypes['BurnEvent']>, "burnEvents", ParentType, ContextType, RequireFields<SubscriptionBurnEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  cashOutEvent?: SubscriptionResolver<Maybe<ResolversTypes['CashOutEvent']>, "cashOutEvent", ParentType, ContextType, RequireFields<SubscriptionCashOutEventArgs, 'id' | 'subgraphError'>>;
  cashOutEvents?: SubscriptionResolver<Array<ResolversTypes['CashOutEvent']>, "cashOutEvents", ParentType, ContextType, RequireFields<SubscriptionCashOutEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  decorateBannyEvent?: SubscriptionResolver<Maybe<ResolversTypes['DecorateBannyEvent']>, "decorateBannyEvent", ParentType, ContextType, RequireFields<SubscriptionDecorateBannyEventArgs, 'id' | 'subgraphError'>>;
  decorateBannyEvents?: SubscriptionResolver<Array<ResolversTypes['DecorateBannyEvent']>, "decorateBannyEvents", ParentType, ContextType, RequireFields<SubscriptionDecorateBannyEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  deployedERC20Event?: SubscriptionResolver<Maybe<ResolversTypes['DeployedERC20Event']>, "deployedERC20Event", ParentType, ContextType, RequireFields<SubscriptionDeployedErc20EventArgs, 'id' | 'subgraphError'>>;
  deployedERC20Events?: SubscriptionResolver<Array<ResolversTypes['DeployedERC20Event']>, "deployedERC20Events", ParentType, ContextType, RequireFields<SubscriptionDeployedErc20EventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  distributePayoutsEvent?: SubscriptionResolver<Maybe<ResolversTypes['DistributePayoutsEvent']>, "distributePayoutsEvent", ParentType, ContextType, RequireFields<SubscriptionDistributePayoutsEventArgs, 'id' | 'subgraphError'>>;
  distributePayoutsEvents?: SubscriptionResolver<Array<ResolversTypes['DistributePayoutsEvent']>, "distributePayoutsEvents", ParentType, ContextType, RequireFields<SubscriptionDistributePayoutsEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  distributeReservedTokensEvent?: SubscriptionResolver<Maybe<ResolversTypes['DistributeReservedTokensEvent']>, "distributeReservedTokensEvent", ParentType, ContextType, RequireFields<SubscriptionDistributeReservedTokensEventArgs, 'id' | 'subgraphError'>>;
  distributeReservedTokensEvents?: SubscriptionResolver<Array<ResolversTypes['DistributeReservedTokensEvent']>, "distributeReservedTokensEvents", ParentType, ContextType, RequireFields<SubscriptionDistributeReservedTokensEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  distributeToPayoutSplitEvent?: SubscriptionResolver<Maybe<ResolversTypes['DistributeToPayoutSplitEvent']>, "distributeToPayoutSplitEvent", ParentType, ContextType, RequireFields<SubscriptionDistributeToPayoutSplitEventArgs, 'id' | 'subgraphError'>>;
  distributeToPayoutSplitEvents?: SubscriptionResolver<Array<ResolversTypes['DistributeToPayoutSplitEvent']>, "distributeToPayoutSplitEvents", ParentType, ContextType, RequireFields<SubscriptionDistributeToPayoutSplitEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  distributeToReservedTokenSplitEvent?: SubscriptionResolver<Maybe<ResolversTypes['DistributeToReservedTokenSplitEvent']>, "distributeToReservedTokenSplitEvent", ParentType, ContextType, RequireFields<SubscriptionDistributeToReservedTokenSplitEventArgs, 'id' | 'subgraphError'>>;
  distributeToReservedTokenSplitEvents?: SubscriptionResolver<Array<ResolversTypes['DistributeToReservedTokenSplitEvent']>, "distributeToReservedTokenSplitEvents", ParentType, ContextType, RequireFields<SubscriptionDistributeToReservedTokenSplitEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  ensnode?: SubscriptionResolver<Maybe<ResolversTypes['ENSNode']>, "ensnode", ParentType, ContextType, RequireFields<SubscriptionEnsnodeArgs, 'id' | 'subgraphError'>>;
  ensnodes?: SubscriptionResolver<Array<ResolversTypes['ENSNode']>, "ensnodes", ParentType, ContextType, RequireFields<SubscriptionEnsnodesArgs, 'first' | 'skip' | 'subgraphError'>>;
  mintTokensEvent?: SubscriptionResolver<Maybe<ResolversTypes['MintTokensEvent']>, "mintTokensEvent", ParentType, ContextType, RequireFields<SubscriptionMintTokensEventArgs, 'id' | 'subgraphError'>>;
  mintTokensEvents?: SubscriptionResolver<Array<ResolversTypes['MintTokensEvent']>, "mintTokensEvents", ParentType, ContextType, RequireFields<SubscriptionMintTokensEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nft?: SubscriptionResolver<Maybe<ResolversTypes['NFT']>, "nft", ParentType, ContextType, RequireFields<SubscriptionNftArgs, 'id' | 'subgraphError'>>;
  nftcollection?: SubscriptionResolver<Maybe<ResolversTypes['NFTCollection']>, "nftcollection", ParentType, ContextType, RequireFields<SubscriptionNftcollectionArgs, 'id' | 'subgraphError'>>;
  nftcollections?: SubscriptionResolver<Array<ResolversTypes['NFTCollection']>, "nftcollections", ParentType, ContextType, RequireFields<SubscriptionNftcollectionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nfts?: SubscriptionResolver<Array<ResolversTypes['NFT']>, "nfts", ParentType, ContextType, RequireFields<SubscriptionNftsArgs, 'first' | 'skip' | 'subgraphError'>>;
  nfttier?: SubscriptionResolver<Maybe<ResolversTypes['NFTTier']>, "nfttier", ParentType, ContextType, RequireFields<SubscriptionNfttierArgs, 'id' | 'subgraphError'>>;
  nfttiers?: SubscriptionResolver<Array<ResolversTypes['NFTTier']>, "nfttiers", ParentType, ContextType, RequireFields<SubscriptionNfttiersArgs, 'first' | 'skip' | 'subgraphError'>>;
  participant?: SubscriptionResolver<Maybe<ResolversTypes['Participant']>, "participant", ParentType, ContextType, RequireFields<SubscriptionParticipantArgs, 'id' | 'subgraphError'>>;
  participants?: SubscriptionResolver<Array<ResolversTypes['Participant']>, "participants", ParentType, ContextType, RequireFields<SubscriptionParticipantsArgs, 'first' | 'skip' | 'subgraphError'>>;
  payEvent?: SubscriptionResolver<Maybe<ResolversTypes['PayEvent']>, "payEvent", ParentType, ContextType, RequireFields<SubscriptionPayEventArgs, 'id' | 'subgraphError'>>;
  payEvents?: SubscriptionResolver<Array<ResolversTypes['PayEvent']>, "payEvents", ParentType, ContextType, RequireFields<SubscriptionPayEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  permissionsHolder?: SubscriptionResolver<Maybe<ResolversTypes['PermissionsHolder']>, "permissionsHolder", ParentType, ContextType, RequireFields<SubscriptionPermissionsHolderArgs, 'id' | 'subgraphError'>>;
  permissionsHolders?: SubscriptionResolver<Array<ResolversTypes['PermissionsHolder']>, "permissionsHolders", ParentType, ContextType, RequireFields<SubscriptionPermissionsHoldersArgs, 'first' | 'skip' | 'subgraphError'>>;
  project?: SubscriptionResolver<Maybe<ResolversTypes['Project']>, "project", ParentType, ContextType, RequireFields<SubscriptionProjectArgs, 'id' | 'subgraphError'>>;
  projectCreateEvent?: SubscriptionResolver<Maybe<ResolversTypes['ProjectCreateEvent']>, "projectCreateEvent", ParentType, ContextType, RequireFields<SubscriptionProjectCreateEventArgs, 'id' | 'subgraphError'>>;
  projectCreateEvents?: SubscriptionResolver<Array<ResolversTypes['ProjectCreateEvent']>, "projectCreateEvents", ParentType, ContextType, RequireFields<SubscriptionProjectCreateEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  projectEvent?: SubscriptionResolver<Maybe<ResolversTypes['ProjectEvent']>, "projectEvent", ParentType, ContextType, RequireFields<SubscriptionProjectEventArgs, 'id' | 'subgraphError'>>;
  projectEvents?: SubscriptionResolver<Array<ResolversTypes['ProjectEvent']>, "projectEvents", ParentType, ContextType, RequireFields<SubscriptionProjectEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  projects?: SubscriptionResolver<Array<ResolversTypes['Project']>, "projects", ParentType, ContextType, RequireFields<SubscriptionProjectsArgs, 'first' | 'skip' | 'subgraphError'>>;
  protocolLog?: SubscriptionResolver<Maybe<ResolversTypes['ProtocolLog']>, "protocolLog", ParentType, ContextType, RequireFields<SubscriptionProtocolLogArgs, 'id' | 'subgraphError'>>;
  protocolLogs?: SubscriptionResolver<Array<ResolversTypes['ProtocolLog']>, "protocolLogs", ParentType, ContextType, RequireFields<SubscriptionProtocolLogsArgs, 'first' | 'skip' | 'subgraphError'>>;
  storeAutoIssuanceAmountEvent?: SubscriptionResolver<Maybe<ResolversTypes['StoreAutoIssuanceAmountEvent']>, "storeAutoIssuanceAmountEvent", ParentType, ContextType, RequireFields<SubscriptionStoreAutoIssuanceAmountEventArgs, 'id' | 'subgraphError'>>;
  storeAutoIssuanceAmountEvents?: SubscriptionResolver<Array<ResolversTypes['StoreAutoIssuanceAmountEvent']>, "storeAutoIssuanceAmountEvents", ParentType, ContextType, RequireFields<SubscriptionStoreAutoIssuanceAmountEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  useAllowanceEvent?: SubscriptionResolver<Maybe<ResolversTypes['UseAllowanceEvent']>, "useAllowanceEvent", ParentType, ContextType, RequireFields<SubscriptionUseAllowanceEventArgs, 'id' | 'subgraphError'>>;
  useAllowanceEvents?: SubscriptionResolver<Array<ResolversTypes['UseAllowanceEvent']>, "useAllowanceEvents", ParentType, ContextType, RequireFields<SubscriptionUseAllowanceEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  wallet?: SubscriptionResolver<Maybe<ResolversTypes['Wallet']>, "wallet", ParentType, ContextType, RequireFields<SubscriptionWalletArgs, 'id' | 'subgraphError'>>;
  wallets?: SubscriptionResolver<Array<ResolversTypes['Wallet']>, "wallets", ParentType, ContextType, RequireFields<SubscriptionWalletsArgs, 'first' | 'skip' | 'subgraphError'>>;
};

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type UseAllowanceEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['UseAllowanceEvent'] = ResolversParentTypes['UseAllowanceEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  distributedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  distributedAmountUSD?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  memo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  netDistributedamount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  netDistributedamountUSD?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetCycleNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wallet'] = ResolversParentTypes['Wallet']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastPaidTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  participants?: Resolver<Array<ResolversTypes['Participant']>, ParentType, ContextType, RequireFields<WalletParticipantsArgs, 'first' | 'skip'>>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Block_Resolvers<ContextType = any, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = {
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Meta_Resolvers<ContextType = any, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = {
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AddToBalanceEvent?: AddToBalanceEventResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  BurnEvent?: BurnEventResolvers<ContextType>;
  Bytes?: GraphQLScalarType;
  CashOutEvent?: CashOutEventResolvers<ContextType>;
  DecorateBannyEvent?: DecorateBannyEventResolvers<ContextType>;
  DeployedERC20Event?: DeployedErc20EventResolvers<ContextType>;
  DistributePayoutsEvent?: DistributePayoutsEventResolvers<ContextType>;
  DistributeReservedTokensEvent?: DistributeReservedTokensEventResolvers<ContextType>;
  DistributeToPayoutSplitEvent?: DistributeToPayoutSplitEventResolvers<ContextType>;
  DistributeToReservedTokenSplitEvent?: DistributeToReservedTokenSplitEventResolvers<ContextType>;
  ENSNode?: EnsNodeResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  MintTokensEvent?: MintTokensEventResolvers<ContextType>;
  NFT?: NftResolvers<ContextType>;
  NFTCollection?: NftCollectionResolvers<ContextType>;
  NFTTier?: NftTierResolvers<ContextType>;
  Participant?: ParticipantResolvers<ContextType>;
  PayEvent?: PayEventResolvers<ContextType>;
  PermissionsHolder?: PermissionsHolderResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  ProjectCreateEvent?: ProjectCreateEventResolvers<ContextType>;
  ProjectEvent?: ProjectEventResolvers<ContextType>;
  ProtocolLog?: ProtocolLogResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StoreAutoIssuanceAmountEvent?: StoreAutoIssuanceAmountEventResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  UseAllowanceEvent?: UseAllowanceEventResolvers<ContextType>;
  Wallet?: WalletResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  derivedFrom?: DerivedFromDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  subgraphId?: SubgraphIdDirectiveResolver<any, any, ContextType>;
};

export const TierDataFragmentDoc = gql`
    fragment TierData on NFTTier {
  id
  tierId
  price
  collection {
    address
  }
  encodedIpfsUri
  resolvedUri
  svg
  initialSupply
  remainingSupply
  category
}
    `;
export const PayEventsDocument = gql`
    query PayEvents($where: PayEvent_filter) {
  payEvents(where: $where) {
    id
    timestamp
    txHash
    caller
    beneficiary
    amount
    note
    beneficiaryTokenCount
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
    query DecorateBannyEvents($where: DecorateBannyEvent_filter) {
  decorateBannyEvents(where: $where) {
    id
    timestamp
    txHash
    caller
    nakedBannyId
    outfitIds
    worldId
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
    query NFTs($where: NFT_filter) {
  nfts(where: $where) {
    tokenId
    owner {
      address
    }
    collection {
      address
    }
    tokenUri
    category
    tier {
      ...TierData
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
    query NFTTiers($where: NFTTier_filter, $orderBy: NFTTier_orderBy) {
  nfttiers(where: $where, orderBy: $orderBy) {
    ...TierData
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
    query AllNFTTiers($orderBy: NFTTier_orderBy, $collection: String) {
  naked: nfttiers(
    where: {category: 0, collection: $collection}
    orderBy: $orderBy
  ) {
    ...TierData
  }
  world: nfttiers(
    where: {category: 1, collection: $collection}
    orderBy: $orderBy
  ) {
    ...TierData
  }
  backside: nfttiers(
    where: {category: 2, collection: $collection}
    orderBy: $orderBy
  ) {
    ...TierData
  }
  necklace: nfttiers(
    where: {category: 3, collection: $collection}
    orderBy: $orderBy
  ) {
    ...TierData
  }
  head: nfttiers(where: {category: 4, collection: $collection}, orderBy: $orderBy) {
    ...TierData
  }
  glasses: nfttiers(
    where: {category: 5, collection: $collection}
    orderBy: $orderBy
  ) {
    ...TierData
  }
  mouth: nfttiers(
    where: {category: 6, collection: $collection}
    orderBy: $orderBy
  ) {
    ...TierData
  }
  legs: nfttiers(where: {category: 7, collection: $collection}, orderBy: $orderBy) {
    ...TierData
  }
  suit: nfttiers(where: {category: 8, collection: $collection}, orderBy: $orderBy) {
    ...TierData
  }
  suitBottom: nfttiers(
    where: {category: 9, collection: $collection}
    orderBy: $orderBy
  ) {
    ...TierData
  }
  suitTop: nfttiers(
    where: {category: 10, collection: $collection}
    orderBy: $orderBy
  ) {
    ...TierData
  }
  headTop: nfttiers(
    where: {category: 11, collection: $collection}
    orderBy: $orderBy
  ) {
    ...TierData
  }
  hand: nfttiers(
    where: {category: 12, collection: $collection}
    orderBy: $orderBy
  ) {
    ...TierData
  }
  specialSuit: nfttiers(
    where: {category: 13, collection: $collection}
    orderBy: $orderBy
  ) {
    ...TierData
  }
  specialLegs: nfttiers(
    where: {category: 13, collection: $collection}
    orderBy: $orderBy
  ) {
    ...TierData
  }
  specialHead: nfttiers(
    where: {category: 13, collection: $collection}
    orderBy: $orderBy
  ) {
    ...TierData
  }
  specialBody: nfttiers(
    where: {category: 13, collection: $collection}
    orderBy: $orderBy
  ) {
    ...TierData
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
 *      orderBy: // value for 'orderBy'
 *      collection: // value for 'collection'
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