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
import { useEffect, useState } from "react";
// import IndividualEvent from "./IndividualEvent";
import axios from "axios";

const AdminHome = ({ navigation }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [data, setData] = useState([]);

  const width = Dimensions.get("window").width;

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

  useEffect(() => {
    axios
      .get(
        "https://smartcampus-production.up.railway.app/pendingApprovals?adminId=admin1"
      )
      .then((res) => {
        console.log(res.data.pending);
        setData(res.data.pending);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  const handleApprove = (bookingId) => {
    const body = {
      bookingId: bookingId,
    };
    console.log({ body: body });
    axios
      .post("https://smartcampus-production.up.railway.app/approve", body)
      .then((res) => {
        console.log(res.data.Message);
        alert(res.data.Message);
        setData(data.filter((item) => item.bookingId !== bookingId));
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

        {data.map((item, id) => {
          console.log("eventName", item.orgID);
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("IndividualEventDetails", {
                  eventName: item.eventName,
                  startDate: item.startDate,
                  endDate: item.endDate,
                  startTime: item.startTime,
                  endTime: item.endTime,
                  orgID: item.orgID,
                  eventDesc: item.eventDesc,
                  eventCat: item.eventCat,
                  volunteersReq: item.volunteersReq,
                  refreshments: item.refreshments,
                })
              }
            >
              <View key={id} style={styles.individualEventCard}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={{ width: 100, height: 120, borderRadius: 7 }}
                />
                <View style={{ padding: 10 }}>
                  <Text style={{ color: "#6072ff", fontWeight: "bold" }}>
                    {item.startDate}-{item.startTime}
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
                        handleApprove(item.bookingId);
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
