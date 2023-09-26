import React, { useState, useCallback, useEffect } from "react";
import { Group, Box } from "@mantine/core";
import { ImagePicker, PictureValue } from "./ImagePicker";

export interface MultipleImagePickerProps {
  value?: PictureValue[];
  onChange?: (pictureList: PictureValue[]) => void;
  style?: any;
}

export const MultipleImagePicker = (props: MultipleImagePickerProps) => {
  const { style = {}, onChange, value = [] } = props;

  const [mediaList, setMediaList] = useState<PictureValue[]>(value);

  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(mediaList);
    }
  }, [mediaList]);

  const handleListChange = (pictureValue: PictureValue, index: number) => {
    setMediaList((current) => {
      let imageList = [...current];
      imageList[index] = pictureValue;
      return [...imageList];
    });
  };

  const handleImageChange = (pictureValue: PictureValue) => {
    setMediaList((current) => [...current, pictureValue]);
  };

  const handleDeleteImage = useCallback(
    (index: number) => {
      setMediaList((current) => current.filter((_, _idx) => _idx !== index));
    },
    [setMediaList]
  );

  return (
    <Group>
      <Box>
        {
          (
            <ImagePicker
              disablePreview={true}
              onImageChange={handleImageChange}
            />
          ) as any
        }
      </Box>
      {mediaList.map((picture, index) => {
        return (
          <Box key={index + Math.floor(Math.random() * 999999)}>
            {
              (
                <ImagePicker
                  index={index}
                  value={picture}
                  isCardMode={true}
                  onImageDelete={handleDeleteImage}
                  onImageChange={(newPicture: PictureValue) =>
                    handleListChange(newPicture, index)
                  }
                />
              ) as any
            }
          </Box>
        );
      })}
    </Group>
  );
};
