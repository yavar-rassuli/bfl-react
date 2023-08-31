import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";

import LiegItem from "../LiegItem";
import styles from "./styles";
import Lieg from "./Lieg";


const LiegList = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Lieg}
        renderItem={({ item }) => <LiegItem Lieg={item} />}

        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}

      />
    </View>
  );
};
export default LiegList;
