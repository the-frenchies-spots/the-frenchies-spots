import React, { useState, useMemo, ReactNode } from "react";
import { Dimensions, ScrollView, View } from "react-native";
const { height } = Dimensions.get("window");

type ScrollContainerProps = {
  children: ReactNode;
  style?: Record<string, string | number>;
  isScrollable?: boolean;
};

export const ScrollContainer = (props: ScrollContainerProps) => {
  const { children, isScrollable = true, style = {} } = props;

  const [screenHeight, setScreenHeight] = useState(0);
  const scrollEnabled = useMemo(
    () => screenHeight > height,
    [screenHeight, height]
  );

  const onContentSizeChange = (contentWidth: number, contentHeight: number) => {
    setScreenHeight(contentHeight);
  };
  if (!isScrollable)
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </View>
    );
  return (
    <ScrollView
      style={{ ...{ flex: 1 }, ...style }}
      contentContainerStyle={{}}
      scrollEnabled={true}
      onContentSizeChange={onContentSizeChange}
      showsVerticalScrollIndicator={false}
      disableScrollViewPanResponder={true}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </View>
    </ScrollView>
  );
};
