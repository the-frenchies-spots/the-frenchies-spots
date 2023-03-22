import React, { RefObject, ReactNode } from "react";
import { StyleSheet, Dimensions } from "react-native";
import SwiperFlatListRefProps from "react-native-swiper-flatlist";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Box } from "../box";

interface SwiperProps {
  swiperRef: RefObject<SwiperFlatListRefProps>;
  items: ReactNode[];
}

const { width, height } = Dimensions.get("window");

export const Swiper = (props: SwiperProps) => {
  const { swiperRef, items } = props;
  return (
    <Box style={{ width: "100%", height: "100%" }}>
      <SwiperFlatList
        ref={swiperRef}
        index={0}
        data={items}
        renderItem={({ item }) => (
          <Box
            style={{
              borderWidth: 4,
              borderColor: "blue",
              width,
              height: "100%",
            }}
          >
            {item}
          </Box>
        )}
      />
    </Box>
  );
};
