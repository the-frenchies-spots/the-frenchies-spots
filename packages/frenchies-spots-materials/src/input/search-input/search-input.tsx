import React from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "../../box";
import { Icon } from "../../icon";
import { VStack } from "../../stack";
import { BodyText } from "../../typography";
import { TextInput, type TextInputProps } from "../text-input";
import { styles } from "./search-input-styles";

interface SearchInputProps extends TextInputProps {}

export const SearchInput = (props: SearchInputProps) => {
  const { label, style, ...other } = props;
  return (
    <VStack spacing={10} style={style}>
      {label && (
        <Box>
          <BodyText>{label}</BodyText>
        </Box>
      )}
      <Box>
        <TextInput {...other} />
        <Box style={styles.buttonContainer}>
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="search" color="white" />
          </TouchableOpacity>
        </Box>
      </Box>
    </VStack>
  );
};
