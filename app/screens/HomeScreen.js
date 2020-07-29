import React from "react";
import { SafeAreaView } from "react-native";
import {
  BottomNavigationTab,
  Button,
  Divider,
  Layout,
  Text,
  TopNavigation
} from "@ui-kitten/components";

export const HomeScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate("Details");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Let's Guess" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
      <BottomNavigationTab
        title={evaProps => <Text {...evaProps}>USERS</Text>}
      />
    </SafeAreaView>
  );
};
