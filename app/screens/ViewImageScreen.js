
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Card from "../components/Card/Card"

import colors from "../config/colors";



function ViewImageScreen ({title, subTitle, image}) {
  return (
    <View style={styles.container}>
      <Card title="Sprinkles" subTitle="I can eat numerous sprinkle donuts daily." image={require("../assets/mainPigeon.png")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  card:{
    borderRadius:15,
    backgroundColor:colors.pink,
    marginBottom:20,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
});
export default ViewImageScreen;