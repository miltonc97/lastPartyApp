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
import * as Animatable from "react-native-animatable";

function KingsCupScreen({ navigation }) {
  {
    /* TODO 1: Räkna upp hur många kort som gåtts igenom, e.g. 3/52 osv*/
  }
  {
    /* TODO 2: Skapa en liten knapp för att kunna utveckla informationen på kortet */
  }

  var deck = [];
  var suits = ["diamonds", "spades", "hearts", "clubs"];
  var values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  var titles = [
    "Waterfall",
    "You",
    "Me",
    "Whores",
    "Bust a jive",
    "Dicks",
    "Heaven",
    "Mate",
    "Rhyme",
    "Categories",
    "Never have I ever",
    "Question master",
    "Pour some into the cup",
  ];
  var rules = [
    "Everyone drinks, starting with you",
    "Pick someone to take 2 drinks",
    "Take 2 drinks",
    "Ladies drink",
    "Create a dance move; first to screw it up has to drink",
    "All the guys drink",
    "Reach for the sky; last person drinks",
    "Find a drinking buddy",
    "Pick a category, other need to say things in that category or drink",
    "First to put down three fingers has to drink",
    "Loser of this has to drink",
    "Ask questions; those who answer will drink",
    "Player who picks the last king has to drink",
  ];

  var cardKeyValue = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      deck.push(
        <Card
          key={cardKeyValue++}
          style={[
            styles.card,
            { flexDirection: "column" },
            { justifyContent: "space-between" },
          ]}
        >
          <Text
            key={suits[i] + values[j]}
            style={[styles.playingCardText, { alignSelf: "flex-start" }]}
          >
            {" "}
            {values[j]}
          </Text>
          <Text
            key={suits[i] + titles[j]}
            style={[
              styles.playingCardText,
              { flexShrink: 1 },
              { alignSelf: "center" },
              { flexWrap: "wrap" },
            ]}
          >
            {titles[j]}
          </Text>
          <Text
            key={suits[i] + rules[j]}
            style={[
              styles.playingCardText,
              { alignSelf: "center" },
              { fontSize: 30 },
            ]}
          >
            {rules[j]}
          </Text>
          <Text
            key={"upsideDown" + suits[i] + values[j]}
            style={[
              styles.playingCardText,
              { alignSelf: "flex-end" },
              { paddingBottom: 0 },
              { transform: [{ rotate: "180deg" }] },
            ]}
          >
            {values[j]}{" "}
          </Text>
        </Card>
      );
    }
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
            No more cards :(
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

function KingsCupSettingScreen({ navigation }) {
  {
    /* TODO: Gör det möjligt att redigera vad som vissas på korten */
  }
  return (
    <ScrollView
      style={styles.homeScreenViewStyle}
      contentContainerStyle={styles.homeViewScreenViewContent}
    >
      <TouchableOpacity activeOpacity={0.7}>
        <LinearGradient
          colors={colorSchemeForGradient}
          style={styles.mediumButton}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.mediumButtonText}>Inställnignar</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
}

const colorSchemeForGradient = ["#1fcaa1", "#366de8"];

const styles = StyleSheet.create({
  card: {
    width: 330,
    height: 462,
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
  playingCardText: {
    textAlign: "center",
    fontSize: 55,
    fontFamily: "System",
    color: "#23232c",
    backgroundColor: "transparent",
    flexWrap: "wrap",
  },
  suitsSize: {
    width: 40,
    height: 40,
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
    height: "15%",
    flex: 1,
    textAlign: "center",
  },
  homeScreenViewStyle: {
    flex: 1,
    backgroundColor: "#23232c",
    padding: 15,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  homeViewScreenViewContent: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export { KingsCupScreen, KingsCupSettingScreen };
