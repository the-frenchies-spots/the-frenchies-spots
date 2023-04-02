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
import { Page } from "../../../components";

export const CreateSpotPage = () => {
  const { swiperRef, currentIndex, goToNextIndex, goToPrevIndex, goToIndex } =
    useSwiper();

  const handleSubmit = () => {};

  const swiperList = pagesList({ goToNextIndex, onSubmitForm: handleSubmit });

  return (
    <Page isPadding={false} opacity={1} isBackground={false} isNavBar={false}>
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
          const { render, prevLabel, nextLabel, isPadding, onComfirm } = page;
          return (
            <SwiperLayout
              prevLabel={prevLabel}
              nextLabel={nextLabel}
              swiperIndex={currentIndex}
              lastIndex={swiperList.length - 1}
              isNextDisable={page?.isNextDisable}
              goToPrevIndex={goToPrevIndex}
              onComfirm={onComfirm}
              paddingDisabled={isPadding}
            >
              {render}
            </SwiperLayout>
          );
        })}
      />
    </Page>
  );
};
