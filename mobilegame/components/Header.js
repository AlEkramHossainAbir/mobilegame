import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const Header = props =>{

    return(
        <View>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText:{
        
    }
})

export default Header;