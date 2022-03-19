import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Platform,
  Button,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import SafeAreaView from "react-native-safe-area-view";
import { NavigationContainer } from "@react-navigation/native";

function StartScreen({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#28293d" }]}>
      <StatusBar barStyle="light-content" backgroundColor="#4c59fe" />
      <Animatable.Text
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        duration={2000}
        style={styles.startText}
      >
        Välkommen!
      </Animatable.Text>
      <TouchableOpacity style={styles.largeButton}>
        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          duration={2000}
          style={styles.startText}
        >
          {" "}
          STARTA{" "}
        </Animatable.Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  largeButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: "oldlace",
    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    width: "60%",
    height: "15%",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#4c59fe",
    shadowOpacity: 0.5,
    marginTop: "15%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  startText: {
    textAlign: "center",
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    justifyContent: "flex-end",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "system font",
  },
});

{
  /* style=
      {{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: " #4c59fe",
      }}
      */
}

export default StartScreen;
