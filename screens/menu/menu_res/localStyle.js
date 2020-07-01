import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors.js';


export default function(){
    let obgect = StyleSheet.create({
        container:{
            flex:1,
            width:"100%",
            backgroundColor: colors.mainBg,
            paddingTop: 20,
        },
        text:{
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.main,
            marginTop: 10,
            marginBottom:5,
            paddingLeft: 10 ,
        },
        mainQuest:{
            flexDirection: 'row',
            marginBottom: 20,
        },
        shortLinks:{
            width: "47%",    
        },
        shortLinksText1:{
            fontWeight: 'bold',
            fontSize: 16,

        },
        shortLinksText2:{
            fontWeight: 'normal',
            fontSize:12,
            color: colors.second,
        },
    })
    return obgect;
}
