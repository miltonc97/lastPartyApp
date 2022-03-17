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

{
  /* TODO: Implentera hela denna funktionen, inte ens gjord lmao */
}

function InOtherWordsScreen({ navigation }) {
  return (
    <Text style={[{ fontSize: 40 }, { color: "#e3a09e" }]}>
      Zoom me up, Scotty
    </Text>
  );
}

function InOtherWordsGameScreen({ navigation }) {
  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <Text style={{ fontSize: 10 }}>
        WHAT INTE HE HUFAHIUGSIDHUGHUIJNSSIHUJNDGHIUJFSDSUHJIDFSUHIDJFIHUJOSDF
      </Text>
    </ScrollView>
  );
}

const colorSchemeForGradient = ["#1fcaa1", "#366de8"];

const styles = StyleSheet.create({
  homeScreenStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    backgroundColor: "#23232c",
  },
  mediumButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: "oldlace",
    alignSelf: "center",
    marginHorizontal: "1%",
    marginBottom: 10,
    minWidth: "95%",
    minHeight: "15%",
    textAlign: "center",
  },
});

export { InOtherWordsScreen, InOtherWordsGameScreen };
