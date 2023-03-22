import React, { useState } from "react";
// import { View } from "react-native";
import { Navbar } from "../../components/navbar/navbar";

import { Box, Text, Drawer, ButtonBase } from "@frenchies-spots/materials";

export const MapPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen((current) => !current);
  };

  return (
    <Box style={{ width: "100%", height: "100%" }}>
      <Navbar />
      <Text style={{ color: "#86827e", fontSize: 16 }}>Yo Modal ou quoi !</Text>
      <Text style={{ color: "#86827e", fontSize: 16 }}>Yo Modal ou quoi !</Text>
      <Text style={{ color: "#86827e", fontSize: 16 }}>Yo Modal ou quoi !</Text>
      <ButtonBase
        onPress={handleToggleOpen}
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "#86827e",
          paddingVertical: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#86827e", fontSize: 16 }}>Open Drawer</Text>
      </ButtonBase>

      <Drawer isOpen={isOpen} onToggleOpen={handleToggleOpen} />
    </Box>
  );
};
