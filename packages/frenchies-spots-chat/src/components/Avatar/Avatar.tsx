import React from "react";

import { Avatar as AvatarMaterial, Sx } from "@frenchies-spots/material";

interface AvatarProps {
  src?: string;
  color?: string;
  sx?: Sx;
}

export const Avatar = ({ src, sx, color = "#8F8FD9" }: AvatarProps) => {
  return (
    <AvatarMaterial
      src={src}
      sx={{
        ".mantine-Avatar-placeholder, .mantine-Avatar-placeholderIcon": {
          backgroundColor: color,
          color: color,
        },
        ...sx,
      }}
      radius="xl"
    />
  );
};
