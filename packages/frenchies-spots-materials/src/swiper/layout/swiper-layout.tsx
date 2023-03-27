import React, { ReactNode } from "react";
import { Box } from "../../box";
import { SecondaryButton, TextButton } from "../../button";
import { PaginationCounter } from "../../pagination";
import { HStack } from "../../stack";
import { styles } from "./swiper-layout-styles";

export interface SwiperLayoutProps {
  children: ReactNode;
  swiperIndex: number;
  goToPrevIndex?: () => void;
  onComfirm: () => void;
  lastIndex: number;
  isNextDisable?: boolean | undefined;
  prevLabel?: string;
  nextLabel?: string;
  isPagination?: boolean;
}

export const SwiperLayout = (props: SwiperLayoutProps) => {
  const {
    children,
    goToPrevIndex,
    onComfirm,
    swiperIndex,
    prevLabel = "Retour",
    nextLabel = "Suivant",
    isNextDisable,
    lastIndex,
    isPagination = false,
  } = props;

  const nextDisabled =
    typeof isNextDisable === "boolean"
      ? isNextDisable
      : swiperIndex === lastIndex;

  return (
    <Box style={styles.swiperLayout}>
      {isPagination && (
        <HStack justify="end" style={styles.counter}>
          <PaginationCounter currentPage={swiperIndex} maxPage={lastIndex} />
        </HStack>
      )}
      <Box style={styles.content}>{children}</Box>
      <HStack style={styles.buttonBar} justify="between" items="center">
        {goToPrevIndex && (
          <Box style={{ width: "50%", paddingRight: 10 }}>
            <TextButton
              onPress={goToPrevIndex}
              variant="default"
              disabled={swiperIndex === 0}
            >
              {prevLabel}
            </TextButton>
          </Box>
        )}
        <Box style={{ width: "50%", paddingLeft: 10 }}>
          <SecondaryButton onPress={onComfirm} isDisabled={nextDisabled} little>
            {nextLabel}
          </SecondaryButton>
        </Box>
      </HStack>
    </Box>
  );
};
