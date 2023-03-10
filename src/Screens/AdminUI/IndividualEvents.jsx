import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function IndividualEvent({ navigation, route }) {
  const {
    eventName,
    startDate,
    endDate,
    startTime,
    endTime,
    orgID,
    eventDesc,
    eventCat,
    photo,
    budgetReport,
    volunteersReq,
    venueRequired,
    refreshments,
  } = route.params;
  const [isAccepted, setIsAccepted] = useState(false);

  console.log({ eventNameFromIndi: startTime });

  return (
    <ScrollView>
      <Image
        source={{
          uri: photo,
        }}
        style={{ width: "100%", height: 250, borderRadius: 7 }}
      />
      <View style={styles.contentBox}>
        <Text style={styles.eventName}>{eventName}</Text>
        <Text style={styles.eventDescription}>{eventDesc || "- NA - "}</Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Date : </Text>
          {startDate || "- NA - "} - {endDate || "- NA - "}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Time : </Text>
          {startTime || "- NA - "} - {endTime || "- NA - "}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Organised by : </Text>
          {orgID || "- NA - "}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Category : </Text>
          {eventCat || "- NA - "}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Budget report : </Text>
          {budgetReport || "- NA - "}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Volunteer required : </Text>
          {volunteersReq || "- NA - "}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Venue required : </Text>
          {"Not yet confirmed"}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Refreshments : </Text>
          {refreshments === "yesRefreshments" ? "Yes" : "No" || "- NA - "}
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
            navigation.navigate("AdminHome");
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
            navigation.navigate("AdminHome");
            setIsAccepted(true);
          }}
        >
          <View>
            <Text style={styles.approveText}>Reject</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentBox: {
    margin: 10,
  },
  eventName: {
    marginTop: 15,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 30,
  },
  eventDescription: {
    fontSize: 16,
    marginBottom: 10,
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

export default IndividualEvent;
