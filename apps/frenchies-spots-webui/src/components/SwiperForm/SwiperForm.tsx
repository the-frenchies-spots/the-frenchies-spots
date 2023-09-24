import React, { FormEventHandler, ReactNode, Ref, forwardRef } from "react";

import { Swiper, SwiperRef } from "swiper/react";

import "swiper/css";

interface SwiperFormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange?: (value: number) => void;
}

export const SwiperForm = forwardRef(
  (
    { children, onSubmit, onChange }: SwiperFormProps,
    ref: Ref<SwiperRef> | undefined
  ) => {
    const swiperParams = {
      spaceBetween: 0,
      slidesPerView: 1,
      simulateTouch: false,
      noSwipingClass: "swiper-slide",
      noSwiping: true,
      style: {
        height: "90vh",
      },
    };

    const handleChange = (newValue: number) => {
      if (typeof onChange === "function") {
        onChange(newValue);
      }
    };

    return (
      <form onSubmit={onSubmit}>
        <Swiper
          {...swiperParams}
          ref={ref}
          onTouchMove={(_, e) => e.preventDefault()}
          onSlideChange={(swiperCore) => handleChange(swiperCore.activeIndex)}
        >
          {children}
        </Swiper>
      </form>
    );
  }
);

SwiperForm.displayName = "@frenchies-spots-webui/swiperForm";
