import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/Screens/HomeScreen";
import EventDetails from "./src/Screens/EventDetails";
import Ionicons from "@expo/vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: null }}
        />
        <Drawer.Screen
          name="EventDetails"
          component={EventDetails}
          options={{ headerShown: null }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
