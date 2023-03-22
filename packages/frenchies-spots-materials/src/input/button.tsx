import React from "react";
import { Button as ButtonPaper } from "react-native-paper";

export const Button = () => {
  return (
    <ButtonPaper
      icon="camera"
      mode="contained"
      onPress={() => console.log("Pressed")}
      style={{ borderRadius: 0 }}
    >
      Press me
    </ButtonPaper>
  );
};

// import React, { useState } from "react";
// import {
//   TouchableOpacity,
//   StyleSheet,
//   GestureResponderEvent,
//   Text,
// } from "react-native";

// export interface ButtonProps {
//   text: string;
//   onClick?: (event: GestureResponderEvent) => void;
// }

// export function Button({ text, onClick }: ButtonProps) {
//   const [test, setTest] = useState();

//   return (
//     <TouchableOpacity style={styles.button} onPress={onClick}>
//       <Text style={styles.text}>{text}</Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     maxWidth: 200,
//     textAlign: "center",
//     borderRadius: 10,
//     paddingTop: 14,
//     paddingBottom: 14,
//     paddingLeft: 30,
//     paddingRight: 30,
//     fontSize: "15px",
//     backgroundColor: "#2f80ed",
//   },
//   text: {
//     color: "white",
//   },
// });
