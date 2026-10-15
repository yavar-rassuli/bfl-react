import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: -10
  },
  logo: {
    width: 100,
    height: 90,
    resizeMode: "contain"
  },
  menu: {
    width: 0,
    height: 45,
    resizeMode: "contain"
  }
});

export default styles;
