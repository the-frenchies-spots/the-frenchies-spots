import React from "react";
import { Box } from "../../box";
import { Text } from "../../typography";
import { styles } from "./pagination-counter-styles";

interface PaginationCounterProps {
  currentPage: number;
  maxPage: number;
}

export const PaginationCounter = (props: PaginationCounterProps) => {
  const { currentPage, maxPage } = props;
  return (
    <Box style={styles.container}>
      <Text style={styles.label}>{`${currentPage}/${maxPage}`}</Text>
    </Box>
  );
};
