import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

const Gif = props => {
  return (
    <View style={styles.container}>

      <Image
        style={styles.animat}
        source={require("../../assets/images/ball3.gif")}
      />

    </View>
  );
};

export default Gif;
