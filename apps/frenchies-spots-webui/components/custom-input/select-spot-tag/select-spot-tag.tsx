import React, { useContext } from "react";
import { SelectTag, type SelectTagProps } from "@frenchies-spots/materials";
import { AppContext } from "../../../context";
import { TCategory } from "../../../types";

export interface SelectSpotTagProps extends SelectTagProps {
  category?: TCategory;
}

export const SelectSpotTag = (props: SelectSpotTagProps) => {
  const { category, list, ...other } = props;
  const { tags } = useContext(AppContext);

  return (
    <SelectTag
      {...other}
      list={
        category === undefined
          ? list
          : tags?.filter((tag) => tag.category === category)
      }
    />
  );
};
