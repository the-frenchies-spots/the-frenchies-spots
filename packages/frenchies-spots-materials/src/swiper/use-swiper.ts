import React, {
  useRef,
  useMemo,
  useCallback,
  useEffect,
  useState,
} from "react";
import SwiperFlatListRefProps from "react-native-swiper-flatlist";

export const useSwiper = () => {
  const swiperRef = useRef<SwiperFlatListRefProps>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (swiperRef?.current?.getCurrentIndex) {
      const index = swiperRef.current.getCurrentIndex();
      setCurrentIndex(index);
    }
  }, [swiperRef?.current?.getCurrentIndex]);

  const goToIndex = useCallback(
    (index: number) => {
      if (swiperRef && swiperRef?.current) {
        swiperRef.current.scrollToIndex({ index });
        setCurrentIndex(index);
      }
    },
    [currentIndex]
  );

  const goToNextIndex = useCallback(() => {
    if (swiperRef && swiperRef?.current) {
      const index = swiperRef?.current?.getCurrentIndex() + 1;
      swiperRef.current.scrollToIndex({ index });
      setCurrentIndex(index);
    }
  }, [currentIndex]);

  const goToPrevIndex = useCallback(() => {
    if (swiperRef && swiperRef?.current) {
      const index = swiperRef?.current?.getCurrentIndex() - 1;
      swiperRef.current.scrollToIndex({ index });
      setCurrentIndex(index);
    }
  }, [currentIndex]);

  const goToFirstIndex = useCallback(() => {
    if (swiperRef && swiperRef?.current) {
      swiperRef.current.goToFirstIndex();
    }
  }, []);

  const goToLastIndex = useCallback(() => {
    if (swiperRef && swiperRef?.current) {
      swiperRef.current.goToLastIndex();
    }
  }, []);

  const getCurrentIndex = useCallback(() => {
    if (swiperRef && swiperRef?.current) {
      return swiperRef.current.getCurrentIndex();
    }
    return null;
  }, []);

  return {
    swiperRef,
    currentIndex,
    goToIndex,
    goToNextIndex,
    goToPrevIndex,
    goToFirstIndex,
    goToLastIndex,
    getCurrentIndex,
  };
};
