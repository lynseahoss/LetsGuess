import React from "react";

import { StyleSheet, Text, View, Platform } from "react-native";

const AppText = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "pink",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir"
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto"
      }
    })
  }
});
export default AppText;
