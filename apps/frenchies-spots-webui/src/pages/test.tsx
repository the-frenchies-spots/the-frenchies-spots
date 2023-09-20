import React, { ReactElement } from "react";

import {
  Container,
  Font,
  PrimaryButton,
  PrimaryButtonLittle,
  SecondaryButton,
  Stack,
} from "@frenchies-spots/material";

import { PageLayout } from "../components";
import NavigationLayout from "../components/Layout/NavigationLayout/NavigationLayout";

const TestPage = () => {
  return (
    <Container size="sm" p={0} h="100%" sx={{ border: "2px solid" }}>
      <Font variant="h1">Entraide partage voyage</Font>
      <Font variant="h2">Entraide partage voyage</Font>
      <Font variant="h3">Entraide partage voyage</Font>
      <Font variant="h4">Entraide partage voyage</Font>
      <Font variant="h5">Entraide partage voyage</Font>
      <Font variant="body">Entraide partage voyage</Font>
      <Font variant="subtitle1">Entraide partage voyage</Font>
      <Font variant="subtitle2">Entraide partage voyage</Font>
      <Font variant="caption">Entraide partage voyage</Font>
      <Stack p="xl">
        <SecondaryButton>Tout</SecondaryButton>
        <SecondaryButton selected>Tout</SecondaryButton>
        <PrimaryButton>Explore</PrimaryButton>
        <PrimaryButton variant="outline">Contacter</PrimaryButton>
        <PrimaryButtonLittle>Acheter des points</PrimaryButtonLittle>
        <PrimaryButton variant="subtle">Déconnexion</PrimaryButton>
        <PrimaryButton variant="subtle" color="purple">
          Retour
        </PrimaryButton>
      </Stack>
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
