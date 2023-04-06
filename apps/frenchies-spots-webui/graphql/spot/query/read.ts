import { gql } from "@apollo/client";

const READ_SPOT_QUERY = gql`
  query Spots(
    $id: String
    $profileId: String
    $orderBy: OrderByEnum
    $isCanPark: Boolean
    $isHidden: Boolean
    $category: CategoriesSpotAndTag
    $searchValue: String
    $tagListId: [String]
    $region: String
    $skip: Int
    $take: Int
    $tags: [TagInput]
  ) {
    spots(
      id: $id
      profileId: $profileId
      orderBy: $orderBy
      isCanPark: $isCanPark
      isHidden: $isHidden
      category: $category
      searchValue: $searchValue
      tagListId: $tagListId
      region: $region
      skip: $skip
      take: $take
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
      favorites {
        id
      }
    }
  }
`;

export default READ_SPOT_QUERY;
