import React, { FormEventHandler, ReactNode } from "react";

import { Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onTouchMove={(_, e) => e.preventDefault()}
        style={{ border: "1px solid", height: "80vh" }}
      >
        {children}
      </Swiper>
    </form>
  );
};
