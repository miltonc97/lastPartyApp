import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Platform, Button } from 'react-native';
import { NavigationContainer, DefaultTheme, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { Icon } from 'react-native-elements';
{/* GAMES */}
import SpinTheBottleScreen from './games/SpinTheBottle.js';
import { InOtherWordsScreen, InOtherWordsGameScreen } from './games/InOtherWords.js';
import NeverHaveIEverScreen from './games/NeverHaveIEver.js';
import TruthOrDareScreen from './games/TruthOrDare.js';
import { KingsCupScreen, KingsCupSettingScreen } from './games/KingsCup.js';
import HigherLowerScreen from './games/HigherLower.js';
import DiceScreen from './games/Dice.js';
import MostLikelyToScreen from './games/MostLikelyTo.js';
{/* ASSETS */ }
import neverHaveIEverList from './assets/gameLists/neverHaveIEver.js';
import dareList from './assets/gameLists/dare.js';
import truthList from './assets/gameLists/truth.js';
import mostLikelyToList from './assets/gameLists/mostLikelyTo.js'

function HomeScreen({ navigation }) {
    const isFocused = useIsFocused();
    {/* TODO: Scrollen snappar tillbaka, fixa så att viewen scrollar */}
    return (
      <ScrollView style={styles.homeScreenViewStyle} contentContainerStyle={styles.homeViewScreenViewContent} >
        {/*<TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('SpinTheBottle')}>
          <LinearGradient colors={colorSchemeForGradient} style={styles.HomeScreenButtonStyle} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
            <Text style={styles.HomeScreenButtonTextStyle}>
              Snurra flaskan
            </Text>
          </LinearGradient>
        </TouchableOpacity>*/}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('NeverHaveIEver')}>
          <LinearGradient colors={colorSchemeForGradient} style={styles.HomeScreenButtonStyle} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
            <Text style={styles.HomeScreenButtonTextStyle}>
              Jag har aldrig
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('HigherLower')}>
          <LinearGradient colors={colorSchemeForGradient} style={styles.HomeScreenButtonStyle} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
            <Text style={styles.HomeScreenButtonTextStyle}>
              Högre/lägre
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TruthOrDare')}>
          <LinearGradient colors={colorSchemeForGradient} style={styles.HomeScreenButtonStyle} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
            <Text style={styles.HomeScreenButtonTextStyle}>
              Sanning eller konka
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('InOtherWords')}>
          <LinearGradient colors={colorSchemeForGradient} style={styles.HomeScreenButtonStyle} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
            <Text style={styles.HomeScreenButtonTextStyle}>
              Med andra ord
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('KingsCup')}>
          <LinearGradient colors={colorSchemeForGradient} style={styles.HomeScreenButtonStyle} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
            <Text style={styles.HomeScreenButtonTextStyle}>
              Kings cup
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('MostLikelyTo')}>
          <LinearGradient colors={colorSchemeForGradient} style={styles.HomeScreenButtonStyle} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
            <Text style={styles.HomeScreenButtonTextStyle}>
              Pekleken
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        {/*<TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Dice')}>
          <LinearGradient colors={colorSchemeForGradient} style={styles.HomeScreenButtonStyle} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
            <Text style={styles.HomeScreenButtonTextStyle}>
              Tärning
            </Text>
          </LinearGradient>
        </TouchableOpacity>*/}
      </ScrollView>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name='Home' component={HomeScreen} options={{title: "Välj ett spel"}} />
        <Stack.Screen name='SpinTheBottle' component={SpinTheBottleScreen} />
        <Stack.Screen name='NeverHaveIEver' component={NeverHaveIEverScreen} options={{title: "Jag har aldrig"}} />
        <Stack.Screen name='HigherLower' component={HigherLowerScreen} options={{title: "Högre/lägre"}} />
        <Stack.Screen name='TruthOrDare' component={TruthOrDareScreen} options={{title: "Sanning eller konka"}} />
        <Stack.Screen name='Dice' component={DiceScreen} options={{title: "Tärning"}} />
        <Stack.Screen name="KingsCup" component={KingsCupScreen} options={({navigation}) => ({
          title: "King's cup",
          gestureEnabled: false,
          headerRight: () => (
            <Icon
              onPress={() => navigation.navigate('KingsCupSettings')}
              name="edit"
              color="#fefdff"
            />
          ),
        })}
         />
        <Stack.Screen name="InOtherWords" component={InOtherWordsScreen} options={{title: "Med andra ord"}}/>
        <Stack.Screen name="MostLikelyTo" component={MostLikelyToScreen} options={{title: "Pekleken"}}/>

        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name='InOtherWordsSettings' component={InOtherWordsGameScreen} />
          <Stack.Screen name='KingsCupSettings'  component={KingsCupSettingScreen} options={{title: "King's cup inställningar"}} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer> 
  );
} 

const MyTheme = {
  dark: false,
  colors: {
    primary: '#fefdff',
    background: '#23232c',
    card: '#23232c',
    text: '#fefdff',
    border: '#23232c',
    notification: 'dodgerblue',
    fontFamily: 'Avenir'
  },
};

const colorSchemeForGradient = ['#ffa32d', '#ff661a'];

const styles = StyleSheet.create({
  homeScreenViewStyle: {
    flex: 1,
    backgroundColor: '#23232c',
    padding: 15,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  homeViewScreenViewContent: {
    alignItems: 'center',
  },
  HomeScreenButtonStyle: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: 'oldlace',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 10,
    minWidth: '95%',
    minHeight: '20%',
    textAlign: 'center',
    shadowOpacity:0.5,
  },
  HomeScreenButtonTextStyle:{
    fontSize: 30, 
    color: '#dbe9f7', 
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Avenir': 'system font',
    margin: 10,
  },
});

