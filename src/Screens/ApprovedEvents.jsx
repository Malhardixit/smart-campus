import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { useState } from "react";
import { ActivityIndicator } from "react-native-paper";

function IndividualEvent({ navigation, route }) {
  const { startDate, endDate, eventName, photo, bookingId } = route.params;

  const [photoUrl, setPhotoUrl] = useState(
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  );

  const [caption, setCaption] = useState("Hi my first post");
  const [mail, setMail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMailLoading, setIsMailLoading] = useState(false);

  console.log(isLoading);

  const handleImage = () => {
    setIsLoading(true);
    const body = {
      photoUrl: photoUrl,
      caption: caption,
    };

    axios
      .post(
        "https://smartcampus-production.up.railway.app/uploadOnSocialMedia",
        body
      )
      .then((res) => {
        console.log(res.data);
        ToastAndroid.showWithGravity(
          "Image Uploaded",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        ToastAndroid.showWithGravity(
          "Error Occured",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        setIsLoading(false);
      });
  };

  const handleMail = () => {
    setIsMailLoading(true);
    const body = {
      bookingId: bookingId,
      mailContent: mail,
    };

    console.log(body);

    axios
      .post(
        "https://smartcampus-production.up.railway.app/alertParticipants",
        body
      )
      .then((res) => {
        console.log(res.data);
        ToastAndroid.showWithGravity(
          "Mail Sent",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        setIsMailLoading(false);
      })
      .catch((err) => {
        console.log(err);
        ToastAndroid.showWithGravity(
          "Error Occured",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        setIsMailLoading(false);
      });
  };

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
          {startDate || "- NA - "} - {endDate || "- NA - "}
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
            value={photoUrl}
            onChangeText={(text) => setPhotoUrl(text)}
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
          <Ionicons name="pencil" size={26} color="grey" />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              marginLeft: 5,
              height: 45,
              padding: 5,
            }}
            placeholder="Caption for the image"
            value={caption}
            onChangeText={(text) => setCaption(text)}
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
            value={mail}
            onChangeText={(text) => setMail(text)}
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
        {isLoading ? (
          <ActivityIndicator size="large" color="#121A72" />
        ) : (
          <TouchableOpacity style={styles.approveButton} onPress={handleImage}>
            <View>
              <Text style={styles.approveText}>Upload Poster</Text>
            </View>
          </TouchableOpacity>
        )}
        {isMailLoading ? (
          <ActivityIndicator size="large" color="#121A72" />
        ) : (
          <TouchableOpacity style={styles.approveButton} onPress={handleMail}>
            <View>
              <Text style={styles.approveText}>Mail Participants</Text>
            </View>
          </TouchableOpacity>
        )}
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
