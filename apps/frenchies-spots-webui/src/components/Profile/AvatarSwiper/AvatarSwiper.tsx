/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { avatarList } from "@frenchies-spots/utils";
import { ActionIcon, Box, Flex, Group } from "@frenchies-spots/material";
import { IconChevronLeft, IconChevronRight } from "@frenchies-spots/icon";
import { useStyles } from "./AvatarSwiper.styles";

const list = avatarList?.filter((_avtr) => _avtr.isPublic);

interface AvatarSwiperProps {
  value?: string;
  onChange?: (newValue: string) => void;
}

const AvatarSwiper = ({ onChange }: AvatarSwiperProps) => {
  const { classes } = useStyles();
  const swiperRef = useRef<any>(null);

  const swiperParams = {
    spaceBetween: 0,
    slidesPerView: 1,
    simulateTouch: false,
    noSwipingClass: "swiper-slide",
    noSwiping: true,
    loop: true,
    style: {
      height: 300,
      width: "100%",
    },
  };

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };
  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleChange = (newValue: string) => {
    if (typeof onChange === "function") {
      onChange(newValue);
    }
  };

  return (
    <>
      <Flex
        h="80%"
        align="center"
        justify="center"
        className={classes.mainContainer}
        sx={{ position: "relative" }}
      >
        <Box
          h={200}
          w={200}
          sx={{
            backgroundColor: "white",
            borderRadius: 200,
            position: "absolute",
          }}
        />
        <Group position="apart" className={classes.arrowContainer} w="100%">
          <ActionIcon onClick={handlePrevClick} className={classes.actionIcon}>
            <IconChevronLeft color="white" />
          </ActionIcon>
          <ActionIcon onClick={handleNextClick} className={classes.actionIcon}>
            <IconChevronRight color="white" />
          </ActionIcon>
        </Group>

        <Swiper
          {...swiperParams}
          onTouchMove={(_, e) => e.preventDefault()}
          ref={swiperRef}
          onSlideChange={(swiperCore) => {
            const loopedSlides = swiperCore?.loopedSlides || 0;
            const activeIndex =
              (swiperCore.realIndex + loopedSlides) % list?.length;

            handleChange(list[activeIndex === 1 ? 0 : 1]?.avatarUrl);
          }}
        >
          {list?.map((avatar) => (
            <SwiperSlide key={avatar.id}>
              <Group h="100%" position="center">
                <img src={avatar?.avatarUrl} alt={avatar.id} />
              </Group>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </>
  );
};

export default AvatarSwiper;
