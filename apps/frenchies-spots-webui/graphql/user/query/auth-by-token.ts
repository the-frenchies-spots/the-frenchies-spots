import { gql } from "@apollo/client";

const AUTH_BY_TOKEN_QUERY = gql`
  query authByToken {
    user: authByToken {
      id
      token
      profile {
        id
        pseudo
        gamePoint
        photoUrl
      }
    }
  }
`;

export default AUTH_BY_TOKEN_QUERY;
