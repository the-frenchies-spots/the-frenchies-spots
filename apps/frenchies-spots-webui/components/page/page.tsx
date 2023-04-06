import React, { ReactNode, useContext } from "react";
import { Box } from "@frenchies-spots/materials";
import { Image } from "react-native";
import { styles } from "./page-styles";
import { Navbar } from "../app/navbar";
import { useMediaQuery } from "../../hooks";
import { AuthContext } from "../../context";

interface PageProps {
  isBackground?: boolean;
  children: ReactNode;
  opacity?: number;
  darkOpacity?: number;
  isNavBar?: boolean;
  isPadding?: boolean;
  opaqueBackground?: boolean;
}

export const Page = (props: PageProps) => {
  const {
    children,
    isPadding = true,
    isBackground = true,
    isNavBar = true,
    opacity = 0,
    darkOpacity = 0,
    opaqueBackground = false,
  } = props;

  const { isPhone } = useMediaQuery();
  const { currentUser } = useContext(AuthContext);
  const style = styles(opacity, darkOpacity, isPadding);

  return (
    <>
      <Box style={style.container}>
        <Box style={style.background}>
          {isBackground && (
            <Image
              source={require("../../assets/images/backgroundImg.jpg")}
              style={style.image}
            />
          )}
          {darkOpacity !== 0 && <Box style={style.darkOpacity} />}
          {opacity !== 0 && <Box style={style.opacity} />}
          {opaqueBackground && <Box style={style.opaque} />}
        </Box>
        <Box style={style.body}>
          <Box style={style.mainContainer}>{children}</Box>
        </Box>
      </Box>
      {isNavBar && currentUser && <Navbar />}
    </>
  );
};
