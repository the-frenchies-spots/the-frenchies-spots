import React, { useState, useEffect } from "react";
import { Select } from "@frenchies-spots/materials";
import { getAllRegion } from "../../../services";
import { useGeocoding } from "../../../hooks";

type RegionItem = { label: string; value: string };
type SelectRegionProps = {
  value?: string | undefined;
  onChange?: (region: string | undefined) => void;
  style?: Record<string, string | number>;
};

export const SelectRegion = (props: SelectRegionProps) => {
  const { value, onChange, style } = props;

  const [selectedRegion, setSelectedRegion] = useState<string | undefined>(
    value
  );
  const { regions } = useGeocoding();

  const handleRegionChange = (codeRegion: number | string) => {
    if (typeof codeRegion === "string") {
      setSelectedRegion(codeRegion);
      if (typeof onChange === "function") {
        onChange(codeRegion === "noRegion" ? undefined : codeRegion);
      }
    }
  };

  useEffect(() => {
    setSelectedRegion(value)
  }, [value])

  return (
    <Select
    enabled={false}
      list={regions.map((region) => ({
        label: region.nom,
        value: region.code,
      }))}
      value={selectedRegion}
      onChange={handleRegionChange}
      defaultLabel="Je sélectionne une région"
      defaultValue="noRegion"
      style={style}
    />
  );
};
