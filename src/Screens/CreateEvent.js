import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput } from "react-native-paper";

const width = Dimensions.get("window").width;

const CreateEvent = () => {
  const [orgOptions, setOrgOptions] = useState({
    eventName: "",
    orgName: "",
    orgID: "",
    eventCat: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    targAud: "",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="dark" />
      <View style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Ionicons name="arrow-back" size={26} color="black" />
          <Text style={{ fontSize: 24, color: "black" }}>Create Event</Text>
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <TextInput
          selectionColor="#121A72"
          left={
            <TextInput.Icon
              style={{ left: 3, top: 1 }}
              icon={"calendar-outline"}
              iconColor="grey"
              size={25}
            />
          }
          underlineColor="#121A72"
          activeOutlineColor="#121A72"
          outlineColor="#E4DFDF"
          style={{ backgroundColor: "white", borderRadius: 12 }}
          mode="outlined"
          label="Event Name"
          value={orgOptions.eventName}
        />
      </View>
      <View style={{ padding: 10 }}>
        <TextInput
          selectionColor="#121A72"
          left={
            <TextInput.Icon
              style={{ left: 3, top: 1 }}
              icon={"account"}
              iconColor="grey"
              size={25}
            />
          }
          underlineColor="#121A72"
          activeOutlineColor="#121A72"
          outlineColor="#E4DFDF"
          style={{ backgroundColor: "white", borderRadius: 12 }}
          mode="outlined"
          label="Organizer Name"
          value={orgOptions.orgName}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ padding: 10 }}>
          <TextInput
            selectionColor="#121A72"
            left={
              <TextInput.Icon
                style={{ left: 3, top: 1 }}
                icon={"pound"}
                iconColor="grey"
                size={25}
              />
            }
            underlineColor="#121A72"
            activeOutlineColor="#121A72"
            outlineColor="#E4DFDF"
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              width: width / 2.2,
            }}
            mode="outlined"
            label="Organizer Id"
            value={orgOptions.orgID}
          />
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            selectionColor="#121A72"
            left={
              <TextInput.Icon
                style={{ left: 3, top: 1 }}
                icon={"shape-outline"}
                iconColor="grey"
                size={25}
              />
            }
            underlineColor="#121A72"
            activeOutlineColor="#121A72"
            outlineColor="#E4DFDF"
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              width: width / 2.2,
            }}
            mode="outlined"
            label="Event Category"
            value={orgOptions.eventCat}
          />
        </View>
      </View>

      {/* Date  */
      /* Need to change date textinput to date and time picker */}

      <View style={{ flexDirection: "row" }}>
        <View style={{ padding: 10 }}>
          <TextInput
            selectionColor="#121A72"
            left={
              <TextInput.Icon
                style={{ left: 3, top: 1 }}
                icon={"calendar-blank"}
                iconColor="grey"
                size={25}
              />
            }
            underlineColor="#121A72"
            activeOutlineColor="#121A72"
            outlineColor="#E4DFDF"
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              width: width / 2.2,
            }}
            mode="outlined"
            label="Start Date"
            value={orgOptions.startDate}
          />
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            selectionColor="#121A72"
            left={
              <TextInput.Icon
                style={{ left: 3, top: 1 }}
                icon={"calendar-blank"}
                iconColor="grey"
                size={25}
              />
            }
            underlineColor="#121A72"
            activeOutlineColor="#121A72"
            outlineColor="#E4DFDF"
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              width: width / 2.2,
            }}
            mode="outlined"
            label="End Date"
            value={orgOptions.endDate}
          />
        </View>
      </View>

      {/* Time */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ padding: 10 }}>
          <TextInput
            selectionColor="#121A72"
            left={
              <TextInput.Icon
                style={{ left: 3, top: 1 }}
                icon={"clock-time-four-outline"}
                iconColor="grey"
                size={25}
              />
            }
            underlineColor="#121A72"
            activeOutlineColor="#121A72"
            outlineColor="#E4DFDF"
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              width: width / 2.2,
            }}
            mode="outlined"
            label="Start Date"
            value={orgOptions.startTime}
          />
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            selectionColor="#121A72"
            left={
              <TextInput.Icon
                style={{ left: 3, top: 1 }}
                icon={"clock-time-four-outline"}
                iconColor="grey"
                size={25}
              />
            }
            underlineColor="#121A72"
            activeOutlineColor="#121A72"
            outlineColor="#E4DFDF"
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              width: width / 2.2,
            }}
            mode="outlined"
            label="End Time"
            value={orgOptions.endDate}
          />
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <TextInput
          selectionColor="#121A72"
          left={
            <TextInput.Icon
              style={{ left: 3, top: 1 }}
              icon={"account"}
              iconColor="grey"
              size={25}
            />
          }
          underlineColor="#121A72"
          activeOutlineColor="#121A72"
          outlineColor="#E4DFDF"
          style={{ backgroundColor: "white", borderRadius: 12 }}
          mode="outlined"
          label="Target Audience"
          value={orgOptions.targAud}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({});
