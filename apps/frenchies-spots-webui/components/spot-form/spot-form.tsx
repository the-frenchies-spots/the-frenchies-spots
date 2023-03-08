import React, { useState } from "react";
import {
  CreateSpotRequestParameters,
  ReadOneSpotRequestResult,
  TCoordinate,
  UpdateSpotRequestParameters,
} from "../../types";
import { spotFields, fieldValidation } from "./spot-field";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  ImageController,
  LocationController,
  SwitchController,
  TextController,
} from "../input-controllers";
import { Button, Container, Typography } from "../../materials";
import { DisplayRegion } from "../display-region/display-region";
import { styles } from "./spot-form-style";
import { useTheme } from "../../hooks";
import { uploadImage } from "../../services";
import { getDefaultSpotValues } from "./get-default-spot-values";

export type FormValues = {
  image: string;
  name: string;
  isCanPark: boolean;
  isCanVisit: boolean;
  isTouristic: boolean;
  location: { coordinate: TCoordinate; codeRegion: number };
  description: string;
};

type Props = {
  isLoading: boolean;
  onSumbit: (
    data: CreateSpotRequestParameters | UpdateSpotRequestParameters
  ) => void;
  mode?: "create" | "update";
  defaultValues?: ReadOneSpotRequestResult;
};

const SpotForm = (props: Props) => {
  const { isLoading, onSumbit, mode = "create", defaultValues } = props;
  const style = useTheme(styles);
  const [isUploadingPicture, setIsUploadingPicture] = useState(false);

  const initValue = getDefaultSpotValues(defaultValues);

  const {
    control,
    handleSubmit,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
    resolver: yupResolver(fieldValidation(initValue)),
    defaultValues: initValue,
  });

  const onCreateSpotSubmit = async (data: FormValues) => {
    clearErrors();
    const { image, location, ...other } = data;
    const { coordinate, codeRegion } = location;
    if (image !== initValue.image) {
      setIsUploadingPicture(true);
      uploadImage(image).then((url) => {
        setIsUploadingPicture(false);
        if (typeof url === "string") {
          onSumbit({
            ...other,
            pictures: [
              mode === "create"
                ? { url }
                : { url, id: defaultValues?.spot?.spotPicture[0]?.id },
            ],
            region: codeRegion.toString(),
            ...coordinate,
          });
        }
      });
    } else {
      onSumbit({
        ...other,
        region: codeRegion.toString(),
        ...coordinate,
      });
    }
  };

  return (
    <>
      <ImageController control={control} name={spotFields.image.name} />
      <TextController
        control={control}
        name={spotFields.name.name}
        label={spotFields.name.label}
        placeholder={spotFields.name.placeholder}
      />
      <Container direction="row" justify="space-between" style={style.options}>
        <SwitchController
          control={control}
          name={spotFields.isCanPark.name}
          label={spotFields.isCanPark.label}
        />

        <SwitchController
          control={control}
          name={spotFields.isCanVisit.name}
          label={spotFields.isCanVisit.label}
        />

        <SwitchController
          control={control}
          name={spotFields.isTouristic.name}
          label={spotFields.isTouristic.label}
        />
      </Container>
      <LocationController
        control={control}
        name={spotFields.location.name}
        label={spotFields.location.label}
      />
      <DisplayRegion codeRegion={+watch("location").codeRegion} />
      <TextController
        control={control}
        name={spotFields.description.name}
        label={spotFields.description.label}
        placeholder={spotFields.description.placeholder}
        isMultiline={true}
      />
      {errors && Object.keys(errors).length > 0 && (
        <Typography>Veuillez remplir tous les champs obligatoires</Typography>
      )}
      <Button
        onPress={handleSubmit(onCreateSpotSubmit)}
        style={style.submit}
        isLoading={isLoading || isUploadingPicture}
      >
        {mode === "create" ? "Créer mon spot" : "Enregistrer"}
      </Button>
    </>
  );
};

export default SpotForm;
