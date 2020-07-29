import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../components/Card/Card";

import { SafeAreaView } from "react-native";
import {
  BottomNavigationTab,
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction
} from "@ui-kitten/components";

const BackIcon = props => <Icon {...props} name="arrow-back" />;

export const CharacterScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="MyApp"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: "absolute" }}>
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
      </Layout>
      <BottomNavigationTab
        title={evaProps => <Text {...evaProps}>USERS</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 20,
    paddingTop: 20
  },
  container2: {
    flex: 1,
    padding: 20,
    top: -370,
    left: 195
  }
});
