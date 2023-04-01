import React, { useState, useCallback } from "react";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Box } from "../box";
import { Wrap } from "../wrap";
import ImagePicker from "./image-picker";
import { remove } from "lodash";

type SxProps = ViewStyle | TextStyle | ImageStyle;

interface MultipleImagePickerProps {
  value?: string[];
  onImageListChange?: (base64List: string[]) => void;
  style?: SxProps;
}

export const MultipleImagePicker = (props: MultipleImagePickerProps) => {
  const { style = {}, onImageListChange, value = [] } = props;

  const [base64List, setBase64List] = useState<string[]>(value);

  const handleListChange = (base64: string, index: number) => {
    setBase64List((current) => {
      let imageList = [...current];
      imageList[index] = base64;
      return [...imageList];
    });
  };

  const handleImageChange = (base64: string) => {
    setBase64List((current) => [...current, base64]);
  };

  const handleDeleteImage = useCallback(
    (index: number) => {
      setBase64List((current) => current.filter((_, _idx) => _idx !== index));
    },
    [setBase64List]
  );

  return (
    <Wrap spacing={20} m={4} style={style} justify="center">
      <Box>
        <ImagePicker disablePreview={true} onImageChange={handleImageChange} />
      </Box>
      {base64List.map((picture, index) => {
        return (
          <Box key={index + Math.floor(Math.random() * 999999)}>
            <ImagePicker
              index={index}
              value={picture}
              isCardMode={true}
              onImageDelete={handleDeleteImage}
              onImageChange={(base64: string) =>
                handleListChange(base64, index)
              }
            />
          </Box>
        );
      })}
    </Wrap>
  );
};
