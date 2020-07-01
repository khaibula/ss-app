import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Linking } from 'react-native';
import LocalStyle from './localStyle.js';
import colors from '../../../assets/colors.js';
import TopBar from '../../globalModules/TopBar.js';
import BottomBar from '../../globalModules/BottomBar/index.js';
import Сounter from './counter/counter.js';
import NavLinck from '../../globalModules/navlinck.js';
import Phone from './phone.js';
import { useDispatch, useSelector } from 'react-redux';
import { useQrNum } from '../../../assets/hooks/useQrNum';
import { reducerTypes } from '../../../store/main';
import { authSlice, selectIsLogin, selectPhone } from '../../../store/authSlice';
import { useAction } from '../../../assets/hooks/useAction';

import { useRules } from '../../info/hooks';

export default function MenuRes(props) {
  const phone = useSelector(selectPhone);
  const [loadQrNum, qrNum] = useQrNum();

  const style = LocalStyle(props);

  const back = () => {
    props.navigation.goBack();
  };
  const toScanner = () => {
    props.navigation.navigate('Scanner');
  };
  const rules = useRules();
  console.log(rules);
  const toRules = () => {
    console.log('to rules');
    props.navigation.navigate('Details', {
      id: rules.id,
    });
  };

  const changePasswordAction = useAction(authSlice.actions.changePassword);
  const onChangePassword = () => {
    changePasswordAction();
  };

  return (
    <View style={style.container}>
      <TopBar handlers={[back]} color={colors.main} rightIcon={{ style: { display: 'none' } }}>
        Меню
      </TopBar>
      <ScrollView style={{ paddingHorizontal: 10, marginTop: 5 }}>
        <Text style={style.text}>Ваш номер телефона</Text>
        <Phone
          phone={phone}
          onPress={() => {
            onChangePassword();
          }}
        />
        <Сounter {...{ phoneChanging: loadQrNum, num: qrNum }} />
        <Text style={style.text}> Полезная информация</Text>
        <View style={style.mainQuest}>
          <NavLinck styleText={{ width: '90%' }} style={style.shortLinks} onPress={toRules} noDecor={true}>
            <Text style={style.shortLinksText1}>Правила</Text>
            {/* <Text  style={style.shortLinksText2}>Подробные</Text> */}
          </NavLinck>
          <Dots />
          <NavLinck
            styleText={{ width: '90%' }}
            style={style.shortLinks}
            noDecor={true}
            onPress={() => {
              Linking.openURL('https://vk.com/severservis.narfu');
            }}
          >
            <Text style={style.shortLinksText1}>Задать вопрос</Text>
            {/* <Text style={style.shortLinksText2}>Организаторам</Text> */}
          </NavLinck>
        </View>
      </ScrollView>
      <BottomBar onPress={toScanner} />
    </View>
  );
}

function Dots() {
  let style = StyleSheet.create({
    dotsWrap: {
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '6%',
      marginVertical: 15,
    },
    dot1: {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: colors.active,
    },
    dot2: {
      width: 3,
      height: 3,
      borderRadius: 1.5,
      backgroundColor: colors.active,
    },
    dot3: {
      width: 2,
      height: 2,
      borderRadius: 1,
      backgroundColor: colors.active,
    },
  });
  return (
    <View style={style.dotsWrap}>
      <View style={style.dot1}></View>
      <View style={style.dot2}></View>
      <View style={style.dot3}></View>
    </View>
  );
}
