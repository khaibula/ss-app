import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import colors from '../../assets/colors.js';


export default function NavLinck  (props) {
    const style = StyleSheet.create({
        container:{
            backgroundColor: colors.white,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
            borderRadius: 15,
            elevation: 1,
            marginVertical: 5,
        },
        text:{
            color:props.color,
            fontSize: 14,
            fontWeight: "500",
            paddingLeft: 10,
            width: "90%",
    
        },
        decor:{
            position: "absolute",
            width: 8,
            height: 8,
            backgroundColor: colors.white,
            borderRadius: 4,
            left: -4,
            alignItems: 'center',
            justifyContent: 'center',
            display: props.noDecor ? "none" : undefined,
        },
        decorInner:{
            width: 6,
            height: 6,
            backgroundColor: colors.active,
            borderRadius: 3,
            display: props.noDecor ? "none" : undefined,
        }
    })


    return(
        <TouchableOpacity 
            style={[style.container, props.style]}
            onPress={props.onPress}
        >
            <View style={style.decor}><View style={style.decorInner}></View></View>
            <Text style={[style.text, props.styleText]}>{props.children}</Text>
            <Ionicons style={{paddingRight: 10,}} name = "ios-arrow-forward" size={26} color={colors.main}/>

        </TouchableOpacity>
    )    
}
