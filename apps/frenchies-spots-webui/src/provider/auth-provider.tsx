import React from "react";
import { AuthContext } from "@/context";
import { useInitAuth } from "@/hooks";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;

  const {
    token,
    user,
    loading,
    onSignUp,
    onSignIn,
    refresh,
    onDeleteAccount,
    onSignOut,
    setUser,
  } = useInitAuth();

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser: user,
        loading,
        refresh,
        processSignIn: onSignIn,
        processSignUp: onSignUp,
        processSignOut: onSignOut,
        processDeleteAccount: onDeleteAccount,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
