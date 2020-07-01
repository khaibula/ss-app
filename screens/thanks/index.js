import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import ViewBg from './ViewBg.js';
const bgImage = require('./img/bg.jpg');
import LocalStyle from './locStyle.js';
import { Ionicons } from '@expo/vector-icons';
import Button from '../globalModules/button/button.js';

export default function Thanks(props) {
  const style = LocalStyle();
  const toInfo = () => {
    props.navigation.navigate('Info');
  };
  const toMenu = () => {
    props.navigation.navigate('Menu');
  };
  const toScanner = () => {
    props.navigation.navigate('Scanner');
  };

  return (
    <ViewBg source={bgImage}>
      <View style={style.topBar}>
        <View>
          <Image resizeMode="contain" style={style.logo} source={require('./img/logo.png')} />
        </View>
        <TouchableOpacity onPress={toMenu}>
          <Ionicons name="ios-menu" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={style.headBox}>
        <Text style={style.headText}>Вы успешно</Text>
        <Text style={style.headText}>Отсканировали</Text>
        <Text style={style.headText}>QR код</Text>
      </View>
      <View style={style.buttonBox}>
        <Button onPress={toScanner}> Сканировать снова</Button>
        <Button onPress={toInfo} style={{ backgroundColor: '#e5e5e5', marginTop: 10 }} styleText={{ color: '#001941' }}>
          {' '}
          Правила{' '}
        </Button>
      </View>
    </ViewBg>
  );
}
