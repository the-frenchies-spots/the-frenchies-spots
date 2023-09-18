import React, { ReactElement, useEffect, useState } from "react";

import { useForm } from "@frenchies-spots/hooks";
import {
  Container,
  Paper,
  TextInput,
  Button,
  Log,
  LoadingOverlay,
  Flex,
  Stack,
  ScrollArea,
} from "@frenchies-spots/material";
import { SignUpInput } from "@frenchies-spots/gql";
import { useAuth } from "@/hooks";
import { PageLayout, SwiperFrame } from "../components";
import { GuardLayout } from "../components/Layout/GuardLayout/GuardLayout";

import { SwiperSlide } from "swiper/react";
import { SwiperForm } from "./../components/SwiperForm/SwiperForm";
import { Avatar, BubbleChat } from "@frenchies-spots/chat";
import Bubble from "@frenchies-spots/chat/src/components/Bubble/Bubble";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const SignUp = () => {
  const { loading, onSignUp } = useAuth();

  const router = useRouter();
  const [isEmail, setIsEmail] = useState<boolean>(false);

  const form = useForm<SignUpInput & { comfirmPassword: string }>({
    initialValues: {
      pseudo: "",
      email: "",
      password: "",
      comfirmPassword: "",
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
      toast.promise(
        onSignUp({
          pseudo: form.values.pseudo,
          email: form.values.email,
          password: form.values.password,
        }).then(() => router.push("/spots")),
        {
          loading: "Connexion...",
          success: (
            <b>{`Bienvenue ${form.values.pseudo}, l'aventure vous attends !`}</b>
          ),
          error: <b>Une erreur est survenue !</b>,
        }
      );
    }
  };

  useEffect(() => {
    if (form.isValid("email")) {
      setIsEmail(true);
    }
  }, [form]);

  return (
    <Container size="sm">
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <SwiperForm onSubmit={handleSubmit}>
        <SwiperSlide>
          <SwiperFrame
            prevLabel=""
            disabled={!form.isValid("pseudo") || !form.isValid("email")}
          >
            <ScrollArea pt="xl">
              <Flex gap="md" direction="row" w="100%" justify={"start"}>
                <Avatar color="white" />
                <Stack w="100%" spacing={1}>
                  <Bubble
                    message="Crée ton compte pour pouvoir demander de l'aide, enregistrer et créer des annonces !"
                    isParticipant={true}
                    w="90%"
                  />
                  <Bubble
                    message="Rentre ton email pour qu'on fasse un peu plus connaissance !"
                    isParticipant={true}
                    w="90%"
                    my={0}
                  />
                </Stack>
              </Flex>

              <Stack mt="md">
                <TextInput
                  label="Email"
                  type="email"
                  {...form.getInputProps("email")}
                  error={
                    form.values.password !== form.values.comfirmPassword &&
                    "Le password ne corespond pas"
                  }
                  required
                />

                {isEmail && (
                  <>
                    <Flex
                      mt="md"
                      gap="md"
                      direction="row"
                      w="100%"
                      justify={"start"}
                    >
                      <Avatar color="white" />
                      <Stack w="100%" spacing={1}>
                        <Bubble
                          message="Rentre ton pseudo. Fais toi plaisir tu peux être qui tu veux aujourd'hui !"
                          isParticipant={true}
                          w="90%"
                        />
                      </Stack>
                    </Flex>
                    <TextInput
                      label="Pseudo"
                      type="text"
                      {...form.getInputProps("pseudo")}
                      error={
                        form.errors.pseudo &&
                        "Le pseudo doit avoir au moins 2 caractères"
                      }
                      required
                    />
                  </>
                )}
              </Stack>
            </ScrollArea>
          </SwiperFrame>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperFrame
            type="submit"
            nextLabel="valider"
            disabled={
              !form.isValid("password") ||
              form.values.password !== form.values.comfirmPassword
            }
          >
            <Flex mt="md" gap="md" direction="row" w="100%" justify={"start"}>
              <Avatar color="white" />
              <Stack w="100%" spacing={1}>
                <Bubble
                  message="Deux pour le prix d'un ! Marque ton mot de passe, puis comfirme-le."
                  isParticipant={true}
                  w="90%"
                />
              </Stack>
            </Flex>

            <Stack>
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
              <TextInput
                label="Comfirme Mot de passe"
                type="password"
                {...form.getInputProps("comfirmPassword")}
                error={
                  form.errors.comfirmPassword &&
                  "Le mot de passe doit avoir au moins 6 caractères"
                }
                required
              />
            </Stack>
          </SwiperFrame>
        </SwiperSlide>
      </SwiperForm>
    </Container>
  );
};

export default SignUp;

SignUp.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout opacity={0.5}>
      <GuardLayout>{page}</GuardLayout>
    </PageLayout>
  );
};
