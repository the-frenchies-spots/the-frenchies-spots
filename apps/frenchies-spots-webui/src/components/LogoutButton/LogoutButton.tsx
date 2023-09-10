import React from "react";

import { Button } from "@frenchies-spots/material";
import { useAuth } from "@/hooks";

const LogoutButton = () => {
  const { user, loading, onSignOut } = useAuth();

  if (!user) return null;
  return (
    <Button onClick={onSignOut} loading={loading}>
      Logout
    </Button>
  );
};

export default LogoutButton;
