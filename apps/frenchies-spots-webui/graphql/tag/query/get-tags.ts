import { gql } from "@apollo/client";

export const GET_ALL_TAG = gql`
  query tags(
    $name: String
    $tagPictureUrl: String
    $category: CategoriesSpotAndTag
    $searchValue: String
    $ids: [String]
  ) {
    tags(
      name: $name
      tagPictureUrl: $tagPictureUrl
      category: $category
      searchValue: $searchValue
      ids: $ids
    ) {
      id
      name
      tagPictureUrl
      category
    }
  }
`;
