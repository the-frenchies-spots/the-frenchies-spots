import React from "react";

import {
  ContactEntity,
  ProfileEntity,
  QueryContactsArgs,
  queries,
} from "@frenchies-spots/gql";
import { useQuery } from "@apollo/client";

import MeetingCard from "../MeetingCard/MeetingCard";
import { ScrollArea } from "@frenchies-spots/material";

interface MeetingListProps {}

const MeetingList = (props: MeetingListProps) => {
  const {} = props;

  const { data, loading } = useQuery<
    { contacts: ContactEntity[] },
    QueryContactsArgs
  >(queries.contacts, {
    variables: { contactsInput: {} },
  });

  const handleAddFriendClick = (firend: ProfileEntity) => {};

  return (
    <ScrollArea>
      {data?.contacts?.map((contact, index) => (
        <MeetingCard
          mb="md"
          key={index}
          contact={contact}
          onAddFriendClick={handleAddFriendClick}
        />
      ))}
    </ScrollArea>
  );
};

export default MeetingList;
