import React, { ReactElement } from "react";

import {
  Container,
  Font,
  InputForm,
  PrimaryButton,
  PrimaryButtonLittle,
  SecondaryButton,
  Stack,
} from "@frenchies-spots/material";

import { PageLayout } from "../components";
import NavigationLayout from "../components/Layout/NavigationLayout/NavigationLayout";

const TestPage = () => {
  return (
    <Container size="sm" h="100%" sx={{ border: "2px solid" }} p="md">
      <Font variant="h1">Entraide partage voyage</Font>
      <InputForm label="Je suis un label" />
      <InputForm label="Je suis un label" variant="filled" />
      <InputForm label="Je suis un label" error={true} errorMessage="test" />
      <InputForm
        label="Je suis un label"
        variant="filled"
        error={true}
        errorMessage="test"
      />
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
