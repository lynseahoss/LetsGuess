import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../components/Card/Card";

function ViewImageScreen({ title, subTitle, image }) {
  return (
    <>
      <View style={styles.container1}>
        <Card
          title="Sprinkles"
          subTitle="I can eat numerous sprinkle donuts daily."
          image={require("../assets/mainPigeon.png")}
        />
        <Card
          title="Sprinkles"
          subTitle="I can eat numerous sprinkle donuts daily."
          image={require("../assets/mainPigeon.png")}
        />
        <Card
          title="Sprinkles"
          subTitle="I can eat numerous sprinkle donuts daily."
          image={require("../assets/mainPigeon.png")}
        />
      </View>
      <View style={styles.container2}>
        <Card
          title="Sprinkles"
          subTitle="I can eat numerous sprinkle donuts daily."
          image={require("../assets/mainPigeon.png")}
        />
        <Card
          title="Sprinkles"
          subTitle="I can eat numerous sprinkle donuts daily."
          image={require("../assets/mainPigeon.png")}
        />
        <Card
          title="Sprinkles"
          subTitle="I can eat numerous sprinkle donuts daily."
          image={require("../assets/mainPigeon.png")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 20,
    paddingTop: 100
  },
  container2: {
    flex: 1,
    padding: 20,
    top: -410,
    left: 195
  }
});
export default ViewImageScreen;
