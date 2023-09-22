import React, { ReactElement } from "react";
import { PageLayout } from "../../../components/Layout/PageLayout/PageLayout";
import NavigationLayout from "../../../components/Layout/NavigationLayout/NavigationLayout";
import { useQuery } from "@apollo/client";
import {
  ContactEntity,
  QueryContactsArgs,
  queries,
} from "@frenchies-spots/gql";
import {
  Container,
  Group,
  Log,
  ScrollArea,
  Stack,
  TextInput,
} from "@frenchies-spots/material";
import { GuardLayout } from "../../../components/Layout/GuardLayout/GuardLayout";
import ProfileCard from "../../../components/Profile/ProfileCard/ProfileCard";
import ContactButton from "./../../../components/Profile/ContactButton/ContactButton";
import BlockButton from "./../../../components/Profile/BlockButton/BlockButton";
import LoadingOverlay from "../../../components/LoadingOverlay/LoadingOverlay";
import { useRouter } from "next/router";

const FriendsPage = () => {
  const router = useRouter();

  const { data, loading } = useQuery<
    { contacts: ContactEntity[] },
    QueryContactsArgs
  >(queries.contacts, {
    variables: { contactsInput: { isFriend: true, authorization: true } },
  });

  const handleViewProfileClick = (friendId: string) => {
    router.push(`/profile/friends/${friendId}`);
  };

  return (
    <Container size="md" mt="md">
      <LoadingOverlay visible={loading} />
      <Stack>
        <TextInput placeholder="Rechercher un contact" />
        <ScrollArea>
          {data?.contacts?.map((friend) => (
            <ProfileCard
              key={friend.id}
              profile={friend.contact}
              mb="sm"
              onClick={handleViewProfileClick}
            >
              <Group>
                <ContactButton profile={friend.contact} isSmallMode />
                <BlockButton />
              </Group>
            </ProfileCard>
          ))}
        </ScrollArea>
      </Stack>
    </Container>
  );
};

FriendsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <GuardLayout isProtected>
        <NavigationLayout>{page}</NavigationLayout>
      </GuardLayout>
    </PageLayout>
  );
};

export default FriendsPage;
