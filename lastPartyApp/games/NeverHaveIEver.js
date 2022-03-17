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
      animation="bounceInRight"
      duration={800}
    >
      <TouchableOpacity
        style={{ width: "90%" }}
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
        <LinearGradient
          colors={colorSchemeForGradient}
          style={styles.largeButton}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <Animatable.Text style={styles.cardText} ref={textTitleElement}>
            Never have I ever
          </Animatable.Text>
          <Animatable.Text style={styles.cardText} ref={textBodyElement}>
            {myText}
          </Animatable.Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animatable.View>
  );
}

const colorSchemeForGradient = ["#1fcaa1", "#366de8"];

const styles = StyleSheet.create({
  largeButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: "oldlace",
    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    width: "95%",
    minHeight: "40%",
    textAlign: "center",
  },
  cardText: {
    textAlign: "left",
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    justifyContent: "flex-end",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "system font",
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "dodgerblue",
  },
});

export default NeverHaveIEverScreen;
