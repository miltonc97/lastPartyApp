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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import * as Animatable from "react-native-animatable";

{
  /* TODO: Fixa så att man kan gå tillbaka till förra frågan */
}

function MostLikelyToScreen({ navigation }) {
  const [myText, setMyText] = useState(
    mostLikelyToList[Math.floor(Math.random() * mostLikelyToList.length)]
  );
  return (
    <Animatable.View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      animation="bounceInRight"
      duration={800}
    >
      <TouchableOpacity
        style={{ width: "90%" }}
        activeOpacity={0.7}
        onPress={() =>
          setMyText(
            mostLikelyToList[
              Math.floor(Math.random() * mostLikelyToList.length)
            ]
          )
        }
      >
        <LinearGradient
          colors={colorSchemeForGradient}
          style={styles.largeButton}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.cardText}>{myText}</Text>
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
    height: "80%",
    textAlign: "center",
  },
  cardText: {
    textAlign: "left",
    fontSize: 45,
    color: "#fff",
    fontWeight: "bold",
    justifyContent: "flex-end",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "system font",
  },
});

export default MostLikelyToScreen;
