import React from 'react';
import { View,
    Text,
StyleSheet,
TextInput,
Button
} from 'react-native';

const Card = props =>{

    return(
        <View style={{...styles.inputContainer,...props.style}}>{props.children}</View>
    )
}
const styles = StyleSheet.create({

    inputContainer:{
        width:300,
      maxWidth:'80%',
      alignItems:'center',
      //   shadowColor:'red',
      //   shadowOffset:{width:0,height:2},
      //   shadowRadius:6,
      //   shadowOpacity:0.26,
        backgroundColor:'#ff9',
        elevation:10,
        padding:20,
        borderRadius:5,
        borderBottomEndRadius:25,
    },
    txtInput:{
        borderColor:'red'
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
})

export default Card;