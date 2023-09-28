import React from "react";

import { ProfileUserIconFilled } from "@frenchies-spots/icon";

import { ActionIcon } from "@frenchies-spots/material";

import { useRouter } from "next/router";

const ConnexionButton = () => {
  const router = useRouter();

  return (
    <ActionIcon
      onClick={() => router.push("/sign-in")}
      sx={{
        backgroundColor: "#EBA701",
        borderRadius: 50,
        "&:hover": {
          backgroundColor: "#EBA701",
        },
      }}
    >
      <ProfileUserIconFilled color="white" size={20} />
    </ActionIcon>
  );
};

export default ConnexionButton;
