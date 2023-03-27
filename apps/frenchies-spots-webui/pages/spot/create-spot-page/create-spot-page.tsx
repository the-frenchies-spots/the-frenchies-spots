import React from "react";
import {
  Box,
  CornerBar,
  Swiper,
  useSwiper,
  Stepper,
  SwiperLayout,
} from "@frenchies-spots/materials";

import { pagesList } from "./swiper/swiper-pages";

export const CreateSpotPage = () => {
  const { swiperRef, currentIndex, goToNextIndex, goToPrevIndex, goToIndex } =
    useSwiper();

  const handleSubmit = () => {};

  const swiperList = pagesList({ goToNextIndex, onSubmitForm: handleSubmit });

  return (
    <Box style={{ width: "100%", height: "100%" }}>
      <CornerBar mode="top">
        <Stepper
          nb={swiperList.length}
          goToIndex={goToIndex}
          swiperIndex={currentIndex}
        />
      </CornerBar>

      <Swiper
        swiperRef={swiperRef}
        items={swiperList.map((page) => {
          const { render, prevLabel, nextLabel, onComfirm } = page;
          return (
            <SwiperLayout
              prevLabel={prevLabel}
              nextLabel={nextLabel}
              swiperIndex={currentIndex}
              lastIndex={swiperList.length - 1}
              isNextDisable={page?.isNextDisable}
              goToPrevIndex={goToPrevIndex}
              onComfirm={onComfirm}
            >
              {render}
            </SwiperLayout>
          );
        })}
      />
    </Box>
  );
};
