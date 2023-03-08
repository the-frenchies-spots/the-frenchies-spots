import React from "react";
import { Container } from "../../../materials";
import { DropDownContents } from "../../drop-down-contents/drop-down-contents";
import { FormValues, SpotFormFilter } from "../../spot-filter-form";
import { useTheme, useMediaQuery } from "../../../hooks";
import { styles } from "./drawer-spot-filter-style";

type DrawerSpotFilterProps = {
  setRevealed: (revealed: boolean) => void;
  filterData: FormValues | Object;
  onFilterChange: (formData: FormValues) => void;
};

const DrawerSpotFilter = (props: DrawerSpotFilterProps) => {
  const { filterData, onFilterChange, setRevealed } = props;

  const { isPhone, isTablette } = useMediaQuery();
  const style = useTheme(styles, { isPhone, isTablette });

  return (
    <Container center style={style.filterContainer}>
      <Container style={style.filterContent}>
        <DropDownContents
          title="Filtrer les spots"
          onClose={() => setRevealed(true)}
        >
          <SpotFormFilter value={filterData} onChange={onFilterChange} />
        </DropDownContents>
      </Container>
    </Container>
  );
};

export default DrawerSpotFilter;
