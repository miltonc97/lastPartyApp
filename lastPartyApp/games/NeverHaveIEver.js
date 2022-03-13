import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Platform, Button } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';

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

const colorSchemeForGradient = ['#ffa32d', '#ff661a'];

const styles = StyleSheet.create({
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
  cardText: {
    textAlign: 'left', 
    fontSize: 35, 
    color: '#fff',
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    fontFamily: 'Avenir'
  },
});

export default NeverHaveIEverScreen;