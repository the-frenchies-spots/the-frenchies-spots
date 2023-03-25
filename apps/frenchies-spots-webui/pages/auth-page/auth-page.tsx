import React from "react";
import { Page } from "../../components";
import { Title } from "@frenchies-spots/materials";

import {
  Box,
  CornerBar,
  Swiper,
  useSwiper,
  PaginationSwiper,
  SwiperLayout,
} from "@frenchies-spots/materials";
import { pagesList } from "./swiper-pages";

export const AuthPage = () => {
  const { swiperRef, currentIndex, goToNextIndex, goToPrevIndex, goToIndex } =
    useSwiper();

  const handleSubmit = () => {};

  const swiperList = pagesList({ goToNextIndex, onSubmitForm: handleSubmit });

  return (
    <Page opacity={0.7} isNavBar={false} isPadding={false}>
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
    </Page>
  );
};
