import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "../AppText/AppText"
import colors from "../../config/colors";



function Card ({title, subTitle, image}) {
  return (
    <View style={styles.card}>
     <Image source={image}/>
     <AppText>{title}</AppText>
     <AppText>{subTitle}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  card:{
    borderRadius:15,
    backgroundColor:colors.pink,
    marginBottom:20,
  },
  
});
export default Card;