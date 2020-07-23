import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  SafeAreaView,
  Platform
} from "react-native";
// import {
//   useDimensions,
//   useDeviceOrientation
// } from "@react-native-community/hooks";
//view-> UI View

export default function App() {
  // console.log(useDeviceOrientation());
  // console.log(useDimensions());
  // console.log(Dimensions.get("screen"));
  //use console.log() only during development/testing-> will have negative effect during production so after development/testing remove it from app
  //console.log("app executed");
  // let x;
  // x.toString();
  //to debug in chrome press esc btn in the simulator when red box appears then bring up dev menu ctrl d cmd d then click debug remote js

  const handlePress = () => console.log("asset pressed");
  const styles1 = StyleSheet.create({
    container: {
      paddingTop: 10
    },
    tinyLogo: {
      width: 50,
      height: 50
    },
    logo: {
      width: 400,
      height: 300,
      resizeMode: "stretch",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center"
    }
  });
  //const { landscape } = useDeviceOrientation();
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        //flexDirection: "row-reverse"
        // flexDirection: "column"
        // flexDirection: "column-reverse"

        justifyContent: "center",
        // justifyContent: "flex-end"
        // justifyContent: "flex-start"
        // justifyContent: "space-around"
        // justifyContent: "space-evenly"
        // justifyContent: "space-between"

        alignItems: "center",
        // alignItems: "baseline"
        //alignItems: "flex-end"
        // alignItems: "flex-start"
        // alignItems: "stretch"

        alignContent: "center",

        flexWrap: "wrap"
        // flexWrap: "nowrap"
        // flexWrap: "wrap-reverse"
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles1.container}>
          <TouchableWithoutFeedback
            onPress={() => console.log("sprrrrrinkles")}
          >
            <Image
              style={styles1.logo}
              source={require("./app/assets/LetsGuessHomeImg.png")}
            />
          </TouchableWithoutFeedback>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? 20 : 0
    alignItems: "center",
    justifyContent: "center"
  }
});
