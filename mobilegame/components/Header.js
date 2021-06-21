import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const Header = props =>{

    return(
        <View style={styles.head}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    head:{
        backgroundColor:'rgba(250, 148, 130,0.5)',
      // backgroundColor:'#f7287b',
       height:90,
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:36,
      

    },
    headerText:{
        fontSize:28,
        color:'#111617',
        fontWeight:'800',
    }    
})

export default Header;