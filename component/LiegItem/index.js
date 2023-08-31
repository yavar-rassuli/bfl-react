import React from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";



const LiegItem = props => {
  const { name, tagline, image, button } = props.Lieg;
  return (
    <View style={styles.LiegItemContainer}>
      <ImageBackground
        source={image}
        //source={require("../../assets/images/LFP.jpg")}
        style={styles.image}
      />

      <View style={styles.titels}>
        <Text style={styles.titel}>{name} </Text>
        <Text style={styles.subtitel}>{tagline}</Text>

      </View>
      <View style={styles.buttonContainer}>{button}
        <View />



      </View>


    </View>
  );
};

export default LiegItem;
