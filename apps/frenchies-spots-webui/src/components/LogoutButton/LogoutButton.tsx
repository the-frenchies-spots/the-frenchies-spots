import React from "react";

import { Button } from "@frenchies-spots/material";
import { useAuth } from "@/hooks";

const LogoutButton = () => {
  const { loading, onSignOut } = useAuth();

  return (
    <Button onClick={onSignOut} loading={loading}>
      Logout
    </Button>
  );
};

export default LogoutButton;
