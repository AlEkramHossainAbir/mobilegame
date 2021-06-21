import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import Show from './pages/Show'


function App()
{
  return (
  <View style={styles.body}>
    <Show />
  </View>)
}

const styles = StyleSheet.create({
  body:{
    width:'100%',
  }
})

export default App;