import React from "react"
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native"
import StyledButton from "./StyledButton";
import Header from "../Header";
import Gif from "../Gif";

export default function Dashboard({ navigation }) {
  return (


    <View style={styles.buttonContainer}>

      <Header />
      <Gif />
      <ImageBackground

        source={("")}
        style={styles.baseText}
      />
      <Text style={styles.baseText}>Welcome to the Best Football League(BFL)</Text>


      <StyledButton
        content={"Show the Tables "}
        onPress={() => navigation.navigate('hompage')} />

      <StyledButton
        content={"info "}
        onPress={() => navigation.navigate('Dashboard1')} />


    </View>

  )
}
const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 40,
  },

});


