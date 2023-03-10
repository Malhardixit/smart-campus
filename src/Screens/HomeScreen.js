import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Card, Divider } from "react-native-paper";
import axios from "axios";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [upComing, setUpComing] = useState([]);
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
      photo:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Flutter Masterclass",
      going: "+50 Going",
      location: "Mini Hall 1,Tp Ganesham Auditorium",
      date: "15 Mar,2023",
      photo:
        "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "DSA Session",
      going: "+100 Going",
      location: "TechPark 404/405",
      date: "20 Mar,2023",
      photo:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const approvedEvents = [
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
  ];

  const handleCardChangeById = (name, id, date, loc, pic) => {
    navigation.navigate("EventDetails", {
      name,
      id,
      date,
      loc,
      pic,
    });
  };

  useEffect(() => {
    axios
      .get("https://smartcampus-production.up.railway.app/approvedEvents")
      .then((res) => {
        console.log(res.data.approved);
        setData(res.data.approved);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://smartcampus-production.up.railway.app/upcomingEvents")
      .then((res) => {
        console.log(res.data);
        setUpComing(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <ScrollView>
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
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                EventZeo
              </Text>
              <Ionicons
                style={styles.notiIcon}
                color="white"
                size={25}
                name="notifications-outline"
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
          <View style={{ padding: 10, top: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", left: 10 }}>
              Upcoming Events
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {upComing.map((item) => {
                  return (
                    <Card
                      onPress={() =>
                        handleCardChangeById(
                          item.eventName,
                          item.id,
                          item.startDate,
                          item.location,
                          item.photo
                        )
                      }
                      key={item.id}
                      mode="elevated"
                      style={{
                        width: 320,
                        backgroundColor: "white",
                        margin: 10,
                      }}
                    >
                      <Card.Cover source={{ uri: item.photo }} />
                      <Card.Content>
                        <Text style={styles.cardTitle}>{item.eventName}</Text>
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
            <Divider
              style={{
                backgroundColor: "#e4dfdf",
                height: 2,
                width: width,
                left: -10,
              }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Your Approved Events
              </Text>
            </View>

            <ScrollView style={{ flexGrow: 0 }}>
              {data.map((item) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ApprovedEventDetails", item)
                    }
                    key={item.bookingId}
                    style={{
                      flexDirection: "row",
                      marginTop: 1,
                      backgroundColor: "white",
                      margin: 5,
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
                        {item.startDate} {item.startTime}
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
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  // 4A43EC
  mainHeader: {
    backgroundColor: "#121A72",
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
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
    alignItems: "center",
    padding: 10,
  },
  categories: {
    width: 130,
    backgroundColor: "#F0635A",
    padding: 15,
    borderRadius: 35,
    marginLeft: 18,
  },
  catText: {
    textAlign: "center",
    color: "white",
  },
  catWrapper: {
    flexDirection: "row",
    top: 20,
  },
  cardTitle: {
    padding: 10,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 20,
  },
});
