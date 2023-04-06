import { gql } from "@apollo/client";

const READ_SPOT_BY_ID_QUERY = gql`
  query GetById($id: String) {
    spot(id: $id) {
      id
      name
      description
      isCanPark
      isHidden
      category
      region
      averageRating
      profileId
      address
      favorites {
        id
      }
      lat
      lng
      _count {
        ratings
      }
      ratings {
        id
        rate
      }
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

export default READ_SPOT_BY_ID_QUERY;
