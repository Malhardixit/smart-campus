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
import { useState } from "react";

function IndividualEvent({ navigation, route }) {
  const { dayDateTime, eventName, photo } = route.params;
  const [selected, setselected] = useState("");

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
        <Text style={styles.details}>
          <Text style={styles.detailsHeading}>Choose venue : </Text>
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              setselected("TP 405");
            }}
          >
            <View
              style={{
                borderWidth: selected === "TP 405" ? 0 : 1,
                backgroundColor: selected === "TP 405" ? "#121A72" : "white",
                marginRight: 5,
                borderColor: "grey",
                padding: 7,
                width: 125,
                borderRadius: 7,
                borderStyle: "dashed",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: selected === "TP 405" ? "white" : "grey",
                }}
              >
                TP 405
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setselected("Hippocrates hall");
            }}
          >
            <View
              style={{
                borderWidth: selected === "Hippocrates hall" ? 0 : 1,
                backgroundColor:
                  selected === "Hippocrates hall" ? "#121A72" : "white",
                borderColor: "grey",
                padding: 7,
                width: 200,
                borderRadius: 7,
                borderStyle: "dashed",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: selected === "Hippocrates hall" ? "white" : "grey",
                }}
              >
                Hippocrates hall
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginTop: 7 }}>
          <TouchableOpacity
            onPress={() => {
              setselected("Faraday hall");
            }}
          >
            <View
              onPress={() => {}}
              style={{
                borderWidth: selected === "Faraday hall" ? 0 : 1,
                backgroundColor:
                  selected === "Faraday hall" ? "#121A72" : "white",
                borderColor: "grey",
                marginRight: 5,
                padding: 7,
                width: 125,
                borderRadius: 7,
                borderStyle: "dashed",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: selected === "Faraday hall" ? "white" : "grey",
                }}
              >
                Faraday hall
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setselected("Mini hall - 1");
            }}
          >
            <View
              style={{
                borderWidth: selected === "Mini hall - 1" ? 0 : 1,
                backgroundColor:
                  selected === "Mini hall - 1" ? "#121A72" : "white",
                borderColor: "grey",
                padding: 7,
                width: 125,
                borderRadius: 7,
                borderStyle: "dashed",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: selected === "Mini hall - 1" ? "white" : "grey",
                }}
              >
                Mini hall - 1
              </Text>
            </View>
          </TouchableOpacity>
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
