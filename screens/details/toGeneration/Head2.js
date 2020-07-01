import React from 'react';
import {View,Text, StyleSheet} from 'react-native'
import colors from "../../../assets/colors";
const style = StyleSheet.create({
    text:{
        color: colors.main,
        fontSize: 20,
        marginBottom: 15,
        marginTop: 5,
        lineHeight: 30,
        fontWeight: "600",
    }
})

const Head2 = ({children}) => {
    return (
        <Text style={style.text}>
            {children}
        </Text>
    );
};

export default Head2;


