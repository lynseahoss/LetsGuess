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
    bottom: 40,
    left: 30,
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
    height: "100%"
  }
});
export default ViewImageScreen;
