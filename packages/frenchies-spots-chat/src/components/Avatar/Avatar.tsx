import React from "react";

import { Avatar as AvatarMaterial } from "@frenchies-spots/material";

interface AvatarProps {
  src?: string;
  color?: string;
}

export const Avatar = ({ src, color = "#8F8FD9" }: AvatarProps) => {
  return (
    <AvatarMaterial
      src={src}
      sx={{
        ".mantine-Avatar-placeholder, .mantine-Avatar-placeholderIcon": {
          backgroundColor: color,
          color: color,
        },
      }}
      radius="xl"
    />
  );
};
