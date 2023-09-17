import { gql } from "@apollo/client";

export const notifications = gql`
  query notifications {
    notifications {
      content
      id
      isRead
      profileId
      type
    }
  }
`;
