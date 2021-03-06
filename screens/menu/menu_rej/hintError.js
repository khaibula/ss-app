import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native'
import colors from '../../../assets/colors.js';
import {useShowAnimation} from "../../../assets/hooks/useShowAnimation";


export default function
    HintError  (props) {
    const { isError } = props;
    const aniStyle = useShowAnimation(isError);
    const style = getStyle(props);

    return(
        <Animated.View style={aniStyle}>
            <View
                style={[style.container, props.style]}
            >
                <Text style={[style.text, props.styleText]}>{props.children}</Text>

            </View>
        </Animated.View>
    )    
}


function getStyle(props){
    return StyleSheet.create({
        container:{
            backgroundColor: "#fcd2ca",
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
            color:"#98261a",
            fontSize: 14,
            fontWeight: "500",
            paddingLeft: 10,
            width: "100%",
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
    
}
