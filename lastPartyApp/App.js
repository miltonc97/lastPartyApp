import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';


function HomeScreen({ navigation }) {
    return (
      <View style={styles.homeScreenStyles}>
        <View style={ { padding: 10, flex: 1 } }>
          <TouchableOpacity
            onPress={() => navigation.navigate('SpinTheBottle')}
            style={[ styles.homeScreenButton, { backgroundColor: '#495057' } ]}>
            <Text style={styles.homeScreenCardText}>Snurra flaskan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NeverHaveIEver')}
            style={[ styles.homeScreenButton, { backgroundColor: '#495057' } ]}>
            <Text style={styles.homeScreenCardText}>Jag har aldrig</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('HigherLower')}
            style={[ styles.homeScreenButton, { backgroundColor: '#495057' } ]}>
            <Text style={styles.homeScreenCardText}>Högre/lägre</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TruthOrDare')}
            style={[ styles.homeScreenButton, { backgroundColor: '#495057' } ]}>
            <Text style={styles.homeScreenCardText}>Sanning eller konka</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Dice')}
            style={[ styles.homeScreenButton, { backgroundColor: '#495057' } ]}>
            <Text style={styles.homeScreenCardText}>Tärning</Text>
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
      <TouchableOpacity onPress = {() => setMyText(neverHaveIEverList[Math.floor(Math.random() * neverHaveIEverList.length)])}
            style={ styles.neverHaveIEverButton }>
            <Text style={[ styles.homeScreenCardText, {fontSize: 60}]}>Never have I ever </Text>
            <Text style={styles.cardText}>
            {myText}
              </Text>
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
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: '#e63946',
    background: '#e63946',
    card: '#e63946',
    text: '#fff',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const styles = StyleSheet.create({
  homeScreenStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    backgroundColor: '#e63946'
  },
  homeScreenButton: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 4,
      backgroundColor: 'oldlace',
      alignSelf: 'center',
      marginHorizontal: '1%',
      marginBottom: 6,
      minWidth: '90%',
      height: '15%',
      textAlign: 'center'
  },
  homeScreenCardText:{
    fontSize: 20, 
    color: '#fff', 
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center'
  },
  neverHaveIEverButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    width: '90%',
    height: '80%',
    textAlign: 'center',
    backgroundColor: '#495057'
  },
  cardText: {
    textAlign: 'left', 
    fontSize: 50, 
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
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