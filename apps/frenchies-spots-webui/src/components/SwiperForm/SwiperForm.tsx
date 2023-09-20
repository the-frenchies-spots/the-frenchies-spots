import React, { FormEventHandler, ReactNode } from "react";

import { Swiper } from "swiper/react";

import "swiper/css";

interface SwiperFormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const SwiperForm = ({ children, onSubmit }: SwiperFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <Swiper
        simulateTouch={false}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onTouchMove={(_, e) => e.preventDefault()}
        style={{
          height: "100vh",
        }}
      >
        {children}
      </Swiper>
    </form>
  );
};
