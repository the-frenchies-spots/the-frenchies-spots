import React, { useState } from "react";

import toast from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { amountPoints, formatStripeEuro } from "@frenchies-spots/utils";
import {
  Box,
  Button,
  Font,
  Group,
  PrimaryButton,
  Stack,
  Text,
} from "@frenchies-spots/material";
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
        loading: "Chargement...",
        success: <b>{`Vous venez d'obtenir ${amount} !`}</b>,
        error: <b>{`L'achat de point a échoué.`}</b>,
      }
    );
  };

  return (
    <Box h="100%" mb={500}>
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <Stack pt="xl">
        <Stack align="center" spacing={54}>
          <Image
            src="/images/shop_draw.svg"
            alt="shop_draw"
            height={200}
            width={200}
          />

          <PriceInput price={price} onPriceChange={setPrice} />
          <Group spacing={5}>
            <Font variant="h3">{amountPoints(price)}</Font>
            <Font> points</Font>
          </Group>
        </Stack>

        <PrimaryButton onClick={open} w="100%" mt="md">
          ACHETER
        </PrimaryButton>
        <Box py={20} />
      </Stack>
      <CustomDrawer opened={opened} onClose={close}>
        <Stack p="md">
          <Font variant="h2">Récapitulatif</Font>
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
              <Font>{amountPoints(price)} points</Font>
              <Font>{price} €</Font>
            </Stack>
          </Group>
          <Font>Paiement</Font>
          <StripeContainer onCheckout={handleCheckout}>
            <Group mt="md" grow>
              <PrimaryButton variant="subtle" onClick={close}>
                Retour
              </PrimaryButton>
              <PrimaryButton type="submit">PAYER</PrimaryButton>
            </Group>
          </StripeContainer>
        </Stack>
      </CustomDrawer>
    </Box>
  );
};

export default ShopBuyPoints;
