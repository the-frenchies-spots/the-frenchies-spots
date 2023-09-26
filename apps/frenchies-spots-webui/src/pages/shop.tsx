import React, { ReactElement } from "react";

import { Container, Font, Stack, Tabs, Text } from "@frenchies-spots/material";

import { PageLayout } from "../components";
import NavigationLayout from "../components/Layout/NavigationLayout/NavigationLayout";
import { useAuth } from "../hooks/use-auth";
import ShopBuyPoints from "../components/Shop/ShopBuyPoints/ShopBuyPoints";
import StatusBar from "../components/StatusBar/StatusBar";
import { GuardLayout } from "../components/Layout/GuardLayout/GuardLayout";
import ShopPersonnalisation from "../components/Shop/ShopPersonnalisation/ShopPersonnalisation";

// Carte de test
// 4242 4242 4242 4242
// 02/42
// 4242

const Shop = () => {
  const { profile } = useAuth();
  return (
    <Container size="md" h="100%">
      <Stack mt="md" mb="md">
        <StatusBar />
        <Font variant="h2">Espace boutique</Font>
        <Font>
          Tu as <b>{profile?.gamePoint}</b> points
        </Font>
      </Stack>
      <Tabs
        defaultValue="personalization"
        h="80%"
        sx={{
          ".mantine-1hher0m[data-active]": {
            borderBottom: "2px solid #3F3979 ",
          },
        }}
      >
        <Tabs.List grow>
          <Tabs.Tab value="personalization">
            <Font>Personnalisation</Font>
          </Tabs.Tab>
          <Tabs.Tab value="buy_points">
            <Font>Acheter des points</Font>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="personalization" pt="xs" h="80%">
          <ShopPersonnalisation />
        </Tabs.Panel>

        <Tabs.Panel value="buy_points" pt="xs" h="80%">
          <ShopBuyPoints />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default Shop;

Shop.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <GuardLayout isProtected>
        <NavigationLayout>{page}</NavigationLayout>
      </GuardLayout>
    </PageLayout>
  );
};
