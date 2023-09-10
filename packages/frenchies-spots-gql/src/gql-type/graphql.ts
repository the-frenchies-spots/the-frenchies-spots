/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  deleted: Scalars['Boolean']['output'];
};

export type FavoriteEntity = {
  __typename?: 'FavoriteEntity';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  profile: ProfileEntity;
  profileId: Scalars['String']['output'];
  spot: SpotEntity;
  spotId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FavoriteInput = {
  favoriteId?: InputMaybe<Scalars['String']['input']>;
  spotId: Scalars['String']['input'];
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  loggedOut: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrUpdateRating: RatingResponse;
  deleteSpot: DeleteResponse;
  deleteTag: DeleteResponse;
  getNewTokens: NewTokensResponse;
  insertSpot: SpotEntity;
  insertTag: TagEntity;
  logout: LogoutResponse;
  signIn: SignResponse;
  signUp: SignResponse;
  toggleFavorite: ToggleFavoriteResponse;
  updateSpot: SpotEntity;
  updateTag: TagEntity;
};


export type MutationCreateOrUpdateRatingArgs = {
  ratingInput: RatingInput;
};


export type MutationDeleteSpotArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['String']['input'];
};


export type MutationInsertSpotArgs = {
  insertSpotInput: SpotInput;
};


export type MutationInsertTagArgs = {
  tagInsertInput: TagInsertInput;
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationToggleFavoriteArgs = {
  favoriteInput: FavoriteInput;
};


export type MutationUpdateSpotArgs = {
  updateSpotInput: SpotInput;
};


export type MutationUpdateTagArgs = {
  tagUpdateInput: TagUpdateInput;
};

export type NewTokensResponse = {
  __typename?: 'NewTokensResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type ProfileEntity = {
  __typename?: 'ProfileEntity';
  createdAt: Scalars['DateTime']['output'];
  favorites?: Maybe<Array<FavoriteEntity>>;
  gamePoint: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  photoUrl?: Maybe<Scalars['String']['output']>;
  pseudo: Scalars['String']['output'];
  ratings?: Maybe<Array<RatingEntity>>;
  spots?: Maybe<Array<SpotEntity>>;
  updatedAt: Scalars['DateTime']['output'];
  user: UserEntity;
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getLoginUser: UserEntity;
  spotByPk: SpotByIdResponse;
  spots: Array<SpotEntity>;
  spotsFavorite: Array<SpotEntity>;
  tagByPk: TagEntity;
  tags: Array<TagEntity>;
};


export type QuerySpotByPkArgs = {
  id: Scalars['String']['input'];
};


export type QuerySpotsArgs = {
  spotsInput: SpotsInput;
};


export type QueryTagByPkArgs = {
  id: Scalars['String']['input'];
};


export type QueryTagsArgs = {
  tagListInput: TagListInput;
};

export type RatingEntity = {
  __typename?: 'RatingEntity';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  profile: ProfileEntity;
  profileId: Scalars['String']['output'];
  rate: Scalars['Float']['output'];
  spot: SpotEntity;
  spotId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RatingInput = {
  rate: Scalars['Float']['input'];
  ratingId?: InputMaybe<Scalars['String']['input']>;
  spotId: Scalars['String']['input'];
};

export type RatingResponse = {
  __typename?: 'RatingResponse';
  avg: Scalars['Float']['output'];
  currentRating?: Maybe<RatingEntity>;
  maxVote: Scalars['Float']['output'];
};

export type SignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignResponse = {
  __typename?: 'SignResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: UserEntity;
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  pseudo: Scalars['String']['input'];
};

export type SpotByIdResponse = {
  __typename?: 'SpotByIdResponse';
  address: Scalars['String']['output'];
  averageRating: Scalars['Float']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  favorites?: Maybe<Array<FavoriteEntity>>;
  id: Scalars['String']['output'];
  isCanPark: Scalars['Boolean']['output'];
  isHidden: Scalars['Boolean']['output'];
  location?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  profile: ProfileEntity;
  profileId: Scalars['String']['output'];
  rating?: Maybe<RatingResponse>;
  ratings?: Maybe<Array<RatingEntity>>;
  region: Scalars['String']['output'];
  spotPicture?: Maybe<Array<SpotPictureEntity>>;
  tags?: Maybe<Array<TagOnSpotEntity>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type SpotEntity = {
  __typename?: 'SpotEntity';
  address: Scalars['String']['output'];
  averageRating: Scalars['Float']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  favorites?: Maybe<Array<FavoriteEntity>>;
  id: Scalars['String']['output'];
  isCanPark: Scalars['Boolean']['output'];
  isHidden: Scalars['Boolean']['output'];
  location?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  profile: ProfileEntity;
  profileId: Scalars['String']['output'];
  ratings?: Maybe<Array<RatingEntity>>;
  region: Scalars['String']['output'];
  spotPicture?: Maybe<Array<SpotPictureEntity>>;
  tags?: Maybe<Array<TagOnSpotEntity>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type SpotInput = {
  address: Scalars['String']['input'];
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isCanPark: Scalars['Boolean']['input'];
  isHidden: Scalars['Boolean']['input'];
  location?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  pictures?: InputMaybe<Array<SpotPictureInput>>;
  region: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SpotPictureEntity = {
  __typename?: 'SpotPictureEntity';
  createdAt: Scalars['DateTime']['output'];
  hostId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  spot: SpotEntity;
  spotId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type SpotPictureInput = {
  hostId: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type SpotsInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isCanPark?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  point?: InputMaybe<Scalars['JSON']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  tagListId?: InputMaybe<Array<Scalars['String']['input']>>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  category: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  spots?: Maybe<Array<SpotEntity>>;
  tagPictureUrl: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TagInsertInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tagPictureUrl?: InputMaybe<Scalars['String']['input']>;
};

export type TagListInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
};

export type TagOnSpotEntity = {
  __typename?: 'TagOnSpotEntity';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  spotId: Scalars['String']['output'];
  tag: TagEntity;
  tagId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TagUpdateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  tagPictureUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ToggleFavoriteResponse = {
  __typename?: 'ToggleFavoriteResponse';
  favoriteId?: Maybe<Scalars['String']['output']>;
  isFavorite: Scalars['Boolean']['output'];
};

export type UserEntity = {
  __typename?: 'UserEntity';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  hashedPassword: Scalars['String']['output'];
  hashedRefreshToken?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  profile?: Maybe<ProfileEntity>;
  role: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};
