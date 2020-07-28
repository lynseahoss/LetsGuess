import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
const LoginButton = ({ title, onPress }) => {
  return (
    <>
      <TouchableOpacity style={styles.loginButton} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: colors.blue,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    bottom: -560,
    left: 100,
    padding: 15,
    width: "50%",
    zIndex: 2,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 20
  },

  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});
