import React, { useRef } from "react";
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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import * as Animatable from "react-native-animatable";

{
  /* TODO: Fixa så att man kan gå tillbaka till förra frågan */
}

function MostLikelyToScreen({ navigation }) {
  const textBodyElement = useRef(null);

  const [myText, setMyText] = useState(
    mostLikelyToList[Math.floor(Math.random() * mostLikelyToList.length)]
  );
  return (
    <Animatable.View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        alignContent: "space-around",
      }}
      animation="bounceIn"
      duration={1200}
    >
      <TouchableOpacity style={styles.titleBox} activeOpacity={0.7}>
        <Animatable.Text style={styles.cardText}>
          Who is most likely to...
        </Animatable.Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.largeButton}
        activeOpacity={0.7}
        onPress={() => {
          setMyText(
            mostLikelyToList[
              Math.floor(Math.random() * mostLikelyToList.length)
            ]
          );
          textBodyElement.current.animate("bounceIn", 1000, "linear");
        }}
      >
        <Animatable.Text ref={textBodyElement} style={styles.cardText}>
          {myText}
        </Animatable.Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.questionBox}
        onPress={() => {
          setMyText(
            mostLikelyToList[
              Math.floor(Math.random() * mostLikelyToList.length)
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
    alignSelf: "center",
    marginBottom: 6,
    width: "85%",
    height: "40%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3d3e50",
    shadowOpacity: 0.5,
  },
  titleBox: {
    borderRadius: 15,
    alignSelf: "center",
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
    color: "#ffffff",
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

export default MostLikelyToScreen;
