import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

const ViewImageScreen = props => {
  return (
    <View style={styles.container}>
      <AntDesign name="rocket1" size={40} style={styles.rocket} />
      <View style={styles.gameIcon}></View>
      <AntDesign name="message1" size={40} style={styles.message} />
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/LetsGuessHomeImg.png")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  gameIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.turquoise,
    position: "absolute",
    bottom: 40,
    left: 170,
    borderColor: colors.gold,
    borderRadius: 10,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 20
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.gold,
    position: "absolute",
    bottom: 40,
    right: 30,
    borderWidth: 2,
    borderColor: colors.gold,
    borderRadius: 10,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 20
  },
  image: {
    width: "100%",
    height: "100%",
    top: -60
  },
  message: {
    position: "absolute",
    bottom: 40,
    right: 35,
    zIndex: 20
  },
  rocket: {
    position: "absolute",
    bottom: 40,
    left: 172,
    zIndex: 20
  }
});
export default ViewImageScreen;
