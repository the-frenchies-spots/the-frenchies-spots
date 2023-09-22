import { gql } from "@apollo/client";

export const friendRequest = gql`
  mutation friendRequest($friendId: String!) {
    friendRequest(friendId: $friendId)
  }
`;
