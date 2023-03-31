import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./image-picker-style";
import { Image } from "../image/image";
import { Box } from "../box";
import { Icon } from "../icon";

interface ImagePickerProps {
  value?: string | null;
  style?: Record<string, string | number>;
  onImageChange?: (base64: string) => void;
}

const PickerImage = (props: ImagePickerProps) => {
  const { style: extStyle, onImageChange, value = null } = props;

  const [image, setImage] = useState<string | null>(value);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const base64 = result?.assets[0]?.uri;
      setImage(null);
      setImage(base64);
      if (typeof onImageChange === "function") {
        onImageChange(base64);
      }
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <Box style={styles.container}>
        {image ? (
          <Image style={styles.image} src={image} />
        ) : (
          <Icon name="camera" size={40} color="bluePurple" />
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default PickerImage;
