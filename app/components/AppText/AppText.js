import React from "react";

import { Text, View } from "react-native";

import styles from "./styles";
const AppText = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default AppText;
