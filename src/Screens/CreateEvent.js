import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, Snackbar, TextInput } from "react-native-paper";
import { RadioButton } from "react-native-paper";
import axios from "axios";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";

const width = Dimensions.get("window").width;

const CreateEvent = () => {
  const [orgOptions, setOrgOptions] = useState({
    eventName: "",
    orgName: "",
    orgID: "",
    eventCat: "",
    startTime: "",
    endTime: "",
    targAud: "",
    eventDesc: "",
    orgContact: "",
  });

  const [refreshments, setRefreshments] = useState("");
  const [hallBooking, setHallBooking] = useState("");
  const [volunteers, setVolunteers] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setStartDate(currentDate);
  };

  const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setEndDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const data = [
    { label: "Tech", value: "Tech" },
    { label: "Cultural", value: "Cultural" },
  ];

  const body = {
    eventName: orgOptions.eventName,
    orgName: orgOptions.orgName,
    orgID: orgOptions.orgID,
    eventCat: orgOptions.eventCat,
    startDate: startDate,
    endDate: endDate,
    startTime: orgOptions.startTime,
    endTime: orgOptions.endTime,
    targAud: orgOptions.targAud,
    eventDesc: orgOptions.eventDesc,
    orgContact: orgOptions.orgContact,
    refreshments: refreshments,
    hallBooking: hallBooking,
    volunteers: volunteers,
  };

  const handleCreate = () => {
    axios
      .post("https://smartcampus-production.up.railway.app/createevent", body)

      .then((res) => {
        console.log(res.data);
        ToastAndroid.showWithGravity(
          "Event Created Successfully",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="dark" />
      <ScrollView>
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
            onChangeText={(text) =>
              setOrgOptions({ ...orgOptions, eventName: text })
            }
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
            onChangeText={(text) =>
              setOrgOptions({ ...orgOptions, orgName: text })
            }
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
              onChangeText={(text) =>
                setOrgOptions({ ...orgOptions, orgID: text })
              }
            />
          </View>
          <View style={{ padding: 10 }}>
            <Dropdown
              renderLeftIcon={() => {
                return <Ionicons name="apps" size={26} color="grey" />;
              }}
              dropdownPosition="bottom"
              selectedTextStyle={{
                color: "black",
                fontSize: 14,
                paddingLeft: 10,
              }}
              style={{
                backgroundColor: "white",
                padding: 7,
                borderRadius: 5,
                width: width / 2.2,
                borderColor: "#E4DFDF",
                borderWidth: 1,
                top: 5,
              }}
              placeholder="Event Category"
              placeholderStyle={{ color: "grey", fontSize: 14, marginLeft: 10 }}
              data={data}
              labelField="label"
              valueField="value"
              value={orgOptions.eventCat}
              onChange={(item) => {
                setOrgOptions({ ...orgOptions, eventCat: item.value });
                console.log(item);
              }}
            />

            {/* <TextInput
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
              onChangeText={(text) =>
                setOrgOptions({ ...orgOptions, eventCat: text })
              }
            /> */}
          </View>
        </View>

        {/* Date  */
        /* Need to change date textinput to date and time picker */}

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={showDatepicker}>
            <View
              style={{
                padding: 10,
                top: 1,
                borderColor: "#e4dfdf",
                borderWidth: 1,
                marginLeft: 8,
                width: width / 2.2,
                borderRadius: 5,
              }}
            >
              {show && (
                <DateTimePicker
                  minimumDate={new Date()}
                  mode={mode}
                  value={startDate}
                  onChange={onChange}
                />
              )}
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 5,
                  borderColor: "#e4dfdf",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    style={{ left: 20 }}
                    name="ios-calendar"
                    size={26}
                    color="grey"
                  />
                  <Text style={{ left: 30 }}>
                    {startDate.toLocaleDateString()}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={showDatepicker}>
            <View
              style={{
                padding: 10,
                top: 1,
                borderColor: "#e4dfdf",
                borderWidth: 1,
                left: 20,
                width: width / 2.2,
                borderRadius: 5,
              }}
            >
              {show && (
                <DateTimePicker
                  minimumDate={new Date()}
                  mode={mode}
                  value={endDate}
                  placeholderText="Start Date"
                  onChange={onChangeEndDate}
                />
              )}
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 5,
                  borderColor: "#e4dfdf",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    style={{ left: 20 }}
                    name="ios-calendar"
                    size={26}
                    color="grey"
                  />
                  <Text style={{ left: 30 }}>
                    {endDate.toLocaleDateString()}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
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
              label="Start Time"
              value={orgOptions.startTime}
              onChangeText={(text) =>
                setOrgOptions({ ...orgOptions, startTime: text })
              }
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
              value={orgOptions.endTime}
              onChangeText={(text) =>
                setOrgOptions({ ...orgOptions, endTime: text })
              }
            />
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            selectionColor="#121A72"
            left={
              <TextInput.Icon
                style={{ left: 3, top: 1 }}
                icon={"map-marker"}
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
            onChangeText={(text) =>
              setOrgOptions({ ...orgOptions, targAud: text })
            }
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
            label="Location"
            value={orgOptions.targAud}
            onChangeText={(text) =>
              setOrgOptions({ ...orgOptions, targAud: text })
            }
          />
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              borderColor: "#E4DFDF",
              borderWidth: 1,
              top: -5,
              borderRadius: 10,
            }}
          >
            <Ionicons
              style={{ top: 10, left: 16 }}
              name="fast-food"
              size={26}
              color="grey"
            />
            <Text style={{ top: 15, marginLeft: 28, fontSize: 15 }}>
              Refreshments Required :
            </Text>
            <RadioButton.Group>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row", padding: 10 }}>
                  <RadioButton
                    value="yesRefreshments"
                    status={
                      refreshments === "yesRefreshments"
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() => setRefreshments("yesRefreshments")}
                  />
                  <Text style={{ top: 7 }}>Yes</Text>
                </View>

                <View style={{ flexDirection: "row", padding: 10, left: -10 }}>
                  <RadioButton
                    value="NoRefreshments"
                    status={
                      refreshments === "NoRefreshments"
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() => setRefreshments("NoRefreshments")}
                    uncheckedColor="grey"
                  />
                  <Text style={{ top: 7 }}>No</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              borderColor: "#E4DFDF",
              borderWidth: 1,
              top: -5,
              borderRadius: 10,
            }}
          >
            <Ionicons
              style={{ top: 10, left: 16 }}
              name="today"
              size={26}
              color="grey"
            />
            <Text style={{ top: 15, marginLeft: 30, fontSize: 15 }}>
              Hall Booking Required :
            </Text>
            <RadioButton.Group>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row", padding: 10 }}>
                  <RadioButton
                    value="yesHall"
                    status={hallBooking === "yesHall" ? "checked" : "unchecked"}
                    onPress={() => setHallBooking("yesHall")}
                  />
                  <Text style={{ top: 7 }}>Yes</Text>
                </View>

                <View style={{ flexDirection: "row", padding: 10, left: -10 }}>
                  <RadioButton
                    value="noHall"
                    status={hallBooking === "noHall" ? "checked" : "unchecked"}
                    onPress={() => setHallBooking("noHall")}
                    uncheckedColor="grey"
                  />
                  <Text style={{ top: 7 }}>No</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              borderColor: "#E4DFDF",
              borderWidth: 1,
              top: -5,
              borderRadius: 10,
            }}
          >
            <Ionicons
              style={{ top: 10, left: 16 }}
              name="person"
              size={26}
              color="grey"
            />
            <Text style={{ top: 15, marginLeft: 30, fontSize: 15 }}>
              Volunteers Required :
            </Text>
            <RadioButton.Group>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{ flexDirection: "row", padding: 10, marginLeft: 20 }}
                >
                  <RadioButton
                    value="yesVolunteer"
                    status={
                      volunteers === "yesVolunteer" ? "checked" : "unchecked"
                    }
                    onPress={() => setVolunteers("yesVolunteer")}
                  />
                  <Text style={{ top: 7 }}>Yes</Text>
                </View>

                <View style={{ flexDirection: "row", padding: 10, left: -10 }}>
                  <RadioButton
                    value="noVolunteer"
                    status={
                      volunteers === "noVolunteer" ? "checked" : "unchecked"
                    }
                    onPress={() => setVolunteers("noVolunteer")}
                    uncheckedColor="grey"
                  />
                  <Text style={{ top: 7 }}>No</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <TouchableOpacity onPress={handleCreate}>
            <View
              style={{
                marginTop: 10,
                paddingTop: 20,
                flexDirection: "row",
                borderColor: "#E4DFDF",
                borderWidth: 1,
                borderRadius: 10,
              }}
            >
              <Ionicons
                style={{ top: -10, left: 16 }}
                name="cloud-upload"
                size={26}
                color="grey"
              />
              <Text style={{ top: -8, marginLeft: 30, fontSize: 15 }}>
                Upload Budget
              </Text>
            </View>
          </TouchableOpacity>
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
              label="Contact Number"
              value={orgOptions.orgContact}
              onChangeText={(text) =>
                setOrgOptions({ ...orgOptions, orgContact: text })
              }
              keyboardType="numeric"
              maxLength={10}
            />
          </View>
          <View style={{ padding: 10 }}>
            <TextInput
              selectionColor="#121A72"
              multiline={true}
              left={
                <TextInput.Icon
                  style={{ left: -3, top: 1 }}
                  icon="pencil"
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
                marginBottom: 10,
              }}
              mode="outlined"
              label="Event Description"
              contentStyle={{ height: 100 }}
              value={orgOptions.eventDesc}
              onChangeText={(text) =>
                setOrgOptions({ ...orgOptions, eventDesc: text })
              }
            />
          </View>
        </View>
        <Button
          onPress={handleCreate}
          labelStyle={{ fontSize: 18 }}
          style={{
            bottom: 20,
            padding: 10,
            backgroundColor: "#121A72",
            alignSelf: "center",
          }}
          contentStyle={{
            width: width / 1.4,
            flexDirection: "row-reverse",
            justifyContent: "space-evenly",
          }}
          mode="contained"
          uppercase={true}
        >
          Create Event
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({});
