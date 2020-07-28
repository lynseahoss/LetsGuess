import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
const SignupButton = ({ title, onPress }) => {
  return (
    <>
      <TouchableOpacity style={styles.signupButton} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default SignupButton;

const styles = StyleSheet.create({
  signupButton: {
    backgroundColor: colors.pink,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    bottom: -575,
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
