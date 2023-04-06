import React, { useCallback, useState, useEffect } from "react";
import { type AutocompleteProps   } from "./autocomplete-props";
import Autocomplete from 'react-native-autocomplete-input';
import { Box } from '../../box';
import { TouchableOpacity } from 'react-native';
import { BodyText, Text } from '../../typography';
import { styles } from "./autocomplete-input-styles";
import {
  type NativeSyntheticEvent,
  type TextInputFocusEventData,
} from "react-native";
import { VStack } from "../../stack";
import { Icon } from "../../icon";

export type Variant = "default" | "normal" | "outlined" | "focus" | "error";

export interface AutocompleteInputProps<T> extends AutocompleteProps<T> {
  onSelectSugest?: (value: string) => void
  variant?: Variant;
  label?: string | null;
  contentStyle?: Record<string, string | number>;
  isError?: boolean;
}

export function AutocompleteInput<T>(props: AutocompleteInputProps<T>) {
  const {
    onSelectSugest,     
    value,
    style = {},
    contentStyle = {},
    label = null,
    variant = "normal",
    onBlur,
    isError = false,
    ...other
  } = props;

  const [varaiantBase] = useState<Variant>(variant);
  const [currentVariant, setCurrentVariant] = useState<Variant>(variant);

  const inputStyle = styles(currentVariant, varaiantBase);

  
  const handleFocus = useCallback(() => {
    setCurrentVariant("focus");
  }, []);

  const handleBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setCurrentVariant(varaiantBase);
      if (typeof onBlur === "function") {
        onBlur(e);
      }
      if (isError) setCurrentVariant("error");
    },
    [isError]
  );

  useEffect(() => {
    if (isError) setCurrentVariant("error");
    else setCurrentVariant(varaiantBase);
  }, [isError]);

  const handlePress = (value: string) => {
    if(typeof onSelectSugest === "function") {
      onSelectSugest(value)
    }
  }

  return (
    <VStack spacing={10} style={style}>
    {label && (
      <Box>
        <BodyText>{label}</BodyText>
      </Box>
    )}
    <Box >
    <Box style={inputStyle.buttonContainer}>
          <TouchableOpacity style={inputStyle.searchButton}>
            <Icon name="search" color="white" />
          </TouchableOpacity>
        </Box>
          <Autocomplete
            renderResultList={(res) => (
              <Box style={inputStyle.sugestContainer}>
                {res?.data?.map((item, index) => {
                  return ( 
                  <TouchableOpacity
                    key={index}
                    onPress={() => handlePress(`${item}`)}
                    style={inputStyle.sugestTouchable}
                  >
                    <Text style={inputStyle.sugest}>{(item as string)}</Text>
                  </TouchableOpacity>)
                  })}
              </Box>
              )}
            
              value={value}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{
                ...inputStyle.input,
                ...contentStyle,
              }}
              inputContainerStyle={{
                borderWidth: 0
              }}
              {...other}
          />
      
      </Box>
    </VStack>
  )
}

