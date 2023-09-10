import React, { ReactElement } from "react";

import { useForm } from "@frenchies-spots/hooks";
import {
  Container,
  Paper,
  TextInput,
  Button,
  Log,
  LoadingOverlay,
} from "@frenchies-spots/material";
import { SignUpInput } from "@frenchies-spots/gql";
import { useAuth } from "@/hooks";
import { PageLayout } from "../components";

const SignUp = () => {
  const { user, loading, onSignUp } = useAuth();

  const form = useForm<SignUpInput>({
    initialValues: {
      pseudo: "Test",
      email: "test@test21.com",
      password: "azerty",
    },
    validate: {
      pseudo: (value: string) => value.length < 2,
      email: (value: string) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      password: (value: string) => value.length < 6,
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (form.isValid()) {
      onSignUp(form.values);
    }
  };

  return (
    <Container size="sm">
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <Log value={{ user }} />
      <Paper p="lg" shadow="xs" style={{ maxWidth: 400, margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Pseudo"
            type="text"
            {...form.getInputProps("pseudo")}
            error={
              form.errors.pseudo && "Le pseudo doit avoir au moins 2 caractères"
            }
            required
          />
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

export default SignUp;

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
