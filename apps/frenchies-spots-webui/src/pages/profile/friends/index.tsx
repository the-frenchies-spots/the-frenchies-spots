import React, { ReactElement, useState } from "react";
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
  InputForm,
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
import { IconSearch } from "@frenchies-spots/icon";

const FriendsPage = () => {
  const router = useRouter();
  const [searchKey, setSearchKey] = useState<string>("");

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
        <InputForm
          placeholder="Rechercher un ami"
          onChange={(e) => setSearchKey(e.currentTarget.value)}
          sx={{ borderColor: "#A480A6" }}
          isShadow={false}
          icon={<IconSearch style={{ color: "#A480A6" }} size={20} />}
        />
        <ScrollArea>
          {data?.contacts
            ?.filter(
              (_friend) => !!_friend?.contact?.pseudo?.includes(searchKey)
            )
            ?.map((friend) => (
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
