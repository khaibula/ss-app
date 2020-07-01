import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View, Animated,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../assets/colors.js';
import {useShowAnimation} from "../../../assets/hooks/useShowAnimation";


export default function Hint  (props) {
    const {
        isShown = true,
        maxHeight = 120,
    } = props;

    const style = getStyle(props);
    const aniStyle = useShowAnimation(isShown, maxHeight);
   

    return(
        <Animated.View style={[aniStyle, {paddingHorizontal:10,
        }]}>
            <TouchableOpacity
                style={[style.container, props.style]}
            >
                <Text style={[style.text, props.styleText]}>{props.children}</Text>

            </TouchableOpacity>
        </Animated.View>
    )    
}


function getStyle(props){
    return StyleSheet.create({
        container:{
            backgroundColor: "#fdfdfd",
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
            color:"#989898",
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
