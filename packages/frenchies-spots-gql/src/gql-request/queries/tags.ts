import { gql } from "@apollo/client";

export const tags = gql`
  query tags($tagListInput: TagListInput!) {
    tags(tagListInput: $tagListInput) {
      createdAt
      id
      name
      spots {
        address
        averageRating

        createdAt
        description
        favorites {
          createdAt
          id
          profile {
            createdAt
            favorites {
              createdAt
              id
              profileId
              spotId
              updatedAt
            }
            gamePoint
            id
            photoUrl
            pseudo
            ratings {
              createdAt
              id
              profileId
              rate
              spotId
              updatedAt
            }
            spots {
              address
              averageRating

              createdAt
              description
              id
              isCanPark
              isHidden

              location
              name
              profileId
              region
              updatedAt
            }
            updatedAt
            user {
              createdAt
              email
              hashedPassword
              hashedRefreshToken
              id
              role
              updatedAt
            }
            userId
          }
          profileId
          spot {
            address
            averageRating

            createdAt
            description
            favorites {
              createdAt
              id
              profileId
              spotId
              updatedAt
            }
            id
            isCanPark
            isHidden

            location
            name
            profile {
              createdAt
              gamePoint
              id
              photoUrl
              pseudo
              updatedAt
              userId
            }
            profileId
            ratings {
              createdAt
              id
              profileId
              rate
              spotId
              updatedAt
            }
            region
            spotPicture {
              createdAt
              id
              spotId
              updatedAt
              url
            }
            tags {
              createdAt
              id
              name
              tagPictureUrl
              updatedAt
            }
            updatedAt
          }
          spotId
          updatedAt
        }
        id
        isCanPark
        isHidden

        location
        name
        profile {
          createdAt
          gamePoint
          id
          photoUrl
          pseudo
          updatedAt
          userId
        }
        profileId
        ratings {
          createdAt
          id
          profile {
            createdAt
            gamePoint
            id
            photoUrl
            pseudo
            updatedAt
            userId
          }
          profileId
          rate
          spot {
            address
            averageRating

            createdAt
            description
            id
            isCanPark
            isHidden

            location
            name
            profileId
            region
            updatedAt
          }
          spotId
          updatedAt
        }
        region
        spotPicture {
          createdAt
          id
          spot {
            address
            averageRating

            createdAt
            description
            id
            isCanPark
            isHidden

            location
            name
            profileId
            region
            updatedAt
          }
          spotId
          updatedAt
          url
        }
        tags {
          createdAt
          id
          name
          tagPictureUrl
          updatedAt
        }
        updatedAt
      }
      tagPictureUrl
      updatedAt
    }
  }
`;
