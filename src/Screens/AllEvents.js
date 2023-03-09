import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const AllEvents = () => {
  const eventData = [
    {
      id: 1,
      eventName: "A Virtual Tour of the University",
      dayDateTime: "10TH MARCH-SAT-10:00AM",
      photo:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      eventName: "Campus Engagement Program",
      dayDateTime: "20TH MARCH-MON-12:00PM",
      photo:
        "https://images.unsplash.com/photo-1526328828355-69b01701ca6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    {
      id: 3,
      eventName: "Pre Placement Talk",
      dayDateTime: "21ST MARCH-TUE-6:15PM",
      photo:
        "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 4,
      eventName: "Machine Learning Workshop",
      dayDateTime: "25TH MARCH-FRI-2:00PM",
      photo:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80",
    },
    {
      id: 5,
      eventName: "Hands on with Flutter",
      dayDateTime: "10TH APRIL-WED-3:00PM",
      photo:
        "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="dark" />
      <View style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Ionicons name="arrow-back" size={26} color="black" />
          <Text style={{ fontSize: 24, color: "black" }}>Explore</Text>
        </View>
      </View>
      <View style={{ left: 20, flexDirection: "row" }}>
        <Ionicons color="#121A72" size={32} name="search-outline" />
        <Text
          style={{
            left: 10,
            color: "#121A72",
            fontWeight: "800",
            fontSize: 20,
          }}
        >
          |
        </Text>
        <TextInput
          style={{
            left: 20,
            color: "#121A72",
            fontSize: 18,
            fontWeight: "100",
          }}
          placeholder="Search..."
          cursorColor={"#121A72"}
          placeholderTextColor="#121A72"
        />
      </View>

      <ScrollView>
        {eventData.map((item) => {
          return (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                marginTop: 20,
                backgroundColor: "white",
                margin: 10,
                padding: 10,
                borderRadius: 10,
                elevation: 10,
              }}
            >
              <Image
                source={{ uri: item.photo }}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ color: "#6072ff", fontWeight: "bold" }}>
                  {item.dayDateTime}
                </Text>
                <Text
                  style={{
                    width: width / 1.5,
                    marginTop: 10,
                    fontWeight: "bold",
                  }}
                >
                  {item.eventName}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      {/* <ScrollView>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            backgroundColor: "white",
            margin: 10,
            padding: 10,
            borderRadius: 10,
            elevation: 10,
          }}
        >
          <Image
            source={require("../../assets/background.png")}
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
          <View style={{ padding: 10 }}>
            <Text style={{ color: "#6072ff", fontWeight: "bold" }}>
              10TH MARCH-SAT-2:00PM
            </Text>
            <Text
              style={{ width: width / 1.5, marginTop: 10, fontWeight: "bold" }}
            >
              A Virtual Reality (VR) experience Hands-on workshop
            </Text>
          </View>
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default AllEvents;

const styles = StyleSheet.create({});
