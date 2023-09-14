import React, { useEffect, useState } from "react";

import { IconCameraFilled, IconX } from "@frenchies-spots/icon";
import { useStyles } from "./ImagePicker.styles";
import { Box, BoxProps, FileButton, BackgroundImage } from "@mantine/core";

export type PictureValue = { url: string; hostId?: string };

interface ImagePickerProps extends Omit<BoxProps, "onChange"> {
  index?: number;
  value?: PictureValue | null;
  style?: Record<string, string | number>;
  onImageChange?: (pictureValue: PictureValue) => void;
  onImageDelete?: (index: number) => void;
  disablePreview?: boolean;
  isCardMode?: boolean;
}

export const ImagePicker = (props: ImagePickerProps) => {
  const {
    index,
    onImageChange,
    onImageDelete,
    value = null,
    disablePreview = false,
    isCardMode = false,
    h = 95,
    w = 95,
    ...other
  } = props;

  const [selectedImage, setSelectedImage] = useState<PictureValue | null>(
    value
  );

  const { classes } = useStyles(isCardMode);

  useEffect(() => {
    setSelectedImage(value);
  }, [value]);

  const handleImageChange = async (file: File | null) => {
    if (file) {
      const blob = await file.arrayBuffer();
      const base64 = `data:${file.type};base64,${btoa(
        new Uint8Array(blob).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      )}`;

      setSelectedImage({ url: base64 });
      if (typeof onImageChange === "function") {
        onImageChange({ url: base64 });
      }
    }
  };

  const handleImageDelete: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (typeof onImageDelete === "function") {
      if (index !== undefined) {
        onImageDelete(index);
      }
    }
  };

  return (
    <FileButton onChange={handleImageChange} accept="image/*">
      {(props) => (
        <Box {...props} className={classes.container} h={h} w={w} {...other}>
          {!disablePreview && selectedImage ? (
            <BackgroundImage src={selectedImage.url} w="100%" h="100%" />
          ) : (
            <IconCameraFilled size={40} style={{ color: "#8F8FD9" }} />
          )}
          {isCardMode && (
            <Box
              onClick={handleImageDelete}
              className={classes.deleteContainer}
            >
              <IconX size={16} color="white" />
            </Box>
          )}
        </Box>
      )}
    </FileButton>
  );
};
