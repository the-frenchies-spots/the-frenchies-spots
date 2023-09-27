import { gql } from "@apollo/client";

export const unBlockContact = gql`
  mutation unBlockContact($blockContactId: String!) {
    unBlockContact(blockContactId: $blockContactId)
  }
`;
