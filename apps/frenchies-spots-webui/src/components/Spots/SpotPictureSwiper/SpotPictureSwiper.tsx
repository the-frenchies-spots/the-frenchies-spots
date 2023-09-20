import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { SpotEntity } from "@frenchies-spots/gql";
import SpotPicture from "../SpotPicture/SpotPicture";
import { Box } from "@frenchies-spots/material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useStyles } from "./SpotPictureSwiper.styles";

interface SpotPictureSwiperProps {
  pictures: SpotEntity["spotPicture"];
}

const SpotPictureSwiper = (props: SpotPictureSwiperProps) => {
  const { pictures } = props;

  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      {pictures?.length && pictures?.length > 1 ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className={classes.container}
        >
          {pictures.map((picture) => (
            <SwiperSlide key={picture.id}>
              <Box h="100%">
                <SpotPicture src={picture?.url} h="100%" />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <SpotPicture
          h="100%"
          src={pictures ? pictures[0]?.url : undefined}
          className={classes.container}
        />
      )}
    </Box>
  );
};

export default SpotPictureSwiper;
