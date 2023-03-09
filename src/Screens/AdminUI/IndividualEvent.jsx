import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function IndividualEvent({ navigation }) {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <ScrollView>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        style={{ width: "100%", height: 250, borderRadius: 7 }}
      />
      <View style={styles.contentBox}>
        <Text style={styles.eventName}>React Masterclass</Text>
        <Text style={styles.eventDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Date : </Text>
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Time : </Text>
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Organised by : </Text>Organizer
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Category : </Text>
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Budget report : </Text>
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Volunteer required : </Text>
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Venue required : </Text>
        </Text>
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Refreshments : </Text>
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
