import React, { ReactElement } from "react";
import { PageLayout } from "../components/Layout/PageLayout/PageLayout";
import NavigationLayout from "../components/Layout/NavigationLayout/NavigationLayout";

const Chat = () => {
  return <div>Chat</div>;
};

export default Chat;

Chat.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <NavigationLayout>{page}</NavigationLayout>
    </PageLayout>
  );
};
