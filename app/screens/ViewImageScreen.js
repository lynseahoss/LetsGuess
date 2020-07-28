
import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";



function ViewImageScreen ({title, subTitle, image}) {
  return (
    <View style={styles.card}>
     <Image source={require(image)}/>
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