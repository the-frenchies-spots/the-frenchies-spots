import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Box } from "../box";

import { fox, cat, background, element, lion } from "./images";
import { CustomPagination } from "./CustomPagination";

const { width, height } = Dimensions.get("window");

const newImage = [lion, fox, cat, background, element];
const image = (index: number) => ({ image: newImage[index % newImage.length] });

const items = Array.from(Array(5)).map((_, index) => image(index));

export default () => {
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        style={{
          width: "100%",
          height: "100px",
          borderWidth: 4,
          borderColor: "green",
          position: "relative",
        }}
      ></Box>
      <SwiperFlatList
        autoplay
        autoplayDelay={5}
        index={3}
        autoplayLoop
        autoplayInvertDirection
        data={items}
        renderItem={({ item }: any) => (
          <Box
            style={{
              borderWidth: 4,
              borderColor: "blue",
              width: "100%",
              height: "100%",
            }}
          >
            <Image style={styles.image} source={item.image} />
          </Box>
        )}
        showPagination
        PaginationComponent={CustomPagination}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    height: height * 0.5,
    width,
  },
});
