import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
const AppButton = () => {
  return (
    <>
      <View style={styles.loginButton}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.signupButton}>
        <Text style={styles.text}>Signup</Text>
      </View>
    </>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: colors.gold,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    bottom: -650,
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
  signupButton: {
    backgroundColor: colors.turquoise,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    bottom: -660,
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
