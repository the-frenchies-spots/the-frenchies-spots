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
  paddingDisabled?: boolean;
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
    paddingDisabled = false,
  } = props;

  const nextDisabled =
    typeof isNextDisable === "boolean"
      ? isNextDisable
      : swiperIndex === lastIndex;

  const style = styles(paddingDisabled);

  return (
    <Box style={style.swiperLayout}>
      {isPagination && (
        <HStack justify="end" style={style.counter}>
          <PaginationCounter currentPage={swiperIndex} maxPage={lastIndex} />
        </HStack>
      )}
      <Box style={style.content}>{children}</Box>
      <HStack
        style={{
          ...style.buttonBar,
          paddingHorizontal: paddingDisabled ? undefined : 20,
          marginVertical: paddingDisabled ? undefined : 16,
        }}
        justify="between"
        items="center"
      >
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
