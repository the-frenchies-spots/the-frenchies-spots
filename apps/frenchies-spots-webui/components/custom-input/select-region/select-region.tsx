import React, { useState, useEffect } from "react";
import { Select } from "@frenchies-spots/materials";
import { useGeocoding } from "../../../hooks";

type RegionItem = { label: string; value: string };
export type SelectRegionProps = {
  value?: string | undefined;
  onChange?: (region: string | undefined) => void;
  style?: Record<string, string | number>;
  enabled?: boolean;
};

export const SelectRegion = (props: SelectRegionProps) => {
  const { value = "noRegion", onChange, style, enabled = false } = props;

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
    setSelectedRegion(value);
  }, [value]);

  return (
    <Select
      enabled={enabled}
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
