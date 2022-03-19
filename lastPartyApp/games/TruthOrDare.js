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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import * as Animatable from "react-native-animatable";

{
  /* Gör det lite snyggare, ser inte så fint ut hehe */
}

function TruthOrDareScreen({ navigation }) {
  const [myText, setMyText] = useState("Sanning eller konka");

  const textBodyElement = useRef(null);

  return (
    <Animatable.View
      style={[{ padding: 15 }, { flex: 1 }, { justifyContent: "space-evenly" }]}
      animation="bounceIn"
      duration={1200}
    >
      <TouchableOpacity style={styles.largeButton} activeOpacity={0.7}>
        <Animatable.Text ref={textBodyElement} style={styles.largeButtonText}>
          {myText}
        </Animatable.Text>
      </TouchableOpacity>
      <View
        style={{
          padding: 15,
          flex: 1,
          justifyContent: "center",
          alignContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={styles.smallButton}
          activeOpacity={0.7}
          onPress={() => {
            setMyText(truthList[Math.floor(Math.random() * truthList.length)]);
            textBodyElement.current.animate("bounceIn", 1000, "linear");
          }}
        >
          <Text style={styles.smallButtonText}>Sanning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.smallButton}
          activeOpacity={0.7}
          onPress={() => {
            setMyText(dareList[Math.floor(Math.random() * dareList.length)]);
            textBodyElement.current.animate("bounceIn", 1000, "linear");
          }}
        >
          <Text style={styles.smallButtonText}>Konka</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  smallButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: "oldlace",
    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 10,
    width: "45%",
    height: "25%",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#4c59fe",
    shadowOpacity: 0.5,
    marginTop: "auto",
    marginBottom: "15%",
  },
  largeButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: "oldlace",
    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 6,
    width: "95%",
    height: "40%",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#3d3e50",
    shadowOpacity: 0.5,
    marginTop: "15%",
  },
  smallButtonText: {
    fontSize: 25,
    color: "#dbe9f7",
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "system font",
    margin: 10,
  },
  largeButtonText: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "system font",
    margin: 10,
  },
});

export default TruthOrDareScreen;
