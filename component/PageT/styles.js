import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  LiegItemContainer: {
    width: "100%",
    height: Dimensions.get("window").height
  },

  titels: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center"
  },
  titel: {
    fontSize: 40,
    fontWeight: "500",
    color: "#ffffff"
  },

  subtitel: {
    fontSize: 22,
    color: "#ffffff"
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute"
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    width: 100
  }
});

export default styles;
