import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Header from '../components/Header';

const Show = (props)=>
{
    return (
        <View >
            <Text style={styles.tst}>Show Component</Text>
            <Header title="Guess A number"/>
        </View>
    )
}




const styles = StyleSheet.create({
    tst:{
        fontSize:30,
      backgroundColor:'white'
    }
  })

export default Show;