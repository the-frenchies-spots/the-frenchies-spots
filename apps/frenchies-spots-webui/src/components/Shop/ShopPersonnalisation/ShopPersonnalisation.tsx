import React, { useState } from "react";
import {
  Box,
  Font,
  Group,
  Image,
  Log,
  PrimaryButton,
  Stack,
  Text,
} from "@frenchies-spots/material";
import { avatarList } from "@frenchies-spots/utils";
import AvatarCard from "./AvatarCard/AvatarCard";
import { useDisclosure } from "@frenchies-spots/hooks";
import CustomDrawer from "../../CustomDrawer/CustomDrawer";
import {
  AvatarEntity,
  MutationBuyAvatarArgs,
  mutations,
  queries,
} from "@frenchies-spots/gql";
import { IconLock, IconLockOpen } from "@frenchies-spots/icon";
import { useAuth } from "../../../hooks";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";

const ShopPersonnalisation = () => {
  const { profile, refresh, onUpdateProfile } = useAuth();

  const [buyAvatar] = useMutation<
    { buyAvatar: AvatarEntity },
    MutationBuyAvatarArgs
  >(mutations.buyAvatar, {
    refetchQueries: [queries.getLoginUser],
  });

  const [opened, { open, close }] = useDisclosure(false);
  const [avatar, setAvatar] = useState<AvatarEntity | null>(null);

  const handleClick = (newAvatar: AvatarEntity) => {
    setAvatar(newAvatar);
    open();
  };

  const handleBuyClick = (avatarId: string, pointsRequire: number) => {
    toast.promise(
      buyAvatar({
        variables: { avatarsInput: { avatarId, pointsRequire } },
      }).then(() => {
        refresh();
        close();
      }),
      {
        loading: "Echange en cours...",
        success: <b>Bravo vous avez débloqué un nouvelle avatar !</b>,
        error: <b>Une erreur est survenue.</b>,
      }
    );
  };

  const handleAvatarChange = (avatarUrl: string) => {
    toast.promise(
      onUpdateProfile({ avatarUrl }).then(() => {
        refresh();
        close();
      }),
      {
        loading: "Changement d'avatar cours...",
        success: <b>{`Vous avez changé d'avatar !`}</b>,
        error: <b>Une erreur est survenue.</b>,
      }
    );
  };

  const avatarUnlockedList = profile?.avatars?.map((avatar) => avatar.avatarId);

  const isUnlocked = (id: string) => {
    return avatarUnlockedList?.includes(id);
  };

  return (
    <>
      <Stack>
        {profile &&
          avatarList?.map((avatar) => {
            return (
              <AvatarCard
                key={avatar.id}
                avatar={avatar}
                onClick={handleClick}
                isUnlocked={isUnlocked(avatar.id) || false}
                isSelected={avatar.avatarUrl === profile.avatarUrl}
              />
            );
          })}
      </Stack>
      <CustomDrawer opened={opened} onClose={close}>
        {avatar && (
          <Stack p="md" h={500} justify="space-between">
            <Stack>
              <Font variant="h2">Récapitulatif</Font>
              <Group grow>
                <Box h={120} sx={{ position: "relative", width: 80 }}>
                  <Image src={avatar.avatarUrl} alt={avatar.id} />
                </Box>
                <Stack h="100%">
                  <Font variant="h5">Customize ton avatar</Font>
                  {!avatar.isPublic && !isUnlocked(avatar.id) && (
                    <Font variant="subtitle2" color="back">
                      {avatar.pointsRequire} points
                    </Font>
                  )}
                  {avatar.isPublic || isUnlocked(avatar.id) ? (
                    <IconLockOpen color="#EBA701" size={40} />
                  ) : (
                    <IconLock color="#707070" size={40} />
                  )}
                </Stack>
              </Group>
            </Stack>
            {avatar.isPublic || isUnlocked(avatar.id) ? (
              <PrimaryButton
                onClick={() => handleAvatarChange(avatar.avatarUrl)}
              >
                Sélectionner cette avatar
              </PrimaryButton>
            ) : (
              <PrimaryButton
                onClick={() => handleBuyClick(avatar.id, avatar.pointsRequire)}
              >
                Echanger mes points
              </PrimaryButton>
            )}
          </Stack>
        )}
      </CustomDrawer>
    </>
  );
};

export default ShopPersonnalisation;
