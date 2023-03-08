import { gql } from "@apollo/client";

const CREATE_SPOT_MUTATION = gql`
  mutation createSpot(
    $name: String
    $description: String
    $lat: Float
    $lng: Float
    $isCanPark: Boolean
    $isCanVisit: Boolean
    $isTouristic: Boolean
    $region: String
    $pictures: [PictureInput]
  ) {
    spot: createSpot(
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
    }
  }
`;

export default CREATE_SPOT_MUTATION;
