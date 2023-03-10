import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function Login({ navigation }) {
  const [stakeholder, setStakeholder] = useState("");
  let stakeholderUi = "";
  return (
    <ScrollView>
      <StatusBar style="light" />
      <View style={styles.topView}>
        <Image
          style={{ height: 150, width: 150, borderRadius: 75 }}
          source={{
            uri: "https://s3-ap-south-1.amazonaws.com/blogmindler/bloglive/wp-content/uploads/2021/02/23124214/how-to-become-an-event-manager.png",
          }}
        />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 35,
            marginTop: 25,
          }}
        >
          EvenZo
        </Text>
        <Text style={{ color: "white" }}>A one stop event management app</Text>
      </View>
      <View style={styles.loginBox}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Login
        </Text>
        <Text style={{ color: "#8d8d8d", marginTop: 5 }}>
          Enter details to login
        </Text>
        <TextInput
          onChangeText={(text) => setStakeholder(text)}
          placeholder="Username"
          style={{
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 15,
            fontSize: 17,
            borderRadius: 4,
            marginTop: 20,
          }}
        ></TextInput>
        <TextInput
          placeholder="Password"
          style={{
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 15,
            fontSize: 17,
            borderRadius: 4,
            marginTop: 7,
          }}
        ></TextInput>
        {}
        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={() => {
            if (stakeholder === "admin@gmail.com") {
              stakeholderUi = "AdminHome";
            } else if (stakeholder === "manager@gmail.com") {
              stakeholderUi = "Organizer";
            } else if (stakeholder === "organizer@gmail.com") {
              stakeholderUi = "Home";
            } else {
              Alert.alert(
                "Invalid credentials",
                "Please enter valid credentials"
              );
            }
            navigation.navigate(stakeholderUi);
          }}
        >
          <View
            style={{
              backgroundColor: "#121A72",
              padding: 15,
              borderRadius: 7,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 17,
                textTransform: "uppercase",
                fontWeight: "bold",
                letterSpacing: 3,
              }}
            >
              Login
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{ marginTop: 5, textAlign: "center" }}>
          Don't have an account ? Sign Up
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topView: {
    backgroundColor: "#121a72",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 85,
    alignItems: "center",
    justifyContent: "center",
  },
  loginBox: {
    marginTop: 20,
    padding: 7,
  },
});

export default Login;
