import { ProfileEntity } from "@frenchies-spots/gql";
import { Font } from "@frenchies-spots/material";
import React from "react";

interface ProfileDeviseProps {
  profile: ProfileEntity;
}

const ProfileDevise = (props: ProfileDeviseProps) => {
  const { profile } = props;
  return <Font>{profile?.slogan || "Cet utilisateur n'a pas de slogan"}</Font>;
};

export default ProfileDevise;
