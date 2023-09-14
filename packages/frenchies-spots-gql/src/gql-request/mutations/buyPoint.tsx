import { gql } from "@apollo/client";

export const buyPoint = gql`
  mutation buyPoint($buyPoint: BuyPointInput!) {
    buyPoint(buyPoint: $buyPoint) {
      createdAt
      email
      hashedPassword
      hashedRefreshToken
      id
      profile {
        gamePoint
        id
        photoUrl
        pseudo
        userId
      }
      role
      updatedAt
    }
  }
`;
