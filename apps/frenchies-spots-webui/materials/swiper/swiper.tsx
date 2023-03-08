import React, { useState, useRef, ReactNode } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./swipper-styles";

interface SwiperProps<Item> {
  data: Item[];
  renderItems: React.FC<{ item: Item }>;
  width: number;
  height: number;
  isDots?: boolean;
}

export function Swiper<Item>(props: SwiperProps<Item>) {
  const { data, renderItems, width, height, isDots = true } = props;

  const style = styles(width, height);

  // let flatListRef = useRef<FlatList<Item> | null>();
  // const [currentIndex, setCurrentIndex] = useState<number>(0);

  // const onViewRef = useRef(({ changed }: { changed: any }) => {
  //   if (changed[0].isViewable) {
  //     setCurrentIndex(changed[0].index);
  //   }
  // });

  // const scrollToIndex = (index: number) => {
  //   const flatRef = flatListRef.current;
  //   flatRef?.scrollToIndex({ animated: true, index });
  // };

  // const handleDotsPress = (index: number) => {
  //   scrollToIndex(index);
  // };

  return (
    <View style={style.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={true}
        // pagingEnabled
        // ref={(ref) => {
        //   flatListRef.current = ref;
        // }}
        // style={style.carousel}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: width }}
        // onViewableItemsChanged={onViewRef.current}
        // getItemLayout={(data, index) => ({
        //   length: height,
        //   offset: height * index,
        //   index,
        // })}
      />
      {/* {isDots && (
        <View style={style.dotView}>
          {data.map(({}, index: number) => {
            return (
              <TouchableOpacity
                key={index.toString()}
                style={[
                  style.circle,
                  { backgroundColor: index == currentIndex ? "black" : "grey" },
                ]}
                onPress={() => handleDotsPress(index)}
              />
            );
          })}
        </View>
      )} */}
    </View>
  );
}
