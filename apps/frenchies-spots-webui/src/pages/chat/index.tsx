import React, { ReactElement } from "react";
import ChatList from "../../components/Chat/ChatList/ChatList";
import { PageLayout } from "../../components/Layout/PageLayout/PageLayout";
import NavigationLayout from "../../components/Layout/NavigationLayout/NavigationLayout";
import {
  Container,
  Font,
  InputForm,
  Stack,
  Tabs,
  Text,
  TextInput,
} from "@frenchies-spots/material";
import MeetingList from "../../components/Meeting/MeetingList/MeetingList";
import { GuardLayout } from "../../components/Layout/GuardLayout/GuardLayout";
import StatusBar from "../../components/StatusBar/StatusBar";

const ChatPage = () => {
  return (
    <Container size="md" h="100%" pt="md">
      <StatusBar />

      <Font variant="h2" mt="md">
        Chat
      </Font>
      <Font mt="md">
        {`Retrouves toutes les personnes avec qui tu as parlé sur l'app !`}
      </Font>
      <Tabs
        defaultValue="contact"
        h="80%"
        pt="md"
        sx={{
          ".mantine-1hher0m[data-active]": {
            borderBottom: "2px solid #3F3979 ",
          },
        }}
      >
        <Tabs.List grow>
          <Tabs.Tab value="contact">
            <Font>Chat</Font>
          </Tabs.Tab>
          <Tabs.Tab value="history">
            <Font>Rencontre</Font>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="contact" pt="xs" h="100%">
          <Stack pt="md" h="100%">
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
