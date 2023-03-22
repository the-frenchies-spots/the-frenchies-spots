import React from "react";
import {
  Alert,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const { width, height } = Dimensions.get("window");

export default () => {
  const scrollRef = React.useRef(null);
  const goToLastIndex = () => {
    scrollRef?.current?.goToLastIndex();
  };
  const goToFirstIndex = () => {
    scrollRef.current.goToFirstIndex();
  };
  const goToSecondIndex = () => {
    scrollRef.current.scrollToIndex({ index: 1 });
  };
  const getCurrentIndex = () => {
    const currentIndex = scrollRef.current.getCurrentIndex();
    console.log(`the current index is ${currentIndex}`);
    Alert.alert(`the current index is ${currentIndex}`);
  };
  const getPrevIndex = () => {
    const prevIndex = scrollRef.current.getPrevIndex();
    console.log(`the previous index is ${prevIndex}`);
    Alert.alert(`the previous index is ${prevIndex}`);
  };
  const onChangeIndex = ({ index, prevIndex }) => {
    console.log({ index, prevIndex });
  };
  return (
    <SwiperFlatList
      showPagination
      ref={scrollRef}
      onChangeIndex={onChangeIndex}
    >
      <TouchableOpacity
        style={[styles.child, { backgroundColor: "salmon" }]}
        onPress={goToLastIndex}
      >
        <Text style={styles.text}>0 - Go to last index</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.child, { backgroundColor: "skyblue" }]}
        onPress={getPrevIndex}
      >
        <Text style={styles.text}>1 - Press to get the previous index</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.child, { backgroundColor: "tomato" }]}
        onPress={getCurrentIndex}
      >
        <Text style={styles.text}>2 - Press to get the current index</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.child, { backgroundColor: "skyblue" }]}
        onPress={goToSecondIndex}
      >
        <Text style={styles.text}>3 - Go to the second index</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.child, { backgroundColor: "teal" }]}
        onPress={goToFirstIndex}
      >
        <Text style={styles.text}>4 - Go to first index</Text>
      </TouchableOpacity>
    </SwiperFlatList>
  );
};

const styles = StyleSheet.create({
  child: {
    height: height * 0.5,
    width,
    justifyContent: "center",
  },
  text: {
    fontSize: width * 0.1,
    textAlign: "center",
  },
});
