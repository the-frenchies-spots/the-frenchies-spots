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
} from "@frenchies-spots/material";
import { SignInInput } from "@frenchies-spots/gql";
import { useAuth } from "@/hooks";
import { PageLayout } from "../components";

import { GuardLayout } from "../components/Layout/GuardLayout/GuardLayout";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const SignIn = () => {
  const { onSignIn } = useAuth();

  const router = useRouter();

  const form = useForm<SignInInput>({
    initialValues: {
      email: "test@test21.com",
      password: "azerty",
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
      toast.promise(
        onSignIn(form.values).then(() => router.push("/spots")),
        {
          loading: "Connexion...",
          success: <b>{`Bon retour parmis nous !`}</b>,
          error: <b>Une erreur est survenue !</b>,
        }
      );
    }
  };

  return (
    <Container size="sm" p={0} h="100%">
      <Flex direction="column" h="100%">
        <Stack sx={{ flexGrow: 1 }} p="xl">
          <BackButton onClick={() => router.push("/spots")} />
          <Stack>
            <Text>Entraide</Text>
            <Text>Partage</Text>
            <Text>Voyage</Text>
          </Stack>
        </Stack>

        <form onSubmit={handleSubmit} style={{ height: 400 }}>
          <Stack
            sx={{ backgroundColor: "white" }}
            h="100%"
            justify="space-between"
            p="md"
          >
            <Text>Se Connecter</Text>
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
            <Button type="submit" style={{ marginTop: 16 }} w="100%">
              Se connecter
            </Button>
            <Group position="apart">
              <Button variant="subtle" onClick={() => router.push("/sign-up")}>
                Créer mon compte
              </Button>
              <Button variant="subtle">Mot de passe oublié</Button>
            </Group>
          </Stack>
        </form>
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
