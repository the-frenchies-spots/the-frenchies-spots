import { gql } from "@apollo/client";

export const deleteNotif = gql`
  mutation deleteNotif($notifId: String!) {
    deleteNotif(notifId: $notifId) {
      deleted
    }
  }
`;
