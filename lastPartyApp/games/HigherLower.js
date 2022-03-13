import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Platform } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import {LinearGradient} from 'expo-linear-gradient';
import images from './assetsForGames/higherLowerImageLocations.js'

function HigherLowerScreen({ navigation }) {
  {/* TODO: Fixa så att det går att hämta alla korten från mappen på ett smidigt sätt. Just nu krånglar source={require()} för det är svårt 
  att referera från en array om man inte manuellt skapar en lång lista med alla platser där det står "require('{source-path}')"*/}

  var deck = [];
  var suits = ['Clovers_', 'Hearts_', 'Pikes_', 'Tiles_'];
  var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
  var locationString = './assetsForGames/whiteCards/';

  for(let i = 0; i < 52; i++) {
      deck.push(
        <Card style={styles.card}>
          <Image style={[ {height: 420}, {width: 300} ]} source={images['image' + [i]]} />
        </Card>
      )}
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

const colorSchemeForGradient = ['#ffa32d', '#ff661a'];

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 420,
        backgroundColor: '#F5F5F5',
        borderRadius: 15,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowOpacity:0.5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default HigherLowerScreen;