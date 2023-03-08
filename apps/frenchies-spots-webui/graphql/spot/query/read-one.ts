import { gql } from "@apollo/client";

const READ_SPOT_BY_ID_QUERY = gql`
  query getSpotById($id: String) {
    spot(id: $id) {
      id
      name
      description
      isCanPark
      isCanVisit
      isTouristic
      region
      profileId
      lat
      lng
      averageRating
      ratings {
        id
        rate
        profileId
      }
      spotPicture {
        id
        url
      }
      favorites {
        id
        profileId
        spotId
      }
    }
  }
`;

export default READ_SPOT_BY_ID_QUERY;
