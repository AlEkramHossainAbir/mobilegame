import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import Body from '../components/Body';
import Card from '../components/Card';
import Input from '../components/Input';
const MainScreen = props => {

  const [enteredValue,setEnteredValue] = useState('');
  const numberInputHandler = inputText =>{
    setEnteredValue(inputText.replace(/[^0-9]/g,''));
    Alert.alert('inpuText '+ inputText)
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.headText}>Start A new game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select A number</Text>
        <Input
          style={styles.txtInput}
          blurOnSubmit
          autoCorrect={false}
          autoCapitalize='none'
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Reset" onPress={() => {}} color="red" />
          </View>
          <View style={styles.btn}>
            <Button title="Confirm" onPress={() => {}} color="#f7287b" />
          </View>
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
  headText: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    letterSpacing: 2,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  txtInput: {
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    width: '100%',
  },
  btn: {
    borderRadius: 10,
  },
});

export default MainScreen;
