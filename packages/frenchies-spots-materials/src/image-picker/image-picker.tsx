import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./image-picker-style";
import { Image } from "../image/image";
import { Box } from "../box";
import { Icon } from "../icon";
import { useImagePicker } from "./use-image-picker";
import { Text } from "../typography";

interface ImagePickerProps {
  index?: number;
  value?: string | null;
  style?: Record<string, string | number>;
  onImageChange?: (base64: string) => void;
  onImageDelete?: (index: number) => void;
  disablePreview?: boolean;
  isCardMode?: boolean;
}

const PickerImage = (props: ImagePickerProps) => {
  const {
    index,
    onImageChange,
    onImageDelete,
    value = null,
    disablePreview = false,
    isCardMode = false,
  } = props;
  const { image, pickImage } = useImagePicker({ value, onImageChange });

  const handleImageDelete = () => {
    if (typeof onImageDelete === "function") {
      if (index !== undefined) {
        onImageDelete(index);
      }
    }
  };

  const style = styles(isCardMode);
  return (
    <TouchableOpacity onPress={pickImage}>
      <Box style={style.container}>
        {!disablePreview && image ? (
          <Image style={style.image} src={image} />
        ) : (
          <Icon name="camera" size={40} color="bluePurple" />
        )}
        {isCardMode && (
          <TouchableOpacity
            onPress={handleImageDelete}
            style={style.deleteContainer}
          >
            <Icon name="cross" size={16} color="white" />
          </TouchableOpacity>
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default PickerImage;
