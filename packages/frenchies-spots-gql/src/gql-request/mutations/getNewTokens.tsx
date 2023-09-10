import { gql } from "@apollo/client";

export const getNewTokens = gql`
  mutation getNewTokens {
    getNewTokens {
      accessToken
      refreshToken
    }
  }
`;
