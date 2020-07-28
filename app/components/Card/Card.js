import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "../AppText/AppText";
import colors from "../../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <View style={styles.card1}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{title}</AppText>
        </View>
        <View style={styles.detailContainer2}>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.pink,
    marginBottom: 20,
    padding: 10,
    width: "50%"
  },
  card1: {
    borderRadius: 15,
    backgroundColor: colors.white,
    padding: 10
  },
  detailContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  detailContainer2: {
    padding: 5
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    padding: 10
  },

  title: {
    marginBottom: 10
  }
});
export default Card;
