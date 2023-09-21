import React from "react";

import {
  LoadingOverlay as MantineLoadingOverlay,
  type LoadingOverlayProps,
  DEFAULT_THEME as theme,
} from "@frenchies-spots/material";

const LoadingOverlay = (props: LoadingOverlayProps) => {
  return (
    <MantineLoadingOverlay
      {...props}
      loaderProps={{ color: "#3F3979" }}
      zIndex={1000}
      overlayBlur={0.5}
    />
  );
};

export default LoadingOverlay;
