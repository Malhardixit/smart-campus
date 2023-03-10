import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Card } from "react-native-paper";

function OrganizerHome({ navigation }) {
  const cardData = [
    {
      id: 1,
      title: "React Masterclass",
      going: "+20 Going",
      location: "Mini Hall 2,Tp Ganesham Auditorium",
      date: "10 Mar,2023",
      expectedAudience: 200,
      refreshments: true,
      venue: "TP405",
      photo:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Flutter Masterclass",
      going: "+50 Going",
      location: "Mini Hall 1,Tp Ganesham Auditorium",
      date: "15 Mar,2023",
      expectedAudience: 200,
      refreshments: true,
      venue: "TP405",
      photo:
        "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "DSA Session",
      going: "+100 Going",
      location: "TechPark 404/405",
      date: "20 Mar,2023",
      expectedAudience: 200,
      refreshments: true,
      venue: "TP405",
      photo:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainHeader}>
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
          <Text style={styles.ongoingEventsHeading}>Event proposals</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cardData.map((item) => {
            return (
              <Card
                onPress={() =>
                  navigation.navigate("IndividualEventDetailsOrganizer", item)
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
      </ScrollView>
    </SafeAreaView>
  );
}

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
});

export default OrganizerHome;
