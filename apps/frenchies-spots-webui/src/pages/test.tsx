import React, { ReactElement } from "react";

import { Container, Font } from "@frenchies-spots/material";

import { PageLayout } from "../components";
import NavigationLayout from "../components/Layout/NavigationLayout/NavigationLayout";

const TestPage = () => {
  return (
    <Container size="sm" p={0} h="100%" sx={{ border: "2px solid" }}>
      <Font>Entraide partage voyage</Font>
    </Container>
  );
};

export default TestPage;

TestPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <NavigationLayout>{page}</NavigationLayout>
    </PageLayout>
  );
};
