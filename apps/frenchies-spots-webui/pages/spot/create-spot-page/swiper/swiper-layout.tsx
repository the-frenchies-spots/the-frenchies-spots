import React, { ReactNode } from "react";
import { Box, HStack, VStack, ButtonBase } from "@frenchies-spots/materials";
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
  } = props;

  const nextDisabled =
    typeof isNextDisable === "boolean"
      ? isNextDisable
      : swiperIndex === lastIndex;

  return (
    <Box style={styles.swiperLayout}>
      <Box style={styles.content}>{children}</Box>
      <HStack style={styles.buttonBar} justify="around">
        {goToPrevIndex && (
          <ButtonBase onPress={goToPrevIndex} disabled={swiperIndex === 0}>
            {prevLabel}
          </ButtonBase>
        )}
        <ButtonBase onPress={onComfirm} disabled={nextDisabled}>
          {nextLabel}
        </ButtonBase>
      </HStack>
    </Box>
  );
};
