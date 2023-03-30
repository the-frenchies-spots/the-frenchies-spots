import React, { ReactNode } from "react";
import { Box } from "../../box";
import { SecondaryButton, TextButton } from "../../button";
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
      <HStack style={styles.buttonBar} justify="between" items="center">
        {goToPrevIndex && (
          <Box style={{ width: "50%", paddingRight: 10 }}>
            <TextButton onPress={goToPrevIndex} disabled={swiperIndex === 0}>
              {prevLabel}
            </TextButton>
          </Box>
        )}
        <Box style={{ width: "50%", paddingLeft: 10 }}>
          <SecondaryButton onPress={onComfirm} disabled={nextDisabled} little>
            {nextLabel}
          </SecondaryButton>
        </Box>
      </HStack>
    </Box>
  );
};
