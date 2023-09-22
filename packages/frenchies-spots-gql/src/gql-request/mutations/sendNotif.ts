import { gql } from "@apollo/client";

export const sendNotif = gql`
  mutation sendNotif($sendNotifInput: SendNotifInput!) {
    sendNotif(sendNotifInput: $sendNotifInput) {
      content
      id
      profileId
      type
    }
  }
`;
