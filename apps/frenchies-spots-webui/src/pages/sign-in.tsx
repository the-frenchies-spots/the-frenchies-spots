import React, { ReactElement } from "react";

import { useForm } from "@frenchies-spots/hooks";
import {
  Container,
  Paper,
  TextInput,
  Button,
  Log,
} from "@frenchies-spots/material";
import { SignInInput } from "@frenchies-spots/gql";
import { useAuth } from "@/hooks";
import { PageLayout } from "../components";

import { signIn, useSession } from "next-auth/react";

const SignIn = () => {
  const { user, onSignIn } = useAuth();

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
      onSignIn(form.values);
    }
  };

  return (
    <Container size="sm">
      <Log value={{ user }} />
      <Paper p="lg" shadow="xs" style={{ maxWidth: 400, margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
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
          <Button type="submit" style={{ marginTop: 16 }}>
            Se connecter
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
