import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "../AppText/AppText";
import colors from "../../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <AppText>{title}</AppText>
      <AppText>{subTitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.pink,
    marginBottom: 20,
    marginTop: 100,

    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain"
  }
});
export default Card;
