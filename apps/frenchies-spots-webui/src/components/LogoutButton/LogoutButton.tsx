import React from "react";

import { Button, PrimaryButton } from "@frenchies-spots/material";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const LogoutButton = () => {
  const { user, loading, onSignOut } = useAuth();
  const router = useRouter();

  const handleLogoutClick = () => {
    toast.promise(
      onSignOut().then(() => router.push("/sign-in")),
      {
        loading: "Déconnexion...",
        success: <b>À bientôt !</b>,
        error: <b>Une erreur est survenue !</b>,
      }
    );
    router.push("/sign-in");
  };

  if (!user) return null;
  return (
    <PrimaryButton
      variant="subtle"
      onClick={handleLogoutClick}
      loading={loading}
    >
      Déconnexion
    </PrimaryButton>
  );
};

export default LogoutButton;
