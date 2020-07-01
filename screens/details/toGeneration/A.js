import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity, Linking} from 'react-native'
import colors from "../../../assets/colors";
import * as WebBrowser from 'expo-web-browser';

const style = StyleSheet.create({
    text:{
        color: colors.link,
        fontSize: 16,
        marginBottom: 15,
        lineHeight: 24,
        textDecorationLine:"underline",
    }
})

const Anchor = ({children, url}) => {
    return (
        <TouchableOpacity onPress={ ()=>(Linking.openURL(url))}>
            <Text style={style.text}>
                {children}
            </Text>
        </TouchableOpacity>
);
};

export default Anchor;


