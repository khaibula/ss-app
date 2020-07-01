import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Circle from './circleWithNumber.js' 
import colors from '../../../../assets/colors.js';


export default function Сounter  (props) {
    const style = getStyle(props)



    return(
        <View 
            style={[style.container, props.style]}
        ><View style={style.decor}><View style={style.decorInner}></View></View>
            <View style={[style.leftContainer]}>
                <Text style={{fontSize:30, fontWeight:"bold"}}>Чеков</Text>
                <Text style={{fontSize:14, color:colors.second}}>На этом номере</Text>
            </View>
            <View style={style.decorLine}/>
            <View style={[style.rightConainer]}>
            {
            props.phoneChanging ?
            <ActivityIndicator style={{height:75,width:75}}/> :
            <Circle num={props.num}  style={{height:75,width:75}}/>

            }  

            </View>
        </View>
    )    
}


function getStyle(props){
    return StyleSheet.create({
        container:{
            backgroundColor: colors.white,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical:5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
            borderRadius: 15,
            elevation: 1,
            marginVertical: 10,

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
        },
        decorLine:{
            width:1,
            height:"40%",
            marginRight: 10,
            backgroundColor:colors.main,
        },
        leftContainer:{
            flexGrow:1,
            paddingLeft:10,
        },
        rightConainer:{

        },
    })
}