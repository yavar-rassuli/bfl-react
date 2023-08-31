import React from "react"
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native"
import StyledButton from "../StyledButton";
import Header from "../Header";
import Gif2 from "../Gif2";

export default function Dashboard1({ navigation }) {
  return (


    <View style={styles.buttonContainer}>

      <Header />
      <Gif2 />
      <ImageBackground

        source={("")}
        style={styles.baseText}
      />
      <Text style={styles.baseText}> Leagues Information</Text>


      <StyledButton
        content={"Bundesliga info"}
        onPress={() => navigation.navigate('BundesLiga')} />

      <StyledButton
        content={"Laliga info "}
        onPress={() => navigation.navigate('Laliga')} />

      <StyledButton
        content={"Premier leauge info "}
        onPress={() => navigation.navigate('Premier')} />

    </View>

  )
}
const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 40,
    color: "blue"
  },

});


