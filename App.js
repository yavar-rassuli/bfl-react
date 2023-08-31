import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";



import PageT from "./component/PageT";




export default function App() {
  return (
    <View style={styles.container}>
      <PageT />


      <StatusBar style="auto" />
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
