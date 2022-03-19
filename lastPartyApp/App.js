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
import {
  NavigationContainer,
  DefaultTheme,
  useIsFocused,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { Icon } from "react-native-eva-icons";
import * as Animatable from "react-native-animatable";
{
  /* SCREENS */
}
import SpinTheBottleScreen from "./games/SpinTheBottle.js";
import {
  InOtherWordsScreen,
  InOtherWordsGameScreen,
} from "./games/InOtherWords.js";
import NeverHaveIEverScreen from "./games/NeverHaveIEver.js";
import TruthOrDareScreen from "./games/TruthOrDare.js";
import { KingsCupScreen, KingsCupSettingScreen } from "./games/KingsCup.js";
import HigherLowerScreen from "./games/HigherLower.js";
import DiceScreen from "./games/Dice.js";
import MostLikelyToScreen from "./games/MostLikelyTo.js";
import StartScreen from "./games/Start.js";
import DrunkQuestionsScreen from "./games/DrunkQuestions.js";
{
  /* ASSETS */
}
import neverHaveIEverList from "./assets/gameLists/neverHaveIEver.js";
import dareList from "./assets/gameLists/dare.js";
import truthList from "./assets/gameLists/truth.js";
import mostLikelyToList from "./assets/gameLists/mostLikelyTo.js";
import drunkQuestionsList from "./assets/gameLists/drunkQuestions.js";

{
  /*  */
}
{
  /* TODO LIST FOR ENTIRE PROJECT */
}
{
  /* 1. Switch storage to AsyncStorage */
}
{
  /* 2. Allow for users to change data e.g. Cards in King's cup, adding question to truth/dare and never have i ever */
}
{
  /* 3. Fix so that ScrollingView doesnt snaps back  */
}
{
  /* 4.  */
}

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={[styles.homeScreenViewStyle]}>
      <Animatable.View
        style={{ flex: 1 }}
        animation="bounceIn"
        duration={1200}
        easing="ease-out-sine"
      >
        {/*<TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("SpinTheBottle")}
          style={styles.HomeScreenButtonStyle}
          >
            <Text style={styles.HomeScreenButtonTitleStyle}>Snurra flaskan</Text>
        </TouchableOpacity>*/}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("NeverHaveIEver")}
          style={styles.HomeScreenButtonStyle}
        >
          <Text style={styles.HomeScreenButtonTitleStyle}>Jag har aldrig</Text>
          <Text style={styles.HomeScreenButtonTextStyle}>
            Vem har gjort vad?
          </Text>
          <Icon
            name="arrow-circle-right"
            width={45}
            height={45}
            fill="#3d3e50"
            style={[{ start: "20%" }, { flex: 2 }]}
          ></Icon>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("HigherLower")}
          style={styles.HomeScreenButtonStyle}
        >
          <Text style={styles.HomeScreenButtonTitleStyle}>Högre/lägre</Text>
          <Text style={styles.HomeScreenButtonTextStyle}>
            Ingen kortlek? Inget problem!
          </Text>
          <Icon
            name="arrow-circle-right"
            width={45}
            height={45}
            fill="#3d3e50"
            style={[{ start: "10%" }]}
          ></Icon>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("TruthOrDare")}
          style={styles.HomeScreenButtonStyle}
        >
          <Text style={styles.HomeScreenButtonTitleStyle}>
            Sanning eller konka
          </Text>
          <Text style={styles.HomeScreenButtonTextStyle}>
            Krydda till förfesten lite
          </Text>
        </TouchableOpacity>
        {/*<TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("InOtherWords")}
          style={styles.HomeScreenButtonStyle}
          >
            <Text style={styles.HomeScreenButtonTitleStyle}>Med andra ord</Text>
          </LinearGradient>
        </TouchableOpacity>*/}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("KingsCup")}
          style={styles.HomeScreenButtonStyle}
        >
          <Text style={styles.HomeScreenButtonTitleStyle}>Kings cup</Text>
          <Text style={styles.HomeScreenButtonTextStyle}>
            Fortfarande ingen kortlek?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("MostLikelyTo")}
          style={styles.HomeScreenButtonStyle}
        >
          <Text style={styles.HomeScreenButtonTitleStyle}>Pekleken</Text>
          <Text style={styles.HomeScreenButtonTextStyle}>
            Vem stämmer påståendet bäst in på?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("DrunkQuestions")}
          style={styles.HomeScreenButtonStyle}
        >
          <Text style={styles.HomeScreenButtonTitleStyle}>Fyllefrågor</Text>
          <Text style={styles.HomeScreenButtonTextStyle}>
            Frågorna när festen är i full gång
          </Text>
        </TouchableOpacity>
        {/*
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Dice")}
            style={styles.HomeScreenButtonStyle}
          >
              <Text style={styles.HomeScreenButtonTitleStyle}>Tärning</Text>
            </LinearGradient>
          </TouchableOpacity>
        */}
      </Animatable.View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={[{ title: "Start Screen" }, { headerShown: false }]}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Huvudmeny" }}
        />
        <Stack.Screen name="SpinTheBottle" component={SpinTheBottleScreen} />
        <Stack.Screen
          name="NeverHaveIEver"
          component={NeverHaveIEverScreen}
          options={{ title: "Jag har aldrig" }}
        />
        <Stack.Screen
          name="HigherLower"
          component={HigherLowerScreen}
          options={{ title: "Högre/lägre", gestureEnabled: false }}
        />
        <Stack.Screen
          name="TruthOrDare"
          component={TruthOrDareScreen}
          options={{ title: "Sanning eller konka" }}
        />
        <Stack.Screen
          name="Dice"
          component={DiceScreen}
          options={{ title: "Tärning" }}
        />
        <Stack.Screen
          name="KingsCup"
          component={KingsCupScreen}
          options={({ navigation }) => ({
            title: "King's cup",
            gestureEnabled: false,
            headerRight: () => (
              <Icon
                onPress={() => navigation.navigate("KingsCupSettings")}
                name="edit"
                color="#fefdff"
              />
            ),
          })}
        />
        <Stack.Screen
          name="InOtherWords"
          component={InOtherWordsScreen}
          options={{ title: "Med andra ord" }}
        />
        <Stack.Screen
          name="MostLikelyTo"
          component={MostLikelyToScreen}
          options={{ title: "Pekleken" }}
        />
        <Stack.Screen
          name="DrunkQuestions"
          component={DrunkQuestionsScreen}
          options={{ title: "Pekleken" }}
        />

        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="InOtherWordsSettings"
            component={InOtherWordsGameScreen}
          />
          <Stack.Screen
            name="KingsCupSettings"
            component={KingsCupSettingScreen}
            options={{ title: "King's cup inställningar" }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: "#fefdff",
    background: "#28293d",
    card: "#28293d",
    text: "#fefdff",
    border: "#28293d",
    notification: "dodgerblue",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "system font",
    fontWeight: "bold",
  },
};

const styles = StyleSheet.create({
  homeScreenViewStyle: {
    backgroundColor: "#28293d",
    padding: 15,
    height: "100%",
    width: "100%",
    flex: 1,
  },
  homeViewScreenViewContent: {
    alignItems: "center",
  },
  HomeScreenButtonStyle: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,
    marginHorizontal: "1%",
    marginBottom: 10,
    width: "90%",
    height: "15%",
    shadowOpacity: 0.5,
    backgroundColor: "#3d3e50",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    alignContent: "flex-start",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  HomeScreenButtonTitleStyle: {
    fontSize: 25,
    color: "#ffffff",
    fontWeight: "bold",
    alignSelf: "flex-start",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "system font",
    margin: 10,
    flex: 0.5,
  },
  HomeScreenButtonTextStyle: {
    fontSize: 15,
    color: "#ffffff",
    alignSelf: "flex-start",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "system font",
    margin: 10,
    flex: 0.5,
  },
});
