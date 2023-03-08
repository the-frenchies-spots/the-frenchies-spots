import React from "react";
import { Swiper } from "../../materials/swiper/swiper";
import { TouchableOpacity } from "react-native";
import { SpotCard, type SpotCardProps } from "../spot-card/spot-card";

const renderItems: React.FC<{ item: SpotCardProps }> = (params) => {
  const { item: spot } = params;
  return (
    <TouchableOpacity
      onPress={() => console.log("clicked")}
      activeOpacity={1}
      style={{ padding: 8 }}
    >
      <SpotCard {...spot} />
    </TouchableOpacity>
  );
};

type SpotsSwiperProps = {
  data: SpotCardProps[];
};

export const SpotsSwiper = (props: SpotsSwiperProps) => {
  const { data } = props;
  return (
    <Swiper
      data={data}
      renderItems={renderItems}
      height={300}
      width={280}
      isDots={false}
    />
  );
};
