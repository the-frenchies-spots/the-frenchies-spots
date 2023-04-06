import React, { useEffect } from "react";
import { AppContext } from "../context";
import { useLocation } from "../hooks";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { location, place } = useLocation();

  return (
    <AppContext.Provider
      value={{
        currentLocation: location,
        currentPlace: place,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
