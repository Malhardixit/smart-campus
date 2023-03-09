import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button } from "react-native-paper";

const EventDetails = ({
  route: {
    params: { name, date, id, loc, pic },
  },
}) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  console.log(loc);

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Image
        style={{ height: height / 2.5, width: width }}
        source={{ uri: pic }}
      />
      <View style={{ position: "absolute", top: 50, left: 20 }}>
        <StatusBar style="light" backgroundColor="transparent" />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Ionicons name="arrow-back" size={26} color="white" />
          <Text style={{ fontSize: 24, color: "white" }}>Event Details</Text>
          <View style={{ width: 130 }} />
          <Ionicons name="bookmark-outline" size={26} color="white" />
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          top: 230,
          left: 60,
          width: width / 1.6,
          padding: 10,
          margin: 20,
          borderRadius: 20,
          backgroundColor: "#ffffff",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Text style={{ color: "blue", textAlign: "center", top: 10 }}>
            +20 Going
          </Text>
          <Button
            style={{
              backgroundColor: "#3D56F0",
              alignSelf: "center",
              borderRadius: 8,
            }}
            mode="contained"
          >
            Invite
          </Button>
        </View>
      </View>
      <View style={{ padding: 10, marginLeft: 20 }}>
        <Text style={{ fontSize: 32, fontWeight: 600 }}>{name}</Text>
      </View>

      <View style={styles.iconWrapper}>
        <Ionicons style={styles.icon} name="calendar" size={26} color="blue" />
        <View>
          <Text style={{ top: 10, fontWeight: "600", fontSize: 16 }}>
            {date}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "grey",
              marginTop: 10,
              marginLeft: 2,
            }}
          >
            Tuesday,4:00PM-9:00PM
          </Text>
        </View>
      </View>

      {/* 2ndIcon */}
      <View style={styles.iconWrapper}>
        <Ionicons style={styles.icon} name="location" size={26} color="blue" />
        <View>
          <Text style={{ top: 10, fontWeight: "600", fontSize: 16 }}>
            {loc}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "grey",
              marginTop: 10,
              marginLeft: 2,
            }}
          >
            Tuesday,4:00PM-9:00PM
          </Text>
        </View>
      </View>

      {/* 3rd Icon */}
      <View style={styles.iconWrapper}>
        <Ionicons
          style={styles.icon}
          name="person-circle"
          size={26}
          color="blue"
        />
        <View>
          <Text style={{ top: 10, fontWeight: "600", fontSize: 16 }}>
            Club SIIEC
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "grey",
              marginTop: 10,
              marginLeft: 2,
            }}
          >
            Organizer
          </Text>
        </View>
      </View>
      <Text
        style={{ padding: 10, marginLeft: 20, fontWeight: "700", fontSize: 18 }}
      >
        About Event
      </Text>
      <Text style={{ padding: 5, marginLeft: 25, marginTop: -15 }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
        voluptates labore eos iusto modi numquam sint dignissimos, repudiandae
        deserunt. Saepe, repellendus animi tempora voluptas iste magni obcaecati
        amet eaque dolor.
      </Text>

      <Button
        onPress={() => console.log("Pressed")}
        labelStyle={{ fontSize: 18 }}
        style={{
          margin: 20,
          padding: 10,
          backgroundColor: "#121A72",
          alignSelf: "center",
        }}
        icon={({ size, color }) => (
          <Ionicons name="arrow-forward-circle" size={28} color="white" />
        )}
        contentStyle={{
          width: width / 1.4,
          flexDirection: "row-reverse",
          justifyContent: "space-evenly",
        }}
        mode="contained"
        uppercase={true}
      >
        Book Event
      </Button>
    </View>
  );
};

export default EventDetails;

const styles = StyleSheet.create({
  iconWrapper: {
    flexDirection: "row",
    padding: 10,
    marginLeft: 20,
    gap: 10,
  },
  icon: {
    height: 50,
    top: 5,
    padding: 10,
    backgroundColor: "#ebedff",
    borderRadius: 10,
  },
});
