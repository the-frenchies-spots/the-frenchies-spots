/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect } from "react";
import { PageLayout } from "../../components/Layout/PageLayout/PageLayout";
import { GuardLayout } from "../../components/Layout/GuardLayout/GuardLayout";
import NavigationLayout from "../../components/Layout/NavigationLayout/NavigationLayout";
import { useAuth } from "../../hooks";
import {
  BackButton,
  Container,
  Flex,
  InputForm,
  PrimaryButton,
  Stack,
  Switch,
  SwitchInput,
  TextInput,
} from "@frenchies-spots/material";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import { useForm } from "@frenchies-spots/hooks";
import StatusBar from "../../components/StatusBar/StatusBar";
import ProfilePhoto from "../../components/Profile/ProfilePhoto";
import { InputMaybe, ProfileInput } from "@frenchies-spots/gql";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const ConfigPage = () => {
  const { profile, onUpdateProfile } = useAuth();

  const router = useRouter();

  const form = useForm<ProfileInput>({
    initialValues: { pseudo: "", slogan: "", isLocated: false },
    validate: {
      pseudo: (value: InputMaybe<string> | undefined) =>
        (value?.length || 0) < 2,
    },
  });

  useEffect(() => {
    if (profile) {
      form.setValues({
        pseudo: profile?.pseudo || "",
        slogan: profile?.slogan || "",
        isLocated: profile?.isLocated || false,
      });
    }
  }, [profile]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (form.isValid()) {
      toast.promise(onUpdateProfile(form.values), {
        loading: "Mise a jour du profile...",
        success: <b>Mise à jour réussie !</b>,
        error: <b>Mise à jour échoué.</b>,
      });
    }
  };

  if (!profile) return <LoadingOverlay visible={true} />;
  return (
    <Container h="100%">
      <form onSubmit={handleSubmit} style={{ height: "100%" }}>
        <Stack justify="space-between" h="100%" py="xl">
          <Stack>
            <StatusBar />
            <BackButton onClick={() => router.push("/profile")} />

            <Flex justify="center" mb="xl" pb="xl">
              {profile && <ProfilePhoto profile={profile} />}
            </Flex>

            <Stack>
              <InputForm
                variant="filled"
                label="pseudo"
                {...form.getInputProps("pseudo")}
              />
              <InputForm
                variant="filled"
                label="slogan"
                {...form.getInputProps("slogan")}
              />
              <SwitchInput
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
          </Stack>

          <Stack>
            <PrimaryButton type="submit" disabled={!form.isValid()}>
              Enregistrer les modifications
            </PrimaryButton>
            <PrimaryButton variant="outline" color="red">
              Supprimer mon compte
            </PrimaryButton>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
};

ConfigPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <GuardLayout isProtected>
        <NavigationLayout>{page}</NavigationLayout>
      </GuardLayout>
    </PageLayout>
  );
};

export default ConfigPage;
