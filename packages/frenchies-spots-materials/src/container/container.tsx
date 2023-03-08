import React from "react";
import { Box, BoxProps } from "../box";
import { StyleParamType } from "./style-param-type";
import { styles } from "./container-styles";

export interface ContainerProps extends BoxProps, StyleParamType {}

const Container = (props: ContainerProps) => {
  const {
    align = undefined,
    justify = undefined,
    direction = "column",
    center = false,
    style: extStyle = {},
    ...other
  } = props;
  const style = styles({ align, justify, direction, center });
  return (
    <Box {...other} style={{ ...style.container, ...(extStyle as Object) }} />
  );
};

export default Container;
