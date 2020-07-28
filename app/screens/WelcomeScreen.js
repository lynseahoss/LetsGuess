import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import LoginButton from "../components/Buttons/LoginButton";
import SignupButton from "../components/Buttons/SignupButton";

const ViewImageScreen = props => {
  return (
    <View style={styles.container}>
      <LoginButton title="login" onPress={() => console.log("login")} />
      <SignupButton title="signup" onPress={() => console.log("signup")} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/LetsGuessHomeImg.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  },

  image: {
    width: "100%",
    height: "100%",
    top: -150
  }
});
export default ViewImageScreen;
