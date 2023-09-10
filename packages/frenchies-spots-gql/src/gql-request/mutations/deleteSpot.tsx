import { gql } from "@apollo/client";

export const deleteSpot = gql`
  mutation deleteSpot($id: String!) {
    deleteSpot(id: $id) {
      deleted
    }
  }
`;
