import React, { useEffect, useRef } from "react";
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
  Animated,
  Easing,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import * as Animatable from "react-native-animatable";

function NeverHaveIEverScreen({ navigation }) {
  const [myText, setMyText] = useState(
    neverHaveIEverList[Math.floor(Math.random() * neverHaveIEverList.length)]
  );

  const textTitleElement = useRef(null);
  const textBodyElement = useRef(null);

  return (
    <Animatable.View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      animation="bounceIn"
      duration={1200}
    >
      <TouchableOpacity style={styles.titleBox} activeOpacity={0.7}>
        <Animatable.Text style={styles.cardText}>
          Never have I ever...
        </Animatable.Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.largeButton}
        activeOpacity={0.7}
        onPress={() => {
          setMyText(
            neverHaveIEverList[
              Math.floor(Math.random() * neverHaveIEverList.length)
            ]
          );
          textBodyElement.current.animate("bounceIn", 1000, "linear");
          textTitleElement.current.animate("bounceIn", 1000, "linear");
        }}
      >
        <Animatable.Text
          style={styles.cardText}
          ref={textTitleElement}
        ></Animatable.Text>
        <Animatable.Text style={styles.cardText} ref={textBodyElement}>
          {myText}
        </Animatable.Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.questionBox}
        onPress={() => {
          setMyText(
            neverHaveIEverList[
              Math.floor(Math.random() * neverHaveIEverList.length)
            ]
          );
          textBodyElement.current.animate("bounceIn", 1000, "linear");
        }}
        activeOpacity={0.7}
      >
        <Text style={styles.cardText}>Nästa fråga</Text>
      </TouchableOpacity>
    </Animatable.View>
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
    shadowOpacity: 0.5,
    width: "85%",
    height: "40%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3d3e50",
  },
  titleBox: {
    borderRadius: 15,
    backgroundColor: "oldlace",
    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    width: "85%",
    height: "10%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3d3e50",
    marginTop: "15%",
    shadowOpacity: 0.5,
  },
  cardText: {
    textAlign: "left",
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    justifyContent: "flex-end",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "system font",
  },
  questionBox: {
    borderRadius: 15,
    alignSelf: "center",
    marginBottom: 6,
    width: "85%",
    height: "10%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
    shadowOpacity: 0.5,
    backgroundColor: "#4c59fe",
    marginTop: "auto",
    marginBottom: "15%",
  },
});

export default NeverHaveIEverScreen;
