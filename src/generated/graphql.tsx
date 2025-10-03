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
  _sucker: Maybe<_Sucker>;
  _suckers: _SuckerPage;
  activityEvent: Maybe<ActivityEvent>;
  activityEvents: ActivityEventPage;
  addToBalanceEvent: Maybe<AddToBalanceEvent>;
  addToBalanceEvents: AddToBalanceEventPage;
  autoIssueEvent: Maybe<AutoIssueEvent>;
  autoIssueEvents: AutoIssueEventPage;
  borrowLoanEvent: Maybe<BorrowLoanEvent>;
  borrowLoanEvents: BorrowLoanEventPage;
  burnEvent: Maybe<BurnEvent>;
  burnEvents: BurnEventPage;
  cashOutTokensEvent: Maybe<CashOutTokensEvent>;
  cashOutTokensEvents: CashOutTokensEventPage;
  decorateBannyEvent: Maybe<DecorateBannyEvent>;
  decorateBannyEvents: DecorateBannyEventPage;
  deployErc20Event: Maybe<DeployErc20Event>;
  deployErc20Events: DeployErc20EventPage;
  liquidateLoanEvent: Maybe<LiquidateLoanEvent>;
  liquidateLoanEvents: LiquidateLoanEventPage;
  loan: Maybe<Loan>;
  loans: LoanPage;
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
  participant: Maybe<Participant>;
  participantSnapshot: Maybe<ParticipantSnapshot>;
  participantSnapshots: ParticipantSnapshotPage;
  participants: ParticipantPage;
  payEvent: Maybe<PayEvent>;
  payEvents: PayEventPage;
  permissionHolder: Maybe<PermissionHolder>;
  permissionHolders: PermissionHolderPage;
  project: Maybe<Project>;
  projectCreateEvent: Maybe<ProjectCreateEvent>;
  projectCreateEvents: ProjectCreateEventPage;
  projectMoment: Maybe<ProjectMoment>;
  projectMoments: ProjectMomentPage;
  projects: ProjectPage;
  reallocateLoanEvent: Maybe<ReallocateLoanEvent>;
  reallocateLoanEvents: ReallocateLoanEventPage;
  repayLoanEvent: Maybe<RepayLoanEvent>;
  repayLoanEvents: RepayLoanEventPage;
  sendPayoutToSplitEvent: Maybe<SendPayoutToSplitEvent>;
  sendPayoutToSplitEvents: SendPayoutToSplitEventPage;
  sendPayoutsEvent: Maybe<SendPayoutsEvent>;
  sendPayoutsEvents: SendPayoutsEventPage;
  sendReservedTokensToSplitEvent: Maybe<SendReservedTokensToSplitEvent>;
  sendReservedTokensToSplitEvents: SendReservedTokensToSplitEventPage;
  sendReservedTokensToSplitsEvent: Maybe<SendReservedTokensToSplitsEvent>;
  sendReservedTokensToSplitsEvents: SendReservedTokensToSplitsEventPage;
  storeAutoIssuanceAmountEvent: Maybe<StoreAutoIssuanceAmountEvent>;
  storeAutoIssuanceAmountEvents: StoreAutoIssuanceAmountEventPage;
  suckerGroup: Maybe<SuckerGroup>;
  suckerGroupMoment: Maybe<SuckerGroupMoment>;
  suckerGroupMoments: SuckerGroupMomentPage;
  suckerGroups: SuckerGroupPage;
  useAllowanceEvent: Maybe<UseAllowanceEvent>;
  useAllowanceEvents: UseAllowanceEventPage;
  wallet: Maybe<Wallet>;
  wallets: WalletPage;
};


export type Query_SuckerArgs = {
  address: Scalars['String']['input'];
  chainId: Scalars['Float']['input'];
  projectId: Scalars['Float']['input'];
  version: Scalars['Float']['input'];
};


export type Query_SuckersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<_SuckerFilter>;
};


export type QueryActivityEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryActivityEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ActivityEventFilter>;
};


export type QueryAddToBalanceEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryAddToBalanceEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AddToBalanceEventFilter>;
};


export type QueryAutoIssueEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryAutoIssueEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AutoIssueEventFilter>;
};


export type QueryBorrowLoanEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryBorrowLoanEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<BorrowLoanEventFilter>;
};


export type QueryBurnEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryBurnEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<BurnEventFilter>;
};


export type QueryCashOutTokensEventArgs = {
  id: Scalars['String']['input'];
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
  id: Scalars['String']['input'];
};


export type QueryDecorateBannyEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DecorateBannyEventFilter>;
};


export type QueryDeployErc20EventArgs = {
  id: Scalars['String']['input'];
};


export type QueryDeployErc20EventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DeployErc20EventFilter>;
};


export type QueryLiquidateLoanEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryLiquidateLoanEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<LiquidateLoanEventFilter>;
};


export type QueryLoanArgs = {
  chainId: Scalars['Float']['input'];
  id: Scalars['BigInt']['input'];
  version: Scalars['Float']['input'];
};


export type QueryLoansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<LoanFilter>;
};


export type QueryMintNftEventArgs = {
  id: Scalars['String']['input'];
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
  id: Scalars['String']['input'];
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
  version: Scalars['Float']['input'];
};


export type QueryNftHookArgs = {
  address: Scalars['String']['input'];
  chainId: Scalars['Float']['input'];
  version: Scalars['Float']['input'];
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
  version: Scalars['Float']['input'];
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


export type QueryParticipantArgs = {
  address: Scalars['String']['input'];
  chainId: Scalars['Float']['input'];
  projectId: Scalars['Float']['input'];
  version: Scalars['Float']['input'];
};


export type QueryParticipantSnapshotArgs = {
  address: Scalars['String']['input'];
  chainId: Scalars['Float']['input'];
  projectId: Scalars['Float']['input'];
  version: Scalars['Float']['input'];
};


export type QueryParticipantSnapshotsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ParticipantSnapshotFilter>;
};


export type QueryParticipantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ParticipantFilter>;
};


export type QueryPayEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryPayEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayEventFilter>;
};


export type QueryPermissionHolderArgs = {
  account: Scalars['String']['input'];
  chainId: Scalars['Float']['input'];
  operator: Scalars['String']['input'];
  projectId: Scalars['Float']['input'];
  version: Scalars['Float']['input'];
};


export type QueryPermissionHoldersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PermissionHolderFilter>;
};


export type QueryProjectArgs = {
  chainId: Scalars['Float']['input'];
  projectId: Scalars['Float']['input'];
  version: Scalars['Float']['input'];
};


export type QueryProjectCreateEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectCreateEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ProjectCreateEventFilter>;
};


export type QueryProjectMomentArgs = {
  block: Scalars['Float']['input'];
  chainId: Scalars['Float']['input'];
  projectId: Scalars['Float']['input'];
  version: Scalars['Float']['input'];
};


export type QueryProjectMomentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ProjectMomentFilter>;
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ProjectFilter>;
};


export type QueryReallocateLoanEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryReallocateLoanEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ReallocateLoanEventFilter>;
};


export type QueryRepayLoanEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryRepayLoanEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<RepayLoanEventFilter>;
};


export type QuerySendPayoutToSplitEventArgs = {
  id: Scalars['String']['input'];
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
  id: Scalars['String']['input'];
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
  id: Scalars['String']['input'];
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
  id: Scalars['String']['input'];
};


export type QuerySendReservedTokensToSplitsEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SendReservedTokensToSplitsEventFilter>;
};


export type QueryStoreAutoIssuanceAmountEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryStoreAutoIssuanceAmountEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<StoreAutoIssuanceAmountEventFilter>;
};


export type QuerySuckerGroupArgs = {
  id: Scalars['String']['input'];
};


export type QuerySuckerGroupMomentArgs = {
  block: Scalars['Float']['input'];
  suckerGroupId: Scalars['String']['input'];
  version: Scalars['Float']['input'];
};


export type QuerySuckerGroupMomentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SuckerGroupMomentFilter>;
};


export type QuerySuckerGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<SuckerGroupFilter>;
};


export type QueryUseAllowanceEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryUseAllowanceEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<UseAllowanceEventFilter>;
};


export type QueryWalletArgs = {
  address: Scalars['String']['input'];
};


export type QueryWalletsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<WalletFilter>;
};

export type _Sucker = {
  address: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  version: Scalars['Int']['output'];
};

export type _SuckerFilter = {
  AND?: InputMaybe<Array<InputMaybe<_SuckerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<_SuckerFilter>>>;
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
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type _SuckerPage = {
  items: Array<_Sucker>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ActivityEvent = {
  addToBalanceEvent: Maybe<AddToBalanceEvent>;
  autoIssueEvent: Maybe<AutoIssueEvent>;
  borrowLoanEvent: Maybe<BorrowLoanEvent>;
  burnEvent: Maybe<BurnEvent>;
  cashOutTokensEvent: Maybe<CashOutTokensEvent>;
  chainId: Scalars['Int']['output'];
  decorateBannyEvent: Maybe<DecorateBannyEvent>;
  deployErc20Event: Maybe<DeployErc20Event>;
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  liquidateLoanEvent: Maybe<LiquidateLoanEvent>;
  mintNftEvent: Maybe<MintNftEvent>;
  mintTokensEvent: Maybe<MintTokensEvent>;
  payEvent: Maybe<PayEvent>;
  project: Maybe<Project>;
  projectCreateEvent: Maybe<ProjectCreateEvent>;
  projectId: Scalars['Int']['output'];
  reallocateLoanEvent: Maybe<ReallocateLoanEvent>;
  repayLoanEvent: Maybe<RepayLoanEvent>;
  sendPayoutToSplitEvent: Maybe<SendPayoutToSplitEvent>;
  sendPayoutsEvent: Maybe<SendPayoutsEvent>;
  sendReservedTokensToSplitEvent: Maybe<SendReservedTokensToSplitEvent>;
  sendReservedTokensToSplitsEvent: Maybe<SendReservedTokensToSplitsEvent>;
  suckerGroup: Maybe<SuckerGroup>;
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  type: Maybe<ActivityEventType>;
  useAllowanceEvent: Maybe<UseAllowanceEvent>;
  version: Scalars['Int']['output'];
};

export type ActivityEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<ActivityEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ActivityEventFilter>>>;
  addToBalanceEvent?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_contains?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addToBalanceEvent_not?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addToBalanceEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  addToBalanceEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  autoIssueEvent?: InputMaybe<Scalars['String']['input']>;
  autoIssueEvent_contains?: InputMaybe<Scalars['String']['input']>;
  autoIssueEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  autoIssueEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  autoIssueEvent_not?: InputMaybe<Scalars['String']['input']>;
  autoIssueEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  autoIssueEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  autoIssueEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  autoIssueEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  autoIssueEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  borrowLoanEvent?: InputMaybe<Scalars['String']['input']>;
  borrowLoanEvent_contains?: InputMaybe<Scalars['String']['input']>;
  borrowLoanEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  borrowLoanEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  borrowLoanEvent_not?: InputMaybe<Scalars['String']['input']>;
  borrowLoanEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  borrowLoanEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  borrowLoanEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  borrowLoanEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  borrowLoanEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  burnEvent?: InputMaybe<Scalars['String']['input']>;
  burnEvent_contains?: InputMaybe<Scalars['String']['input']>;
  burnEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  burnEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  burnEvent_not?: InputMaybe<Scalars['String']['input']>;
  burnEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  burnEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  burnEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  burnEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  burnEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  cashOutTokensEvent?: InputMaybe<Scalars['String']['input']>;
  cashOutTokensEvent_contains?: InputMaybe<Scalars['String']['input']>;
  cashOutTokensEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  cashOutTokensEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cashOutTokensEvent_not?: InputMaybe<Scalars['String']['input']>;
  cashOutTokensEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  cashOutTokensEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cashOutTokensEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cashOutTokensEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cashOutTokensEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  decorateBannyEvent?: InputMaybe<Scalars['String']['input']>;
  decorateBannyEvent_contains?: InputMaybe<Scalars['String']['input']>;
  decorateBannyEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  decorateBannyEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  decorateBannyEvent_not?: InputMaybe<Scalars['String']['input']>;
  decorateBannyEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  decorateBannyEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  decorateBannyEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  decorateBannyEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  decorateBannyEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  deployErc20Event?: InputMaybe<Scalars['String']['input']>;
  deployErc20Event_contains?: InputMaybe<Scalars['String']['input']>;
  deployErc20Event_ends_with?: InputMaybe<Scalars['String']['input']>;
  deployErc20Event_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  deployErc20Event_not?: InputMaybe<Scalars['String']['input']>;
  deployErc20Event_not_contains?: InputMaybe<Scalars['String']['input']>;
  deployErc20Event_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  deployErc20Event_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  deployErc20Event_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  deployErc20Event_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  liquidateLoanEvent?: InputMaybe<Scalars['String']['input']>;
  liquidateLoanEvent_contains?: InputMaybe<Scalars['String']['input']>;
  liquidateLoanEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  liquidateLoanEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  liquidateLoanEvent_not?: InputMaybe<Scalars['String']['input']>;
  liquidateLoanEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  liquidateLoanEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  liquidateLoanEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  liquidateLoanEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  liquidateLoanEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  mintNftEvent?: InputMaybe<Scalars['String']['input']>;
  mintNftEvent_contains?: InputMaybe<Scalars['String']['input']>;
  mintNftEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  mintNftEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mintNftEvent_not?: InputMaybe<Scalars['String']['input']>;
  mintNftEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  mintNftEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  mintNftEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mintNftEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  mintNftEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_contains?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mintTokensEvent_not?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mintTokensEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  mintTokensEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  payEvent?: InputMaybe<Scalars['String']['input']>;
  payEvent_contains?: InputMaybe<Scalars['String']['input']>;
  payEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  payEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  payEvent_not?: InputMaybe<Scalars['String']['input']>;
  payEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  payEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  payEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  payEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  payEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_contains?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projectCreateEvent_not?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projectCreateEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectCreateEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  reallocateLoanEvent?: InputMaybe<Scalars['String']['input']>;
  reallocateLoanEvent_contains?: InputMaybe<Scalars['String']['input']>;
  reallocateLoanEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  reallocateLoanEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reallocateLoanEvent_not?: InputMaybe<Scalars['String']['input']>;
  reallocateLoanEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  reallocateLoanEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reallocateLoanEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reallocateLoanEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reallocateLoanEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  repayLoanEvent?: InputMaybe<Scalars['String']['input']>;
  repayLoanEvent_contains?: InputMaybe<Scalars['String']['input']>;
  repayLoanEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  repayLoanEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  repayLoanEvent_not?: InputMaybe<Scalars['String']['input']>;
  repayLoanEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  repayLoanEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  repayLoanEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  repayLoanEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  repayLoanEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  sendPayoutToSplitEvent?: InputMaybe<Scalars['String']['input']>;
  sendPayoutToSplitEvent_contains?: InputMaybe<Scalars['String']['input']>;
  sendPayoutToSplitEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  sendPayoutToSplitEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sendPayoutToSplitEvent_not?: InputMaybe<Scalars['String']['input']>;
  sendPayoutToSplitEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  sendPayoutToSplitEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sendPayoutToSplitEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sendPayoutToSplitEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sendPayoutToSplitEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  sendPayoutsEvent?: InputMaybe<Scalars['String']['input']>;
  sendPayoutsEvent_contains?: InputMaybe<Scalars['String']['input']>;
  sendPayoutsEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  sendPayoutsEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sendPayoutsEvent_not?: InputMaybe<Scalars['String']['input']>;
  sendPayoutsEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  sendPayoutsEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sendPayoutsEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sendPayoutsEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sendPayoutsEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitEvent?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitEvent_contains?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sendReservedTokensToSplitEvent_not?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sendReservedTokensToSplitEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitsEvent?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitsEvent_contains?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitsEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitsEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sendReservedTokensToSplitsEvent_not?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitsEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitsEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitsEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sendReservedTokensToSplitsEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sendReservedTokensToSplitsEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  type?: InputMaybe<ActivityEventType>;
  type_in?: InputMaybe<Array<InputMaybe<ActivityEventType>>>;
  type_not?: InputMaybe<ActivityEventType>;
  type_not_in?: InputMaybe<Array<InputMaybe<ActivityEventType>>>;
  useAllowanceEvent?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_contains?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_ends_with?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  useAllowanceEvent_not?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_not_contains?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  useAllowanceEvent_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  useAllowanceEvent_starts_with?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ActivityEventPage = {
  items: Array<ActivityEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum ActivityEventType {
  addToBalanceEvent = 'addToBalanceEvent',
  autoIssueEvent = 'autoIssueEvent',
  borrowLoanEvent = 'borrowLoanEvent',
  burnEvent = 'burnEvent',
  cashOutTokensEvent = 'cashOutTokensEvent',
  decorateBannyEvent = 'decorateBannyEvent',
  deployErc20Event = 'deployErc20Event',
  liquidateLoanEvent = 'liquidateLoanEvent',
  mintNftEvent = 'mintNftEvent',
  mintTokensEvent = 'mintTokensEvent',
  payEvent = 'payEvent',
  projectCreateEvent = 'projectCreateEvent',
  reallocateLoanEvent = 'reallocateLoanEvent',
  repayLoanEvent = 'repayLoanEvent',
  sendPayoutToSplitEvent = 'sendPayoutToSplitEvent',
  sendPayoutsEvent = 'sendPayoutsEvent',
  sendReservedTokensToSplitEvent = 'sendReservedTokensToSplitEvent',
  sendReservedTokensToSplitsEvent = 'sendReservedTokensToSplitsEvent',
  useAllowanceEvent = 'useAllowanceEvent'
}

export type AddToBalanceEvent = {
  amount: Scalars['BigInt']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  memo: Maybe<Scalars['String']['output']>;
  metadata: Scalars['String']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  returnedFees: Scalars['BigInt']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AddToBalanceEventPage = {
  items: Array<AddToBalanceEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AutoIssueEvent = {
  beneficiary: Scalars['String']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  count: Scalars['BigInt']['output'];
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  stageId: Scalars['BigInt']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type AutoIssueEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<AutoIssueEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AutoIssueEventFilter>>>;
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
  count?: InputMaybe<Scalars['BigInt']['input']>;
  count_gt?: InputMaybe<Scalars['BigInt']['input']>;
  count_gte?: InputMaybe<Scalars['BigInt']['input']>;
  count_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  count_lt?: InputMaybe<Scalars['BigInt']['input']>;
  count_lte?: InputMaybe<Scalars['BigInt']['input']>;
  count_not?: InputMaybe<Scalars['BigInt']['input']>;
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  stageId?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  stageId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_not?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AutoIssueEventPage = {
  items: Array<AutoIssueEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BorrowLoanEvent = {
  beneficiary: Scalars['String']['output'];
  borrowAmount: Scalars['BigInt']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  collateral: Scalars['BigInt']['output'];
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  prepaidDuration: Scalars['Int']['output'];
  prepaidFeePercent: Scalars['Int']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  sourceFeeAmount: Scalars['BigInt']['output'];
  suckerGroupId: Scalars['String']['output'];
  terminal: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  token: Scalars['String']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type BorrowLoanEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<BorrowLoanEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BorrowLoanEventFilter>>>;
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
  borrowAmount?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  borrowAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  collateral?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  collateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  prepaidDuration?: InputMaybe<Scalars['Int']['input']>;
  prepaidDuration_gt?: InputMaybe<Scalars['Int']['input']>;
  prepaidDuration_gte?: InputMaybe<Scalars['Int']['input']>;
  prepaidDuration_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  prepaidDuration_lt?: InputMaybe<Scalars['Int']['input']>;
  prepaidDuration_lte?: InputMaybe<Scalars['Int']['input']>;
  prepaidDuration_not?: InputMaybe<Scalars['Int']['input']>;
  prepaidDuration_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  prepaidFeePercent?: InputMaybe<Scalars['Int']['input']>;
  prepaidFeePercent_gt?: InputMaybe<Scalars['Int']['input']>;
  prepaidFeePercent_gte?: InputMaybe<Scalars['Int']['input']>;
  prepaidFeePercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  prepaidFeePercent_lt?: InputMaybe<Scalars['Int']['input']>;
  prepaidFeePercent_lte?: InputMaybe<Scalars['Int']['input']>;
  prepaidFeePercent_not?: InputMaybe<Scalars['Int']['input']>;
  prepaidFeePercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sourceFeeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  sourceFeeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sourceFeeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sourceFeeAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  sourceFeeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sourceFeeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sourceFeeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  sourceFeeAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
  terminal?: InputMaybe<Scalars['String']['input']>;
  terminal_contains?: InputMaybe<Scalars['String']['input']>;
  terminal_ends_with?: InputMaybe<Scalars['String']['input']>;
  terminal_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  terminal_not?: InputMaybe<Scalars['String']['input']>;
  terminal_not_contains?: InputMaybe<Scalars['String']['input']>;
  terminal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  terminal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  terminal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  terminal_starts_with?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type BorrowLoanEventPage = {
  items: Array<BorrowLoanEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BurnEvent = {
  amount: Scalars['BigInt']['output'];
  chainId: Scalars['Int']['output'];
  creditAmount: Scalars['BigInt']['output'];
  erc20Amount: Scalars['BigInt']['output'];
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type BurnEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<BurnEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BurnEventFilter>>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  creditAmount?: InputMaybe<Scalars['BigInt']['input']>;
  creditAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  creditAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  creditAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  creditAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  creditAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  creditAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  creditAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  erc20Amount?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Amount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  erc20Amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type BurnEventPage = {
  items: Array<BurnEvent>;
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
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  metadata: Scalars['String']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  reclaimAmount: Scalars['BigInt']['output'];
  reclaimAmountUsd: Scalars['BigInt']['output'];
  rulesetCycleNumber: Scalars['BigInt']['output'];
  rulesetId: Scalars['BigInt']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  reclaimAmountUsd?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmountUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmountUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmountUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  reclaimAmountUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmountUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmountUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimAmountUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  outfitIds: Maybe<Array<Scalars['BigInt']['output']>>;
  timestamp: Scalars['Int']['output'];
  tokenUri: Maybe<Scalars['String']['output']>;
  tokenUriMetadata: Maybe<Scalars['JSON']['output']>;
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type DecorateBannyEventPage = {
  items: Array<DecorateBannyEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DeployErc20Event = {
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  suckerGroupId: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  token: Scalars['String']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type DeployErc20EventFilter = {
  AND?: InputMaybe<Array<InputMaybe<DeployErc20EventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DeployErc20EventFilter>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type DeployErc20EventPage = {
  items: Array<DeployErc20Event>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LiquidateLoanEvent = {
  borrowAmount: Scalars['BigInt']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  collateral: Scalars['BigInt']['output'];
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type LiquidateLoanEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<LiquidateLoanEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LiquidateLoanEventFilter>>>;
  borrowAmount?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  borrowAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  collateral?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  collateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type LiquidateLoanEventPage = {
  items: Array<LiquidateLoanEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Loan = {
  beneficiary: Scalars['String']['output'];
  borrowAmount: Scalars['BigInt']['output'];
  chainId: Scalars['Int']['output'];
  collateral: Scalars['BigInt']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['BigInt']['output'];
  owner: Scalars['String']['output'];
  prepaidDuration: Scalars['Int']['output'];
  prepaidFeePercent: Scalars['Int']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  sourceFeeAmount: Scalars['BigInt']['output'];
  terminal: Scalars['String']['output'];
  token: Scalars['String']['output'];
  tokenUri: Maybe<Scalars['String']['output']>;
  version: Scalars['Int']['output'];
};

export type LoanFilter = {
  AND?: InputMaybe<Array<InputMaybe<LoanFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LoanFilter>>>;
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
  borrowAmount?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  borrowAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  borrowAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  collateral?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  collateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateral_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  prepaidDuration?: InputMaybe<Scalars['Int']['input']>;
  prepaidDuration_gt?: InputMaybe<Scalars['Int']['input']>;
  prepaidDuration_gte?: InputMaybe<Scalars['Int']['input']>;
  prepaidDuration_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  prepaidDuration_lt?: InputMaybe<Scalars['Int']['input']>;
  prepaidDuration_lte?: InputMaybe<Scalars['Int']['input']>;
  prepaidDuration_not?: InputMaybe<Scalars['Int']['input']>;
  prepaidDuration_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  prepaidFeePercent?: InputMaybe<Scalars['Int']['input']>;
  prepaidFeePercent_gt?: InputMaybe<Scalars['Int']['input']>;
  prepaidFeePercent_gte?: InputMaybe<Scalars['Int']['input']>;
  prepaidFeePercent_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  prepaidFeePercent_lt?: InputMaybe<Scalars['Int']['input']>;
  prepaidFeePercent_lte?: InputMaybe<Scalars['Int']['input']>;
  prepaidFeePercent_not?: InputMaybe<Scalars['Int']['input']>;
  prepaidFeePercent_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sourceFeeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  sourceFeeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sourceFeeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sourceFeeAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  sourceFeeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sourceFeeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sourceFeeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  sourceFeeAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  terminal?: InputMaybe<Scalars['String']['input']>;
  terminal_contains?: InputMaybe<Scalars['String']['input']>;
  terminal_ends_with?: InputMaybe<Scalars['String']['input']>;
  terminal_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  terminal_not?: InputMaybe<Scalars['String']['input']>;
  terminal_not_contains?: InputMaybe<Scalars['String']['input']>;
  terminal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  terminal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  terminal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  terminal_starts_with?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
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
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type LoanPage = {
  items: Array<Loan>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MintNftEvent = {
  beneficiary: Scalars['String']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  hook: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  nft: Maybe<Nft>;
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  suckerGroupId: Scalars['String']['output'];
  tier: Maybe<NftTier>;
  tierId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  tokenId: Scalars['BigInt']['output'];
  totalAmountPaid: Scalars['BigInt']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  memo: Maybe<Scalars['String']['output']>;
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  reservedPercent: Scalars['BigInt']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  tokenCount: Scalars['BigInt']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  customized: Maybe<Scalars['Boolean']['output']>;
  customizedAt: Scalars['Int']['output'];
  hook: Maybe<NftHook>;
  metadata: Maybe<Scalars['JSON']['output']>;
  mintTx: Scalars['String']['output'];
  owner: Maybe<Participant>;
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  tier: Maybe<NftTier>;
  tierId: Scalars['Int']['output'];
  tokenId: Scalars['BigInt']['output'];
  tokenUri: Maybe<Scalars['String']['output']>;
  version: Scalars['Int']['output'];
  wallet: Maybe<Wallet>;
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
  customized?: InputMaybe<Scalars['Boolean']['input']>;
  customizedAt?: InputMaybe<Scalars['Int']['input']>;
  customizedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  customizedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  customizedAt_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  customizedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  customizedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  customizedAt_not?: InputMaybe<Scalars['Int']['input']>;
  customizedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  customized_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  customized_not?: InputMaybe<Scalars['Boolean']['input']>;
  customized_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
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
  mintTx?: InputMaybe<Scalars['String']['input']>;
  mintTx_contains?: InputMaybe<Scalars['String']['input']>;
  mintTx_ends_with?: InputMaybe<Scalars['String']['input']>;
  mintTx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mintTx_not?: InputMaybe<Scalars['String']['input']>;
  mintTx_not_contains?: InputMaybe<Scalars['String']['input']>;
  mintTx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  mintTx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mintTx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  mintTx_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  version: Scalars['Int']['output'];
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  allowOwnerMint: Maybe<Scalars['Boolean']['output']>;
  cannotBeRemoved: Maybe<Scalars['Boolean']['output']>;
  category: Scalars['Int']['output'];
  chainId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  encodedIpfsUri: Maybe<Scalars['String']['output']>;
  hook: Maybe<NftHook>;
  initialSupply: Scalars['Int']['output'];
  metadata: Maybe<Scalars['JSON']['output']>;
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
  version: Scalars['Int']['output'];
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
  allowOwnerMint?: InputMaybe<Scalars['Boolean']['input']>;
  allowOwnerMint_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  allowOwnerMint_not?: InputMaybe<Scalars['Boolean']['input']>;
  allowOwnerMint_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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

export type Participant = {
  address: Scalars['String']['output'];
  balance: Scalars['BigInt']['output'];
  chainId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  creditBalance: Scalars['BigInt']['output'];
  erc20Balance: Scalars['BigInt']['output'];
  isRevnet: Maybe<Scalars['Boolean']['output']>;
  lastPaidTimestamp: Scalars['Int']['output'];
  nfts: Maybe<NftPage>;
  paymentsCount: Scalars['Int']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  suckerGroup: Maybe<SuckerGroup>;
  suckerGroupId: Scalars['String']['output'];
  version: Scalars['Int']['output'];
  volume: Scalars['BigInt']['output'];
  volumeUsd: Scalars['BigInt']['output'];
  wallet: Maybe<Wallet>;
};


export type ParticipantNftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<NftFilter>;
};

export type ParticipantFilter = {
  AND?: InputMaybe<Array<InputMaybe<ParticipantFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ParticipantFilter>>>;
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
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  creditBalance?: InputMaybe<Scalars['BigInt']['input']>;
  creditBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  creditBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  creditBalance_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  creditBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  creditBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  creditBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  creditBalance_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  erc20Balance?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  erc20Balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  isRevnet?: InputMaybe<Scalars['Boolean']['input']>;
  isRevnet_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  isRevnet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isRevnet_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lastPaidTimestamp?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lastPaidTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  paymentsCount?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  paymentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_not?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volumeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type ParticipantPage = {
  items: Array<Participant>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ParticipantSnapshot = {
  address: Scalars['String']['output'];
  balance: Scalars['BigInt']['output'];
  block: Scalars['Int']['output'];
  chainId: Scalars['Int']['output'];
  creditBalance: Scalars['BigInt']['output'];
  erc20Balance: Scalars['BigInt']['output'];
  projectId: Scalars['Int']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  version: Scalars['Int']['output'];
  volume: Scalars['BigInt']['output'];
  volumeUsd: Scalars['BigInt']['output'];
};

export type ParticipantSnapshotFilter = {
  AND?: InputMaybe<Array<InputMaybe<ParticipantSnapshotFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ParticipantSnapshotFilter>>>;
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
  balance?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  creditBalance?: InputMaybe<Scalars['BigInt']['input']>;
  creditBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  creditBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  creditBalance_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  creditBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  creditBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  creditBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  creditBalance_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  erc20Balance?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  erc20Balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  erc20Balance_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volumeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type ParticipantSnapshotPage = {
  items: Array<ParticipantSnapshot>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PayEvent = {
  amount: Scalars['BigInt']['output'];
  amountUsd: Scalars['BigInt']['output'];
  beneficiary: Scalars['String']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  distributionFromProjectId: Maybe<Scalars['Int']['output']>;
  feeFromProject: Maybe<Scalars['Int']['output']>;
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  memo: Maybe<Scalars['String']['output']>;
  newlyIssuedTokenCount: Scalars['BigInt']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type PayEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<PayEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PayEventFilter>>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amountUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type PayEventPage = {
  items: Array<PayEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PermissionHolder = {
  account: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  operator: Scalars['String']['output'];
  permissions: Maybe<Array<Scalars['Int']['output']>>;
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  version: Scalars['Int']['output'];
};

export type PermissionHolderFilter = {
  AND?: InputMaybe<Array<InputMaybe<PermissionHolderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PermissionHolderFilter>>>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  operator?: InputMaybe<Scalars['String']['input']>;
  operator_contains?: InputMaybe<Scalars['String']['input']>;
  operator_ends_with?: InputMaybe<Scalars['String']['input']>;
  operator_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  operator_not?: InputMaybe<Scalars['String']['input']>;
  operator_not_contains?: InputMaybe<Scalars['String']['input']>;
  operator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  operator_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  operator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  operator_starts_with?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  permissions_has?: InputMaybe<Scalars['Int']['input']>;
  permissions_not?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  permissions_not_has?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type PermissionHolderPage = {
  items: Array<PermissionHolder>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Project = {
  activityEvents: Maybe<ActivityEventPage>;
  addToBalanceEvents: Maybe<AddToBalanceEventPage>;
  autoIssueEvents: Maybe<AutoIssueEventPage>;
  balance: Scalars['BigInt']['output'];
  borrowLoanEvents: Maybe<BorrowLoanEventPage>;
  burnEvents: Maybe<BurnEventPage>;
  cashOutTokensEvents: Maybe<CashOutTokensEventPage>;
  chainId: Scalars['Int']['output'];
  contributorsCount: Scalars['Int']['output'];
  coverImageUri: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Int']['output'];
  createdWithinTrendingWindow: Maybe<Scalars['Boolean']['output']>;
  creator: Scalars['String']['output'];
  currency: Maybe<Scalars['BigInt']['output']>;
  decimals: Maybe<Scalars['Int']['output']>;
  deployErc20Events: Maybe<DeployErc20EventPage>;
  deployer: Scalars['String']['output'];
  description: Maybe<Scalars['String']['output']>;
  discord: Maybe<Scalars['String']['output']>;
  domain: Maybe<Scalars['String']['output']>;
  handle: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  infoUri: Maybe<Scalars['String']['output']>;
  isRevnet: Maybe<Scalars['Boolean']['output']>;
  liquidateLoanEvents: Maybe<LiquidateLoanEventPage>;
  logoUri: Maybe<Scalars['String']['output']>;
  metadata: Maybe<Scalars['JSON']['output']>;
  metadataUri: Maybe<Scalars['String']['output']>;
  mintNftEvents: Maybe<MintNftEventPage>;
  mintTokensEvents: Maybe<MintTokensEventPage>;
  name: Maybe<Scalars['String']['output']>;
  nftHooks: Maybe<NftHookPage>;
  nfts: Maybe<NftPage>;
  nftsMintedCount: Scalars['Int']['output'];
  owner: Scalars['String']['output'];
  participants: Maybe<ParticipantPage>;
  payDisclosure: Maybe<Scalars['String']['output']>;
  payEvents: Maybe<PayEventPage>;
  paymentsCount: Scalars['Int']['output'];
  permissionHolders: Maybe<PermissionHolderPage>;
  projectCreateEvents: Maybe<ProjectCreateEventPage>;
  projectId: Scalars['Int']['output'];
  projectMoments: Maybe<ProjectMomentPage>;
  projectTagline: Maybe<Scalars['String']['output']>;
  reallocateLoanEvents: Maybe<ReallocateLoanEventPage>;
  redeemCount: Scalars['Int']['output'];
  redeemVolume: Scalars['BigInt']['output'];
  redeemVolumeUsd: Scalars['BigInt']['output'];
  repayLoanEvents: Maybe<RepayLoanEventPage>;
  sendPayoutToSplitEvents: Maybe<SendPayoutToSplitEventPage>;
  sendPayoutsEvents: Maybe<SendPayoutsEventPage>;
  sendReservedTokensToSplitEvents: Maybe<SendReservedTokensToSplitEventPage>;
  sendReservedTokensToSplitsEvents: Maybe<SendReservedTokensToSplitsEventPage>;
  storeAutoIssuanceAmountEvent: Maybe<StoreAutoIssuanceAmountEventPage>;
  suckerGroup: Maybe<SuckerGroup>;
  suckerGroupId: Scalars['String']['output'];
  tags: Maybe<Array<Scalars['String']['output']>>;
  telegram: Maybe<Scalars['String']['output']>;
  token: Maybe<Scalars['String']['output']>;
  tokenSupply: Scalars['BigInt']['output'];
  tokens: Maybe<Array<Scalars['String']['output']>>;
  trendingPaymentsCount: Scalars['Int']['output'];
  trendingScore: Scalars['BigInt']['output'];
  trendingVolume: Scalars['BigInt']['output'];
  trendingVolumeUsd: Scalars['BigInt']['output'];
  twitter: Maybe<Scalars['String']['output']>;
  useAllowanceEvents: Maybe<UseAllowanceEventPage>;
  version: Scalars['Int']['output'];
  volume: Scalars['BigInt']['output'];
  volumeUsd: Scalars['BigInt']['output'];
};


export type ProjectActivityEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ActivityEventFilter>;
};


export type ProjectAddToBalanceEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AddToBalanceEventFilter>;
};


export type ProjectAutoIssueEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AutoIssueEventFilter>;
};


export type ProjectBorrowLoanEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<BorrowLoanEventFilter>;
};


export type ProjectBurnEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<BurnEventFilter>;
};


export type ProjectCashOutTokensEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<CashOutTokensEventFilter>;
};


export type ProjectDeployErc20EventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DeployErc20EventFilter>;
};


export type ProjectLiquidateLoanEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<LiquidateLoanEventFilter>;
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


export type ProjectParticipantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ParticipantFilter>;
};


export type ProjectPayEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayEventFilter>;
};


export type ProjectPermissionHoldersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PermissionHolderFilter>;
};


export type ProjectProjectCreateEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ProjectCreateEventFilter>;
};


export type ProjectProjectMomentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ProjectMomentFilter>;
};


export type ProjectReallocateLoanEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ReallocateLoanEventFilter>;
};


export type ProjectRepayLoanEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<RepayLoanEventFilter>;
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


export type ProjectStoreAutoIssuanceAmountEventArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<StoreAutoIssuanceAmountEventFilter>;
};


export type ProjectUseAllowanceEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<UseAllowanceEventFilter>;
};

export type ProjectCreateEvent = {
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type ProjectCreateEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectCreateEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectCreateEventFilter>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ProjectCreateEventPage = {
  items: Array<ProjectCreateEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
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
  coverImageUri?: InputMaybe<Scalars['String']['input']>;
  coverImageUri_contains?: InputMaybe<Scalars['String']['input']>;
  coverImageUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  coverImageUri_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  coverImageUri_not?: InputMaybe<Scalars['String']['input']>;
  coverImageUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  coverImageUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  coverImageUri_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  coverImageUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  coverImageUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  createdWithinTrendingWindow?: InputMaybe<Scalars['Boolean']['input']>;
  createdWithinTrendingWindow_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  createdWithinTrendingWindow_not?: InputMaybe<Scalars['Boolean']['input']>;
  createdWithinTrendingWindow_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
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
  currency?: InputMaybe<Scalars['BigInt']['input']>;
  currency_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currency_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currency_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  currency_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currency_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currency_not?: InputMaybe<Scalars['BigInt']['input']>;
  currency_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  discord?: InputMaybe<Scalars['String']['input']>;
  discord_contains?: InputMaybe<Scalars['String']['input']>;
  discord_ends_with?: InputMaybe<Scalars['String']['input']>;
  discord_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  discord_not?: InputMaybe<Scalars['String']['input']>;
  discord_not_contains?: InputMaybe<Scalars['String']['input']>;
  discord_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  discord_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  discord_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  discord_starts_with?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  domain_contains?: InputMaybe<Scalars['String']['input']>;
  domain_ends_with?: InputMaybe<Scalars['String']['input']>;
  domain_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  domain_not?: InputMaybe<Scalars['String']['input']>;
  domain_not_contains?: InputMaybe<Scalars['String']['input']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  domain_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  domain_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  domain_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  infoUri?: InputMaybe<Scalars['String']['input']>;
  infoUri_contains?: InputMaybe<Scalars['String']['input']>;
  infoUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  infoUri_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  infoUri_not?: InputMaybe<Scalars['String']['input']>;
  infoUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  infoUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  infoUri_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  infoUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  infoUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  isRevnet?: InputMaybe<Scalars['Boolean']['input']>;
  isRevnet_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  isRevnet_not?: InputMaybe<Scalars['Boolean']['input']>;
  isRevnet_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  logoUri?: InputMaybe<Scalars['String']['input']>;
  logoUri_contains?: InputMaybe<Scalars['String']['input']>;
  logoUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  logoUri_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logoUri_not?: InputMaybe<Scalars['String']['input']>;
  logoUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  logoUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  logoUri_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logoUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  logoUri_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  nftsMintedCount?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_gt?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_gte?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nftsMintedCount_lt?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_lte?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_not?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  payDisclosure?: InputMaybe<Scalars['String']['input']>;
  payDisclosure_contains?: InputMaybe<Scalars['String']['input']>;
  payDisclosure_ends_with?: InputMaybe<Scalars['String']['input']>;
  payDisclosure_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  payDisclosure_not?: InputMaybe<Scalars['String']['input']>;
  payDisclosure_not_contains?: InputMaybe<Scalars['String']['input']>;
  payDisclosure_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  payDisclosure_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  payDisclosure_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  payDisclosure_starts_with?: InputMaybe<Scalars['String']['input']>;
  paymentsCount?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  paymentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_not?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectTagline?: InputMaybe<Scalars['String']['input']>;
  projectTagline_contains?: InputMaybe<Scalars['String']['input']>;
  projectTagline_ends_with?: InputMaybe<Scalars['String']['input']>;
  projectTagline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projectTagline_not?: InputMaybe<Scalars['String']['input']>;
  projectTagline_not_contains?: InputMaybe<Scalars['String']['input']>;
  projectTagline_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  projectTagline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projectTagline_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectTagline_starts_with?: InputMaybe<Scalars['String']['input']>;
  redeemCount?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_gt?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_gte?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  redeemCount_lt?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_lte?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_not?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  redeemVolume?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  redeemVolumeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  redeemVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  redeemVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_has?: InputMaybe<Scalars['String']['input']>;
  tags_not?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_not_has?: InputMaybe<Scalars['String']['input']>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  telegram_contains?: InputMaybe<Scalars['String']['input']>;
  telegram_ends_with?: InputMaybe<Scalars['String']['input']>;
  telegram_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  telegram_not?: InputMaybe<Scalars['String']['input']>;
  telegram_not_contains?: InputMaybe<Scalars['String']['input']>;
  telegram_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  telegram_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  telegram_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  telegram_starts_with?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  tokenSupply?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tokenSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokens?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokens_has?: InputMaybe<Scalars['String']['input']>;
  tokens_not?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokens_not_has?: InputMaybe<Scalars['String']['input']>;
  trendingPaymentsCount?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  trendingPaymentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_not?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  trendingScore?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trendingScore_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_not?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trendingVolume?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolumeUsd?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolumeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolumeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolumeUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trendingVolumeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolumeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolumeUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolumeUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trendingVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trendingVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  twitter_contains?: InputMaybe<Scalars['String']['input']>;
  twitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitter_not?: InputMaybe<Scalars['String']['input']>;
  twitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  twitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volumeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type ProjectMoment = {
  balance: Scalars['BigInt']['output'];
  block: Scalars['Int']['output'];
  chainId: Scalars['Int']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  trendingScore: Scalars['BigInt']['output'];
  version: Scalars['Int']['output'];
  volume: Scalars['BigInt']['output'];
  volumeUsd: Scalars['BigInt']['output'];
};

export type ProjectMomentFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectMomentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectMomentFilter>>>;
  balance?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  trendingScore?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trendingScore_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_not?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volumeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type ProjectMomentPage = {
  items: Array<ProjectMoment>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectPage = {
  items: Array<Project>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ReallocateLoanEvent = {
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  loanId: Scalars['BigInt']['output'];
  logIndex: Scalars['Int']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  reallocatedLoanId: Scalars['BigInt']['output'];
  removedCollateralCount: Scalars['BigInt']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type ReallocateLoanEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<ReallocateLoanEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ReallocateLoanEventFilter>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  loanId?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  loanId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  reallocatedLoanId?: InputMaybe<Scalars['BigInt']['input']>;
  reallocatedLoanId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reallocatedLoanId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reallocatedLoanId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  reallocatedLoanId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reallocatedLoanId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reallocatedLoanId_not?: InputMaybe<Scalars['BigInt']['input']>;
  reallocatedLoanId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  removedCollateralCount?: InputMaybe<Scalars['BigInt']['input']>;
  removedCollateralCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  removedCollateralCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  removedCollateralCount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  removedCollateralCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  removedCollateralCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  removedCollateralCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  removedCollateralCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ReallocateLoanEventPage = {
  items: Array<ReallocateLoanEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RepayLoanEvent = {
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  collateralCountToReturn: Scalars['BigInt']['output'];
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  loanId: Scalars['BigInt']['output'];
  logIndex: Scalars['Int']['output'];
  paidOffLoanId: Scalars['BigInt']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  repayBorrowAmount: Scalars['BigInt']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type RepayLoanEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<RepayLoanEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RepayLoanEventFilter>>>;
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
  collateralCountToReturn?: InputMaybe<Scalars['BigInt']['input']>;
  collateralCountToReturn_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralCountToReturn_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralCountToReturn_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  collateralCountToReturn_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralCountToReturn_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralCountToReturn_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateralCountToReturn_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  loanId?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  loanId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  paidOffLoanId?: InputMaybe<Scalars['BigInt']['input']>;
  paidOffLoanId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  paidOffLoanId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  paidOffLoanId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  paidOffLoanId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  paidOffLoanId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  paidOffLoanId_not?: InputMaybe<Scalars['BigInt']['input']>;
  paidOffLoanId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  repayBorrowAmount?: InputMaybe<Scalars['BigInt']['input']>;
  repayBorrowAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  repayBorrowAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  repayBorrowAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  repayBorrowAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  repayBorrowAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  repayBorrowAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  repayBorrowAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type RepayLoanEventPage = {
  items: Array<RepayLoanEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SendPayoutToSplitEvent = {
  amount: Scalars['BigInt']['output'];
  amountUsd: Scalars['BigInt']['output'];
  beneficiary: Scalars['String']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  from: Scalars['String']['output'];
  group: Scalars['BigInt']['output'];
  hook: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lockedUntil: Scalars['BigInt']['output'];
  logIndex: Scalars['Int']['output'];
  netAmount: Scalars['BigInt']['output'];
  percent: Scalars['Int']['output'];
  preferAddToBalance: Scalars['Boolean']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  rulesetId: Scalars['Int']['output'];
  splitProjectId: Scalars['Int']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type SendPayoutToSplitEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<SendPayoutToSplitEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SendPayoutToSplitEventFilter>>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amountUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  lockedUntil?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  lockedUntil_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_not?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type SendPayoutToSplitEventPage = {
  items: Array<SendPayoutToSplitEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SendPayoutsEvent = {
  amount: Scalars['BigInt']['output'];
  amountPaidOut: Scalars['BigInt']['output'];
  amountPaidOutUsd: Scalars['BigInt']['output'];
  amountUsd: Scalars['BigInt']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  fee: Scalars['BigInt']['output'];
  feeUsd: Scalars['BigInt']['output'];
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  netLeftoverPayoutAmount: Scalars['BigInt']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  rulesetCycleNumber: Scalars['Int']['output'];
  rulesetId: Scalars['Int']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type SendPayoutsEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<SendPayoutsEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SendPayoutsEventFilter>>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOutUsd?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOutUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOutUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOutUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amountPaidOutUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOutUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOutUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOutUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amountPaidOut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amountPaidOut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidOut_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amountUsd?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amountUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  feeUsd?: InputMaybe<Scalars['BigInt']['input']>;
  feeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  feeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  id: Scalars['String']['output'];
  lockedUntil: Scalars['BigInt']['output'];
  logIndex: Scalars['Int']['output'];
  percent: Scalars['Int']['output'];
  preferAddToBalance: Scalars['Boolean']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  rulesetId: Scalars['Int']['output'];
  splitProjectId: Scalars['Int']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  tokenCount: Scalars['BigInt']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  lockedUntil?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  lockedUntil_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_not?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  id: Scalars['String']['output'];
  leftoverAmount: Scalars['BigInt']['output'];
  logIndex: Scalars['Int']['output'];
  owner: Scalars['String']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  rulesetCycleNumber: Scalars['Int']['output'];
  rulesetId: Scalars['Int']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  tokenCount: Scalars['BigInt']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  leftoverAmount?: InputMaybe<Scalars['BigInt']['input']>;
  leftoverAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  leftoverAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  leftoverAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  leftoverAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  leftoverAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  leftoverAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  leftoverAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type SendReservedTokensToSplitsEventPage = {
  items: Array<SendReservedTokensToSplitsEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StoreAutoIssuanceAmountEvent = {
  beneficiary: Scalars['String']['output'];
  caller: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  count: Scalars['BigInt']['output'];
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  stageId: Scalars['BigInt']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type StoreAutoIssuanceAmountEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<StoreAutoIssuanceAmountEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StoreAutoIssuanceAmountEventFilter>>>;
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
  count?: InputMaybe<Scalars['BigInt']['input']>;
  count_gt?: InputMaybe<Scalars['BigInt']['input']>;
  count_gte?: InputMaybe<Scalars['BigInt']['input']>;
  count_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  count_lt?: InputMaybe<Scalars['BigInt']['input']>;
  count_lte?: InputMaybe<Scalars['BigInt']['input']>;
  count_not?: InputMaybe<Scalars['BigInt']['input']>;
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectId_gt?: InputMaybe<Scalars['Int']['input']>;
  projectId_gte?: InputMaybe<Scalars['Int']['input']>;
  projectId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projectId_lt?: InputMaybe<Scalars['Int']['input']>;
  projectId_lte?: InputMaybe<Scalars['Int']['input']>;
  projectId_not?: InputMaybe<Scalars['Int']['input']>;
  projectId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  stageId?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  stageId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_not?: InputMaybe<Scalars['BigInt']['input']>;
  stageId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type StoreAutoIssuanceAmountEventPage = {
  items: Array<StoreAutoIssuanceAmountEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SuckerGroup = {
  addresses: Array<Scalars['String']['output']>;
  balance: Scalars['BigInt']['output'];
  contributorsCount: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  nftsMintedCount: Scalars['Int']['output'];
  paymentsCount: Scalars['Int']['output'];
  projects: Maybe<ProjectPage>;
  redeemCount: Scalars['Int']['output'];
  redeemVolume: Scalars['BigInt']['output'];
  redeemVolumeUsd: Scalars['BigInt']['output'];
  tokenSupply: Scalars['BigInt']['output'];
  trendingPaymentsCount: Scalars['Int']['output'];
  trendingScore: Scalars['BigInt']['output'];
  trendingVolume: Scalars['BigInt']['output'];
  version: Scalars['Int']['output'];
  volume: Scalars['BigInt']['output'];
  volumeUsd: Scalars['BigInt']['output'];
};


export type SuckerGroupProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ProjectFilter>;
};

export type SuckerGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<SuckerGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SuckerGroupFilter>>>;
  addresses?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addresses_has?: InputMaybe<Scalars['String']['input']>;
  addresses_not?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addresses_not_has?: InputMaybe<Scalars['String']['input']>;
  balance?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftsMintedCount?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_gt?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_gte?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nftsMintedCount_lt?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_lte?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_not?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  paymentsCount?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  paymentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_not?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  projects?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projects_has?: InputMaybe<Scalars['String']['input']>;
  projects_not?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projects_not_has?: InputMaybe<Scalars['String']['input']>;
  redeemCount?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_gt?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_gte?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  redeemCount_lt?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_lte?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_not?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  redeemVolume?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  redeemVolumeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  redeemVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  redeemVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tokenSupply?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tokenSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trendingPaymentsCount?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  trendingPaymentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_not?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  trendingScore?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trendingScore_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_not?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trendingVolume?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trendingVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volumeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type SuckerGroupMoment = {
  balance: Scalars['BigInt']['output'];
  block: Scalars['Int']['output'];
  contributorsCount: Scalars['Int']['output'];
  nftsMintedCount: Scalars['Int']['output'];
  paymentsCount: Scalars['Int']['output'];
  redeemCount: Scalars['Int']['output'];
  redeemVolume: Scalars['BigInt']['output'];
  redeemVolumeUsd: Scalars['BigInt']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  tokenSupply: Scalars['BigInt']['output'];
  trendingPaymentsCount: Scalars['Int']['output'];
  trendingScore: Scalars['BigInt']['output'];
  trendingVolume: Scalars['BigInt']['output'];
  version: Scalars['Int']['output'];
  volume: Scalars['BigInt']['output'];
  volumeUsd: Scalars['BigInt']['output'];
};

export type SuckerGroupMomentFilter = {
  AND?: InputMaybe<Array<InputMaybe<SuckerGroupMomentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SuckerGroupMomentFilter>>>;
  balance?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contributorsCount?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contributorsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_not?: InputMaybe<Scalars['Int']['input']>;
  contributorsCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nftsMintedCount?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_gt?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_gte?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nftsMintedCount_lt?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_lte?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_not?: InputMaybe<Scalars['Int']['input']>;
  nftsMintedCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  paymentsCount?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  paymentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_not?: InputMaybe<Scalars['Int']['input']>;
  paymentsCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  redeemCount?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_gt?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_gte?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  redeemCount_lt?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_lte?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_not?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  redeemVolume?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  redeemVolumeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolumeUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  redeemVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  redeemVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  redeemVolume_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenSupply?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tokenSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenSupply_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trendingPaymentsCount?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  trendingPaymentsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_not?: InputMaybe<Scalars['Int']['input']>;
  trendingPaymentsCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  trendingScore?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trendingScore_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_not?: InputMaybe<Scalars['BigInt']['input']>;
  trendingScore_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trendingVolume?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  trendingVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  trendingVolume_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volumeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type SuckerGroupMomentPage = {
  items: Array<SuckerGroupMoment>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SuckerGroupPage = {
  items: Array<SuckerGroup>;
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
  id: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  memo: Maybe<Scalars['String']['output']>;
  netAmountPaidOut: Scalars['BigInt']['output'];
  project: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  rulesetCycleNumber: Scalars['Int']['output'];
  rulesetId: Scalars['Int']['output'];
  suckerGroupId: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txHash: Scalars['String']['output'];
  version: Scalars['Int']['output'];
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
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  suckerGroupId?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suckerGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  suckerGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
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
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type UseAllowanceEventPage = {
  items: Array<UseAllowanceEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Wallet = {
  address: Scalars['String']['output'];
  lastPaidTimestamp: Scalars['Int']['output'];
  nfts: Maybe<NftPage>;
  participants: Maybe<ParticipantPage>;
  volume: Scalars['BigInt']['output'];
  volumeUsd: Scalars['BigInt']['output'];
};


export type WalletNftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<NftFilter>;
};


export type WalletParticipantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ParticipantFilter>;
};

export type WalletFilter = {
  AND?: InputMaybe<Array<InputMaybe<WalletFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WalletFilter>>>;
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
  lastPaidTimestamp?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lastPaidTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  lastPaidTimestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volumeUsd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not?: InputMaybe<Scalars['BigInt']['input']>;
  volumeUsd_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type WalletPage = {
  items: Array<Wallet>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ActivityEventsQueryVariables = Exact<{
  where?: InputMaybe<ActivityEventFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type ActivityEventsQuery = { activityEvents: { pageInfo: { endCursor: string | null, hasNextPage: boolean }, items: Array<{ timestamp: number, txHash: string, chainId: number, from: string, payEvent: { timestamp: number, txHash: string, caller: string, chainId: number, beneficiary: string, amount: bigint, memo: string | null, newlyIssuedTokenCount: bigint } | null, decorateBannyEvent: { timestamp: number, txHash: string, caller: string, chainId: number, bannyBodyId: bigint, outfitIds: Array<bigint> | null, backgroundId: bigint | null, tokenUriMetadata: any | null } | null }> } };

export type PayEventsQueryVariables = Exact<{
  where?: InputMaybe<PayEventFilter>;
}>;


export type PayEventsQuery = { payEvents: { items: Array<{ timestamp: number, txHash: string, caller: string, chainId: number, beneficiary: string, amount: bigint, memo: string | null, newlyIssuedTokenCount: bigint }> } };

export type DecorateBannyEventsQueryVariables = Exact<{
  where?: InputMaybe<DecorateBannyEventFilter>;
}>;


export type DecorateBannyEventsQuery = { decorateBannyEvents: { items: Array<{ timestamp: number, txHash: string, caller: string, chainId: number, bannyBodyId: bigint, outfitIds: Array<bigint> | null, backgroundId: bigint | null, tokenUri: string | null }> } };

export type MintNftEventsQueryVariables = Exact<{
  where?: InputMaybe<MintNftEventFilter>;
}>;


export type MintNftEventsQuery = { mintNftEvents: { items: Array<{ tokenId: bigint }> } };

export type TierDataFragment = { tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, reserveFrequency: number | null, category: number, chainId: number, metadata: any | null };

export type NftQueryVariables = Exact<{
  tokenId: Scalars['BigInt']['input'];
  chainId: Scalars['Float']['input'];
  hook: Scalars['String']['input'];
}>;


export type NftQuery = { nft: { chainId: number, tokenId: bigint, metadata: any | null, category: number, tierId: number, createdAt: number, customized: boolean | null, customizedAt: number, wallet: { address: string } | null, tier: { tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, reserveFrequency: number | null, category: number, chainId: number, metadata: any | null } | null } | null };

export type NfTsQueryVariables = Exact<{
  where?: InputMaybe<NftFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type NfTsQuery = { nfts: { totalCount: number, pageInfo: { endCursor: string | null, hasNextPage: boolean }, items: Array<{ chainId: number, tokenId: bigint, metadata: any | null, category: number, tierId: number, createdAt: number, customized: boolean | null, customizedAt: number, wallet: { address: string } | null, tier: { tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, reserveFrequency: number | null, category: number, chainId: number, metadata: any | null } | null }> } };

export type NftTiersQueryVariables = Exact<{
  where?: InputMaybe<NftTierFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
}>;


export type NftTiersQuery = { nftTiers: { items: Array<{ tierId: number, price: bigint, encodedIpfsUri: string | null, resolvedUri: string | null, svg: string | null, initialSupply: number, remainingSupply: number, reserveFrequency: number | null, category: number, chainId: number, metadata: any | null }> } };

export type ProjectQueryVariables = Exact<{
  chainId: Scalars['Float']['input'];
  projectId: Scalars['Float']['input'];
}>;


export type ProjectQuery = { project: { suckerGroup: { id: string } | null } | null };



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
  _sucker: ResolverTypeWrapper<_Sucker>;
  _suckerFilter: _SuckerFilter;
  _suckerPage: ResolverTypeWrapper<_SuckerPage>;
  activityEvent: ResolverTypeWrapper<ActivityEvent>;
  activityEventFilter: ActivityEventFilter;
  activityEventPage: ResolverTypeWrapper<ActivityEventPage>;
  activityEventType: ActivityEventType;
  addToBalanceEvent: ResolverTypeWrapper<AddToBalanceEvent>;
  addToBalanceEventFilter: AddToBalanceEventFilter;
  addToBalanceEventPage: ResolverTypeWrapper<AddToBalanceEventPage>;
  autoIssueEvent: ResolverTypeWrapper<AutoIssueEvent>;
  autoIssueEventFilter: AutoIssueEventFilter;
  autoIssueEventPage: ResolverTypeWrapper<AutoIssueEventPage>;
  borrowLoanEvent: ResolverTypeWrapper<BorrowLoanEvent>;
  borrowLoanEventFilter: BorrowLoanEventFilter;
  borrowLoanEventPage: ResolverTypeWrapper<BorrowLoanEventPage>;
  burnEvent: ResolverTypeWrapper<BurnEvent>;
  burnEventFilter: BurnEventFilter;
  burnEventPage: ResolverTypeWrapper<BurnEventPage>;
  cashOutTokensEvent: ResolverTypeWrapper<CashOutTokensEvent>;
  cashOutTokensEventFilter: CashOutTokensEventFilter;
  cashOutTokensEventPage: ResolverTypeWrapper<CashOutTokensEventPage>;
  decorateBannyEvent: ResolverTypeWrapper<DecorateBannyEvent>;
  decorateBannyEventFilter: DecorateBannyEventFilter;
  decorateBannyEventPage: ResolverTypeWrapper<DecorateBannyEventPage>;
  deployErc20Event: ResolverTypeWrapper<DeployErc20Event>;
  deployErc20EventFilter: DeployErc20EventFilter;
  deployErc20EventPage: ResolverTypeWrapper<DeployErc20EventPage>;
  liquidateLoanEvent: ResolverTypeWrapper<LiquidateLoanEvent>;
  liquidateLoanEventFilter: LiquidateLoanEventFilter;
  liquidateLoanEventPage: ResolverTypeWrapper<LiquidateLoanEventPage>;
  loan: ResolverTypeWrapper<Loan>;
  loanFilter: LoanFilter;
  loanPage: ResolverTypeWrapper<LoanPage>;
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
  participant: ResolverTypeWrapper<Participant>;
  participantFilter: ParticipantFilter;
  participantPage: ResolverTypeWrapper<ParticipantPage>;
  participantSnapshot: ResolverTypeWrapper<ParticipantSnapshot>;
  participantSnapshotFilter: ParticipantSnapshotFilter;
  participantSnapshotPage: ResolverTypeWrapper<ParticipantSnapshotPage>;
  payEvent: ResolverTypeWrapper<PayEvent>;
  payEventFilter: PayEventFilter;
  payEventPage: ResolverTypeWrapper<PayEventPage>;
  permissionHolder: ResolverTypeWrapper<PermissionHolder>;
  permissionHolderFilter: PermissionHolderFilter;
  permissionHolderPage: ResolverTypeWrapper<PermissionHolderPage>;
  project: ResolverTypeWrapper<Project>;
  projectCreateEvent: ResolverTypeWrapper<ProjectCreateEvent>;
  projectCreateEventFilter: ProjectCreateEventFilter;
  projectCreateEventPage: ResolverTypeWrapper<ProjectCreateEventPage>;
  projectFilter: ProjectFilter;
  projectMoment: ResolverTypeWrapper<ProjectMoment>;
  projectMomentFilter: ProjectMomentFilter;
  projectMomentPage: ResolverTypeWrapper<ProjectMomentPage>;
  projectPage: ResolverTypeWrapper<ProjectPage>;
  reallocateLoanEvent: ResolverTypeWrapper<ReallocateLoanEvent>;
  reallocateLoanEventFilter: ReallocateLoanEventFilter;
  reallocateLoanEventPage: ResolverTypeWrapper<ReallocateLoanEventPage>;
  repayLoanEvent: ResolverTypeWrapper<RepayLoanEvent>;
  repayLoanEventFilter: RepayLoanEventFilter;
  repayLoanEventPage: ResolverTypeWrapper<RepayLoanEventPage>;
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
  storeAutoIssuanceAmountEvent: ResolverTypeWrapper<StoreAutoIssuanceAmountEvent>;
  storeAutoIssuanceAmountEventFilter: StoreAutoIssuanceAmountEventFilter;
  storeAutoIssuanceAmountEventPage: ResolverTypeWrapper<StoreAutoIssuanceAmountEventPage>;
  suckerGroup: ResolverTypeWrapper<SuckerGroup>;
  suckerGroupFilter: SuckerGroupFilter;
  suckerGroupMoment: ResolverTypeWrapper<SuckerGroupMoment>;
  suckerGroupMomentFilter: SuckerGroupMomentFilter;
  suckerGroupMomentPage: ResolverTypeWrapper<SuckerGroupMomentPage>;
  suckerGroupPage: ResolverTypeWrapper<SuckerGroupPage>;
  useAllowanceEvent: ResolverTypeWrapper<UseAllowanceEvent>;
  useAllowanceEventFilter: UseAllowanceEventFilter;
  useAllowanceEventPage: ResolverTypeWrapper<UseAllowanceEventPage>;
  wallet: ResolverTypeWrapper<Wallet>;
  walletFilter: WalletFilter;
  walletPage: ResolverTypeWrapper<WalletPage>;
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
  _sucker: _Sucker;
  _suckerFilter: _SuckerFilter;
  _suckerPage: _SuckerPage;
  activityEvent: ActivityEvent;
  activityEventFilter: ActivityEventFilter;
  activityEventPage: ActivityEventPage;
  addToBalanceEvent: AddToBalanceEvent;
  addToBalanceEventFilter: AddToBalanceEventFilter;
  addToBalanceEventPage: AddToBalanceEventPage;
  autoIssueEvent: AutoIssueEvent;
  autoIssueEventFilter: AutoIssueEventFilter;
  autoIssueEventPage: AutoIssueEventPage;
  borrowLoanEvent: BorrowLoanEvent;
  borrowLoanEventFilter: BorrowLoanEventFilter;
  borrowLoanEventPage: BorrowLoanEventPage;
  burnEvent: BurnEvent;
  burnEventFilter: BurnEventFilter;
  burnEventPage: BurnEventPage;
  cashOutTokensEvent: CashOutTokensEvent;
  cashOutTokensEventFilter: CashOutTokensEventFilter;
  cashOutTokensEventPage: CashOutTokensEventPage;
  decorateBannyEvent: DecorateBannyEvent;
  decorateBannyEventFilter: DecorateBannyEventFilter;
  decorateBannyEventPage: DecorateBannyEventPage;
  deployErc20Event: DeployErc20Event;
  deployErc20EventFilter: DeployErc20EventFilter;
  deployErc20EventPage: DeployErc20EventPage;
  liquidateLoanEvent: LiquidateLoanEvent;
  liquidateLoanEventFilter: LiquidateLoanEventFilter;
  liquidateLoanEventPage: LiquidateLoanEventPage;
  loan: Loan;
  loanFilter: LoanFilter;
  loanPage: LoanPage;
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
  participant: Participant;
  participantFilter: ParticipantFilter;
  participantPage: ParticipantPage;
  participantSnapshot: ParticipantSnapshot;
  participantSnapshotFilter: ParticipantSnapshotFilter;
  participantSnapshotPage: ParticipantSnapshotPage;
  payEvent: PayEvent;
  payEventFilter: PayEventFilter;
  payEventPage: PayEventPage;
  permissionHolder: PermissionHolder;
  permissionHolderFilter: PermissionHolderFilter;
  permissionHolderPage: PermissionHolderPage;
  project: Project;
  projectCreateEvent: ProjectCreateEvent;
  projectCreateEventFilter: ProjectCreateEventFilter;
  projectCreateEventPage: ProjectCreateEventPage;
  projectFilter: ProjectFilter;
  projectMoment: ProjectMoment;
  projectMomentFilter: ProjectMomentFilter;
  projectMomentPage: ProjectMomentPage;
  projectPage: ProjectPage;
  reallocateLoanEvent: ReallocateLoanEvent;
  reallocateLoanEventFilter: ReallocateLoanEventFilter;
  reallocateLoanEventPage: ReallocateLoanEventPage;
  repayLoanEvent: RepayLoanEvent;
  repayLoanEventFilter: RepayLoanEventFilter;
  repayLoanEventPage: RepayLoanEventPage;
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
  storeAutoIssuanceAmountEvent: StoreAutoIssuanceAmountEvent;
  storeAutoIssuanceAmountEventFilter: StoreAutoIssuanceAmountEventFilter;
  storeAutoIssuanceAmountEventPage: StoreAutoIssuanceAmountEventPage;
  suckerGroup: SuckerGroup;
  suckerGroupFilter: SuckerGroupFilter;
  suckerGroupMoment: SuckerGroupMoment;
  suckerGroupMomentFilter: SuckerGroupMomentFilter;
  suckerGroupMomentPage: SuckerGroupMomentPage;
  suckerGroupPage: SuckerGroupPage;
  useAllowanceEvent: UseAllowanceEvent;
  useAllowanceEventFilter: UseAllowanceEventFilter;
  useAllowanceEventPage: UseAllowanceEventPage;
  wallet: Wallet;
  walletFilter: WalletFilter;
  walletPage: WalletPage;
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
  _sucker?: Resolver<Maybe<ResolversTypes['_sucker']>, ParentType, ContextType, RequireFields<Query_SuckerArgs, 'address' | 'chainId' | 'projectId' | 'version'>>;
  _suckers?: Resolver<ResolversTypes['_suckerPage'], ParentType, ContextType, Partial<Query_SuckersArgs>>;
  activityEvent?: Resolver<Maybe<ResolversTypes['activityEvent']>, ParentType, ContextType, RequireFields<QueryActivityEventArgs, 'id'>>;
  activityEvents?: Resolver<ResolversTypes['activityEventPage'], ParentType, ContextType, Partial<QueryActivityEventsArgs>>;
  addToBalanceEvent?: Resolver<Maybe<ResolversTypes['addToBalanceEvent']>, ParentType, ContextType, RequireFields<QueryAddToBalanceEventArgs, 'id'>>;
  addToBalanceEvents?: Resolver<ResolversTypes['addToBalanceEventPage'], ParentType, ContextType, Partial<QueryAddToBalanceEventsArgs>>;
  autoIssueEvent?: Resolver<Maybe<ResolversTypes['autoIssueEvent']>, ParentType, ContextType, RequireFields<QueryAutoIssueEventArgs, 'id'>>;
  autoIssueEvents?: Resolver<ResolversTypes['autoIssueEventPage'], ParentType, ContextType, Partial<QueryAutoIssueEventsArgs>>;
  borrowLoanEvent?: Resolver<Maybe<ResolversTypes['borrowLoanEvent']>, ParentType, ContextType, RequireFields<QueryBorrowLoanEventArgs, 'id'>>;
  borrowLoanEvents?: Resolver<ResolversTypes['borrowLoanEventPage'], ParentType, ContextType, Partial<QueryBorrowLoanEventsArgs>>;
  burnEvent?: Resolver<Maybe<ResolversTypes['burnEvent']>, ParentType, ContextType, RequireFields<QueryBurnEventArgs, 'id'>>;
  burnEvents?: Resolver<ResolversTypes['burnEventPage'], ParentType, ContextType, Partial<QueryBurnEventsArgs>>;
  cashOutTokensEvent?: Resolver<Maybe<ResolversTypes['cashOutTokensEvent']>, ParentType, ContextType, RequireFields<QueryCashOutTokensEventArgs, 'id'>>;
  cashOutTokensEvents?: Resolver<ResolversTypes['cashOutTokensEventPage'], ParentType, ContextType, Partial<QueryCashOutTokensEventsArgs>>;
  decorateBannyEvent?: Resolver<Maybe<ResolversTypes['decorateBannyEvent']>, ParentType, ContextType, RequireFields<QueryDecorateBannyEventArgs, 'id'>>;
  decorateBannyEvents?: Resolver<ResolversTypes['decorateBannyEventPage'], ParentType, ContextType, Partial<QueryDecorateBannyEventsArgs>>;
  deployErc20Event?: Resolver<Maybe<ResolversTypes['deployErc20Event']>, ParentType, ContextType, RequireFields<QueryDeployErc20EventArgs, 'id'>>;
  deployErc20Events?: Resolver<ResolversTypes['deployErc20EventPage'], ParentType, ContextType, Partial<QueryDeployErc20EventsArgs>>;
  liquidateLoanEvent?: Resolver<Maybe<ResolversTypes['liquidateLoanEvent']>, ParentType, ContextType, RequireFields<QueryLiquidateLoanEventArgs, 'id'>>;
  liquidateLoanEvents?: Resolver<ResolversTypes['liquidateLoanEventPage'], ParentType, ContextType, Partial<QueryLiquidateLoanEventsArgs>>;
  loan?: Resolver<Maybe<ResolversTypes['loan']>, ParentType, ContextType, RequireFields<QueryLoanArgs, 'chainId' | 'id' | 'version'>>;
  loans?: Resolver<ResolversTypes['loanPage'], ParentType, ContextType, Partial<QueryLoansArgs>>;
  mintNftEvent?: Resolver<Maybe<ResolversTypes['mintNftEvent']>, ParentType, ContextType, RequireFields<QueryMintNftEventArgs, 'id'>>;
  mintNftEvents?: Resolver<ResolversTypes['mintNftEventPage'], ParentType, ContextType, Partial<QueryMintNftEventsArgs>>;
  mintTokensEvent?: Resolver<Maybe<ResolversTypes['mintTokensEvent']>, ParentType, ContextType, RequireFields<QueryMintTokensEventArgs, 'id'>>;
  mintTokensEvents?: Resolver<ResolversTypes['mintTokensEventPage'], ParentType, ContextType, Partial<QueryMintTokensEventsArgs>>;
  nft?: Resolver<Maybe<ResolversTypes['nft']>, ParentType, ContextType, RequireFields<QueryNftArgs, 'chainId' | 'hook' | 'tokenId' | 'version'>>;
  nftHook?: Resolver<Maybe<ResolversTypes['nftHook']>, ParentType, ContextType, RequireFields<QueryNftHookArgs, 'address' | 'chainId' | 'version'>>;
  nftHooks?: Resolver<ResolversTypes['nftHookPage'], ParentType, ContextType, Partial<QueryNftHooksArgs>>;
  nftTier?: Resolver<Maybe<ResolversTypes['nftTier']>, ParentType, ContextType, RequireFields<QueryNftTierArgs, 'chainId' | 'hook' | 'tierId' | 'version'>>;
  nftTiers?: Resolver<ResolversTypes['nftTierPage'], ParentType, ContextType, Partial<QueryNftTiersArgs>>;
  nfts?: Resolver<ResolversTypes['nftPage'], ParentType, ContextType, Partial<QueryNftsArgs>>;
  participant?: Resolver<Maybe<ResolversTypes['participant']>, ParentType, ContextType, RequireFields<QueryParticipantArgs, 'address' | 'chainId' | 'projectId' | 'version'>>;
  participantSnapshot?: Resolver<Maybe<ResolversTypes['participantSnapshot']>, ParentType, ContextType, RequireFields<QueryParticipantSnapshotArgs, 'address' | 'chainId' | 'projectId' | 'version'>>;
  participantSnapshots?: Resolver<ResolversTypes['participantSnapshotPage'], ParentType, ContextType, Partial<QueryParticipantSnapshotsArgs>>;
  participants?: Resolver<ResolversTypes['participantPage'], ParentType, ContextType, Partial<QueryParticipantsArgs>>;
  payEvent?: Resolver<Maybe<ResolversTypes['payEvent']>, ParentType, ContextType, RequireFields<QueryPayEventArgs, 'id'>>;
  payEvents?: Resolver<ResolversTypes['payEventPage'], ParentType, ContextType, Partial<QueryPayEventsArgs>>;
  permissionHolder?: Resolver<Maybe<ResolversTypes['permissionHolder']>, ParentType, ContextType, RequireFields<QueryPermissionHolderArgs, 'account' | 'chainId' | 'operator' | 'projectId' | 'version'>>;
  permissionHolders?: Resolver<ResolversTypes['permissionHolderPage'], ParentType, ContextType, Partial<QueryPermissionHoldersArgs>>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType, RequireFields<QueryProjectArgs, 'chainId' | 'projectId' | 'version'>>;
  projectCreateEvent?: Resolver<Maybe<ResolversTypes['projectCreateEvent']>, ParentType, ContextType, RequireFields<QueryProjectCreateEventArgs, 'id'>>;
  projectCreateEvents?: Resolver<ResolversTypes['projectCreateEventPage'], ParentType, ContextType, Partial<QueryProjectCreateEventsArgs>>;
  projectMoment?: Resolver<Maybe<ResolversTypes['projectMoment']>, ParentType, ContextType, RequireFields<QueryProjectMomentArgs, 'block' | 'chainId' | 'projectId' | 'version'>>;
  projectMoments?: Resolver<ResolversTypes['projectMomentPage'], ParentType, ContextType, Partial<QueryProjectMomentsArgs>>;
  projects?: Resolver<ResolversTypes['projectPage'], ParentType, ContextType, Partial<QueryProjectsArgs>>;
  reallocateLoanEvent?: Resolver<Maybe<ResolversTypes['reallocateLoanEvent']>, ParentType, ContextType, RequireFields<QueryReallocateLoanEventArgs, 'id'>>;
  reallocateLoanEvents?: Resolver<ResolversTypes['reallocateLoanEventPage'], ParentType, ContextType, Partial<QueryReallocateLoanEventsArgs>>;
  repayLoanEvent?: Resolver<Maybe<ResolversTypes['repayLoanEvent']>, ParentType, ContextType, RequireFields<QueryRepayLoanEventArgs, 'id'>>;
  repayLoanEvents?: Resolver<ResolversTypes['repayLoanEventPage'], ParentType, ContextType, Partial<QueryRepayLoanEventsArgs>>;
  sendPayoutToSplitEvent?: Resolver<Maybe<ResolversTypes['sendPayoutToSplitEvent']>, ParentType, ContextType, RequireFields<QuerySendPayoutToSplitEventArgs, 'id'>>;
  sendPayoutToSplitEvents?: Resolver<ResolversTypes['sendPayoutToSplitEventPage'], ParentType, ContextType, Partial<QuerySendPayoutToSplitEventsArgs>>;
  sendPayoutsEvent?: Resolver<Maybe<ResolversTypes['sendPayoutsEvent']>, ParentType, ContextType, RequireFields<QuerySendPayoutsEventArgs, 'id'>>;
  sendPayoutsEvents?: Resolver<ResolversTypes['sendPayoutsEventPage'], ParentType, ContextType, Partial<QuerySendPayoutsEventsArgs>>;
  sendReservedTokensToSplitEvent?: Resolver<Maybe<ResolversTypes['sendReservedTokensToSplitEvent']>, ParentType, ContextType, RequireFields<QuerySendReservedTokensToSplitEventArgs, 'id'>>;
  sendReservedTokensToSplitEvents?: Resolver<ResolversTypes['sendReservedTokensToSplitEventPage'], ParentType, ContextType, Partial<QuerySendReservedTokensToSplitEventsArgs>>;
  sendReservedTokensToSplitsEvent?: Resolver<Maybe<ResolversTypes['sendReservedTokensToSplitsEvent']>, ParentType, ContextType, RequireFields<QuerySendReservedTokensToSplitsEventArgs, 'id'>>;
  sendReservedTokensToSplitsEvents?: Resolver<ResolversTypes['sendReservedTokensToSplitsEventPage'], ParentType, ContextType, Partial<QuerySendReservedTokensToSplitsEventsArgs>>;
  storeAutoIssuanceAmountEvent?: Resolver<Maybe<ResolversTypes['storeAutoIssuanceAmountEvent']>, ParentType, ContextType, RequireFields<QueryStoreAutoIssuanceAmountEventArgs, 'id'>>;
  storeAutoIssuanceAmountEvents?: Resolver<ResolversTypes['storeAutoIssuanceAmountEventPage'], ParentType, ContextType, Partial<QueryStoreAutoIssuanceAmountEventsArgs>>;
  suckerGroup?: Resolver<Maybe<ResolversTypes['suckerGroup']>, ParentType, ContextType, RequireFields<QuerySuckerGroupArgs, 'id'>>;
  suckerGroupMoment?: Resolver<Maybe<ResolversTypes['suckerGroupMoment']>, ParentType, ContextType, RequireFields<QuerySuckerGroupMomentArgs, 'block' | 'suckerGroupId' | 'version'>>;
  suckerGroupMoments?: Resolver<ResolversTypes['suckerGroupMomentPage'], ParentType, ContextType, Partial<QuerySuckerGroupMomentsArgs>>;
  suckerGroups?: Resolver<ResolversTypes['suckerGroupPage'], ParentType, ContextType, Partial<QuerySuckerGroupsArgs>>;
  useAllowanceEvent?: Resolver<Maybe<ResolversTypes['useAllowanceEvent']>, ParentType, ContextType, RequireFields<QueryUseAllowanceEventArgs, 'id'>>;
  useAllowanceEvents?: Resolver<ResolversTypes['useAllowanceEventPage'], ParentType, ContextType, Partial<QueryUseAllowanceEventsArgs>>;
  wallet?: Resolver<Maybe<ResolversTypes['wallet']>, ParentType, ContextType, RequireFields<QueryWalletArgs, 'address'>>;
  wallets?: Resolver<ResolversTypes['walletPage'], ParentType, ContextType, Partial<QueryWalletsArgs>>;
};

export type _SuckerResolvers<ContextType = any, ParentType extends ResolversParentTypes['_sucker'] = ResolversParentTypes['_sucker']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _SuckerPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['_suckerPage'] = ResolversParentTypes['_suckerPage']> = {
  items?: Resolver<Array<ResolversTypes['_sucker']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['activityEvent'] = ResolversParentTypes['activityEvent']> = {
  addToBalanceEvent?: Resolver<Maybe<ResolversTypes['addToBalanceEvent']>, ParentType, ContextType>;
  autoIssueEvent?: Resolver<Maybe<ResolversTypes['autoIssueEvent']>, ParentType, ContextType>;
  borrowLoanEvent?: Resolver<Maybe<ResolversTypes['borrowLoanEvent']>, ParentType, ContextType>;
  burnEvent?: Resolver<Maybe<ResolversTypes['burnEvent']>, ParentType, ContextType>;
  cashOutTokensEvent?: Resolver<Maybe<ResolversTypes['cashOutTokensEvent']>, ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  decorateBannyEvent?: Resolver<Maybe<ResolversTypes['decorateBannyEvent']>, ParentType, ContextType>;
  deployErc20Event?: Resolver<Maybe<ResolversTypes['deployErc20Event']>, ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  liquidateLoanEvent?: Resolver<Maybe<ResolversTypes['liquidateLoanEvent']>, ParentType, ContextType>;
  mintNftEvent?: Resolver<Maybe<ResolversTypes['mintNftEvent']>, ParentType, ContextType>;
  mintTokensEvent?: Resolver<Maybe<ResolversTypes['mintTokensEvent']>, ParentType, ContextType>;
  payEvent?: Resolver<Maybe<ResolversTypes['payEvent']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectCreateEvent?: Resolver<Maybe<ResolversTypes['projectCreateEvent']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reallocateLoanEvent?: Resolver<Maybe<ResolversTypes['reallocateLoanEvent']>, ParentType, ContextType>;
  repayLoanEvent?: Resolver<Maybe<ResolversTypes['repayLoanEvent']>, ParentType, ContextType>;
  sendPayoutToSplitEvent?: Resolver<Maybe<ResolversTypes['sendPayoutToSplitEvent']>, ParentType, ContextType>;
  sendPayoutsEvent?: Resolver<Maybe<ResolversTypes['sendPayoutsEvent']>, ParentType, ContextType>;
  sendReservedTokensToSplitEvent?: Resolver<Maybe<ResolversTypes['sendReservedTokensToSplitEvent']>, ParentType, ContextType>;
  sendReservedTokensToSplitsEvent?: Resolver<Maybe<ResolversTypes['sendReservedTokensToSplitsEvent']>, ParentType, ContextType>;
  suckerGroup?: Resolver<Maybe<ResolversTypes['suckerGroup']>, ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['activityEventType']>, ParentType, ContextType>;
  useAllowanceEvent?: Resolver<Maybe<ResolversTypes['useAllowanceEvent']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['activityEventPage'] = ResolversParentTypes['activityEventPage']> = {
  items?: Resolver<Array<ResolversTypes['activityEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddToBalanceEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['addToBalanceEvent'] = ResolversParentTypes['addToBalanceEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returnedFees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddToBalanceEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['addToBalanceEventPage'] = ResolversParentTypes['addToBalanceEventPage']> = {
  items?: Resolver<Array<ResolversTypes['addToBalanceEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AutoIssueEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['autoIssueEvent'] = ResolversParentTypes['autoIssueEvent']> = {
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stageId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AutoIssueEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['autoIssueEventPage'] = ResolversParentTypes['autoIssueEventPage']> = {
  items?: Resolver<Array<ResolversTypes['autoIssueEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BorrowLoanEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['borrowLoanEvent'] = ResolversParentTypes['borrowLoanEvent']> = {
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  borrowAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collateral?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  prepaidDuration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  prepaidFeePercent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sourceFeeAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  terminal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BorrowLoanEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['borrowLoanEventPage'] = ResolversParentTypes['borrowLoanEventPage']> = {
  items?: Resolver<Array<ResolversTypes['borrowLoanEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BurnEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['burnEvent'] = ResolversParentTypes['burnEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creditAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  erc20Amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BurnEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['burnEventPage'] = ResolversParentTypes['burnEventPage']> = {
  items?: Resolver<Array<ResolversTypes['burnEvent']>, ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reclaimAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reclaimAmountUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rulesetCycleNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rulesetId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  outfitIds?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenUriMetadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DecorateBannyEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['decorateBannyEventPage'] = ResolversParentTypes['decorateBannyEventPage']> = {
  items?: Resolver<Array<ResolversTypes['decorateBannyEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeployErc20EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['deployErc20Event'] = ResolversParentTypes['deployErc20Event']> = {
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeployErc20EventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['deployErc20EventPage'] = ResolversParentTypes['deployErc20EventPage']> = {
  items?: Resolver<Array<ResolversTypes['deployErc20Event']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiquidateLoanEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['liquidateLoanEvent'] = ResolversParentTypes['liquidateLoanEvent']> = {
  borrowAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collateral?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiquidateLoanEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['liquidateLoanEventPage'] = ResolversParentTypes['liquidateLoanEventPage']> = {
  items?: Resolver<Array<ResolversTypes['liquidateLoanEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoanResolvers<ContextType = any, ParentType extends ResolversParentTypes['loan'] = ResolversParentTypes['loan']> = {
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  borrowAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collateral?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prepaidDuration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  prepaidFeePercent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sourceFeeAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  terminal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoanPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['loanPage'] = ResolversParentTypes['loanPage']> = {
  items?: Resolver<Array<ResolversTypes['loan']>, ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nft?: Resolver<Maybe<ResolversTypes['nft']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tier?: Resolver<Maybe<ResolversTypes['nftTier']>, ParentType, ContextType>;
  tierId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalAmountPaid?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reservedPercent?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  customized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  customizedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hook?: Resolver<Maybe<ResolversTypes['nftHook']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  mintTx?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['participant']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tier?: Resolver<Maybe<ResolversTypes['nftTier']>, ParentType, ContextType>;
  tierId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wallet?: Resolver<Maybe<ResolversTypes['wallet']>, ParentType, ContextType>;
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
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  allowOwnerMint?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cannotBeRemoved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  category?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  encodedIpfsUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hook?: Resolver<Maybe<ResolversTypes['nftHook']>, ParentType, ContextType>;
  initialSupply?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
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
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  votingUnits?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftTierPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['nftTierPage'] = ResolversParentTypes['nftTierPage']> = {
  items?: Resolver<Array<ResolversTypes['nftTier']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['participant'] = ResolversParentTypes['participant']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creditBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  erc20Balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  isRevnet?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastPaidTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nfts?: Resolver<Maybe<ResolversTypes['nftPage']>, ParentType, ContextType, Partial<ParticipantNftsArgs>>;
  paymentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  suckerGroup?: Resolver<Maybe<ResolversTypes['suckerGroup']>, ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  wallet?: Resolver<Maybe<ResolversTypes['wallet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParticipantPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['participantPage'] = ResolversParentTypes['participantPage']> = {
  items?: Resolver<Array<ResolversTypes['participant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParticipantSnapshotResolvers<ContextType = any, ParentType extends ResolversParentTypes['participantSnapshot'] = ResolversParentTypes['participantSnapshot']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creditBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  erc20Balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParticipantSnapshotPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['participantSnapshotPage'] = ResolversParentTypes['participantSnapshotPage']> = {
  items?: Resolver<Array<ResolversTypes['participantSnapshot']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['payEvent'] = ResolversParentTypes['payEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  distributionFromProjectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  feeFromProject?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newlyIssuedTokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PayEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['payEventPage'] = ResolversParentTypes['payEventPage']> = {
  items?: Resolver<Array<ResolversTypes['payEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionHolderResolvers<ContextType = any, ParentType extends ResolversParentTypes['permissionHolder'] = ResolversParentTypes['permissionHolder']> = {
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionHolderPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['permissionHolderPage'] = ResolversParentTypes['permissionHolderPage']> = {
  items?: Resolver<Array<ResolversTypes['permissionHolder']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['project'] = ResolversParentTypes['project']> = {
  activityEvents?: Resolver<Maybe<ResolversTypes['activityEventPage']>, ParentType, ContextType, Partial<ProjectActivityEventsArgs>>;
  addToBalanceEvents?: Resolver<Maybe<ResolversTypes['addToBalanceEventPage']>, ParentType, ContextType, Partial<ProjectAddToBalanceEventsArgs>>;
  autoIssueEvents?: Resolver<Maybe<ResolversTypes['autoIssueEventPage']>, ParentType, ContextType, Partial<ProjectAutoIssueEventsArgs>>;
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  borrowLoanEvents?: Resolver<Maybe<ResolversTypes['borrowLoanEventPage']>, ParentType, ContextType, Partial<ProjectBorrowLoanEventsArgs>>;
  burnEvents?: Resolver<Maybe<ResolversTypes['burnEventPage']>, ParentType, ContextType, Partial<ProjectBurnEventsArgs>>;
  cashOutTokensEvents?: Resolver<Maybe<ResolversTypes['cashOutTokensEventPage']>, ParentType, ContextType, Partial<ProjectCashOutTokensEventsArgs>>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributorsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  coverImageUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdWithinTrendingWindow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  decimals?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deployErc20Events?: Resolver<Maybe<ResolversTypes['deployErc20EventPage']>, ParentType, ContextType, Partial<ProjectDeployErc20EventsArgs>>;
  deployer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discord?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  handle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  infoUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isRevnet?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  liquidateLoanEvents?: Resolver<Maybe<ResolversTypes['liquidateLoanEventPage']>, ParentType, ContextType, Partial<ProjectLiquidateLoanEventsArgs>>;
  logoUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  metadataUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mintNftEvents?: Resolver<Maybe<ResolversTypes['mintNftEventPage']>, ParentType, ContextType, Partial<ProjectMintNftEventsArgs>>;
  mintTokensEvents?: Resolver<Maybe<ResolversTypes['mintTokensEventPage']>, ParentType, ContextType, Partial<ProjectMintTokensEventsArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nftHooks?: Resolver<Maybe<ResolversTypes['nftHookPage']>, ParentType, ContextType, Partial<ProjectNftHooksArgs>>;
  nfts?: Resolver<Maybe<ResolversTypes['nftPage']>, ParentType, ContextType, Partial<ProjectNftsArgs>>;
  nftsMintedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participants?: Resolver<Maybe<ResolversTypes['participantPage']>, ParentType, ContextType, Partial<ProjectParticipantsArgs>>;
  payDisclosure?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payEvents?: Resolver<Maybe<ResolversTypes['payEventPage']>, ParentType, ContextType, Partial<ProjectPayEventsArgs>>;
  paymentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  permissionHolders?: Resolver<Maybe<ResolversTypes['permissionHolderPage']>, ParentType, ContextType, Partial<ProjectPermissionHoldersArgs>>;
  projectCreateEvents?: Resolver<Maybe<ResolversTypes['projectCreateEventPage']>, ParentType, ContextType, Partial<ProjectProjectCreateEventsArgs>>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projectMoments?: Resolver<Maybe<ResolversTypes['projectMomentPage']>, ParentType, ContextType, Partial<ProjectProjectMomentsArgs>>;
  projectTagline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reallocateLoanEvents?: Resolver<Maybe<ResolversTypes['reallocateLoanEventPage']>, ParentType, ContextType, Partial<ProjectReallocateLoanEventsArgs>>;
  redeemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  redeemVolume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  redeemVolumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  repayLoanEvents?: Resolver<Maybe<ResolversTypes['repayLoanEventPage']>, ParentType, ContextType, Partial<ProjectRepayLoanEventsArgs>>;
  sendPayoutToSplitEvents?: Resolver<Maybe<ResolversTypes['sendPayoutToSplitEventPage']>, ParentType, ContextType, Partial<ProjectSendPayoutToSplitEventsArgs>>;
  sendPayoutsEvents?: Resolver<Maybe<ResolversTypes['sendPayoutsEventPage']>, ParentType, ContextType, Partial<ProjectSendPayoutsEventsArgs>>;
  sendReservedTokensToSplitEvents?: Resolver<Maybe<ResolversTypes['sendReservedTokensToSplitEventPage']>, ParentType, ContextType, Partial<ProjectSendReservedTokensToSplitEventsArgs>>;
  sendReservedTokensToSplitsEvents?: Resolver<Maybe<ResolversTypes['sendReservedTokensToSplitsEventPage']>, ParentType, ContextType, Partial<ProjectSendReservedTokensToSplitsEventsArgs>>;
  storeAutoIssuanceAmountEvent?: Resolver<Maybe<ResolversTypes['storeAutoIssuanceAmountEventPage']>, ParentType, ContextType, Partial<ProjectStoreAutoIssuanceAmountEventArgs>>;
  suckerGroup?: Resolver<Maybe<ResolversTypes['suckerGroup']>, ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  telegram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokens?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  trendingPaymentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trendingScore?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  trendingVolume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  trendingVolumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  useAllowanceEvents?: Resolver<Maybe<ResolversTypes['useAllowanceEventPage']>, ParentType, ContextType, Partial<ProjectUseAllowanceEventsArgs>>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectCreateEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['projectCreateEvent'] = ResolversParentTypes['projectCreateEvent']> = {
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectCreateEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['projectCreateEventPage'] = ResolversParentTypes['projectCreateEventPage']> = {
  items?: Resolver<Array<ResolversTypes['projectCreateEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectMomentResolvers<ContextType = any, ParentType extends ResolversParentTypes['projectMoment'] = ResolversParentTypes['projectMoment']> = {
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trendingScore?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectMomentPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['projectMomentPage'] = ResolversParentTypes['projectMomentPage']> = {
  items?: Resolver<Array<ResolversTypes['projectMoment']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['projectPage'] = ResolversParentTypes['projectPage']> = {
  items?: Resolver<Array<ResolversTypes['project']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReallocateLoanEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['reallocateLoanEvent'] = ResolversParentTypes['reallocateLoanEvent']> = {
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  loanId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reallocatedLoanId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  removedCollateralCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReallocateLoanEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['reallocateLoanEventPage'] = ResolversParentTypes['reallocateLoanEventPage']> = {
  items?: Resolver<Array<ResolversTypes['reallocateLoanEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RepayLoanEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['repayLoanEvent'] = ResolversParentTypes['repayLoanEvent']> = {
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collateralCountToReturn?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  loanId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  paidOffLoanId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  repayBorrowAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RepayLoanEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['repayLoanEventPage'] = ResolversParentTypes['repayLoanEventPage']> = {
  items?: Resolver<Array<ResolversTypes['repayLoanEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendPayoutToSplitEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['sendPayoutToSplitEvent'] = ResolversParentTypes['sendPayoutToSplitEvent']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  hook?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lockedUntil?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  netAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  percent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  preferAddToBalance?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  splitProjectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  amountPaidOutUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  netLeftoverPayoutAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetCycleNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lockedUntil?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  percent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  preferAddToBalance?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  splitProjectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  leftoverAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetCycleNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendReservedTokensToSplitsEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['sendReservedTokensToSplitsEventPage'] = ResolversParentTypes['sendReservedTokensToSplitsEventPage']> = {
  items?: Resolver<Array<ResolversTypes['sendReservedTokensToSplitsEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreAutoIssuanceAmountEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['storeAutoIssuanceAmountEvent'] = ResolversParentTypes['storeAutoIssuanceAmountEvent']> = {
  beneficiary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stageId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreAutoIssuanceAmountEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['storeAutoIssuanceAmountEventPage'] = ResolversParentTypes['storeAutoIssuanceAmountEventPage']> = {
  items?: Resolver<Array<ResolversTypes['storeAutoIssuanceAmountEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuckerGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['suckerGroup'] = ResolversParentTypes['suckerGroup']> = {
  addresses?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  contributorsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nftsMintedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  paymentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projects?: Resolver<Maybe<ResolversTypes['projectPage']>, ParentType, ContextType, Partial<SuckerGroupProjectsArgs>>;
  redeemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  redeemVolume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  redeemVolumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  trendingPaymentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trendingScore?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  trendingVolume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuckerGroupMomentResolvers<ContextType = any, ParentType extends ResolversParentTypes['suckerGroupMoment'] = ResolversParentTypes['suckerGroupMoment']> = {
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contributorsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nftsMintedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  paymentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  redeemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  redeemVolume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  redeemVolumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  trendingPaymentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trendingScore?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  trendingVolume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuckerGroupMomentPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['suckerGroupMomentPage'] = ResolversParentTypes['suckerGroupMomentPage']> = {
  items?: Resolver<Array<ResolversTypes['suckerGroupMoment']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuckerGroupPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['suckerGroupPage'] = ResolversParentTypes['suckerGroupPage']> = {
  items?: Resolver<Array<ResolversTypes['suckerGroup']>, ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  netAmountPaidOut?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['project']>, ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetCycleNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rulesetId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  suckerGroupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UseAllowanceEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['useAllowanceEventPage'] = ResolversParentTypes['useAllowanceEventPage']> = {
  items?: Resolver<Array<ResolversTypes['useAllowanceEvent']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletResolvers<ContextType = any, ParentType extends ResolversParentTypes['wallet'] = ResolversParentTypes['wallet']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastPaidTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nfts?: Resolver<Maybe<ResolversTypes['nftPage']>, ParentType, ContextType, Partial<WalletNftsArgs>>;
  participants?: Resolver<Maybe<ResolversTypes['participantPage']>, ParentType, ContextType, Partial<WalletParticipantsArgs>>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['walletPage'] = ResolversParentTypes['walletPage']> = {
  items?: Resolver<Array<ResolversTypes['wallet']>, ParentType, ContextType>;
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
  _sucker?: _SuckerResolvers<ContextType>;
  _suckerPage?: _SuckerPageResolvers<ContextType>;
  activityEvent?: ActivityEventResolvers<ContextType>;
  activityEventPage?: ActivityEventPageResolvers<ContextType>;
  addToBalanceEvent?: AddToBalanceEventResolvers<ContextType>;
  addToBalanceEventPage?: AddToBalanceEventPageResolvers<ContextType>;
  autoIssueEvent?: AutoIssueEventResolvers<ContextType>;
  autoIssueEventPage?: AutoIssueEventPageResolvers<ContextType>;
  borrowLoanEvent?: BorrowLoanEventResolvers<ContextType>;
  borrowLoanEventPage?: BorrowLoanEventPageResolvers<ContextType>;
  burnEvent?: BurnEventResolvers<ContextType>;
  burnEventPage?: BurnEventPageResolvers<ContextType>;
  cashOutTokensEvent?: CashOutTokensEventResolvers<ContextType>;
  cashOutTokensEventPage?: CashOutTokensEventPageResolvers<ContextType>;
  decorateBannyEvent?: DecorateBannyEventResolvers<ContextType>;
  decorateBannyEventPage?: DecorateBannyEventPageResolvers<ContextType>;
  deployErc20Event?: DeployErc20EventResolvers<ContextType>;
  deployErc20EventPage?: DeployErc20EventPageResolvers<ContextType>;
  liquidateLoanEvent?: LiquidateLoanEventResolvers<ContextType>;
  liquidateLoanEventPage?: LiquidateLoanEventPageResolvers<ContextType>;
  loan?: LoanResolvers<ContextType>;
  loanPage?: LoanPageResolvers<ContextType>;
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
  participant?: ParticipantResolvers<ContextType>;
  participantPage?: ParticipantPageResolvers<ContextType>;
  participantSnapshot?: ParticipantSnapshotResolvers<ContextType>;
  participantSnapshotPage?: ParticipantSnapshotPageResolvers<ContextType>;
  payEvent?: PayEventResolvers<ContextType>;
  payEventPage?: PayEventPageResolvers<ContextType>;
  permissionHolder?: PermissionHolderResolvers<ContextType>;
  permissionHolderPage?: PermissionHolderPageResolvers<ContextType>;
  project?: ProjectResolvers<ContextType>;
  projectCreateEvent?: ProjectCreateEventResolvers<ContextType>;
  projectCreateEventPage?: ProjectCreateEventPageResolvers<ContextType>;
  projectMoment?: ProjectMomentResolvers<ContextType>;
  projectMomentPage?: ProjectMomentPageResolvers<ContextType>;
  projectPage?: ProjectPageResolvers<ContextType>;
  reallocateLoanEvent?: ReallocateLoanEventResolvers<ContextType>;
  reallocateLoanEventPage?: ReallocateLoanEventPageResolvers<ContextType>;
  repayLoanEvent?: RepayLoanEventResolvers<ContextType>;
  repayLoanEventPage?: RepayLoanEventPageResolvers<ContextType>;
  sendPayoutToSplitEvent?: SendPayoutToSplitEventResolvers<ContextType>;
  sendPayoutToSplitEventPage?: SendPayoutToSplitEventPageResolvers<ContextType>;
  sendPayoutsEvent?: SendPayoutsEventResolvers<ContextType>;
  sendPayoutsEventPage?: SendPayoutsEventPageResolvers<ContextType>;
  sendReservedTokensToSplitEvent?: SendReservedTokensToSplitEventResolvers<ContextType>;
  sendReservedTokensToSplitEventPage?: SendReservedTokensToSplitEventPageResolvers<ContextType>;
  sendReservedTokensToSplitsEvent?: SendReservedTokensToSplitsEventResolvers<ContextType>;
  sendReservedTokensToSplitsEventPage?: SendReservedTokensToSplitsEventPageResolvers<ContextType>;
  storeAutoIssuanceAmountEvent?: StoreAutoIssuanceAmountEventResolvers<ContextType>;
  storeAutoIssuanceAmountEventPage?: StoreAutoIssuanceAmountEventPageResolvers<ContextType>;
  suckerGroup?: SuckerGroupResolvers<ContextType>;
  suckerGroupMoment?: SuckerGroupMomentResolvers<ContextType>;
  suckerGroupMomentPage?: SuckerGroupMomentPageResolvers<ContextType>;
  suckerGroupPage?: SuckerGroupPageResolvers<ContextType>;
  useAllowanceEvent?: UseAllowanceEventResolvers<ContextType>;
  useAllowanceEventPage?: UseAllowanceEventPageResolvers<ContextType>;
  wallet?: WalletResolvers<ContextType>;
  walletPage?: WalletPageResolvers<ContextType>;
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
  reserveFrequency
  category
  chainId
  metadata
}
    `;
export const ActivityEventsDocument = gql`
    query ActivityEvents($where: activityEventFilter, $orderBy: String, $orderDirection: String, $limit: Int, $after: String) {
  activityEvents(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    limit: $limit
    after: $after
  ) {
    pageInfo {
      endCursor
      hasNextPage
    }
    items {
      timestamp
      txHash
      chainId
      from
      payEvent {
        timestamp
        txHash
        caller
        chainId
        beneficiary
        amount
        memo
        newlyIssuedTokenCount
      }
      decorateBannyEvent {
        timestamp
        txHash
        caller
        chainId
        bannyBodyId
        outfitIds
        backgroundId
        tokenUriMetadata
      }
    }
  }
}
    `;

/**
 * __useActivityEventsQuery__
 *
 * To run a query within a React component, call `useActivityEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityEventsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      limit: // value for 'limit'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useActivityEventsQuery(baseOptions?: Apollo.QueryHookOptions<ActivityEventsQuery, ActivityEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActivityEventsQuery, ActivityEventsQueryVariables>(ActivityEventsDocument, options);
      }
export function useActivityEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivityEventsQuery, ActivityEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActivityEventsQuery, ActivityEventsQueryVariables>(ActivityEventsDocument, options);
        }
export function useActivityEventsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ActivityEventsQuery, ActivityEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ActivityEventsQuery, ActivityEventsQueryVariables>(ActivityEventsDocument, options);
        }
export type ActivityEventsQueryHookResult = ReturnType<typeof useActivityEventsQuery>;
export type ActivityEventsLazyQueryHookResult = ReturnType<typeof useActivityEventsLazyQuery>;
export type ActivityEventsSuspenseQueryHookResult = ReturnType<typeof useActivityEventsSuspenseQuery>;
export type ActivityEventsQueryResult = Apollo.QueryResult<ActivityEventsQuery, ActivityEventsQueryVariables>;
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
export const MintNftEventsDocument = gql`
    query MintNftEvents($where: mintNftEventFilter) {
  mintNftEvents(where: $where) {
    items {
      tokenId
    }
  }
}
    `;

/**
 * __useMintNftEventsQuery__
 *
 * To run a query within a React component, call `useMintNftEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMintNftEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMintNftEventsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMintNftEventsQuery(baseOptions?: Apollo.QueryHookOptions<MintNftEventsQuery, MintNftEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MintNftEventsQuery, MintNftEventsQueryVariables>(MintNftEventsDocument, options);
      }
export function useMintNftEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MintNftEventsQuery, MintNftEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MintNftEventsQuery, MintNftEventsQueryVariables>(MintNftEventsDocument, options);
        }
export function useMintNftEventsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MintNftEventsQuery, MintNftEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MintNftEventsQuery, MintNftEventsQueryVariables>(MintNftEventsDocument, options);
        }
export type MintNftEventsQueryHookResult = ReturnType<typeof useMintNftEventsQuery>;
export type MintNftEventsLazyQueryHookResult = ReturnType<typeof useMintNftEventsLazyQuery>;
export type MintNftEventsSuspenseQueryHookResult = ReturnType<typeof useMintNftEventsSuspenseQuery>;
export type MintNftEventsQueryResult = Apollo.QueryResult<MintNftEventsQuery, MintNftEventsQueryVariables>;
export const NftDocument = gql`
    query NFT($tokenId: BigInt!, $chainId: Float!, $hook: String!) {
  nft(tokenId: $tokenId, chainId: $chainId, hook: $hook, version: 5) {
    chainId
    tokenId
    wallet {
      address
    }
    metadata
    category
    tierId
    createdAt
    customized
    customizedAt
    tier {
      ...TierData
    }
  }
}
    ${TierDataFragmentDoc}`;

/**
 * __useNftQuery__
 *
 * To run a query within a React component, call `useNftQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftQuery({
 *   variables: {
 *      tokenId: // value for 'tokenId'
 *      chainId: // value for 'chainId'
 *      hook: // value for 'hook'
 *   },
 * });
 */
export function useNftQuery(baseOptions: Apollo.QueryHookOptions<NftQuery, NftQueryVariables> & ({ variables: NftQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NftQuery, NftQueryVariables>(NftDocument, options);
      }
export function useNftLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftQuery, NftQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NftQuery, NftQueryVariables>(NftDocument, options);
        }
export function useNftSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<NftQuery, NftQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<NftQuery, NftQueryVariables>(NftDocument, options);
        }
export type NftQueryHookResult = ReturnType<typeof useNftQuery>;
export type NftLazyQueryHookResult = ReturnType<typeof useNftLazyQuery>;
export type NftSuspenseQueryHookResult = ReturnType<typeof useNftSuspenseQuery>;
export type NftQueryResult = Apollo.QueryResult<NftQuery, NftQueryVariables>;
export const NfTsDocument = gql`
    query NFTs($where: nftFilter, $orderBy: String, $orderDirection: String, $limit: Int, $after: String) {
  nfts(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    limit: $limit
    after: $after
  ) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    items {
      chainId
      tokenId
      wallet {
        address
      }
      metadata
      category
      tierId
      createdAt
      customized
      customizedAt
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
 *      limit: // value for 'limit'
 *      after: // value for 'after'
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
export const ProjectDocument = gql`
    query Project($chainId: Float!, $projectId: Float!) {
  project(chainId: $chainId, projectId: $projectId, version: 5) {
    suckerGroup {
      id
    }
  }
}
    `;

/**
 * __useProjectQuery__
 *
 * To run a query within a React component, call `useProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useProjectQuery(baseOptions: Apollo.QueryHookOptions<ProjectQuery, ProjectQueryVariables> & ({ variables: ProjectQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, options);
      }
export function useProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectQuery, ProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, options);
        }
export function useProjectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProjectQuery, ProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, options);
        }
export type ProjectQueryHookResult = ReturnType<typeof useProjectQuery>;
export type ProjectLazyQueryHookResult = ReturnType<typeof useProjectLazyQuery>;
export type ProjectSuspenseQueryHookResult = ReturnType<typeof useProjectSuspenseQuery>;
export type ProjectQueryResult = Apollo.QueryResult<ProjectQuery, ProjectQueryVariables>;