import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Card } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  const catText = [
    {
      id: 1,
      name: "Placement",
      color: "#F0635A",
    },
    {
      id: 2,
      name: "Cultural",
      color: "#F59762",
    },
    {
      id: 3,
      name: "Tech",
      color: "#29D697",
    },
  ];

  const cardData = [
    {
      id: 1,
      title: "React Masterclass",
      going: "+20 Going",
      location: "Mini Hall 2,Tp Ganesham Auditorium",
      date: "10 Mar,2023",
    },
    {
      id: 2,
      title: "Flutter Masterclass",
      going: "+50 Going",
      location: "Mini Hall 1,Tp Ganesham Auditorium",
      date: "15 Mar,2023",
    },
    {
      id: 3,
      title: "DSA Session",
      going: "+100 Going",
      location: "TechPark 404/405",
      date: "20 Mar,2023",
    },
  ];

  const handleCardChangeById = (name, id, date, loc) => {
    navigation.navigate("EventDetails", {
      name,
      id,
      date,
      loc,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.mainHeader}>
        <StatusBar style="light" backgroundColor="#4A43EC" />
        <View style={styles.header}>
          <Ionicons
            onPress={() => navigation.openDrawer()}
            style={styles.hamIcon}
            name="reorder-three-outline"
            size={32}
            color="white"
          />
          <Text style={{ color: "white", marginTop: 15 }}>
            Current Location
          </Text>
          <Ionicons
            style={styles.notiIcon}
            color="white"
            size={32}
            name="notifications-outline"
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: -15,
          }}
        >
          <Text style={{ color: "white" }}>SRM University,Chennai</Text>
        </View>

        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <Ionicons
            style={styles.notiIcon}
            color="white"
            size={32}
            name="search-outline"
          />
          <Text
            style={{
              marginTop: 10,
              color: "grey",
              fontWeight: "800",
              fontSize: 20,
            }}
          >
            |
          </Text>
          <TextInput
            style={{ left: 10, color: "white", fontSize: 16 }}
            placeholder="Search..."
            cursorColor={"white"}
            placeholderTextColor="#E4E4E4"
          />
        </View>
      </View>

      <View style={styles.catWrapper}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {catText.map((item) => {
            return (
              <View
                key={item.id}
                style={[styles.categories, { backgroundColor: item.color }]}
              >
                <Text style={styles.catText}>{item.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Upcoming Events</Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {cardData.map((item) => {
              return (
                <Card
                  onPress={() =>
                    handleCardChangeById(
                      item.title,
                      item.id,
                      item.date,
                      item.location
                    )
                  }
                  key={item.id}
                  mode="elevated"
                  style={{ width: 320, backgroundColor: "white", margin: 10 }}
                >
                  <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
                  <Card.Content>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Ionicons
                        color="black"
                        size={32}
                        name="people-circle-outline"
                      />
                      <Text style={{ marginTop: 5 }}>{item.going}</Text>
                    </View>
                  </Card.Content>
                  <Card.Content style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Ionicons
                        style={{ marginTop: 5 }}
                        color="black"
                        size={20}
                        name="location-outline"
                      />
                      <Text style={{ marginTop: 5 }}>{item.location}</Text>
                    </View>
                  </Card.Content>
                </Card>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainHeader: {
    margin: "auto",
    height: 180,
    backgroundColor: "#4A43EC",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  hamIcon: {
    padding: 10,
  },
  notiIcon: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  categories: {
    width: 130,
    backgroundColor: "#F0635A",
    padding: 15,
    borderRadius: 35,
    marginLeft: 25,
  },
  catText: {
    textAlign: "center",
    color: "white",
  },
  catWrapper: {
    flexDirection: "row",
    top: -20,
  },
  cardTitle: {
    padding: 10,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 20,
  },
});
