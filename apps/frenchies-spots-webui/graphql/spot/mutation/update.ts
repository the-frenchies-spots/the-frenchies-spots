import { gql } from "@apollo/client";

const UPDATE_SPOT_MUTATION = gql`
  mutation UpdateSpot(
    $id: String
    $name: String
    $description: String
    $lat: Float
    $lng: Float
    $isCanPark: Boolean
    $isHidden: Boolean
    $category: CategoriesSpotAndTag
    $region: String
    $pictures: [UpdatePictureInput]
    $averageRating: Float
    $tags: [TagInput]
    $address: String
  ) {
    updateSpot(
      id: $id
      name: $name
      description: $description
      lat: $lat
      lng: $lng
      isCanPark: $isCanPark
      isHidden: $isHidden
      category: $category
      region: $region
      address: $address
      spotPicture: $pictures
      averageRating: $averageRating
      tags: $tags
    ) {
      id
      name
      description
      category
      isCanPark
      isHidden
      region
      lat
      lng
      spotPicture {
        id
        url
      }
      tags {
        id
        tagId
        tag {
          id
          name
          category
          tagPictureUrl
        }
      }
    }
  }
`;

export default UPDATE_SPOT_MUTATION;
