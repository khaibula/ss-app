import React from 'react';
import {StyleSheet,  Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../assets/colors.js';

export default class Timer extends React.Component {
    constructor(props){
        super(props);
        let pSt = this.props.time

        this.state = {
            targetTime: +props.time,
            nowTime: Date.now(),
            days: Math.floor((pSt - Date.now()) / (1000*60*60*24)),
            hours:Math.floor((pSt - Date.now()) / (1000*60*60))%24,
            mins: Math.floor((pSt - Date.now()) / (1000*60))%60 ,
        
        }
    }

    componentDidMount() {
       const timerId = setInterval(() => {
            let pSt = this.props.time
            this.setState({
                days: Math.floor((pSt - Date.now()) / (1000*60*60*24)),
                hours:Math.floor((pSt - Date.now()) / (1000*60*60))%24,
                mins: Math.floor((pSt - Date.now()) / (1000*60))%60 ,
            })
        }, 10000);
        this.setState({
            timerId
        })
    }

    componentWillUnmount(){
        clearInterval(this.state.timerId)

    }
    



    render(){
        let { days, hours, mins} = this.state;
        if(days < 10){
            days= "0"+days;
        }
        if(mins < 10){
            mins= "0"+mins;
        }
        if(hours < 10){
            hours= "0"+hours;
        }

        
        return(
            <View style={style.container}>
                <View style={style.textWrap}>
                    <Text style={style.text1}>
                        До розыгрыша
                    </Text>
                    <Text style={style.text2}>
                        Осталось:
                        {/* {this.state.targetTime} */}
                    </Text>
                </View>
                <View style={style.dayWrap}>
                    <Text style={style.textAct}>
                        дней
                    </Text>
                    <Text style={style.textDay}>
                        {days} :
                    </Text>
                </View>
                <View style={style.hourWrap}>
                <Text style={style.textAct}>
                        часов
                    </Text>
                    <Text style={style.textHour}>
                        {hours} :
                    </Text>
    
                </View>
                <View style={style.minWrap}>
                    <Text style={style.textAct}>
                        минут
                    </Text>
                    <Text style={style.textMin}>
                        {mins}
                    </Text>
                </View>
                
            </View>
        )
    }

}


var style = StyleSheet.create({
    container:{
        // marginTop:10, 
        flexDirection:"row", 
        alignItems: "center", 
        alignItems:"flex-end",
        marginBottom:20, 
    },
    textWrap:{
        marginLeft: "auto",
        marginRight: "auto", 
    },
    text1:{
        color:colors.second,
        textAlign:"center",
        top: 6,
        fontSize: 12

    },
    text2:{
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold',

    },
    textAct:{
        color: colors.active,
        fontSize: 10,
        right: 8,
        top: 3,
    },
    dayWrap:{
        marginLeft: "auto",

    },
    textDay:{
        color: colors.white,
        fontSize: 30,
    },
    
    hourWrap:{
        marginLeft: 8,

    },
    textHour:{
        color: colors.white,
        fontSize: 30,
    },
    minWrap:{
        marginLeft: 8,
        marginRight: "auto",
    },
    textMin:{
        color: colors.white,
        fontSize: 30,
    },
})


