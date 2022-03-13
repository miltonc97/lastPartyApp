import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Platform, Button } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


function InOtherWordsScreen({ navigation }) {
  {/* TODO: Implentera hela denna funktionen, inte ens gjord lmao */}

  return (
    <View style={styles.homeScreenStyles}>
      <View style={ { padding: 15, flex: 1 } }></View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('InOtherWordsSettings')}>
          <LinearGradient colors={colorSchemeForGradient} style={styles.mediumButton} start={{ x:0, y:1 }} end={{ x:1, y:1 }}>
            <Text style={styles.mediumButtonText}>
              Inställnignar
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
  );
}

function InOtherWordsGameScreen({ navigation }) {
  return(
    <ScrollView style={{marginHorizontal: 20}}>
      <Text style={{fontSize:10}} >WHAT INTE HE HUFAHIUGSIDHUGHUIJNSSIHUJNDGHIUJFSDSUHJIDFSUHIDJFIHUJOSDF</Text>
    </ScrollView>
  );
}

const colorSchemeForGradient = ['#ffa32d', '#ff661a'];

const styles = StyleSheet.create({
  homeScreenStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    backgroundColor: '#23232c'
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
});

export {InOtherWordsScreen, InOtherWordsGameScreen};