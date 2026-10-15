import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import LiegList from "./component/LiegList";
import Header from "./component/Header";




export default function Appp() {
    return (
        <View style={styles.container}>
            <Header />
            <LiegList />

            <StatusBar style="auto" />
        </View>
    );
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
