import React from "react";

import { StyleSheet, Text, View } from "react-native";

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
    fontSize: 18,
    fontFamily: "Roboto"
  }
});
export default AppText;
