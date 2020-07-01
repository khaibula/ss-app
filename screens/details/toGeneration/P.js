import React from 'react';
import {View,Text, StyleSheet} from 'react-native'
import colors from "../../../assets/colors";
const style = StyleSheet.create({
    text:{
        color: colors.text,
        fontSize: 16,
        marginBottom: 15,
        lineHeight: 26,
    }
})

const P = ({children}) => {
    return (
        <Text style={style.text}>
            {children}
        </Text>
    );
};

export default P;


