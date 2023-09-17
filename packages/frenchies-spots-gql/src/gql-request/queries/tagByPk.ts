import { gql } from "@apollo/client";

export const tagByPk = gql`
  query tagByPk($id: String!) {
    tagByPk(id: $id) {
      category
      createdAt
      id
      name
      spots {
        address
        averageRating
        category
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
              category
              createdAt
              description
              id
              isCanPark
              isHidden
              lat
              lng
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
            category
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
            lat
            lng
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
              category
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
        lat
        lng
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
            category
            createdAt
            description
            id
            isCanPark
            isHidden
            lat
            lng
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
            category
            createdAt
            description
            id
            isCanPark
            isHidden
            lat
            lng
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
          category
          createdAt
          id
          name
          spots {
            address
            averageRating
            category
            createdAt
            description
            id
            isCanPark
            isHidden
            lat
            lng
            location
            name
            profileId
            region
            updatedAt
          }
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
