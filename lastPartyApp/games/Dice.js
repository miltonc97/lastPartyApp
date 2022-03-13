import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Platform } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import {LinearGradient} from 'expo-linear-gradient';

{/* react-dice-roll, worth checking out */}


function DiceScreen({ navigation }) {
  {/* TODO: Gör en tärning, kika på react-dice-roll och ifall det går att implementera */}
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tärning</Text>
    </View>
  );
}

export default DiceScreen;