import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = props => {
  const type = props.type;
  const content = props.content;
  const onPress = props.onPress;
  //OR
  //const {type, content, onPress} = props;

  const backgroundColor = type === "primary" ? "skyblue" : "#ffffff";
  const textColor = type === "primary" ? "#ffffff" : "black";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
