import React, { useContext, type SetStateAction } from "react";
import { AuthContext } from "../../../../context";
import { Box, FloatingButton } from "@frenchies-spots/materials";
import { styles } from "./display-mode-button-styles";

interface DisplayModeButtonProps {
  isMapMode: boolean;
  onChange: (value: SetStateAction<boolean>) => void;
}

export const DisplayModeButton = (props: DisplayModeButtonProps) => {
  const { isMapMode, onChange } = props;
  const { currentUser } = useContext(AuthContext);

  const handleToggleDisplayMode = () => {
    onChange((current) => !current);
  };

  return (
    <Box
      style={{
        ...styles.displayModeButtonContainer,
        bottom: !!currentUser ? 100 : 30,
      }}
    >
      <Box style={styles.displayModeButton}>
        <FloatingButton icon="map" onPress={handleToggleDisplayMode}>
          {isMapMode ? "Liste" : "Carte"}
        </FloatingButton>
      </Box>
    </Box>
  );
};
