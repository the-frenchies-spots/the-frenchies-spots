import { gql } from "@apollo/client";

export const deleteTag = gql`
  mutation deleteTag($id: String!) {
    deleteTag(id: $id) {
      deleted
    }
  }
`;
