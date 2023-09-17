import React, { ReactNode, useEffect } from "react";

import { useLocationCtx } from "@frenchies-spots/map";
import {
  MutationUpdateProfileArgs,
  UserEntity,
  mutations,
} from "@frenchies-spots/gql";
import { useMutation } from "@apollo/client";
import { useAuth } from "../hooks/use-auth";

interface LocationProviderProps {
  children: ReactNode;
}

const LocationProvider = ({ children }: LocationProviderProps) => {
  const { user } = useAuth();
  const { location } = useLocationCtx();

  const [updateProfile] = useMutation<
    {
      updateProfile: UserEntity;
    },
    MutationUpdateProfileArgs
  >(mutations.updateProfile);

  useEffect(() => {
    if (user && location) {
      const { lat, lng } = location.coordinates;
      updateProfile({
        variables: {
          profileInput: {
            location: { type: "Point", coordinates: [lng, lat] },
          },
        },
      });
    }
  }, [user, location, updateProfile]);

  return <>{children}</>;
};

export default LocationProvider;
