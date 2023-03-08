import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native";
import { styles } from "./profile-page-styles";
import { RouteParams } from "../../navigation/root-navigator";

type Props = {};

const ProfilePage = (props: Props) => {
  const route = useRoute<RouteProp<RouteParams>>();
  const id = route.params?.id;
  return (
    <View>
      <Text>profile</Text>
    </View>
  );
};

export default ProfilePage;
