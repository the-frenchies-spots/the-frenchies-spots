import { Text, View } from "react-native";
import React from "react";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import { InputGroup } from "../../materials/input-group/InputGroup";
import { TCoordinate } from "../../types";

interface LocationControllerProps {
  control: Control<FieldValues, any> | any;
  label?: string;
  name: string;
}

export const LocationController = (props: LocationControllerProps) => {
  const { control, label, name } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <InputGroup
          inputType="location"
          value={value}
          label={label}
          fullWidth={true}
          onLocationChange={(coordinate: TCoordinate, codeRegion: number) => {
            onChange({ coordinate, codeRegion });
          }}
        />
      )}
    />
  );
};
