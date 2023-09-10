import React from "react";

import { Button } from "@frenchies-spots/material";
import { useAuth } from "@/hooks";

const LogoutButton = () => {
  const { authenticated, loading, onSignOut } = useAuth();

  if (!authenticated) return null;
  return (
    <Button onClick={onSignOut} loading={loading}>
      Logout
    </Button>
  );
};

export default LogoutButton;
