import React, { ReactNode } from "react";
import { Box } from "@frenchies-spots/materials";
import { Image } from "react-native";
import { styles } from "./page-styles";
import { Navbar } from "../navbar";

interface PageProps {
  isBackground?: boolean;
  children: ReactNode;
  opacity?: number;
  isNavBar?: boolean;
  isPadding?: boolean;
}

export const Page = (props: PageProps) => {
  const {
    children,
    isPadding = true,
    isBackground = true,
    isNavBar = true,
    opacity = 0,
  } = props;

  const style = styles(opacity, isPadding);
  return (
    <Box style={style.container}>
      {isNavBar && <Navbar />}
      <Box style={style.background}>
        {isBackground && (
          <Image
            source={require("../../assets/images/backgroundImg.jpg")}
            style={style.image}
          />
        )}
        {opacity !== 0 && <Box style={style.opacity} />}
      </Box>
      <Box style={style.body}>{children}</Box>
    </Box>
  );
};
