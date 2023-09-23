import React, { ReactElement } from "react";

import { Container, Stack, Tabs, Text } from "@frenchies-spots/material";

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
        <Text>Espace boutique</Text>
        <Text>tu as {profile?.gamePoint} points</Text>
      </Stack>
      <Tabs defaultValue="buy_points" h="80%">
        <Tabs.List grow>
          <Tabs.Tab value="personalization">Personnalisation</Tabs.Tab>
          <Tabs.Tab value="buy_points">Acheter des points</Tabs.Tab>
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
