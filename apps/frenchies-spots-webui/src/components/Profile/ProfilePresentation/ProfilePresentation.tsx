import React from "react";

import { Box, Font, Stack } from "@frenchies-spots/material";
import SpotPicture from "../../Spots/SpotPicture/SpotPicture";
import { ProfileEntity } from "@frenchies-spots/gql";
import { getRandomNumber } from "./../../../utils/get-random-number";

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
        <SpotPicture
          src={`${src}?r=${getRandomNumber(9999, 654668866888)}`}
          h="100%"
        />
      </Box>
      <Font variant="h3">{profile.pseudo}</Font>
    </Stack>
  );
};

export default ProfilePresentation;
