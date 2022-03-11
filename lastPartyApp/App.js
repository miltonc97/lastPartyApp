import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollVeiw, FlatList, Platform } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import CardStack, { Card } from 'react-native-card-stack-swiper';


function HomeScreen({ navigation }) {
    return (
      <View style={styles.homeScreenStyles}>
        <View style={ { padding: 15, flex: 1 } }>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SpinTheBottle')}>
            <LinearGradient colors={colorSchemeForGradient} style={styles.homeScreenButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
              <Text style={styles.homeScreenCardText}>
                Snurra flaskan
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('NeverHaveIEver')}>
            <LinearGradient colors={colorSchemeForGradient} style={styles.homeScreenButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
              <Text style={styles.homeScreenCardText}>
                Jag har aldrig
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('HigherLower')}>
            <LinearGradient colors={colorSchemeForGradient} style={styles.homeScreenButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
              <Text style={styles.homeScreenCardText}>
                Högre/lägre
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('TruthOrDare')}>
            <LinearGradient colors={colorSchemeForGradient} style={styles.homeScreenButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
              <Text style={styles.homeScreenCardText}>
                Sanning eller konka
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Dice')}>
            <LinearGradient colors={colorSchemeForGradient} style={styles.homeScreenButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
              <Text style={styles.homeScreenCardText}>
                Tärning
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('KingsCup')}>
            <LinearGradient colors={colorSchemeForGradient} style={styles.homeScreenButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
              <Text style={styles.homeScreenCardText}>
                Kings cup
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
}

function SpinTheBottleScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Snurra flaskan</Text>
    </View>
  );
}
  
function NeverHaveIEverScreen({ navigation }) {
  const [ myText, setMyText ] = useState(neverHaveIEverList[Math.floor(Math.random() * neverHaveIEverList.length)]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity activeOpacity={0.7} onPress = {() => setMyText(neverHaveIEverList[Math.floor(Math.random() * neverHaveIEverList.length)])}>
        <LinearGradient colors={colorSchemeForGradient} style={styles.neverHaveIEverButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
            <Text style={styles.cardText}>Never have I ever</Text> 
            <Text style={styles.cardText}> 
              {myText}
            </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

function TruthOrDareScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sanning eller konka</Text>
    </View>
  );
}

function HigherLowerScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Högre/lägre</Text>
    </View>
  );
}

function DiceScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tärning</Text>
    </View>
  );
}

function KingsCupScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CardStack 
        style={[ {flex: 5}, {alignItems: 'center'}, {justifyContent: 'center',}]}
        renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>No more cards :(</Text>}
        ref={swiper => {
          this.swiper = swiper
        }}
        >
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Hjärter 1</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Hjärter 2</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Hjärter 3</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Hjärter 4</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Hjärter 5</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Hjärter 6</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Hjärter 7</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Hjärter 8</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Hjärter 9</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Hjärter 10</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Hjärter knäckt</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Hjärter dam</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Hjärter kung</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Spader 1</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Spader 2</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Spader 3</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Spader 4</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Spader 5</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Spader 6</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Spader 7</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Spader 8</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Spader 9</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Spader 10</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Spader knäckt</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Spader dam</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Spader kung</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Ruter 1</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Ruter 2</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Ruter 3</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Ruter 4</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Ruter 5</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Ruter 6</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Ruter 7</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Ruter 8</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Ruter 9</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Ruter 10</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Ruter knäckt</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Ruter dam</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Ruter kung</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Klöver 1</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Klöver 2</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Klöver 3</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Klöver 4</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Klöver 5</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Klöver 6</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Klöver 7</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Klöver 8</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Klöver 9</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Klöver 10</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Klöver knäckt</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Klöver dam</Text></Card>
          <Card style={[styles.card, styles.card1]}><Text style={styles.playingCardStyle}>Klöver kung</Text></Card>
        </CardStack>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Välj ett spel' component={HomeScreen} />
        <Stack.Screen name='SpinTheBottle' component={SpinTheBottleScreen} />
        <Stack.Screen name='NeverHaveIEver' component={NeverHaveIEverScreen} />
        <Stack.Screen name='HigherLower' component={HigherLowerScreen} />
        <Stack.Screen name='TruthOrDare' component={TruthOrDareScreen} />
        <Stack.Screen name='Dice' component={DiceScreen} />
        <Stack.Screen name='KingsCup' component={KingsCupScreen} />
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
  homeScreenStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    backgroundColor: '#23232c'
  },
  homeScreenButton: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 15,
      backgroundColor: 'oldlace',
      alignSelf: 'center',
      marginHorizontal: '1%',
      marginBottom: 10,
      minWidth: '95%',
      minHeight: '15%',
      textAlign: 'center'
  },
  homeScreenCardText:{
    fontSize: 30, 
    color: '#dbe9f7', 
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Avenir': 'system font',
    margin: 10,
  },
  neverHaveIEverButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 30,
    backgroundColor: 'oldlace',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    width: '95%',
    height: '90%',
    textAlign: 'center'
  },
  cardText: {
    textAlign: 'left', 
    fontSize: 45, 
    color: '#fff',
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    fontFamily: 'Avenir'
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  playingCardStyle: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  }
});

const neverHaveIEverList = [
  'got a tattoo',
  'done a nude streak in public',
  'stood someone up on a date',
  'had a speeding ticket',
  'ghosted someone',
  'lied to get out of going to work',
  'given a fake name',
  'dumped someone over text',
  'been sick on public transport',
  'lied to someone in this room',
  'texted an ex out of nowhere',
  'lied on a dating app',
  'shoplifted',
  'kissed a friends sibling',
  'catfished someone',
  'been refused entry to a club',
  'had a holiday romance',
  'used someone elses toothbrush',
  'peed in the shower',
  'stalked an exs new partner on social media',
  'been thrown out of a bar or club',
  'gone skinny dipping',
  'gone out with a friends ex',
  'said I love you when I didnt mean it',
  'been mugged',
  'broken a bone',
  'lied about leaving the club early',
  'been sick on my friend/someone else',
  'kissed a celebrity',
  'eaten leftover food from another table at a restaurant',
  'gone on a blind date',
  'stolen anything',
  'been cheated on',
  'dined and dashed',
  'trespassed',
  'spent more than £200 on a night out',
  'DMed a celebrity',
  'paid for a gym class and not attended',
  'caught my parents having sex',
  'been to a nudist beach',
  'pulled an all nighter',
  'cheated on a test or exam',
  'pretended to be someone else',
  'ignored someone I knew in public',
  'ruined an item of clothing I borrowed from a friend',
  'hitchhiked a ride',
  'snuck into a festival or club',
  'lied in this game',
  'peed in public',
  'lied about kissing someone',
  'broken the law',
  'fancied someone in this room',
  'got drunkenly locked out of my house',
  'lied to my boss',
  'slipped into someones DMs',
  'got a tattoo I regretted',
  'not worn underwear on a night out',
  'looked through my partner’s phone',
  'edited my selfies',
  'used someone else’s Netflix account',
  'ghosted someone for something tiny and unimportant',
  'told someone’s secret',
  'returned something after Id already worn it',
  'dropped my phone in a toilet',
  'run out on a meal without paying',
  'Googled my own name',
  'forgotten where I parked my car',
  'fancied a friends parent',
  'used a pick up line',
  'cheated on anyone',
  're-gifted a present I didn’t want',
  'given a partner an embarrassing pet name',
  'created a fake Instagram',
  'fake-cried to get something',
  'had sex in a public place',
  'sent a dirty text to the wrong person',
  'said the wrong name in bed',
  'had a friend with benefits',
  'slept with someone whose name I dont know',
  'been to a sex shop',
  'had a threesome',
  'joined the mile high club',
  'sent a sexy selfie',
  'had sex in the sea/a swimming pool',
  'had a one night stand',
  'faked an orgasm',
  'flashed someone',
  'given or received a lap dance',
  'slept with a co-worker',
  'gone back to an ex',
  'been walked in on while having sex',
  'had a sex dream about someone in this room',
  'had a sex dream about someone the people in this room know',
  'had a favourite sex toy',
  'role-played in bed',
  'sucked my partner’s toes',
  'done the walk of shame',
  'had a sex dream about someone else when I was in a relationship',
  'Googled sex positions',
  'had a sexy nickname / given someone a sexy nickname',
  'kissed more than one person in one day',
  'had to hide a love bite',
  'got with someone without knowing their name',
  'used handcuffs or something similar',
  'sent a nude picture or video',
];