import React from "react";
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  View,
  SafeAreaView,
  TouchableHighlight,
  Text,
} from 'react-native';

export default function App() {
  return (
     <SafeAreaView style={styles.container}>
         <TouchableHighlight>
          <View style={[styles.button, {backgroundColor: 'dodgerblue'}]}>
              <Text>Most likely</Text>
          </View>
         </TouchableHighlight>
         <TouchableHighlight>
          <View style={[styles.button, {backgroundColor: 'gold'}]}>
              <Text>Most likely</Text>
          </View>
         </TouchableHighlight>
         <TouchableHighlight>
          <View style={[styles.button, {backgroundColor: 'tomato'}]}>
              <Text>Most likely</Text>
          </View>
         </TouchableHighlight>
         
     </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  button: {
    flex: 0.2,
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
