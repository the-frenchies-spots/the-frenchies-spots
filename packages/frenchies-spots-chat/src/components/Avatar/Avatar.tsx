import React from "react";

import { Avatar as AvatarMaterial } from "@frenchies-spots/material";

interface AvatarProps {
  src?: string;
}

export const Avatar = ({ src }: AvatarProps) => {
  return (
    <AvatarMaterial
      src={src}
      sx={{
        ".mantine-Avatar-placeholder, .mantine-Avatar-placeholderIcon": {
          backgroundColor: "#8F8FD9",
          color: "#8F8FD9",
        },
      }}
      radius="xl"
    />
  );
};
