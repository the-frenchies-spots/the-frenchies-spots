import { gql } from "@apollo/client";

export const blockContact = gql`
  mutation blockContact($blockContactId: String!) {
    blockContact(blockContactId: $blockContactId)
  }
`;
