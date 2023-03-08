import { Select, SelectItem } from "../../materials";
import React, { useState, useEffect } from "react";
import { useTheme } from "../../hooks";
import { styles } from "./select-region-style";
import { getAllRegion } from "../../services";
import { TRegion } from "../../types";

type SelectRegionProps = {
  value: any;
  onRegionChange: (region: string | undefined) => void;
  style?: Record<string, string | number>;
};

const defaultValue = "Aucune région sélectionnée";

export const SelectRegion = (props: SelectRegionProps) => {
  const { value, onRegionChange, style: extStyle } = props;

  const [regions, setRegions] = useState<TRegion[]>();
  const [selectedRegion, setSelectedRegion] = useState<string>(value);

  const handleRegionChange = (codeRegion: number | string) => {
    if (typeof codeRegion === "string") {
      setSelectedRegion(codeRegion);
      onRegionChange(codeRegion === "noRegion" ? undefined : codeRegion);
    }
  };

  const style = useTheme(styles);

  useEffect(() => {
    getAllRegion().then((regions) => setRegions(regions));
  }, []);

  return (
    <Select
      selectedValue={selectedRegion}
      onValueChange={(codeRegion) => {
        handleRegionChange(codeRegion);
      }}
      style={extStyle}
    >
      <SelectItem label={defaultValue} value="noRegion" />;
      {regions?.map((region) => {
        const { nom, code } = region;
        return <SelectItem key={code} label={nom} value={code} />;
      })}
    </Select>
  );
};
