import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  useNavigation as useReactNativeNavigation,
  useRoute,
} from "@react-navigation/native";
import { RouteParams } from "../navigation/root-navigator";

export const useNavigation = () => {
  const route = useRoute();
  const navigation =
    useReactNativeNavigation<NativeStackNavigationProp<RouteParams>>();

  const navigateTo = navigation.navigate;
  const currentRoute = route.name;
  const goBack = () => navigation.goBack();

  return { navigateTo, goBack, currentRoute };
};
