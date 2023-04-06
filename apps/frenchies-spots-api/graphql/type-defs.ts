import { gql } from "apollo-server-micro";

const typeDefs = gql`
  enum Role {
    SIMPLE_USER
    USER_ADMIN
  }

  type User {
    id: String
    email: String
    password: String
    token: String
    role: Role
    profile: Profile
  }

  type Profile {
    id: String
    pseudo: String
    photoUrl: String
    gamePoint: Int
    userId: String
    user: User
    itinaries: [Itinary]
    spots: [Spot]
    ratings: [Rating]
    favorites: [Favorite]
  }

  type Itinary {
    id: String
    name: String
    description: String
    gamePoint: Int
    photoUrl: String
    profiles: [Profile]
    spots: [Spot]
  }

  type Test {
    id: String
    text: String
  }

  enum CategoriesSpotAndTag {
    SPARE_TIME_SPOT
    RESOURCES_SPOT
  }

  type Spot {
    id: String
    name: String
    description: String
    isCanPark: Boolean
    isHidden: Boolean
    category: CategoriesSpotAndTag
    profile: Profile
    profileId: String
    itinaries: [Itinary]
    spotPicture: [SpotPicture]
    lat: Float
    lng: Float
    region: String
    address: String
    averageRating: Float
    ratings: [Rating]
    favorites: [Favorite]
    tags: [TagsOnSpots]
  }

  type TagsOnSpots {
    id: String
    tag: Tag
    spotId: String
    tagId: String
  }

  type Tag {
    id: String
    name: String
    category: CategoriesSpotAndTag
    tagPictureUrl: String
    spots: [Spot]
  }

  type SpotPicture {
    id: String
    url: String
    spot: Spot
    spotId: String
  }

  type Product {
    id: String
    photoUrl: String
    gamePoints: Int
    price: Int
  }

  type Rating {
    id: String
    rate: Int
    profile: Profile
    profileId: String
    spot: Spot
    spotId: String
  }

  type Favorite {
    id: String
    profileId: String
    spotId: String
    spot: Spot
  }

  type AverageRating {
    currentRating: Rating
    avg: Float
    maxVote: Int
  }

  # AVEC LES ITINARIES
  # input SpotInput {
  #   name: String
  #   description: String
  #   lat: Float
  #   lng: Float
  # }

  input PictureInput {
    url: String
  }

  input TagInput {
    id: String
  }

  input UpdatePictureInput {
    id: String
    url: String
  }

  type CountRating {
    ratings: Int
  }

  type SpotByIdInput {
    id: String
    name: String
    description: String
    isCanPark: Boolean
    isHidden: Boolean
    category: CategoriesSpotAndTag
    profile: Profile
    profileId: String
    itinaries: [Itinary]
    spotPicture: [SpotPicture]
    lat: Float
    lng: Float
    region: String
    address: String
    averageRating: Float
    ratings: [Rating]
    favorites: [Favorite]
    tags: [TagsOnSpots]
    _count: CountRating
  }

  enum OrderByEnum {
    asc
    desc
  }

  type Query {
    users: [User]
    itinaries: [Itinary]

    spots(
      id: String
      profileId: String
      orderBy: OrderByEnum
      isCanPark: Boolean
      isHidden: Boolean
      category: CategoriesSpotAndTag
      searchValue: String
      tagListId: [String]
      region: String
      address: String
      skip: Int
      take: Int
      tags: [TagInput]
    ): [Spot]

    spot(id: String): SpotByIdInput
    products: [Product]
    authByToken: User
    getBuyProductRequest(amount: Int): String

    favorites(profileId: String): Profile
    ratings: [Rating]
    rating(id: String): Rating
    ratingsAverage: Rating

    tags(
      name: String
      tagPictureUrl: String
      category: CategoriesSpotAndTag
      searchValue: String
      ids: [String]
    ): [Tag]

    tag(id: String): Tag
  }

  type Mutation {
    signIn(email: String, password: String): User
    signUp(pseudo: String, email: String, password: String, role: Role): User
    signOut: Boolean

    createProduct(photoUrl: String, gamePoints: Int, price: Int): Product
    buyProduct(gamePoint: Int, token: String, amount: Int): Profile

    updateUser(
      id: String
      email: String
      password: String
      pseudo: String
      photoUrl: String
    ): User

    deleteUser: Boolean!

    createSpot(
      name: String
      description: String
      lat: Float
      lng: Float
      isCanPark: Boolean
      isHidden: Boolean
      category: CategoriesSpotAndTag
      region: String
      address: String
      averageRating: Float
      spotPicture: [PictureInput]
      tags: [TagInput]
    ): Spot

    updateSpot(
      id: String
      name: String
      description: String
      lat: Float
      lng: Float
      isCanPark: Boolean
      isHidden: Boolean
      category: CategoriesSpotAndTag
      region: String
      address: String
      spotPicture: [UpdatePictureInput]
      averageRating: Float
      tags: [TagInput]
    ): Spot

    deleteSpot(id: String): Boolean

    addSpotPicture(url: String, spotId: String): SpotPicture

    createOrUpdateRating(
      ratingId: String
      spotId: String
      rate: Int
    ): AverageRating

    toggleFavorite(spotId: String, id: String): Spot

    createTag(
      name: String
      tagPictureUrl: String
      category: CategoriesSpotAndTag
      spotId: String
    ): Tag

    updateTag(id: String, tagPictureUrl: String): Tag

    deleteTag(id: String): Boolean

    createTagsList: [Tag]

    createTest(text: String): Test

    buysItinary(profileId: String, itinaryId: String): Profile

    # createItinary(
    #   name: String
    #   description: String
    #   spots: [SpotInput]
    # ): Itinary
  }
`;

export default typeDefs;
