import { gql } from "@apollo/client";

const CREATE_SPOT_MUTATION = gql`
  mutation Mutation(
    $name: String
    $description: String
    $lat: Float
    $lng: Float
    $isCanPark: Boolean
    $isHidden: Boolean
    $category: CategoriesSpotAndTag
    $region: String
    $pictures: [PictureInput]
    $tags: [TagInput]
  ) {
    createSpot(
      name: $name
      description: $description
      lat: $lat
      lng: $lng
      isCanPark: $isCanPark
      isHidden: $isHidden
      category: $category
      region: $region
      spotPicture: $pictures
      tags: $tags
    ) {
      category
      description
      id
      isCanPark
      isHidden
      lat
      lng
      name
      region
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
      spotPicture {
        id
        url
      }
    }
  }
`;

export default CREATE_SPOT_MUTATION;
