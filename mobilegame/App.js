import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import Header from './components/Header';
import MainScreen from './screens/MainScreen'


function App()
{
  return (
  <View style={styles.body}>
    <Header title="Guess A number" />
    <MainScreen />
  </View>)
}

const styles = StyleSheet.create({
  body:{
   flex:1,
  }
})

export default App;