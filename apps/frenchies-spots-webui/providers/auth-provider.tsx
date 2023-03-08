import React, { useEffect } from "react";
import { AuthContext } from "../context";
import { useAuth, useSession } from "../hooks";
import { TOKEN_STORAGE_KEY } from "../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { token, user, onSignUp, onLogin, sessionLogin, onSignOut } = useAuth();
  const { token: sessionToken } = useSession();

  useEffect(() => {
    AsyncStorage.getItem(TOKEN_STORAGE_KEY).then((token) => {
      if (token?.length) {
        sessionLogin();
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser: user,
        processLogin: onLogin,
        processSignUp: onSignUp,
        processSignOut: onSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
