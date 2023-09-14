import React from "react";

import { Button } from "@frenchies-spots/material";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";

const LogoutButton = () => {
  const { user, loading, onSignOut } = useAuth();
  const router = useRouter();

  const handleLogoutClick = () => {
    onSignOut();
    router.push("/sign-in");
  };

  if (!user) return null;
  return (
    <Button variant="subtle" onClick={handleLogoutClick} loading={loading}>
      Déconnexion
    </Button>
  );
};

export default LogoutButton;
