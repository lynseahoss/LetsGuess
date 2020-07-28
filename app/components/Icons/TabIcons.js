import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const TabIcons = () => {
  return (
    <View>
      <AntDesign name="rocket1" size={40} style={styles.rocket} />
      <View style={styles.gameIcon}></View>
      <AntDesign name="message1" size={40} style={styles.message} />
      <View style={styles.deleteIcon}></View>
    </View>
  );
};

export default TabIcons;

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
  messageIcon: {
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
  message: {
    color: "white",
    position: "absolute",
    bottom: 40,
    right: 35,
    zIndex: 20
  },
  rocket: {
    color: "white",
    position: "absolute",
    bottom: 40,
    left: 173,
    zIndex: 20
  }
});
