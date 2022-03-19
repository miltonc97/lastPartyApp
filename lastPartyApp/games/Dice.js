import React, { useState, useEffect, useRef } from "react";
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
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "react-native-elements";
import * as Animatable from "react-native-animatable";
// import Dice from "react-dice-roll";

{
  /* react-dice-roll, worth checking out */
}

function DiceScreen({ navigation }) {
  {
    /* TODO: Gör en tärning, kika på react-dice-roll och ifall det går att implementera */
  }
  const textElement = useRef(null);
  const textTitle = useRef(null);

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
          textElement.current.animate("bounceIn", 1000, "linear");
          textTitle.current.animate("bounceIn", 1000, "linear");
        }}
      >
        <LinearGradient
          colors={colorSchemeForGradient}
          style={styles.largeButton}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <Animatable.Text style={styles.cardText} ref={textTitle}>
            Never have I ever
          </Animatable.Text>
          <Animatable.Text style={styles.cardText} ref={textElement}>
            ExampleText
          </Animatable.Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animatable.View>
  );
}

const colorSchemeForGradient = ["#182340", "#182340"];

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
    minHeight: "20%",
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

export default DiceScreen;
