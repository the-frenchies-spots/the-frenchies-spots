import React from "react";

import { Box, Font, Stack } from "@frenchies-spots/material";
import SpotPicture from "../../Spots/SpotPicture/SpotPicture";
import { ProfileEntity } from "@frenchies-spots/gql";

interface ProfilePresentationProps {
  profile: ProfileEntity;
}

const ProfilePresentation = (props: ProfilePresentationProps) => {
  const { profile } = props;

  const src = profile.photoUrl || profile?.avatarUrl;

  return (
    <Stack align="center">
      <Box
        sx={{
          borderRadius: 110,
          border: "1px solid #E4E4E4",
          overflow: "hidden",
        }}
        w={110}
        h={110}
      >
        <SpotPicture src={src} h="100%" />
      </Box>
      <Font variant="h3">{profile.pseudo}</Font>
    </Stack>
  );
};

export default ProfilePresentation;
