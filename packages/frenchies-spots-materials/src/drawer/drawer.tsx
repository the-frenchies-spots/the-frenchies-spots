import React, { ReactNode } from "react";
import { Modal, View, Dimensions, TouchableOpacity } from "react-native";
import { styles } from "./drawer-styles";
import { Text } from "../typography";
import { Box } from "../box";

const windowHeight = Dimensions.get("window").height;

interface DrawerProps {
  children?: ReactNode;
  isOpen?: boolean;
  onToggleOpen: () => void;
}

export const Drawer = (props: DrawerProps) => {
  const { children, isOpen = true, onToggleOpen } = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={onToggleOpen}
    >
      <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
        <TouchableOpacity
          style={styles.closeBarContainer}
          onPress={onToggleOpen}
        >
          <Box style={styles.closeBar} />
        </TouchableOpacity>
        <Box style={styles.children}>{children}</Box>
      </View>
    </Modal>
  );
};
