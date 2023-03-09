import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/Screens/HomeScreen";
import EventDetails from "./src/Screens/EventDetails";
import Ionicons from "@expo/vector-icons/Ionicons";
import AllEvents from "./src/Screens/AllEvents";
import CreateEvent from "./src/Screens/CreateEvent";
import AdminHome from "./src/Screens/AdminUI/AdminHome";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#121A72",
        tabBarStyle: {
          elevation: 0,
        },
        headerShown: null,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="home" color={color} size={26} />
            ) : (
              <Ionicons name="home-outline" color={color} size={26} />
            ),
          headerShown: null,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Ionicons
                style={{ position: "absolute", top: -20 }}
                name="add-circle"
                color={color}
                size={50}
              />
            ) : (
              <Ionicons name="add-circle-outline" color={color} size={32} />
            );
          },
          tabBarLabel: () => <Text style={{ fontSize: 10 }}>Create Event</Text>,
        }}
        name="CreateEvent"
        component={CreateEvent}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Ionicons name="calendar" color={color} size={26} />
            ) : (
              <Ionicons name="calendar-outline" color={color} size={26} />
            );
          },
          tabBarLabel: () => <Text style={{ fontSize: 10 }}>All Events</Text>,
        }}
        name="AllEvents"
        component={AllEvents}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Ionicons name="calendar" color={color} size={26} />
            ) : (
              <Ionicons name="calendar-outline" color={color} size={26} />
            );
          },
          tabBarLabel: () => <Text style={{ fontSize: 10 }}>Admin Home</Text>,
        }}
        name="AdminHome"
        component={AdminHome}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{
              headerShown: null,
              drawerLabel: () => <Text>Home</Text>,
            }}
          />
          <Drawer.Screen
            name="EventDetails"
            component={EventDetails}
            options={{ headerShown: null }}
          />
          {/* <Drawer.Screen
            name="AdminHome"
            component={AdminHome}
            options={{ headerShown: null }}
          /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
