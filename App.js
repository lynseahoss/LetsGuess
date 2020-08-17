// // import { StatusBar } from "expo-status-bar";
// import React from "react";
// // import WelcomeScreen from "./app/screens/WelcomeScreen";

// import ViewImageScreen from "./app/screens/ViewImageScreen";

// export default function App() {
//   return <ViewImageScreen />;
// }

// import * as React from "react";
// import { View, Text, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Details Screen</Text>

//       <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;

import React, {Fragment, useEffect} from "react";
import * as eva from "@eva-design/eva";
import "react-native-gesture-handler";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./app/components/Navigation";


const App = () => {


  return(<>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <AppNavigator />
    </ApplicationProvider>
  </>)
};

export default App