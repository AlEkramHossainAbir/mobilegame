import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Body = props => {
  return (
    <View style={styles.screen}>
      <Text>Start A New Game</Text>
      <View style={styles.wrap}>
        <Text>Select A number</Text>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
 screen: {
     flex:1,
    padding:10,
    alignItems:'center'
  
  },
  wrap:{
      flex:1
  }
});

export default Body;
