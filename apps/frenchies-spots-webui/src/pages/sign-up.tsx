import React, { ReactElement, useEffect, useState } from "react";

import { useForm } from "@frenchies-spots/hooks";
import {
  Container,
  TextInput,
  Flex,
  Stack,
  ScrollArea,
  Group,
  BackButton,
  Text,
  Log,
  Switch,
} from "@frenchies-spots/material";
import { SignUpInput } from "@frenchies-spots/gql";
import { useAuth } from "@/hooks";
import { PageLayout, SwiperFrame } from "../components";
import { GuardLayout } from "../components/Layout/GuardLayout/GuardLayout";

import { SwiperSlide } from "swiper/react";
import { SwiperForm } from "./../components/SwiperForm/SwiperForm";
import { Avatar, BubbleChat } from "@frenchies-spots/chat";
import Bubble from "@frenchies-spots/chat/src/components/Bubble/Bubble";
import { useRouter } from "next/router";
import LoadingOverlay from "../components/LoadingOverlay/LoadingOverlay";
import AvatarSwiper from "../components/Profile/AvatarSwiper/AvatarSwiper";

const SignUp = () => {
  const { loading, onSignUp } = useAuth();

  const [isEmail, setIsEmail] = useState<boolean>(false);

  const router = useRouter();

  const form = useForm<SignUpInput & { comfirmPassword: string }>({
    initialValues: {
      pseudo: "",
      isLocated: false,
      avatarUrl:
        "https://res.cloudinary.com/dw2hb8vmu/image/upload/v1695397559/frenchies-spots/avatar/AVATAR_3_tomehg.gif",
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
      onSignUp({
        pseudo: form.values.pseudo,
        email: form.values.email,
        password: form.values.password,
        isLocated: true,
        avatarUrl: form.values.avatarUrl,
      });
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
      <Group h="10vh">
        <BackButton onClick={() => router.push("/sign-in")} ml={8} mt={4} />
      </Group>
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
            nextLabel="suivant"
            prevColor="superLightGrey"
          >
            <Flex gap="md" direction="row" w="100%" justify={"start"}>
              <Avatar color="white" />
              <Stack w="100%" spacing={1}>
                <Bubble
                  message="Choisis ton avatar ! Les autres te verront sous cette forme sur la carte."
                  isParticipant={true}
                  w="90%"
                />
              </Stack>
            </Flex>
            <AvatarSwiper {...form.getInputProps("avatarUrl")} />
          </SwiperFrame>
        </SwiperSlide>

        <SwiperSlide>
          <SwiperFrame
            type="submit"
            prevColor="superLightGrey"
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

              <Switch
                defaultChecked
                label="Autoriser la localisation ?"
                checked={form.getInputProps("isLocated").value}
                onChange={(event) =>
                  form
                    .getInputProps("isLocated")
                    .onChange(event.currentTarget.checked)
                }
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
