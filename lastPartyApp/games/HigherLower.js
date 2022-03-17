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
} from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { LinearGradient } from "expo-linear-gradient";
import images from "./assetsForGames/higherLowerImageLocations.js";
import * as Animatable from "react-native-animatable";

function HigherLowerScreen({ navigation }) {
  var deck = [];

  for (let i = 0; i < 52; i++) {
    deck.push(
      <Card key="{i}" style={styles.card}>
        <Image
          key="{i}"
          style={[{ height: 420 }, { width: 300 }]}
          source={images["image" + [i]]}
        />
      </Card>
    );
  }
  shuffle(deck);

  return (
    <Animatable.View
      style={{ flex: 1 }}
      animation="bounceInRight"
      duration={800}
    >
      <CardStack
        style={[
          { flex: 5 },
          { alignItems: "center" },
          { justifyContent: "center" },
        ]}
        renderNoMoreCards={() => (
          <Text style={{ fontWeight: "700", fontSize: 18, color: "gray" }}>
            No more cards :
          </Text>
        )}
      >
        {deck}
      </CardStack>
    </Animatable.View>
  );
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const colorSchemeForGradient = ["#1fcaa1", "#366de8"];

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 420,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HigherLowerScreen;
