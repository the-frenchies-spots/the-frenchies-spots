import React, { ReactNode } from "react";
import { Modal, View, Dimensions, TouchableOpacity } from "react-native";
import { styles } from "./drawer-styles";
import { Text } from "../typography";
import { Box } from "../box";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const windowHeight = Dimensions.get("window").height;

interface DrawerProps {
  children?: ReactNode;
  isOpen?: boolean;
  onToggleOpen: () => void;
  heightMultiplier?: number;
}

export const Drawer = (props: DrawerProps) => {
  const {
    children,
    isOpen = true,
    heightMultiplier = 0.6,
    onToggleOpen,
  } = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={onToggleOpen}
    >
      <TouchableWithoutFeedback onPress={onToggleOpen}>
        <View style={{ ...styles.modalOverlay, height: windowHeight }} />
      </TouchableWithoutFeedback>
      <View
        style={[
          styles.bottomSheet,
          { height: windowHeight * heightMultiplier },
        ]}
      >
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
