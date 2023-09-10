import React, { useEffect, useState } from "react";
import { useRegion } from "../../../hooks/use-region/use-region";
import { Select } from "@frenchies-spots/material";
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
      {...other}
      data={regions.map((region) => ({
        value: region.code,
        label: region.nom,
      }))}
    />
  );
};
