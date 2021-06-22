import React from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

const Input = props =>{
    return(
        <View>
        <TextInput {...props} style={{...styles.Input,...props.style}} />
        </View>
    )
}
const styles = StyleSheet.create({
    Input:{
         borderBottomColor:'red',
        borderBottomWidth:2,
        padding:8,
        margin:10,
        width:200,
        height:40,
        justifyContent:'center'

    }
})

export default Input