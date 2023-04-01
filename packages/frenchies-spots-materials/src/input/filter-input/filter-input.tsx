import React, { useState, useRef, MutableRefObject } from "react";
import { TextInput, TextInputProps, TouchableOpacity } from "react-native";
import { Icon, FiltersIcon } from "../../icon";
import { Box } from "../../box";
import { HStack } from "../../stack";
import { styles } from "./filter-input-styles";

interface FilterInputProps {
  value?: string;
  onChange?: (text: string) => void;
  onSearchPress?: () => void;
}

export const FilterInput = (props: FilterInputProps) => {
  const { value, onChange, onSearchPress } = props;

  const [textValue, setTextValue] = useState<string>(value || "");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const textInputRef = useRef<TextInput>(null);

  const style = styles(textValue.length !== 0, isFocused);

  const handleTextChange = (text: string) => {
    if (typeof onChange === "function") {
      onChange(text);
    }
    setTextValue(text);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSearchPress = () => {
    if (typeof onSearchPress === "function") {
      onSearchPress();
    }
  };

  return (
    <Box style={style.container}>
      <Box style={style.searchIconContainer}>
        <Icon name="search" size={20} color={isFocused ? "yellow" : "purple"} />
      </Box>
      <Box style={style.inputContainer}>
        <TextInput
          ref={textInputRef}
          style={style.input}
          placeholder="Rechercher"
          value={textValue}
          onChangeText={handleTextChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Box>
      <HStack>
        <Box style={style.dividerVertical} />
        <TouchableOpacity
          style={style.filterButton}
          onPress={handleSearchPress}
        >
          <FiltersIcon size={25} />
        </TouchableOpacity>
      </HStack>
    </Box>
  );
};
