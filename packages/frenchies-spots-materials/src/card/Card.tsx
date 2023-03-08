import React from "react";
import { View } from "react-native";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FunctionComponent<CardProps> = ({ children }) => {
  return <View>{children}</View>;
};
