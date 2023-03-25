import { gql } from "@apollo/client";

const UPDATE_SPOT_MUTATION = gql`
  mutation updateSpot(
    $id: String
    $name: String
    $description: String
    $lat: Float
    $lng: Float
    $isCanPark: Boolean
    $isCanVisit: Boolean
    $isTouristic: Boolean
    $region: String
    $pictures: [UpdatePictureInput]
  ) {
    spot: updateSpot(
      id: $id
      name: $name
      description: $description
      lat: $lat
      lng: $lng
      isCanPark: $isCanPark
      isCanVisit: $isCanVisit
      isTouristic: $isTouristic
      region: $region
      pictures: $pictures
    ) {
      id
      name
      spotPicture {
        id
        url
      }
      profileId
    }
  }
`;

export default UPDATE_SPOT_MUTATION;
