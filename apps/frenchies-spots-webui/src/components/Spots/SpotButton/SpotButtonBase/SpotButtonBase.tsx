import React, { ReactNode } from "react";
import { useStyles } from "./SpotButtonBase.styles";
import { Flex, Loader } from "@frenchies-spots/material";
import type { FlexProps } from "@frenchies-spots/material";

export interface SpotButtonBaseProps extends Omit<FlexProps, "children"> {
  children: ReactNode;
  loading?: boolean;
}
const SpotButtonBase = (props: SpotButtonBaseProps) => {
  const { children, loading = false, className, ...other } = props;
  const { cx, classes } = useStyles();

  return (
    <Flex
      className={cx(classes.container, className)}
      justify="center"
      align="center"
      {...other}
    >
      {loading ? (
        <Loader sx={(theme) => ({ color: theme.colors.yellow[0] })} />
      ) : (
        children
      )}
    </Flex>
  );
};

export default SpotButtonBase;
