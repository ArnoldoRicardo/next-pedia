import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  Dimension: any
  HexColor: any
  JSON: any
  Quality: any
}

/** Represents a binary file in a space. An asset can be any file type. */
export type IAsset = {
  __typename?: 'Asset'
  contentType?: Maybe<Scalars['String']>
  contentfulMetadata: IContentfulMetadata
  description?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Int']>
  linkedFrom?: Maybe<IAssetLinkingCollections>
  size?: Maybe<Scalars['Int']>
  sys: ISys
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>
  transform?: InputMaybe<IImageTransformOptions>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type IAssetCollection = {
  __typename?: 'AssetCollection'
  items: Array<Maybe<IAsset>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type IAssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<IAssetFilter>>>
  OR?: InputMaybe<Array<InputMaybe<IAssetFilter>>>
  contentType?: InputMaybe<Scalars['String']>
  contentType_contains?: InputMaybe<Scalars['String']>
  contentType_exists?: InputMaybe<Scalars['Boolean']>
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentType_not?: InputMaybe<Scalars['String']>
  contentType_not_contains?: InputMaybe<Scalars['String']>
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']>
  description_contains?: InputMaybe<Scalars['String']>
  description_exists?: InputMaybe<Scalars['Boolean']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  description_not?: InputMaybe<Scalars['String']>
  description_not_contains?: InputMaybe<Scalars['String']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fileName?: InputMaybe<Scalars['String']>
  fileName_contains?: InputMaybe<Scalars['String']>
  fileName_exists?: InputMaybe<Scalars['Boolean']>
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fileName_not?: InputMaybe<Scalars['String']>
  fileName_not_contains?: InputMaybe<Scalars['String']>
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  height?: InputMaybe<Scalars['Int']>
  height_exists?: InputMaybe<Scalars['Boolean']>
  height_gt?: InputMaybe<Scalars['Int']>
  height_gte?: InputMaybe<Scalars['Int']>
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  height_lt?: InputMaybe<Scalars['Int']>
  height_lte?: InputMaybe<Scalars['Int']>
  height_not?: InputMaybe<Scalars['Int']>
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  size?: InputMaybe<Scalars['Int']>
  size_exists?: InputMaybe<Scalars['Boolean']>
  size_gt?: InputMaybe<Scalars['Int']>
  size_gte?: InputMaybe<Scalars['Int']>
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  size_lt?: InputMaybe<Scalars['Int']>
  size_lte?: InputMaybe<Scalars['Int']>
  size_not?: InputMaybe<Scalars['Int']>
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  sys?: InputMaybe<ISysFilter>
  title?: InputMaybe<Scalars['String']>
  title_contains?: InputMaybe<Scalars['String']>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  url?: InputMaybe<Scalars['String']>
  url_contains?: InputMaybe<Scalars['String']>
  url_exists?: InputMaybe<Scalars['Boolean']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  url_not?: InputMaybe<Scalars['String']>
  url_not_contains?: InputMaybe<Scalars['String']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  width?: InputMaybe<Scalars['Int']>
  width_exists?: InputMaybe<Scalars['Boolean']>
  width_gt?: InputMaybe<Scalars['Int']>
  width_gte?: InputMaybe<Scalars['Int']>
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  width_lt?: InputMaybe<Scalars['Int']>
  width_lte?: InputMaybe<Scalars['Int']>
  width_not?: InputMaybe<Scalars['Int']>
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type IAssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  authorCollection?: Maybe<IAuthorCollection>
  categoryCollection?: Maybe<ICategoryCollection>
  entryCollection?: Maybe<IEntryCollection>
  plantCollection?: Maybe<IPlantCollection>
}

export type IAssetLinkingCollectionsAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type IAssetLinkingCollectionsCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type IAssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type IAssetLinkingCollectionsPlantCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum IAssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/author) */
export type IAuthor = IEntry & {
  __typename?: 'Author'
  biography?: Maybe<Scalars['String']>
  contentfulMetadata: IContentfulMetadata
  fullName?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<IAuthorLinkingCollections>
  linkedIn?: Maybe<Scalars['String']>
  photo?: Maybe<IAsset>
  sys: ISys
  twitter?: Maybe<Scalars['String']>
}

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/author) */
export type IAuthorBiographyArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/author) */
export type IAuthorFullNameArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/author) */
export type IAuthorHandleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/author) */
export type IAuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/author) */
export type IAuthorLinkedInArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/author) */
export type IAuthorPhotoArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/author) */
export type IAuthorTwitterArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type IAuthorCollection = {
  __typename?: 'AuthorCollection'
  items: Array<Maybe<IAuthor>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type IAuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<IAuthorFilter>>>
  OR?: InputMaybe<Array<InputMaybe<IAuthorFilter>>>
  biography?: InputMaybe<Scalars['String']>
  biography_contains?: InputMaybe<Scalars['String']>
  biography_exists?: InputMaybe<Scalars['Boolean']>
  biography_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  biography_not?: InputMaybe<Scalars['String']>
  biography_not_contains?: InputMaybe<Scalars['String']>
  biography_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>
  fullName?: InputMaybe<Scalars['String']>
  fullName_contains?: InputMaybe<Scalars['String']>
  fullName_exists?: InputMaybe<Scalars['Boolean']>
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fullName_not?: InputMaybe<Scalars['String']>
  fullName_not_contains?: InputMaybe<Scalars['String']>
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  handle?: InputMaybe<Scalars['String']>
  handle_contains?: InputMaybe<Scalars['String']>
  handle_exists?: InputMaybe<Scalars['Boolean']>
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  handle_not?: InputMaybe<Scalars['String']>
  handle_not_contains?: InputMaybe<Scalars['String']>
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  linkedIn?: InputMaybe<Scalars['String']>
  linkedIn_contains?: InputMaybe<Scalars['String']>
  linkedIn_exists?: InputMaybe<Scalars['Boolean']>
  linkedIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  linkedIn_not?: InputMaybe<Scalars['String']>
  linkedIn_not_contains?: InputMaybe<Scalars['String']>
  linkedIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  photo_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<ISysFilter>
  twitter?: InputMaybe<Scalars['String']>
  twitter_contains?: InputMaybe<Scalars['String']>
  twitter_exists?: InputMaybe<Scalars['Boolean']>
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  twitter_not?: InputMaybe<Scalars['String']>
  twitter_not_contains?: InputMaybe<Scalars['String']>
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type IAuthorLinkingCollections = {
  __typename?: 'AuthorLinkingCollections'
  entryCollection?: Maybe<IEntryCollection>
  plantCollection?: Maybe<IPlantCollection>
}

export type IAuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type IAuthorLinkingCollectionsPlantCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum IAuthorOrder {
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  LinkedInAsc = 'linkedIn_ASC',
  LinkedInDesc = 'linkedIn_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/category) */
export type ICategory = IEntry & {
  __typename?: 'Category'
  categoryDescription?: Maybe<Scalars['String']>
  contentfulMetadata: IContentfulMetadata
  icon?: Maybe<IAsset>
  linkedFrom?: Maybe<ICategoryLinkingCollections>
  slug?: Maybe<Scalars['String']>
  sys: ISys
  title?: Maybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/category) */
export type ICategoryCategoryDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/category) */
export type ICategoryIconArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/category) */
export type ICategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/category) */
export type ICategorySlugArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/category) */
export type ICategoryTitleArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type ICategoryCollection = {
  __typename?: 'CategoryCollection'
  items: Array<Maybe<ICategory>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type ICategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<ICategoryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ICategoryFilter>>>
  categoryDescription?: InputMaybe<Scalars['String']>
  categoryDescription_contains?: InputMaybe<Scalars['String']>
  categoryDescription_exists?: InputMaybe<Scalars['Boolean']>
  categoryDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  categoryDescription_not?: InputMaybe<Scalars['String']>
  categoryDescription_not_contains?: InputMaybe<Scalars['String']>
  categoryDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>
  icon_exists?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<ISysFilter>
  title?: InputMaybe<Scalars['String']>
  title_contains?: InputMaybe<Scalars['String']>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ICategoryLinkingCollections = {
  __typename?: 'CategoryLinkingCollections'
  entryCollection?: Maybe<IEntryCollection>
  plantCollection?: Maybe<IPlantCollection>
}

export type ICategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export type ICategoryLinkingCollectionsPlantCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum ICategoryOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type IContentfulMetadata = {
  __typename?: 'ContentfulMetadata'
  tags: Array<Maybe<IContentfulTag>>
}

export type IContentfulMetadataFilter = {
  tags?: InputMaybe<IContentfulMetadataTagsFilter>
  tags_exists?: InputMaybe<Scalars['Boolean']>
}

export type IContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type IContentfulTag = {
  __typename?: 'ContentfulTag'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type IEntry = {
  contentfulMetadata: IContentfulMetadata
  sys: ISys
}

export type IEntryCollection = {
  __typename?: 'EntryCollection'
  items: Array<Maybe<IEntry>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type IEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<IEntryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<IEntryFilter>>>
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>
  sys?: InputMaybe<ISysFilter>
}

export enum IEntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum IImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum IImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum IImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type IImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<IImageFormat>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<IImageResizeFocus>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<IImageResizeStrategy>
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>
}

/** [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/plant) */
export type IPlant = IEntry & {
  __typename?: 'Plant'
  author?: Maybe<IAuthor>
  category?: Maybe<ICategory>
  contentfulMetadata: IContentfulMetadata
  description?: Maybe<IPlantDescription>
  image?: Maybe<IAsset>
  linkedFrom?: Maybe<IPlantLinkingCollections>
  plantName?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  sys: ISys
}

/** [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/plant) */
export type IPlantAuthorArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/plant) */
export type IPlantCategoryArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/plant) */
export type IPlantDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/plant) */
export type IPlantImageArgs = {
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

/** [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/plant) */
export type IPlantLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/** [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/plant) */
export type IPlantPlantNameArgs = {
  locale?: InputMaybe<Scalars['String']>
}

/** [See type definition](https://app.contentful.com/spaces/dfb3pu0qe1ob/content_types/plant) */
export type IPlantSlugArgs = {
  locale?: InputMaybe<Scalars['String']>
}

export type IPlantCollection = {
  __typename?: 'PlantCollection'
  items: Array<Maybe<IPlant>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type IPlantDescription = {
  __typename?: 'PlantDescription'
  json: Scalars['JSON']
  links: IPlantDescriptionLinks
}

export type IPlantDescriptionAssets = {
  __typename?: 'PlantDescriptionAssets'
  block: Array<Maybe<IAsset>>
  hyperlink: Array<Maybe<IAsset>>
}

export type IPlantDescriptionEntries = {
  __typename?: 'PlantDescriptionEntries'
  block: Array<Maybe<IEntry>>
  hyperlink: Array<Maybe<IEntry>>
  inline: Array<Maybe<IEntry>>
}

export type IPlantDescriptionLinks = {
  __typename?: 'PlantDescriptionLinks'
  assets: IPlantDescriptionAssets
  entries: IPlantDescriptionEntries
}

export type IPlantFilter = {
  AND?: InputMaybe<Array<InputMaybe<IPlantFilter>>>
  OR?: InputMaybe<Array<InputMaybe<IPlantFilter>>>
  author?: InputMaybe<ICfAuthorNestedFilter>
  author_exists?: InputMaybe<Scalars['Boolean']>
  category?: InputMaybe<ICfCategoryNestedFilter>
  category_exists?: InputMaybe<Scalars['Boolean']>
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>
  description_contains?: InputMaybe<Scalars['String']>
  description_exists?: InputMaybe<Scalars['Boolean']>
  description_not_contains?: InputMaybe<Scalars['String']>
  image_exists?: InputMaybe<Scalars['Boolean']>
  plantName?: InputMaybe<Scalars['String']>
  plantName_contains?: InputMaybe<Scalars['String']>
  plantName_exists?: InputMaybe<Scalars['Boolean']>
  plantName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  plantName_not?: InputMaybe<Scalars['String']>
  plantName_not_contains?: InputMaybe<Scalars['String']>
  plantName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug?: InputMaybe<Scalars['String']>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<ISysFilter>
}

export type IPlantLinkingCollections = {
  __typename?: 'PlantLinkingCollections'
  entryCollection?: Maybe<IEntryCollection>
}

export type IPlantLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
}

export enum IPlantOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type IQuery = {
  __typename?: 'Query'
  asset?: Maybe<IAsset>
  assetCollection?: Maybe<IAssetCollection>
  author?: Maybe<IAuthor>
  authorCollection?: Maybe<IAuthorCollection>
  category?: Maybe<ICategory>
  categoryCollection?: Maybe<ICategoryCollection>
  entryCollection?: Maybe<IEntryCollection>
  plant?: Maybe<IPlant>
  plantCollection?: Maybe<IPlantCollection>
}

export type IQueryAssetArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type IQueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<IAssetOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<IAssetFilter>
}

export type IQueryAuthorArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type IQueryAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<IAuthorOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<IAuthorFilter>
}

export type IQueryCategoryArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type IQueryCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<ICategoryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ICategoryFilter>
}

export type IQueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<IEntryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<IEntryFilter>
}

export type IQueryPlantArgs = {
  id: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  preview?: InputMaybe<Scalars['Boolean']>
}

export type IQueryPlantCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Array<InputMaybe<IPlantOrder>>>
  preview?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<IPlantFilter>
}

export type ISys = {
  __typename?: 'Sys'
  environmentId: Scalars['String']
  firstPublishedAt?: Maybe<Scalars['DateTime']>
  id: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedVersion?: Maybe<Scalars['Int']>
  spaceId: Scalars['String']
}

export type ISysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  id?: InputMaybe<Scalars['String']>
  id_contains?: InputMaybe<Scalars['String']>
  id_exists?: InputMaybe<Scalars['Boolean']>
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  id_not?: InputMaybe<Scalars['String']>
  id_not_contains?: InputMaybe<Scalars['String']>
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedVersion?: InputMaybe<Scalars['Float']>
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>
  publishedVersion_gt?: InputMaybe<Scalars['Float']>
  publishedVersion_gte?: InputMaybe<Scalars['Float']>
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  publishedVersion_lt?: InputMaybe<Scalars['Float']>
  publishedVersion_lte?: InputMaybe<Scalars['Float']>
  publishedVersion_not?: InputMaybe<Scalars['Float']>
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

export type ICfAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ICfAuthorNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ICfAuthorNestedFilter>>>
  biography?: InputMaybe<Scalars['String']>
  biography_contains?: InputMaybe<Scalars['String']>
  biography_exists?: InputMaybe<Scalars['Boolean']>
  biography_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  biography_not?: InputMaybe<Scalars['String']>
  biography_not_contains?: InputMaybe<Scalars['String']>
  biography_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>
  fullName?: InputMaybe<Scalars['String']>
  fullName_contains?: InputMaybe<Scalars['String']>
  fullName_exists?: InputMaybe<Scalars['Boolean']>
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fullName_not?: InputMaybe<Scalars['String']>
  fullName_not_contains?: InputMaybe<Scalars['String']>
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  handle?: InputMaybe<Scalars['String']>
  handle_contains?: InputMaybe<Scalars['String']>
  handle_exists?: InputMaybe<Scalars['Boolean']>
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  handle_not?: InputMaybe<Scalars['String']>
  handle_not_contains?: InputMaybe<Scalars['String']>
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  linkedIn?: InputMaybe<Scalars['String']>
  linkedIn_contains?: InputMaybe<Scalars['String']>
  linkedIn_exists?: InputMaybe<Scalars['Boolean']>
  linkedIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  linkedIn_not?: InputMaybe<Scalars['String']>
  linkedIn_not_contains?: InputMaybe<Scalars['String']>
  linkedIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  photo_exists?: InputMaybe<Scalars['Boolean']>
  sys?: InputMaybe<ISysFilter>
  twitter?: InputMaybe<Scalars['String']>
  twitter_contains?: InputMaybe<Scalars['String']>
  twitter_exists?: InputMaybe<Scalars['Boolean']>
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  twitter_not?: InputMaybe<Scalars['String']>
  twitter_not_contains?: InputMaybe<Scalars['String']>
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ICfCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ICfCategoryNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ICfCategoryNestedFilter>>>
  categoryDescription?: InputMaybe<Scalars['String']>
  categoryDescription_contains?: InputMaybe<Scalars['String']>
  categoryDescription_exists?: InputMaybe<Scalars['Boolean']>
  categoryDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  categoryDescription_not?: InputMaybe<Scalars['String']>
  categoryDescription_not_contains?: InputMaybe<Scalars['String']>
  categoryDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>
  icon_exists?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_exists?: InputMaybe<Scalars['Boolean']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  slug_not?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  sys?: InputMaybe<ISysFilter>
  title?: InputMaybe<Scalars['String']>
  title_contains?: InputMaybe<Scalars['String']>
  title_exists?: InputMaybe<Scalars['Boolean']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  title_not?: InputMaybe<Scalars['String']>
  title_not_contains?: InputMaybe<Scalars['String']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type IAssetFieldsFragment = {
  __typename?: 'Asset'
  title?: string | null
  url?: string | null
  width?: number | null
  height?: number | null
}

export type IAuthorFieldsFragment = {
  __typename?: 'Author'
  fullName?: string | null
  handle?: string | null
  biography?: string | null
  twitter?: string | null
  linkedIn?: string | null
  sys: { __typename?: 'Sys'; id: string }
  photo?: {
    __typename?: 'Asset'
    title?: string | null
    url?: string | null
    width?: number | null
    height?: number | null
  } | null
}

export type ICategoryFieldsFragment = {
  __typename?: 'Category'
  slug?: string | null
  title?: string | null
  categoryDescription?: string | null
  sys: { __typename?: 'Sys'; id: string }
  icon?: {
    __typename?: 'Asset'
    title?: string | null
    url?: string | null
    width?: number | null
    height?: number | null
  } | null
}

export type IPlantFieldsFragment = {
  __typename?: 'Plant'
  slug?: string | null
  plantName?: string | null
  sys: { __typename?: 'Sys'; id: string }
  image?: {
    __typename?: 'Asset'
    title?: string | null
    url?: string | null
    width?: number | null
    height?: number | null
  } | null
  description?: { __typename?: 'PlantDescription'; json: any } | null
  author?: {
    __typename?: 'Author'
    fullName?: string | null
    handle?: string | null
    biography?: string | null
    twitter?: string | null
    linkedIn?: string | null
    sys: { __typename?: 'Sys'; id: string }
    photo?: {
      __typename?: 'Asset'
      title?: string | null
      url?: string | null
      width?: number | null
      height?: number | null
    } | null
  } | null
  category?: {
    __typename?: 'Category'
    slug?: string | null
    title?: string | null
    categoryDescription?: string | null
    sys: { __typename?: 'Sys'; id: string }
    icon?: {
      __typename?: 'Asset'
      title?: string | null
      url?: string | null
      width?: number | null
      height?: number | null
    } | null
  } | null
}

export type IGetPlantListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  order?: InputMaybe<Array<InputMaybe<IPlantOrder>> | InputMaybe<IPlantOrder>>
  locale?: InputMaybe<Scalars['String']>
}>

export type IGetPlantListQuery = {
  __typename?: 'Query'
  plantCollection?: {
    __typename?: 'PlantCollection'
    total: number
    skip: number
    limit: number
    items: Array<{
      __typename?: 'Plant'
      slug?: string | null
      plantName?: string | null
      sys: { __typename?: 'Sys'; id: string }
      image?: {
        __typename?: 'Asset'
        title?: string | null
        url?: string | null
        width?: number | null
        height?: number | null
      } | null
      description?: { __typename?: 'PlantDescription'; json: any } | null
      author?: {
        __typename?: 'Author'
        fullName?: string | null
        handle?: string | null
        biography?: string | null
        twitter?: string | null
        linkedIn?: string | null
        sys: { __typename?: 'Sys'; id: string }
        photo?: {
          __typename?: 'Asset'
          title?: string | null
          url?: string | null
          width?: number | null
          height?: number | null
        } | null
      } | null
      category?: {
        __typename?: 'Category'
        slug?: string | null
        title?: string | null
        categoryDescription?: string | null
        sys: { __typename?: 'Sys'; id: string }
        icon?: {
          __typename?: 'Asset'
          title?: string | null
          url?: string | null
          width?: number | null
          height?: number | null
        } | null
      } | null
    } | null>
  } | null
}

export type IGetPlantQueryVariables = Exact<{
  slug: Scalars['String']
  preview?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<Scalars['String']>
}>

export type IGetPlantQuery = {
  __typename?: 'Query'
  plantCollection?: {
    __typename?: 'PlantCollection'
    items: Array<{
      __typename?: 'Plant'
      slug?: string | null
      plantName?: string | null
      sys: { __typename?: 'Sys'; id: string }
      image?: {
        __typename?: 'Asset'
        title?: string | null
        url?: string | null
        width?: number | null
        height?: number | null
      } | null
      description?: { __typename?: 'PlantDescription'; json: any } | null
      author?: {
        __typename?: 'Author'
        fullName?: string | null
        handle?: string | null
        biography?: string | null
        twitter?: string | null
        linkedIn?: string | null
        sys: { __typename?: 'Sys'; id: string }
        photo?: {
          __typename?: 'Asset'
          title?: string | null
          url?: string | null
          width?: number | null
          height?: number | null
        } | null
      } | null
      category?: {
        __typename?: 'Category'
        slug?: string | null
        title?: string | null
        categoryDescription?: string | null
        sys: { __typename?: 'Sys'; id: string }
        icon?: {
          __typename?: 'Asset'
          title?: string | null
          url?: string | null
          width?: number | null
          height?: number | null
        } | null
      } | null
    } | null>
  } | null
}

export type ISearchPlantQueryVariables = Exact<{
  term: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}>

export type ISearchPlantQuery = {
  __typename?: 'Query'
  plantCollection?: {
    __typename?: 'PlantCollection'
    total: number
    skip: number
    limit: number
    items: Array<{
      __typename?: 'Plant'
      slug?: string | null
      plantName?: string | null
      sys: { __typename?: 'Sys'; id: string }
      image?: {
        __typename?: 'Asset'
        title?: string | null
        url?: string | null
        width?: number | null
        height?: number | null
      } | null
      description?: { __typename?: 'PlantDescription'; json: any } | null
      author?: {
        __typename?: 'Author'
        fullName?: string | null
        handle?: string | null
        biography?: string | null
        twitter?: string | null
        linkedIn?: string | null
        sys: { __typename?: 'Sys'; id: string }
        photo?: {
          __typename?: 'Asset'
          title?: string | null
          url?: string | null
          width?: number | null
          height?: number | null
        } | null
      } | null
      category?: {
        __typename?: 'Category'
        slug?: string | null
        title?: string | null
        categoryDescription?: string | null
        sys: { __typename?: 'Sys'; id: string }
        icon?: {
          __typename?: 'Asset'
          title?: string | null
          url?: string | null
          width?: number | null
          height?: number | null
        } | null
      } | null
    } | null>
  } | null
}

export type IGetCategoryListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  order?: InputMaybe<
    Array<InputMaybe<ICategoryOrder>> | InputMaybe<ICategoryOrder>
  >
}>

export type IGetCategoryListQuery = {
  __typename?: 'Query'
  categoryCollection?: {
    __typename?: 'CategoryCollection'
    items: Array<{
      __typename?: 'Category'
      slug?: string | null
      title?: string | null
      categoryDescription?: string | null
      sys: { __typename?: 'Sys'; id: string }
      icon?: {
        __typename?: 'Asset'
        title?: string | null
        url?: string | null
        width?: number | null
        height?: number | null
      } | null
    } | null>
  } | null
}

export type IGetAuthorListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  order?: InputMaybe<Array<InputMaybe<IAuthorOrder>> | InputMaybe<IAuthorOrder>>
}>

export type IGetAuthorListQuery = {
  __typename?: 'Query'
  authorCollection?: {
    __typename?: 'AuthorCollection'
    items: Array<{
      __typename?: 'Author'
      fullName?: string | null
      handle?: string | null
      biography?: string | null
      twitter?: string | null
      linkedIn?: string | null
      sys: { __typename?: 'Sys'; id: string }
      photo?: {
        __typename?: 'Asset'
        title?: string | null
        url?: string | null
        width?: number | null
        height?: number | null
      } | null
    } | null>
  } | null
}

export type IGetPlantListByAuthorQueryVariables = Exact<{
  authorId: Scalars['String']
  limit?: InputMaybe<Scalars['Int']>
}>

export type IGetPlantListByAuthorQuery = {
  __typename?: 'Query'
  plantCollection?: {
    __typename?: 'PlantCollection'
    items: Array<{
      __typename?: 'Plant'
      slug?: string | null
      plantName?: string | null
      sys: { __typename?: 'Sys'; id: string }
      image?: {
        __typename?: 'Asset'
        title?: string | null
        url?: string | null
        width?: number | null
        height?: number | null
      } | null
      description?: { __typename?: 'PlantDescription'; json: any } | null
      author?: {
        __typename?: 'Author'
        fullName?: string | null
        handle?: string | null
        biography?: string | null
        twitter?: string | null
        linkedIn?: string | null
        sys: { __typename?: 'Sys'; id: string }
        photo?: {
          __typename?: 'Asset'
          title?: string | null
          url?: string | null
          width?: number | null
          height?: number | null
        } | null
      } | null
      category?: {
        __typename?: 'Category'
        slug?: string | null
        title?: string | null
        categoryDescription?: string | null
        sys: { __typename?: 'Sys'; id: string }
        icon?: {
          __typename?: 'Asset'
          title?: string | null
          url?: string | null
          width?: number | null
          height?: number | null
        } | null
      } | null
    } | null>
  } | null
}

export type IGetPlantListByCategoryQueryVariables = Exact<{
  category: Scalars['String']
  locale?: InputMaybe<Scalars['String']>
  limit?: InputMaybe<Scalars['Int']>
}>

export type IGetPlantListByCategoryQuery = {
  __typename?: 'Query'
  categoryCollection?: {
    __typename?: 'CategoryCollection'
    items: Array<{
      __typename?: 'Category'
      slug?: string | null
      title?: string | null
      categoryDescription?: string | null
      sys: { __typename?: 'Sys'; id: string }
      icon?: {
        __typename?: 'Asset'
        title?: string | null
        url?: string | null
        width?: number | null
        height?: number | null
      } | null
    } | null>
  } | null
  plantCollection?: {
    __typename?: 'PlantCollection'
    items: Array<{
      __typename?: 'Plant'
      slug?: string | null
      plantName?: string | null
      sys: { __typename?: 'Sys'; id: string }
      image?: {
        __typename?: 'Asset'
        title?: string | null
        url?: string | null
        width?: number | null
        height?: number | null
      } | null
      description?: { __typename?: 'PlantDescription'; json: any } | null
      author?: {
        __typename?: 'Author'
        fullName?: string | null
        handle?: string | null
        biography?: string | null
        twitter?: string | null
        linkedIn?: string | null
        sys: { __typename?: 'Sys'; id: string }
        photo?: {
          __typename?: 'Asset'
          title?: string | null
          url?: string | null
          width?: number | null
          height?: number | null
        } | null
      } | null
      category?: {
        __typename?: 'Category'
        slug?: string | null
        title?: string | null
        categoryDescription?: string | null
        sys: { __typename?: 'Sys'; id: string }
        icon?: {
          __typename?: 'Asset'
          title?: string | null
          url?: string | null
          width?: number | null
          height?: number | null
        } | null
      } | null
    } | null>
  } | null
}

export const AssetFieldsFragmentDoc = gql`
  fragment AssetFields on Asset {
    title
    url
    width
    height
  }
`
export const AuthorFieldsFragmentDoc = gql`
  fragment AuthorFields on Author {
    sys {
      id
    }
    fullName
    handle
    photo {
      ...AssetFields
    }
    biography
    twitter
    linkedIn
  }
  ${AssetFieldsFragmentDoc}
`
export const CategoryFieldsFragmentDoc = gql`
  fragment CategoryFields on Category {
    sys {
      id
    }
    slug
    title
    categoryDescription
    icon {
      ...AssetFields
    }
  }
  ${AssetFieldsFragmentDoc}
`
export const PlantFieldsFragmentDoc = gql`
  fragment PlantFields on Plant {
    sys {
      id
    }
    slug
    plantName
    image {
      ...AssetFields
    }
    description {
      json
    }
    author {
      ...AuthorFields
    }
    category {
      ...CategoryFields
    }
  }
  ${AssetFieldsFragmentDoc}
  ${AuthorFieldsFragmentDoc}
  ${CategoryFieldsFragmentDoc}
`
export const GetPlantListDocument = gql`
  query getPlantList(
    $limit: Int = 10
    $skip: Int = 0
    $order: [PlantOrder] = sys_publishedAt_DESC
    $locale: String
  ) {
    plantCollection(
      limit: $limit
      skip: $skip
      order: $order
      locale: $locale
    ) {
      total
      skip
      limit
      items {
        ...PlantFields
      }
    }
  }
  ${PlantFieldsFragmentDoc}
`
export const GetPlantDocument = gql`
  query getPlant($slug: String!, $preview: Boolean = false, $locale: String) {
    plantCollection(
      where: { slug: $slug }
      preview: $preview
      limit: 1
      locale: $locale
    ) {
      items {
        ...PlantFields
      }
    }
  }
  ${PlantFieldsFragmentDoc}
`
export const SearchPlantDocument = gql`
  query searchPlant(
    $term: String!
    $locale: String
    $limit: Int = 10
    $skip: Int = 0
  ) {
    plantCollection(
      where: { plantName_contains: $term }
      locale: $locale
      limit: $limit
      skip: $skip
    ) {
      total
      skip
      limit
      items {
        ...PlantFields
      }
    }
  }
  ${PlantFieldsFragmentDoc}
`
export const GetCategoryListDocument = gql`
  query getCategoryList(
    $limit: Int = 10
    $skip: Int = 0
    $order: [CategoryOrder] = sys_publishedAt_DESC
  ) {
    categoryCollection(limit: $limit, skip: $skip, order: $order) {
      items {
        ...CategoryFields
      }
    }
  }
  ${CategoryFieldsFragmentDoc}
`
export const GetAuthorListDocument = gql`
  query getAuthorList(
    $limit: Int = 10
    $skip: Int = 0
    $order: [AuthorOrder] = sys_publishedAt_DESC
  ) {
    authorCollection(limit: $limit, skip: $skip, order: $order) {
      items {
        ...AuthorFields
      }
    }
  }
  ${AuthorFieldsFragmentDoc}
`
export const GetPlantListByAuthorDocument = gql`
  query getPlantListByAuthor($authorId: String!, $limit: Int = 10) {
    plantCollection(
      limit: $limit
      where: { author: { sys: { id: $authorId } } }
    ) {
      items {
        ...PlantFields
      }
    }
  }
  ${PlantFieldsFragmentDoc}
`
export const GetPlantListByCategoryDocument = gql`
  query getPlantListByCategory(
    $category: String!
    $locale: String
    $limit: Int = 10
  ) {
    categoryCollection(limit: 1, locale: $locale, where: { slug: $category }) {
      items {
        ...CategoryFields
      }
    }
    plantCollection(
      limit: $limit
      locale: $locale
      where: { category: { slug: $category } }
    ) {
      items {
        ...PlantFields
      }
    }
  }
  ${CategoryFieldsFragmentDoc}
  ${PlantFieldsFragmentDoc}
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    getPlantList(
      variables?: IGetPlantListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<IGetPlantListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IGetPlantListQuery>(GetPlantListDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getPlantList',
        'query'
      )
    },
    getPlant(
      variables: IGetPlantQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<IGetPlantQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IGetPlantQuery>(GetPlantDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getPlant',
        'query'
      )
    },
    searchPlant(
      variables: ISearchPlantQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ISearchPlantQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ISearchPlantQuery>(SearchPlantDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'searchPlant',
        'query'
      )
    },
    getCategoryList(
      variables?: IGetCategoryListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<IGetCategoryListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IGetCategoryListQuery>(
            GetCategoryListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getCategoryList',
        'query'
      )
    },
    getAuthorList(
      variables?: IGetAuthorListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<IGetAuthorListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IGetAuthorListQuery>(
            GetAuthorListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getAuthorList',
        'query'
      )
    },
    getPlantListByAuthor(
      variables: IGetPlantListByAuthorQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<IGetPlantListByAuthorQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IGetPlantListByAuthorQuery>(
            GetPlantListByAuthorDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getPlantListByAuthor',
        'query'
      )
    },
    getPlantListByCategory(
      variables: IGetPlantListByCategoryQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<IGetPlantListByCategoryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IGetPlantListByCategoryQuery>(
            GetPlantListByCategoryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'getPlantListByCategory',
        'query'
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
