import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function IndividualEvent({ navigation, route }) {
  const { dayDateTime, eventName, photo } = route.params;

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
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Date : </Text>
          {dayDateTime || "- NA - "}
        </Text>
        <View
          style={{
            borderWidth: 1,
            marginBottom: 10,
            borderRadius: 7,
            borderColor: "grey",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Ionicons name="cloud-upload" size={26} color="grey" />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              marginLeft: 5,
              height: 45,
              padding: 5,
            }}
            placeholder="Poster URL"
          ></TextInput>
        </View>
        <View
          style={{
            borderWidth: 1,
            marginBottom: 10,
            borderRadius: 7,
            borderColor: "grey",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Ionicons name="mail-outline" size={26} color="grey" />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              marginLeft: 5,
              height: 45,
              padding: 5,
            }}
            placeholder="Mail Id"
          ></TextInput>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 7,
            borderColor: "grey",
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Ionicons name="text-outline" size={26} color="grey" />
          <TextInput
            multiline={true}
            style={{
              flex: 1,
              fontSize: 16,
              marginLeft: 5,
              height: "100%",
              padding: 5,
            }}
            placeholder="Mail content"
          ></TextInput>
        </View>
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
            navigation.navigate("Home");
          }}
        >
          <View>
            <Text style={styles.approveText}>Update</Text>
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
    marginBottom: 15,
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
