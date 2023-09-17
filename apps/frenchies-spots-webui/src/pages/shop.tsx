import React, { ReactElement, useState } from "react";

import { useMutation } from "@apollo/client";
import {
  MutationBuyPointArgs,
  UserEntity,
  mutations,
} from "@frenchies-spots/gql";
import {
  Button,
  Container,
  LoadingOverlay,
  Stack,
  Tabs,
  Text,
} from "@frenchies-spots/material";

import { PageLayout } from "../components";
import StripeContainer from "../components/Stripe/StripeContainer/StripeContainer";
import NavigationLayout from "../components/Layout/NavigationLayout/NavigationLayout";
import { amountPoints, formatStripeEuro } from "@frenchies-spots/utils";
import PriceInput from "../components/InputCustom/PriceInput/PriceInput";
import { useAuth } from "../hooks/use-auth";
import toast from "react-hot-toast";
import ShopBuyPoints from "../components/Shop/ShopBuyPoints/ShopBuyPoints";
import StatusBar from "../components/StatusBar/StatusBar";

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
          Personnalisation
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
      <NavigationLayout>{page}</NavigationLayout>
    </PageLayout>
  );
};
