import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

const ViewImageScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={"../assets/LetsGuessHomeImg.png"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.turquoise,
    position: "absolute",
    top: 40,
    left: 30
  },
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.gold,
    position: "absolute",
    top: 40,
    right: 30,
    borderWidth: 2,
    borderColor: colors.turquoise,
    borderRadius: 10
  },
  image: {
    width: "100%",
    height: "100%"
  }
});
export default ViewImageScreen;
