import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function IndividualEventRequirements({ navigation, route }) {
  const { title, photo, expectedAudience, refreshments, venue, date } =
    route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          source={{
            uri: photo,
          }}
          style={{ width: "100%", height: 250, borderRadius: 7 }}
        />
        <View style={styles.contentBox}>
          <Text style={styles.eventName}>{title}</Text>
          <Text style={styles.details}>
            <Text style={styles.detailsHeading}>Date : </Text>
            {date || "- NA -"}
          </Text>
          <Text style={styles.details}>
            <Text style={styles.detailsHeading}>Refreshments : </Text>
            {refreshments ? "Yes" : "No"}
          </Text>
          <Text style={styles.details}>
            <Text style={styles.detailsHeading}>Expected strength : </Text>
            {expectedAudience || "- NA - "}
          </Text>
          <Text style={styles.details}>
            <Text style={styles.detailsHeading}>Requested venue : </Text>
            {venue || "- NA - "}
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={styles.approveButton}
            onPress={() => {
              navigation.navigate("Organizer");
            }}
          >
            <View>
              <Text style={styles.approveText}>Approve</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rejectButton}
            onPress={() => {
              navigation.navigate("Organizer");
            }}
          >
            <View>
              <Text style={styles.approveText}>Reject</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // 4A43EC
  eventName: {
    marginTop: 15,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 30,
  },
  contentBox: {
    margin: 10,
  },
  detailsHeading: {
    fontWeight: "bold",
  },
  details: {
    fontSize: 16,
    marginVertical: 5,
  },
  approveButton: {
    backgroundColor: "#00c308",
    borderRadius: 7,
    padding: 15,
    width: "100%",
    marginRight: 10,
    marginBottom: 10,
  },
  rejectButton: {
    backgroundColor: "#c30010",
    borderRadius: 7,
    padding: 15,
    width: "100%",
    marginRight: 10,
  },
  approveText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
  },
});

export default IndividualEventRequirements;
