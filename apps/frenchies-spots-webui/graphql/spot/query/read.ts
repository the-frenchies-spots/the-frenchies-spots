import { gql } from "@apollo/client";

const READ_SPOT_QUERY = gql`
  query spots(
    $profileId: String
    $isCanPark: Boolean
    $isCanVisit: Boolean
    $isTouristic: Boolean
    $region: String
    $searchValue: String
    $orderBy: OrderByEnum
    $skip: Int
    $take: Int
  ) {
    spots(
      profileId: $profileId
      isCanPark: $isCanPark
      isCanVisit: $isCanVisit
      isTouristic: $isTouristic
      region: $region
      searchValue: $searchValue
      orderBy: $orderBy
      skip: $skip
      take: $take
    ) {
      id
      name
      description
      isCanPark
      isCanVisit
      isTouristic
      region
      profileId
      averageRating
      spotPicture {
        url
      }
    }
  }
`;

export default READ_SPOT_QUERY;
