import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Card } from "react-native-paper";

const AdminHome = () => {
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
            style={{
              left: 10,
              color: "white",
              fontSize: 16,
            }}
            placeholder="Search..."
            cursorColor={"white"}
            placeholderTextColor="#E4E4E4"
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // 4A43EC
  mainHeader: {
    // May change - For margin around status bar
    marginTop: 25,
    paddingBottom: 10,
    backgroundColor: "#121A72",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
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
});

export default AdminHome;
