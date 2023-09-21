import React from "react";

import {
  BackButton,
  Font,
  Group,
  PrimaryButton,
  Stack,
} from "@frenchies-spots/material";
import {
  DeleteResponse,
  MutationAcceptFriendContactArgs,
  ProfileEntity,
  mutations,
} from "@frenchies-spots/gql";
import ProfilePresentation from "../ProfilePresentation/ProfilePresentation";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";

interface ProfileRequestPageProps {
  profile: ProfileEntity;
  notifId: string;
}

const ProfileRequestPage = (props: ProfileRequestPageProps) => {
  const { profile, notifId } = props;

  const [deleteNotif] = useMutation<DeleteResponse>(mutations.deleteNotif);
  const [acceptFriendContact] = useMutation<
    { acceptFriendContact: boolean },
    MutationAcceptFriendContactArgs
  >(mutations.acceptFriendContact);

  const router = useRouter();

  const handleDeleteNotif = async () => {
    return deleteNotif({ variables: { notifId } });
  };

  const handleClick = () => {
    toast.promise(
      Promise.all([
        acceptFriendContact({ variables: { contactId: profile.id } }),
        handleDeleteNotif(),
      ]),
      {
        loading: "Validation en cours...",
        success: <b>{`Vous avez un nouvel amis !`}</b>,
        error: <b>Un problème est survenue !</b>,
      }
    );
    router.push("/profile");
  };
  const handleCancel = () => {
    handleDeleteNotif();
  };

  return (
    <Stack
      align="center"
      justify="space-around"
      p="md"
      h="100%"
      sx={{ position: "relative" }}
    >
      <BackButton
        sx={{ position: "absolute", top: 0, left: 0 }}
        m="md"
        onClick={() => router.back()}
      />

      <ProfilePresentation profile={profile} />

      <Font variant="h2">{`Demande d'amis ?`} </Font>

      <Group w="100%" grow>
        <PrimaryButton onClick={handleClick}>Accepté</PrimaryButton>
        <PrimaryButton onClick={handleCancel} variant="outline">
          Refusé
        </PrimaryButton>
      </Group>
    </Stack>
  );
};

export default ProfileRequestPage;
