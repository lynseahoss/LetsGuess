import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../components/Card/Card";

import colors from "../config/colors";

function ViewImageScreen({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Card
        title="Sprinkles"
        subTitle="I can eat numerous sprinkle donuts daily."
        image={require("../assets/mainPigeon.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 29,
    paddingTop: 100
  }
});
export default ViewImageScreen;
