import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Container, Image } from "../../materials";
import { Icon } from "../../materials/icon";
import { styles } from "./image-picker-style";
import { useTheme } from "../../hooks";
import { uniqueId } from "lodash";

interface ImagePickerProps {
  value?: string | null;
  style?: Record<string, string | number>;
  onImageChange?: (base64: string) => void;
}

const PickerImage = (props: ImagePickerProps) => {
  const { style: extStyle, onImageChange, value = null } = props;

  const [image, setImage] = useState<string | null>(value);
  const style = useTheme(styles);

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
    <TouchableOpacity onPress={pickImage} style={{ width: "100%" }}>
      <Container
        style={{ ...style.container, ...extStyle }}
        direction="row"
        center
      >
        {image ? (
          <Image style={style.image} src={image} />
        ) : (
          <Icon name="add" size={22} />
        )}
      </Container>
    </TouchableOpacity>
  );
};

export default PickerImage;
