import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

interface useImagePickerParams {
  value: string | null;
  onImageChange?: (base64: string) => void;
}

export const useImagePicker = (params: useImagePickerParams) => {
  const { value, onImageChange } = params;
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

  return { image, pickImage };
};
