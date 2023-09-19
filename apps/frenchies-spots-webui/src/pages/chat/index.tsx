import React, { ReactElement } from "react";
import ChatList from "../../components/Chat/ChatList/ChatList";
import { PageLayout } from "../../components/Layout/PageLayout/PageLayout";
import NavigationLayout from "../../components/Layout/NavigationLayout/NavigationLayout";
import {
  Container,
  Stack,
  Tabs,
  Text,
  TextInput,
} from "@frenchies-spots/material";
import MeetingList from "../../components/Meeting/MeetingList/MeetingList";
import { GuardLayout } from "../../components/Layout/GuardLayout/GuardLayout";

const ChatPage = () => {
  return (
    <Container size="md" h="100%" pt="md">
      <Text>Chat</Text>
      <Text>
        {`Retrouves toutes les personnes avec qui tu a parler sur l'app !`}
      </Text>
      <Tabs defaultValue="contact" h="80%" pt="md">
        <Tabs.List grow>
          <Tabs.Tab value="contact">Chat</Tabs.Tab>
          <Tabs.Tab value="history">Rencontre</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="contact" pt="xs" h="100%">
          <Stack pt="md" h="100%">
            <TextInput placeholder="Rechercher" />
            <ChatList />
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="history" pt="xs" h="100%">
          <MeetingList />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

ChatPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <GuardLayout isProtected>
        <NavigationLayout>{page}</NavigationLayout>
      </GuardLayout>
    </PageLayout>
  );
};

export default ChatPage;
