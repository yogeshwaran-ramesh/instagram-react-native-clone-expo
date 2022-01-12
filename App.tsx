import { StyleSheet, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const LogoIcon = require("./src/assets/Logo.png");
const Stack = createNativeStackNavigator();

import Landing from "./src/screens/Landing";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";

export default function App() {
  const Logo = () => {
    return <Image style={styles.logoIcon} source={{ uri: LogoIcon }} />;
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Landing}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  alignSpaceBetween: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: 26,
    width: 26,
    marginHorizontal: 8,
  },
  logoIcon: {
    height: 35,
    width: 100,
  },
});
