import React, { useState } from "react";

import toast from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { amountPoints, formatStripeEuro } from "@frenchies-spots/utils";
import { Box, Button, Group, Stack, Text } from "@frenchies-spots/material";
import {
  MutationBuyPointArgs,
  UserEntity,
  mutations,
} from "@frenchies-spots/gql";

import { useAuth } from "../../../hooks/use-auth";
import PriceInput from "../../InputCustom/PriceInput/PriceInput";
import StripeContainer from "../../Stripe/StripeContainer/StripeContainer";
import CustomDrawer from "../../CustomDrawer/CustomDrawer";
import { useDisclosure } from "@frenchies-spots/hooks";
import Image from "next/image";
import LoadingOverlay from "../../LoadingOverlay/LoadingOverlay";

const ShopBuyPoints = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const { setUser } = useAuth();

  const [price, setPrice] = useState<number>(10);

  const [buyPoint, { loading }] = useMutation<
    { buyPoint: UserEntity },
    MutationBuyPointArgs
  >(mutations.buyPoint);

  const handleCheckout = (paymentId: string) => {
    const amount = formatStripeEuro(price);
    toast.promise(
      buyPoint({ variables: { buyPoint: { amount, paymentId } } }).then(
        (response) => {
          const userUpdate = response.data?.buyPoint;
          if (userUpdate) setUser(userUpdate);
          close();
        }
      ),
      {
        loading: "Saving...",
        success: <b>{`Vous venez d'obtenir ${amount} !`}</b>,
        error: <b>{`L'achat de point à échoué.`}</b>,
      }
    );
  };

  return (
    <Box h="100%">
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <Stack justify="space-between" pt="xl" h="100%">
        <Stack align="center" spacing={54}>
          <Image
            src="/images/shop_draw.svg"
            alt="shop_draw"
            height={200}
            width={200}
          />
          <PriceInput price={price} onPriceChange={setPrice} />
          <Text>{amountPoints(price)} points</Text>
        </Stack>

        <Button onClick={open} w="100%">
          ACHETER
        </Button>
      </Stack>
      <CustomDrawer opened={opened} onClose={close}>
        <Stack p="md">
          <Text>Récapitulatif</Text>
          <Group grow>
            <Box>
              <Image
                src="/images/shop_draw.svg"
                alt="shop_draw"
                height={200}
                width={200}
              />
            </Box>

            <Stack>
              <Text>{amountPoints(price)} points</Text>
              <Text>{price} €</Text>
            </Stack>
          </Group>
          <Text>Paiement</Text>
          <StripeContainer onCheckout={handleCheckout}>
            <Group mt="md" grow>
              <Button variant="subtle" onClick={close}>
                Retour
              </Button>
              <Button type="submit">PAYER</Button>
            </Group>
          </StripeContainer>
        </Stack>
      </CustomDrawer>
    </Box>
  );
};

export default ShopBuyPoints;
