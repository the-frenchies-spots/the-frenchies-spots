import React, { ReactElement } from "react";

import { Container } from "@frenchies-spots/material";

import { PageLayout } from "../components";
import NavigationLayout from "../components/Layout/NavigationLayout/NavigationLayout";
import Typography from "@frenchies-spots/material/src/Typography/Typography";

const TestPage = () => {
  return (
    <Container size="sm" p={0} h="100%" sx={{ border: "2px solid" }}>
      <Typography>Entraide partage voyage</Typography>
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
