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

  enum CategorySpot {
    SPARE_TIME_SPOT
    RESOURCES_SPOT
  }

  type Spot {
    id: String
    name: String
    description: String
    isCanPark: Boolean
    isHidden: Boolean
    category: CategorySpot
    profile: Profile
    profileId: String
    itinaries: [Itinary]
    spotPicture: [SpotPicture]
    lat: Float
    lng: Float
    region: String
    averageRating: Float
    ratings: [Rating]
    favorites: [Favorite]
    tags: [Tag]
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

  type Tag {
    id: String
    name: String
    isResources: Boolean
    isSpareTime: Boolean
    tagPictureUrl: String
    spots: [Spot]
  }

  input SpotInput {
    name: String
    description: String
    lat: Float
    lng: Float
  }

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

  enum OrderByEnum {
    asc
    desc
  }

  type Query {
    users: [User]
    itinaries: [Itinary]

    spots(
      profileId: String
      orderBy: OrderByEnum
      isCanPark: Boolean
      isHidden: Boolean
      category: CategorySpot
      searchValue: String
      region: String
      skip: Int
      take: Int
      tags: [TagInput]
    ): [Spot]

    spot(id: String): Spot
    products: [Product]
    authByToken: User
    getBuyProductRequest(amount: Int): String

    favorites(profileId: String): Profile
    ratings: [Rating]
    rating(id: String): Rating
    ratingsAverage: Rating
  }

  type Mutation {
    signIn(email: String, password: String): User
    signUp(pseudo: String, email: String, password: String): User
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
      category: CategorySpot
      region: String
      averageRating: Float
      pictures: [PictureInput]
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
      category: CategorySpot
      region: String
      pictures: [UpdatePictureInput]
      averageRating: Float
      tags: [TagInput]
    ): Spot

    deleteSpot(
      id: String
      name: String
      description: String
      lat: Float
      lng: Float
      isCanPark: Boolean
      isHidden: Boolean
      category: CategorySpot
      region: String
      averageRating: Float
      pictures: [PictureInput]
      tags: [TagInput]
    ): Boolean

    # createItinary(
    #   name: String
    #   description: String
    #   spots: [SpotInput]
    # ): Itinary

    createOrUpdateRating(
      ratingId: String
      spotId: String
      rate: Int
    ): AverageRating

    toggleFavorite(spotId: String, id: String): Spot

    buysItinary(profileId: String, itinaryId: String): Profile

    createTest(text: String): Test

    addSpotPicture(url: String, spotId: String): SpotPicture

    addTag(
      name: String
      tagPictureUrl: String
      isResources: Boolean
      isSpareTime: Boolean
      spotId: String
    ): Tag
  }
`;

export default typeDefs;
