import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Body from '../components/Body';
import Card from '../components/Card';
const Show = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.headText}>Start A new game!</Text>
      <Card>
        <Text>Select A number</Text>
        <TextInput style={styles.txtInput}/>
        <View style={styles.btnContainer}>
          <Button title="Reset" onPress={()=>{}} color='red' style={styles.btn}/>
          <Button title="Submit" onPress={()=>{}} color='lightblue'/>
          </View> 
        </Card>
     
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  headText:{
      fontSize:20,
      color:"red",
      fontWeight:'bold',
      letterSpacing:2,
      marginVertical:10
  },
  inputContainer:{
    //   width:300,
    //   maxWidth:'80%',
    //   alignItems:'center',
  },
  txtInput:{
      borderColor:'red',
  },
  btnContainer:{
      flexDirection:'row',
      justifyContent:'space-around',
      paddingHorizontal:20,
      width:'100%'
  },
  btn:{
     borderBottomLeftRadius:19
  }
});

export default Show;
