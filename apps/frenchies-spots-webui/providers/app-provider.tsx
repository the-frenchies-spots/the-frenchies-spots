import React, { useState } from "react";
import { AppContext } from "../context";
import { useLocation } from "../hooks";
import { Tag } from "../types";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { location, place } = useLocation();

  const [tags, setTags] = useState<Tag[]>();
  const handleTagChange = (data: Tag[] | undefined) => {
    setTags(data);
  };

  return (
    <AppContext.Provider
      value={{
        currentLocation: location,
        currentPlace: place,
        tags,
        onTagChange: handleTagChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
