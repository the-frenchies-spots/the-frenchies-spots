import React, { useEffect, useState } from "react";
import { useRegion } from "../../../hooks/use-region/use-region";
import { Select, fonts } from "@frenchies-spots/material";
import type { SelectProps } from "@frenchies-spots/material";

interface SelectRegionProps extends Omit<SelectProps, "data"> {
  value?: string | null;
  onChange?: (newValue: string | null) => void;
}

export const SelectRegion = (props: SelectRegionProps) => {
  const { value = null, onChange, ...other } = props;
  const [selectRegion, setSelectRegion] = useState<string | null>(value);

  const { regions } = useRegion();

  const handleRegionChange = (codeRegion: string | null) => {
    setSelectRegion(codeRegion);
    if (typeof onChange === "function") {
      onChange(codeRegion);
    }
  };

  useEffect(() => {
    setSelectRegion(value);
  }, [value]);

  return (
    <Select
      value={selectRegion}
      onChange={handleRegionChange}
      sx={(theme) => ({
        ".mantine-Select-input": {
          backgroundColor: theme.colors.lightBluePurple[0],
          color: theme.colors.darkPurple[0],
          ...fonts["Montserrat-Regular"].style,
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 400,
          boxShadow: "0px 4px 8px 0px #DBDBDB",
        },
      })}
      {...other}
      data={regions.map((region) => ({
        value: region.code,
        label: region.nom,
      }))}
    />
  );
};
