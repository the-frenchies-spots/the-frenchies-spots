import type { Options, PrismaAppSyncOptionsType, ResolveParams } from './defs';
import { Prisma, PrismaClient } from './defs';
/**
 * ##  Prisma-AppSync Client ʲˢ
 *
 * Type-safe Prisma AppSync client for TypeScript & Node.js
 * @example
 * ```
 * const prismaAppSync = new PrismaAppSync()
 *
 * // lambda handler (AppSync Direct Lambda Resolver)
 * export const resolver = async (event: any, context: any) => {
 *     return await prismaAppSync.resolve({ event })
 * }
 * ```
 *
 *
 * Read more in our [docs](https://prisma-appsync.vercel.app).
 */
export declare class PrismaAppSync {
    options: Options;
    prismaClient: PrismaClient<Prisma.PrismaClientOptions, 'query' | 'info' | 'warn' | 'error'>;
    /**
   * ### Client Constructor
   *
   * Instantiate Prisma-AppSync Client.
   * @example
   * ```
   * const prismaAppSync = new PrismaAppSync()
   * ```
   *
   * @param {PrismaAppSyncOptionsType} options
   * @param {string} options.connectionString? - Prisma connection string (database connection URL).
   * @param {boolean} options.sanitize? - Enable sanitize inputs (parse xss + encode html).
   * @param {'INFO' | 'WARN' | 'ERROR'} options.logLevel? - Server logs level (visible in CloudWatch).
   * @param {number|false} options.defaultPagination? - Default pagination for list Query (items per page).
   * @param {number} options.maxDepth? - Maximum allowed GraphQL query depth.
   * @param {number} options.maxReqPerUserMinute? - Maximum allowed requests per user, per minute.
   *
   * @default
   * ```
   * {
   *   connectionString: process.env.DATABASE_URL,
   *   sanitize: true,
   *   logLevel: 'INFO',
   *   defaultPagination: 50,
   *   maxDepth: 3,
   *   maxReqPerUserMinute: 200
   * }
   * ```
   *
   *
   * Read more in our [docs](https://prisma-appsync.vercel.app).
   */
    constructor(options?: PrismaAppSyncOptionsType);
    /**
   * ###  Resolver
   *
   * Resolve the API request, based on the AppSync `event` received by the Direct Lambda Resolver.
   * @example
   * ```
   * await prismaAppSync.resolve({ event })
   *
   * // custom resolvers
   * await prismaAppSync.resolve<'notify'|'listPosts'>(
   *     event,
   *     resolvers: {
   *         // extend CRUD API with a custom `notify` query
   *         notify: async ({ args }) => { return { message: args.message } },
   *
   *         // disable one of the generated CRUD API query
   *         listPosts: false,
   *     }
   * })
   * ```
   *
   * @param {ResolveParams} resolveParams
   * @param {any} resolveParams.event - AppSync event received by the Direct Lambda Resolver.
   * @param {any} resolveParams.resolvers? - Custom resolvers (to extend the CRUD API).
   * @param {function} resolveParams.shield? - Shield configuration (to protect your API).
   * @param {function} resolveParams.hooks? - Hooks (to trigger functions based on events).
   * @returns Promise<result>
   *
   *
   * Read more in our [docs](https://prisma-appsync.vercel.app).
   */
    resolve<CustomResolvers = void>(resolveParams: ResolveParams<"countFavorites" | "countItinaries" | "countProducts" | "countProfiles" | "countRatings" | "countSpotPictures" | "countSpots" | "countTags" | "countTagsOnSpots" | "countUsers" | "createFavorite" | "createItinary" | "createManyFavorites" | "createManyItinaries" | "createManyProducts" | "createManyProfiles" | "createManyRatings" | "createManySpotPictures" | "createManySpots" | "createManyTags" | "createManyTagsOnSpots" | "createManyUsers" | "createProduct" | "createProfile" | "createRating" | "createSpot" | "createSpotPicture" | "createTag" | "createTagsOnSpots" | "createUser" | "deleteFavorite" | "deleteItinary" | "deleteManyFavorites" | "deleteManyItinaries" | "deleteManyProducts" | "deleteManyProfiles" | "deleteManyRatings" | "deleteManySpotPictures" | "deleteManySpots" | "deleteManyTags" | "deleteManyTagsOnSpots" | "deleteManyUsers" | "deleteProduct" | "deleteProfile" | "deleteRating" | "deleteSpot" | "deleteSpotPicture" | "deleteTag" | "deleteTagsOnSpots" | "deleteUser" | "getFavorite" | "getItinary" | "getProduct" | "getProfile" | "getRating" | "getSpot" | "getSpotPicture" | "getTag" | "getTagsOnSpots" | "getUser" | "listFavorites" | "listItinaries" | "listProducts" | "listProfiles" | "listRatings" | "listSpotPictures" | "listSpots" | "listTags" | "listTagsOnSpots" | "listUsers" | "onCreatedFavorite" | "onCreatedItinary" | "onCreatedManyFavorites" | "onCreatedManyItinaries" | "onCreatedManyProducts" | "onCreatedManyProfiles" | "onCreatedManyRatings" | "onCreatedManySpotPictures" | "onCreatedManySpots" | "onCreatedManyTags" | "onCreatedManyTagsOnSpots" | "onCreatedManyUsers" | "onCreatedProduct" | "onCreatedProfile" | "onCreatedRating" | "onCreatedSpot" | "onCreatedSpotPicture" | "onCreatedTag" | "onCreatedTagsOnSpots" | "onCreatedUser" | "onDeletedFavorite" | "onDeletedItinary" | "onDeletedManyFavorites" | "onDeletedManyItinaries" | "onDeletedManyProducts" | "onDeletedManyProfiles" | "onDeletedManyRatings" | "onDeletedManySpotPictures" | "onDeletedManySpots" | "onDeletedManyTags" | "onDeletedManyTagsOnSpots" | "onDeletedManyUsers" | "onDeletedProduct" | "onDeletedProfile" | "onDeletedRating" | "onDeletedSpot" | "onDeletedSpotPicture" | "onDeletedTag" | "onDeletedTagsOnSpots" | "onDeletedUser" | "onMutatedFavorite" | "onMutatedItinary" | "onMutatedManyFavorites" | "onMutatedManyItinaries" | "onMutatedManyProducts" | "onMutatedManyProfiles" | "onMutatedManyRatings" | "onMutatedManySpotPictures" | "onMutatedManySpots" | "onMutatedManyTags" | "onMutatedManyTagsOnSpots" | "onMutatedManyUsers" | "onMutatedProduct" | "onMutatedProfile" | "onMutatedRating" | "onMutatedSpot" | "onMutatedSpotPicture" | "onMutatedTag" | "onMutatedTagsOnSpots" | "onMutatedUser" | "onUpdatedFavorite" | "onUpdatedItinary" | "onUpdatedManyFavorites" | "onUpdatedManyItinaries" | "onUpdatedManyProducts" | "onUpdatedManyProfiles" | "onUpdatedManyRatings" | "onUpdatedManySpotPictures" | "onUpdatedManySpots" | "onUpdatedManyTags" | "onUpdatedManyTagsOnSpots" | "onUpdatedManyUsers" | "onUpdatedProduct" | "onUpdatedProfile" | "onUpdatedRating" | "onUpdatedSpot" | "onUpdatedSpotPicture" | "onUpdatedTag" | "onUpdatedTagsOnSpots" | "onUpdatedUser" | "onUpsertedFavorite" | "onUpsertedItinary" | "onUpsertedProduct" | "onUpsertedProfile" | "onUpsertedRating" | "onUpsertedSpot" | "onUpsertedSpotPicture" | "onUpsertedTag" | "onUpsertedTagsOnSpots" | "onUpsertedUser" | "updateFavorite" | "updateItinary" | "updateManyFavorites" | "updateManyItinaries" | "updateManyProducts" | "updateManyProfiles" | "updateManyRatings" | "updateManySpotPictures" | "updateManySpots" | "updateManyTags" | "updateManyTagsOnSpots" | "updateManyUsers" | "updateProduct" | "updateProfile" | "updateRating" | "updateSpot" | "updateSpotPicture" | "updateTag" | "updateTagsOnSpots" | "updateUser" | "upsertFavorite" | "upsertItinary" | "upsertProduct" | "upsertProfile" | "upsertRating" | "upsertSpot" | "upsertSpotPicture" | "upsertTag" | "upsertTagsOnSpots" | "upsertUser", Extract<CustomResolvers, string>>): Promise<any>;
}
