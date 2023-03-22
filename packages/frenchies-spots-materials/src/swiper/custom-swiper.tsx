import React, { useRef } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Box } from "../box";
import SwiperFlatListRefProps from "react-native-swiper-flatlist";
import { fox, cat, background, element, lion } from "./images";

const { width, height } = Dimensions.get("window");

const newImage = [lion, fox, cat, background, element];
const image = (index: number) => ({ image: newImage[index % newImage.length] });

const items = Array.from(Array(5)).map((_, index) => image(index));

export default () => {
  const ref = useRef<SwiperFlatListRefProps>(null);

  const onChangeIndex = (params: { index: number; prevIndex: number }) => {
    const { index, prevIndex } = params;
    console.log({ index, prevIndex });
  };

  const goToIndex = (index: number) => {
    if (ref && ref?.current) {
      ref.current.scrollToIndex({ index });
    }
  };

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
      >
        <TouchableOpacity
          style={{ borderWidth: 1, padding: 5 }}
          onPress={() => goToIndex(2)}
        >
          <Text>0 - Go to last index</Text>
        </TouchableOpacity>
      </Box>
      <SwiperFlatList
        ref={ref}
        onChangeIndex={onChangeIndex}
        index={0}
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
