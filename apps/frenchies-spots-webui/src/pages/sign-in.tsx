import React, { ReactElement } from "react";

import { useForm } from "@frenchies-spots/hooks";
import {
  Container,
  TextInput,
  Button,
  Stack,
  Text,
  Group,
  Flex,
  BackButton,
  PrimaryButton,
  Box,
  Font,
} from "@frenchies-spots/material";
import { SignInInput } from "@frenchies-spots/gql";
import { useAuth } from "@/hooks";
import { PageLayout } from "../components";

import { GuardLayout } from "../components/Layout/GuardLayout/GuardLayout";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import AppTitle from "../components/AppTitle/AppTitle";
import Wave from "./../components/Wave/Wave";

const SignIn = () => {
  const { onSignIn } = useAuth();

  const router = useRouter();

  const form = useForm<SignInInput>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value: string) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      password: (value: string) => value.length < 6,
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    if (form.isValid()) {
      onSignIn(form.values);
    }
  };

  return (
    <Container size="sm" p={0} h="100%">
      <Flex direction="column" h="100%">
        <Stack sx={{ flexGrow: 1 }} p="xl">
          <BackButton onClick={() => router.push("/spots")} />
          <AppTitle />
        </Stack>
        <Box
          sx={{
            height: 400,
            position: "relative",
            width: "100%",
          }}
        >
          <Wave
            style={{ position: "absolute", top: -70 }}
            color="white"
            width="100%"
          />
          <form
            onSubmit={handleSubmit}
            style={{
              height: "100%",
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <Stack
              sx={{ backgroundColor: "white" }}
              h="100%"
              justify="space-between"
              p="md"
            >
              <Font variant="h2">Se Connecter</Font>
              <TextInput
                label="Email"
                type="email"
                {...form.getInputProps("email")}
                error={form.errors.email && "L'email est invalide"}
                required
              />
              <TextInput
                label="Mot de passe"
                type="password"
                {...form.getInputProps("password")}
                error={
                  form.errors.password &&
                  "Le mot de passe doit avoir au moins 6 caractères"
                }
                required
              />
              <PrimaryButton type="submit" style={{ marginTop: 16 }} w="100%">
                Se connecter
              </PrimaryButton>
              <Group position="apart">
                <Button
                  variant="subtle"
                  onClick={() => router.push("/sign-up")}
                >
                  Créer mon compte
                </Button>
                <Button variant="subtle">Mot de passe oublié</Button>
              </Group>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Container>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout opacity={0.5}>
      <GuardLayout>{page}</GuardLayout>
    </PageLayout>
  );
};
