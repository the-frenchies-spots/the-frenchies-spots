import React, { RefObject, ReactNode } from "react";
import SwiperFlatListRefProps from "react-native-swiper-flatlist";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Dimensions } from "react-native";
import { Box } from "../box";

interface SwiperProps {
  swiperRef: RefObject<SwiperFlatListRefProps>;
  items: ReactNode[];
  disableGesture?: boolean;
}

export const Swiper = (props: SwiperProps) => {
  const { swiperRef, items, disableGesture = false } = props;
  const { width, height } = Dimensions.get("window");
  return (
    <Box style={{ width: "100%", height: "100%" }}>
      <SwiperFlatList
        ref={swiperRef}
        index={0}
        data={items}
        disableGesture={disableGesture}
        renderItem={({ item }) => (
          <Box
            style={{
              width,
              height: height,
            }}
          >
            {item}
          </Box>
        )}
      />
    </Box>
  );
};
