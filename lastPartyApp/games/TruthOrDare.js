import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Platform } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';

{/* Gör det lite snyggare, ser inte så fint ut hehe */}

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
        <TouchableOpacity style= {[{width:'52%', height:'150%'}]} activeOpacity={0.7} onPress = {() => setMyText(truthList[Math.floor(Math.random() * truthList.length)])}>
          <LinearGradient colors={['#1fcaa1', '#366de8']} style={styles.smallButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
            <Text style={styles.smallButtonText}>
              Sanning
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style= {{width:'52%', height:'150%'}} activeOpacity={0.7} onPress = {() => setMyText(dareList[Math.floor(Math.random() * dareList.length)])}>
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

const colorSchemeForGradient = ['#ffa32d', '#ff661a'];

const styles = StyleSheet.create({
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
});

export default TruthOrDareScreen;