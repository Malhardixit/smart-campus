import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Card } from "react-native-paper";
import { useState } from "react";
// import IndividualEvent from "./IndividualEvent";

const AdminHome = ({ navigation }) => {
  const [isAccepted, setIsAccepted] = useState(false);

  const width = Dimensions.get("window").width;
  const eventData = [
    {
      eventDescription:
        "000 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      id: 1,
      eventName: "A Virtual Tour of the University",
      dayDateTime: "10TH MARCH-SAT-10:00AM",
      status: "Accepted",
      category: "Cultural",
      photo:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      eventDescription:
        "001 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      id: 2,
      eventName: "Campus Engagement Program",
      dayDateTime: "20TH MARCH-MON-12:00PM",
      status: "Rejected",
      photo:
        "https://images.unsplash.com/photo-1526328828355-69b01701ca6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    {
      eventDescription:
        "002 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      id: 3,
      eventName: "Pre Placement Talk",
      dayDateTime: "21ST MARCH-TUE-6:15PM",
      status: "Pending",
      photo:
        "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      eventDescription:
        "003 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      id: 4,
      eventName: "Machine Learning Workshop",
      dayDateTime: "25TH MARCH-FRI-2:00PM",
      status: "Rejected",
      photo:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80",
    },
    {
      eventDescription:
        "004 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      id: 5,
      eventName: "Hands on with Flutter",
      dayDateTime: "10TH APRIL-WED-3:00PM",
      status: "Rejected",
      photo:
        "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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

  return (
    <SafeAreaView>
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
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
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
        <View style={styles.ongoingEventsBanner}>
          <Text style={styles.ongoingEventsHeading}>Ongoing events</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cardData.map((item) => {
            return (
              <Card
                onPress={() =>
                  handleCardChangeById(
                    item.title,
                    item.id,
                    item.date,
                    item.location,
                    item.photo
                  )
                }
                key={item.id}
                mode="elevated"
                style={{ width: 320, backgroundColor: "white", margin: 10 }}
              >
                <Card.Cover source={{ uri: item.photo }} />
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

        <View style={styles.ongoingEventsBanner}>
          <Text style={styles.ongoingEventsHeading}>Awaiting approval</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        {eventData.map((item, id) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("IndividualEventDetails", item)
              }
            >
              <View key={id} style={styles.individualEventCard}>
                <Image
                  source={{ uri: item.photo }}
                  style={{ width: 100, height: 120, borderRadius: 7 }}
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
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 15,
                    }}
                  >
                    <TouchableOpacity
                      style={styles.approveButton}
                      onPress={() => {
                        setIsAccepted(true);
                      }}
                    >
                      <View>
                        <Text style={styles.approveText}>Approve</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.rejectButton}
                      onPress={() => {
                        setIsAccepted(false);
                      }}
                    >
                      <View>
                        <Text style={styles.approveText}>Reject</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // 4A43EC
  mainHeader: {
    // May change - For margin around status bar
    marginTop: 25,
    paddingVertical: 10,
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
    // padding: 10,
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
  ongoingEventsBanner: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ongoingEventsHeading: {
    fontSize: 18,
    fontWeight: "700",
  },
  seeAll: {},
  individualEventCard: {
    flexDirection: "row",
    marginBottom: 7,
    marginHorizontal: 10,
    backgroundColor: "white",
    padding: 7,
    borderRadius: 7,
    elevation: 2,
  },
  approveButton: {
    backgroundColor: "#00c308",
    borderRadius: 7,
    padding: 7,
    width: 100,
    marginRight: 10,
  },
  rejectButton: {
    backgroundColor: "#c30010",
    borderRadius: 7,
    padding: 5,
    width: 100,
    marginRight: 10,
  },
  approveText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AdminHome;
