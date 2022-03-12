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
          {/*<TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SpinTheBottle')}>
            <LinearGradient colors={colorSchemeForGradient} style={styles.mediumButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
              <Text style={styles.mediumButtonText}>
                Snurra flaskan
              </Text>
            </LinearGradient>
    </TouchableOpacity>*/}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('NeverHaveIEver')}>
            <LinearGradient colors={colorSchemeForGradient} style={styles.mediumButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
              <Text style={styles.mediumButtonText}>
                Jag har aldrig
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('HigherLower')}>
            <LinearGradient colors={colorSchemeForGradient} style={styles.mediumButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
              <Text style={styles.mediumButtonText}>
                Högre/lägre
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('TruthOrDare')}>
            <LinearGradient colors={colorSchemeForGradient} style={styles.mediumButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
              <Text style={styles.mediumButtonText}>
                Sanning eller konka
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          {/*<TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Dice')}>
            <LinearGradient colors={colorSchemeForGradient} style={styles.mediumButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
              <Text style={styles.mediumButtonText}>
                Tärning
              </Text>
            </LinearGradient>
    </TouchableOpacity>*/}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('KingsCup')}>
            <LinearGradient colors={colorSchemeForGradient} style={styles.mediumButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
              <Text style={styles.mediumButtonText}>
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
      <TouchableOpacity style={{width: '90%'}} activeOpacity={0.7} onPress = {() => setMyText(neverHaveIEverList[Math.floor(Math.random() * neverHaveIEverList.length)])}>
        <LinearGradient colors={colorSchemeForGradient} style={styles.largeButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
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
  const [ myText, setMyText ] = useState('Sanning eller konka');


  return (
    <View style={ { padding: 15, flex: 1, justifyContent: 'space-evenly'} }>
      <TouchableOpacity style={{height: '70%'}}activeOpacity={0.7}>
        <LinearGradient colors={colorSchemeForGradient} style={styles.largeButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
          <Text style={styles.mediumButtonText}>
            {myText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={ { padding: 15, flex: 1, justifyContent: 'space-evenly', flexDirection: 'row'} }>
        <TouchableOpacity style= {[{width:'52%', height:'150%'}]} activeOpacity={0.7} onPress = {() => setMyText(truthList[Math.floor(Math.random() * neverHaveIEverList.length)])}>
          <LinearGradient colors={['#1fcaa1', '#366de8']} style={styles.smallButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
            <Text style={styles.smallButtonText}>
              Sanning
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style= {{width:'52%', height:'150%'}} activeOpacity={0.7} onPress = {() => setMyText(consequenceList[Math.floor(Math.random() * neverHaveIEverList.length)])}>
          <LinearGradient colors={['#fa4171', '#8e51e7']} style={styles.smallButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
            <Text style={styles.smallButtonText}>
              Konka
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function HigherLowerScreen({ navigation }) {
  const deck = [];
  var suits = ['diamonds', 'spades', 'hearts', 'clubs'];
  var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 13; j++) {
      deck.push(
        <Card style={styles.card}>
          <Text style={[styles.playingCardText, {textAlign: 'flex-start'}]}> {values[j]} {suits[i]} </Text>
          <Text style={[styles.playingCardText, {alignSelf: 'flex-end'}, {setDirection: 'rtl'}, {paddingBottom: 0}]}>{suits[i]} {values[j]}  </Text>
        </Card>
      )
    }
  }
  shuffle(deck);

  return (
    <View style={{ flex: 1 }}>
      <CardStack 
        style={[ {flex: 5}, {alignItems: 'center'}, {justifyContent: 'center',}]}
        renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>No more cards :(</Text>}
        >
          {deck}
      </CardStack>
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

  const deck = [];
  var suits = ['diamonds', 'spades', 'hearts', 'clubs'];
  var suitsLocation = ['./assets/cardAssets/diamonds.png', './assets/cardAssets/spades.png', './assets/cardAssets/hearts.png', './assets/cardAssets/clovers.png'];
  var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  var titles = ['Waterfall', 'You', 'Me', 'Whores', 'Bust a jive', 'Whores', 'Heaven', 'Mate', 'Bust a rhyme', 'Categories', 'Never have I ever', 'Question master', 'Pour some into the cup'];
  var rules = ['Everyone drinks, starting with you', 'Pick someone to take 2 drinks', 'Take 2 drinks', 'Ladies drink', 'Create a dance move; the who screws it up has to drink', 'All the guys drink', 'Reach for the sky; last person drinks', 'Find a drinking buddy', 'Pick a category, other need to say things in that category or drink', 'First to put down three fingers has to drink', 'Ask questions; those who answer will drink', 'Player who picks the last king has to drink'];

  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 13; j++) {
      deck.push(
        <Card style={styles.card}>
          <Text style={[styles.playingCardText, {textAlign: 'flex-start'}]}> {values[j]}</Text>
          <Image style={styles.suitsSize} source={suitsLocation[i]}/>
          <Text style={[styles.playingCardText, {alignSelf: 'center'}]}>{titles[i]}</Text>
          <Text style={[styles.playingCardText, {alignSelf: 'center'}, {fontSize: 35}]}>{rules[i]}</Text>
          <Text style={[styles.playingCardText, {alignSelf: 'flex-end'}, {setDirection: 'rtl'}, {paddingBottom: 0}]}>{values[j]}  </Text>
        </Card>
      )
    }
  }
  shuffle(deck);

  return (
    <View style={{ flex: 1 }}>
      <CardStack 
        style={[ {flex: 5}, {alignItems: 'center'}, {justifyContent: 'center',}]}
        renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>No more cards :(</Text>}
        >
          {deck}
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

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
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
  smallButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: 'oldlace',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 10,
    width: '90%',
    height: '30%',
    textAlign: 'center'
  },
  mediumButton: {
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
  largeButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: 'oldlace',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    width: '95%',
    height: '80%',
    textAlign: 'center'
  },
  smallButtonText:{
    fontSize: 25, 
    color: '#dbe9f7', 
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Avenir': 'system font',
    margin: 10,
  },
  mediumButtonText:{
    fontSize: 30, 
    color: '#dbe9f7', 
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Avenir': 'system font',
    margin: 10,
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
    height: 540,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    flex: 1,
  },
  playingCardText: {
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#23232c',
    backgroundColor: 'transparent',
    flexDirection:'row',
    flex: 1,
  },
  suitsSize: {
    width: 40,
    height: 40,
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

const truthList = [
  'Vad är den mest pinsamma sak du någonsin gjort?',
  'Vad tycker du är din bästa funktion? Och vad är det värsta?',
  'Berätta för mig en hemlighet från din barndom.',
  'Vad är din största (hemliga) vice?',
  'Vad är den modigaste tingen du någonsin har gjort?',
  'Vem i rundan skulle du vilja förtrolla i en gris?',
  'Vad drömmer du om att sova mest?',
  'Om du skulle göra dina pengar olagligt, hur skulle du göra det?',
  'Om du var blind, vem i rundan skulle vara din guidehund?',
  'Vad kan imponera dig mest?',
  'Om du bara skulle använda 3 ord för resten av kvällen från och med nu - vilket skulle det vara?',
  'Om du var en diktator, vilken lag skulle du laga först?',
  'Om du hade bott under nazistiden, vem skulle du ha varit?',
  'Vad var den mest pinsamma upplevelsen i din skoltid / studietid / utbildning / förra året?',
  'Vad var ditt livets största misstag?',
  'Vad skulle du aldrig göra - även om du vet att du bara har 12 timmar att leva?',
  'Vilket brott har du begått?',
  'Vad vill du göra med mig … (på person xy), om du då kan radera mitt (hennes, hans …) minne?',
  'Vad är det värsta du någonsin har gjort för någon?',
  'hos vem har du haft den största förälskelsen på vem?',
  'Har du någonsin varit kär i en av de närvarande?',
  'Om du var en vampyr, vem av oss skulle du bita nu?',
  'Vad är det värsta du någonsin har upplevt?',
  'Vad var din värsta korg?',
  'Vad är din mörkaste fantasi?',
  'Vad är det trevligaste du någonsin har upplevt med en annan person?',
  'Vad är den största abturneren för dig?',
  'Vad tycker du mest om din kropp och vad är det fulaste?',
  'Vem från vår omgång vill du se naken?',
  'Vem i rundan kan du bli kär i de flesta?',
  'Har du någonsin haft en erotisk dröm där någon från denna omgång inträffade?',
  'Om du skulle tatuera dig själv i könsområdet - vad skulle det vara där?',
  'Vad är viktigare i ett förhållande - sex eller kärlek?',
  'Tycker du att sex är coolt, bra, okej, ibland trevligt - eller är det inte så viktigt för dig?',
  'Vad gör dig riktigt bra sex?',
  'Hur många gånger i veckan / månad har du sex - och hur ofta vill du ha sex?',
  'Hur många olika sexpartners har du redan sovit med?',
  'Vilken del av kroppen vänder dig mest?',
  'Hur, var och med vem har du haft din första gång?',
  'Hur viktigt är en utökad förspel för dig?',
  'Vad måste en man / kvinna göra för att förföra dig?',
  'Har du någonsin haft en trio? Och hur tyckte du om det?',
  'Har du någonsin haft sex med en bra vän?',
  'Har du någonsin haft sex med en av denna grupp - förutom din partner?',
  'Vad är det mest pinsamma ögonblicket i sex du någonsin har haft?',
  'Du är helt kär, men sen lämnar han. Vad skulle behöva hända för att du ska springa iväg att skrika?',
  'Vad söker du efter i en kvinna först - bröst, röv eller ansikte?',
  'Vad letar du efter hos en man först och vad måste han ha så att du tycker: awwwww cool!',
  'Har du någonsin nöjt dig med tanken på den här rundan?',
  'Vad är din favoritposition under kön?',
  'Vad är ett absolut tabu under sex?',
  'Vad är det hetaste du någonsin har gjort?',
  'Har du någonsin haft cybersex eller telefonsex - och med vem?',
  'Vad är din nästiest hemliga önskan?',
  'Vad är bättre - beskurna eller oskadade?',
  'Vem i den här rundan tror du att du har det bästa kön?',
  'Vem skulle du ge pengar att sova med dig?',
  'Vad var din skönaste sexupplevelse?',
  'Har du någonsin haft farligt sex - och hur exakt var det?',
  'Har du någonsin haft sex med en främling? t.ex. från Tinder?',
  'Om du gick på linjen - vad skulle vara din specialitet?',
  'Vad tycker du mest om att tänka på när du uppfyller dig själv?',
  'Har du någonsin haft sex med samma kön?',
  'Du hade sex med mig. Vad skulle du då säga till mig?',
  'Vad är det bästa sättet att ligga dig platt?',
  'Med vem skulle du sova under alla omständigheter - oavsett om du är gift eller kär i odödlig?',
  'Med vem hade du det bästa könet i ditt liv?',
  'Har du någonsin betalat för sex?',
  'Vem hade du din senaste heta dröm om?',
  'Har du någonsin blivit förvånad under sex - och av vem?',
  'Vad är din favoritposition?',
  'Var är din erogena zon?',
  'Stämmer du vid klimaxen?',
  'Vem skulle du vilja ha sex med?',
  'När var sista gången du hade sex?',
  'Var har du intima piercingar?',
  'Hur många män / kvinnor har du redan kysst?',
  'Vad var din värsta korg?',
  'Vem hade du det hetaste datumet med?',
  'Vilken position är din favorit?',
  'När var din första gång?',
  'På toaletten: Fällning eller rullande toalettpapper?',
  'Var rakar du överallt?',
  'Har du någonsin varit intim med 2 personer samtidigt?',
  'Hörde du någonsin din syster / bror moan?',
  'Har du någonsin fångats i onani?',
  'På vilka ställen har du haft sex?',
  'Har du någonsin lurat på någon?',
  'Är du alltid trogen?',
  'Har du en tonårs chill?',
  'I vilken person är du kär?',
  'Vilken stjärna vill du ha ett datum med?',
  'Vad är det mest pinsamma ögonblicket i ditt liv?',
  'Vilken mun gillar du mest från gruppen här?',
  'Vilken spelare har de vackraste händerna?',
  'Var var din första kyss?',
  'Vem i rundan skulle du helst vilja kyssa?',
  'Vem vid bordet är förmodligen den mest kittiga?',
  'Vad var ditt livets största misstag?',
  'Skedde något pinsamt med dig på ett datum?',
  'Har du någonsin haft kontakt med droger?',
  'Vilken person skulle du vilja kyssa nu?',
  'När var sista gången du hängde över?',
  'Har du någonsin lurat på en tentamen?',
  'Vilken lärare gillar du?',
  'Har du någonsin stulit någonting tidigare?',
  'Snarkar du på natten?',
  'Vilken är din favoritlåt?',
  'Med vilken spelare skulle du byta i 1 vecka och varför?',
  'Du flyttar till en ensam ö, vem tar du med från rundan?',
  'Vad är du mest rädd för?',
  'Var rakar du överallt?',
  'Har du något smeknamn?',
  'Kollar du på toaletten innan du tvättar?',
  'Vem gav dig det värsta hjärtat?',
  'Hur många gånger har du kysst?',
  'Vad är den mest pinsamma sak som någonsin hänt med dig?',
  'Hur många typer / tjejer har du redan kysst?',
  'Vem är du kär i?',
  'Vilken stjärna gillar du het?',
  'Vill du börja med XY (sätt in namn)?',
  'Har du någonsin stulit något?',
  'Vilket djur passar dig bäst och varför?',
  'Vad var ditt värsta datum?',
  'Vem skulle du vilja kyssa nu?',
  'Vad är din hemliga, mörka fantasi?',
  'Vill du hellre tatuera din rumpa eller pierce din tunga?',
  'Vilken känd person skulle du vilja tillbringa din natt med?',
  'Var skulle du vilja stråla nu?',
  'Du måste gifta dig med en stjärna, vem?',
  'Hur / var / med vem var din första kyss?',
  'Är du fortfarande oskuld?',
  'Rakar du dig? Om ja, var?',
  'Vilken frisyr har du inom könsområdet?',
  'Är du nyfiken på att bli intim med en person av ditt eget kön?',
  'Älskar du en lång förspel? Om så är fallet, hur ska det se ut?',
  'Vad tycker du om när du tillfredsställer dig själv?',
  'När var din första gång?',
  'Är du fortfarande oskuld?',
  'Har du någonsin lurat på någon?',
  'Vad var din värsta korg?',
  'Stämmer du på orgasm?',
  'Har du någonsin fångats i onani?',
  'Har du någonsin fyllt din bh?',
  'När var sista gången du hade sex?',
  'På vilka ställen har du redan onanerad?',
  'Vad tycker du om när du tillfredsställer dig själv?',
  'Har du erfarenhet av kissa?',
  'Har du någonsin haft sex utomhus?',
  'Vad är din favoritposition?',
  'Har du alltid varit trogen?',
  'Vilken publig frisyr har du?',
  'Har du någonsin varit intim med 2 personer samtidigt?',
  'Vad är din hemliga, mörka fantasi?',
  'Skulle du strykas av en man i ansiktet?',
  'Har du spelat leksaker när du var yngre?',
  'Har du redan haft homosexuella erfarenheter?',
  'Har du någonsin haft telefonsex?',
  'Om du var tvungen att ge upp en erotisk kontaktannons, vad skulle det vara?',
  'Vem hittar du vackraste i rundan? Sortera alla människor från söt till ful.',
  'Vem i din klass skulle du troligen kyssa?',
  'Vem från den här rundan skulle du INTE bjuda på nästa fest?',
  'Vad var den sista lögn du berättade för din person?',
  'Vad var din största önskan som du aldrig sa?',
  'Vilket brott har du begått?',
  'Knippar du i duschen?',
  'Vilket barnsligt beteende har du idag?',
  'Var rakar du överallt?',
  'Har du någonsin lurat på någon?',
  'Vad är din största rädsla som ingen vet om?',
  'Vem har du någonsin varit kär i, som ingen vet någonting?',
  'Har du någonsin fyllt din bh eller trosor?',
  'Vill du helst vara ful och populär eller vacker och impopulär?',
  'Vilken position gillar du bäst?',
];

const consequenceList = [
  'Ta en av dina lagkamrater så förföriskt och erotiskt som möjligt från T-tröja och kyss honom / henne från naveln till midjebandet.',
  'Stäng dina ögon och försök känna igen en medspelare på lukten.',
  'Har dina ögonbryn plockade av en annan spelare.',
  'Ta av alla strumporna och lägg dem i dina byxor / och / eller bh.',
  'Öppna upp dig som ett rumphål och sluta med en person efter eget val.',
  'Behaga som en hooker eller en hustler och försök få någon att köpa dig.',
  'Smink med mat från köket.',
  'Foder en person efter eget val med spraykräm.',
  'Övertyga någon att köpa dig som slavar - genom att erbjuda honom tjänster som du måste följa!',
  'Leka ett föremål av ditt val.',
  'Måla din drömflicka / drömman så sann som originalet som möjligt.',
  'Gör mig en (otäck / rolig / romantisk) kärleksförklaring.',
  'Gör en person efter eget val från det runda ett äktenskapsförslag.',
  'Byt ut med xy kläderna (helst en kvinna med en man och vice versa).',
  'Kvinna: ta av din bh och ta den till mig.',
  'Man: Ta av din boxershorts och ge dem till mig.',
  'Viska en person efter eget val otäcka saker i ditt öra och försök att göra det.',
  'Sälj mig dina könsorgan som en produkt från snabbköpet / elektronikaffär / grönsaksbod / återförsäljare.',
  'Ge upp en erotisk kontaktannons!',
  'Sätt dig på knäet hos en person efter eget val - eller lägg henne på knäet och spela en orgasm.',
  'Välj en lagkamrat för att ge dig en kyss.',
  'Kyssar en person av samma kön så mycket du kan.',
  'Ta en person efter eget val i hans byxor.',
  'Sträva efter mig så gott du kan.',
  'Använd dina läppar och tänder för att öppna byxorna hos en medspelare efter eget val.',
  'Berätta en otäck historia och använd så många smutsiga ord som möjligt.',
  'Demonstrera med en lagkamrat din favoritflykt och kommentera allt.',
  'Förbered det perfekta blowjobet med en banan eller trädgårdsgurka.',
  'Gör ett erotiskt foto av en lagkamrat efter eget val.',
  'Försök att förföra en person efter eget val och gå så långt du vill …',
  'Pinkel från balkongen.',
  'Ordna en striptease.',
  'Ge en lagkamrat en kyss på den nakna botten.',
  'Ta en banan eller gurka och simulera den perfekta BlowJob.',
  'Drick din nästa drink på Ex.',
  'Klocka i underkläder klädda på din granne och be om ursäkt för bullret.',
  'Missa en medspelare med en hickey.',
  'Gör ett erotiskt samtal med en medspelare efter eget val.',
  'Kyssa en spelare efter eget val.',
  'Ge en kyss till din motståndare till höger.',
  'Visa rundan din nakna mage.',
  'Håll i händerna med en person efter eget val i 5 minuter.',
  'Låt dig vara stylad av en lagkamrat en frisyr.',
  'Organisera en catwalk som Tysklands nästa toppmodell.',
  'Talar 2 rundor långa endast engelska.',
  'Massage fötterna till en spelare efter eget val.',
  'Gör en magdans i 1 minut.',
  'Gör personen till vänster ett romantiskt äktenskapsförslag.',
  'Ge en kyss på kinderna av alla närvarande kvinnor.',
  'Byt kläderna med den andra spelaren direkt motsatt.',
  'Ge en lagkamrat en 2-minuters huvudmassage.',
  'Simulera en apa i 1 runda.',
  'När du blir tillfrågad, gör ett ansikte först.',
  'Bara ät något utan att använda dina händer.',
  'Spela Gollum från Ringenes Herre i 1 runda.',
  'Mata någon spelare med ett mellanmål.',
  'Ställ 1 minut som en bodybuilder.',
  'Bestäm inom 1 minut vars hår är bäst.',
  'Dansa till låten, vad spelas.',
  'kyss på kinden / munen en annan sexuell person.',
  'Visa oss din mage.',
  'Kramar din',
  'Håll i händerna i 5 minuter.',
  'Byt T-tröja med personen höger / vänster på dig.',
  'slick golvet.',
  'Foder personen på rätt bredvid dig med något gott.',
  'Drick ett stort glas koks på Ex.',
  'gäspa och prova min. 1 person därmed också att gäva.',
  'Gör 5 push-ups.',
  'Låt dig vara stylad av lagkamraten lämnade en blatant frisyr.',
  'Berätta för personen hur stor han / hon är.',
  'Namnge en sak om dig som du redan har fått komplimanger för.',
  'Beskriv din värsta nuvarande lärare.',
  'Ät något och låtsas att det är den bästa tingen du någonsin har ätit.',
  'Gör den roligaste grimasen du kan tänka dig.',
  'Snabba ljud.',
  'Ring en vän och säg att du är gravid.',
  'Ta reda på vars hår luktar bäst.',
  'Kyssa den andra kön personen som kommer först till din rätt.',
  'Visa dina armmuskler.',
  'Kasta personen ett förföriskt utseende till vänster om dig.',
  'Ge personen som sitter 2 ställen till höger en kyss på kinden.',
  'Behaga som en kyckling i två minuter.',
  'Följ en lärare efter eget val.',
  'Spelaren till höger om dig kan blanda en brygga av alla slags ingredienser och du måste dricka den.',
  'Ta av din tröja. Kvinnor för bh.',
  'Gör det till din partner med sin hand.',
  'Lick din partners bröstvårtor.',
  'Blindfold din partner och skäm bort honom.',
  'Stripe för din partner. Om du redan är naken, klä dig igen och ta sedan av.',
  'Spelaren till höger om dig öppnar alla knappar och blixtlås.',
  'Ta av din topp - kvinnor tar också bh.',
  'Spotta på dina bröstvårtor och massage dem med det.',
  'Imitera en exhibitionist.',
  'Tillbringa nästa spelrunda naken.',
  'Drick din nästa drink på Ex.',
  'Spela en orgasm.',
  'Gör en striptease.',
  'Välj en lagkamrat som måste ta tag i dina byxor.',
  'Ta en banan eller gurka och simulera den perfekta BlowJob.',
  'Ge spelaren en kyss till dig över vägen.',
  'Ta av dina kläder och förklara fördelarna med dina könsorgan till andra spelare.',
  'Massage ditt eget bröst på ett erotiskt sätt.',
  'Berätta en smutsig historia.',
  'Ring en främling och ge telefonsex.',
  'Beskriv dina könsorgan som en produkt.',
  'Pinkel från balkongen.',
  'Spraya kräm på bröstet och låt det slicka av en lagkamrat',
  'Skicka en selfie med en kyss till din ex.',
  'Ring Burger King och fråga var nästa McDonald’s är.',
  'Låt dig själv bestå av personen till höger. Han / hon kommer att vara bundet ihop!',
  'Gå till kylskåpet. Bryt alla kvarvarande paket och lämna dem halvt ätit.',
  'Sätt armen i toaletten i tio sekunder.',
  'Måla en mono-brow och sedan posta en selfie på Insta.',
  'Ring din mamma och säg att du har en bebis.',
  'Tryck på motsatt persons tunga med tungan i tio sekunder.',
  'Skriv i den första WhatsApp gruppen du hittar: “Jag är trött på dig!”',
  'Förklara i Instagram berättelsen varför alla dina anhängare irriterar dig.',
  'Drick ett skott av olivolja.',
  'Ha en dialog med ett objekt och låtsas som om du argumenterar.',
  'Överraska din motståndare med en knädans.',
  'Ge personen till vänster en kyss på rumpan.',
  'Visa rundan din senaste WhatsApp-chatt.',
];