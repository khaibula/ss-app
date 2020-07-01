import React from 'react';
import {View,Text, StyleSheet} from 'react-native'
import colors from "../../../assets/colors";
const style = StyleSheet.create({
    text:{
        color: colors.main,
        fontSize: 32,
        marginBottom: 15,
        marginTop: 10,
        lineHeight: 35,
        fontWeight: "700",
    }
})

const Head1 = ({children}) => {
    return (
        <Text style={style.text}>
            {children}
        </Text>
    );
};

export default Head1;


