import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
const Button = () => {
  return <View style={styles.button}></View>;
};

export default Button;

const styles = StyleSheet.create({
  background: colors.primary,
  borderRadius: 25,
  justifyContent: "center",
  alignItems: "center",
  padding: 15,
  width: "25%"
});
