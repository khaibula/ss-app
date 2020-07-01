import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import ViewBg from './ViewBg.js';
import LocalStyle from './locStyle.js';
import { Ionicons } from '@expo/vector-icons';
import Button from '../globalModules/button/button.js';
import { useContentImgFactory } from '../../assets/hooks/useContentImfFactory';
import { homeImgFields, homeTextFields, screensList } from '../../assets/constants';
import { useContentTextField } from '../../assets/hooks/useContentTextField';
import { selectIsLogin } from '../../store/authSlice';
import { useSelector } from 'react-redux';

function Hello(props) {
  const bgUrl = useContentImgFactory(screensList.home, homeImgFields.bg);
  const logoUrl = useContentImgFactory(screensList.home, homeImgFields.logo);
  const mainTitle = useContentTextField(screensList.home, homeTextFields.mainTitle);
  const readMoreButton = useContentTextField(screensList.home, homeTextFields.readMoreButton);
  const scanQrButton = useContentTextField(screensList.home, homeTextFields.scanQrButton);
  const testText = useContentTextField(screensList.home, 'testField');
  const isLogin = useSelector(selectIsLogin);

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
    <ViewBg source={{ uri: bgUrl }}>
      <View style={style.topBar}>
        <View>
          <Image resizeMode="contain" style={style.logo} source={{ uri: logoUrl }} />
        </View>
        <TouchableOpacity onPress={toMenu}>
          <Ionicons name="ios-menu" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={style.headBox}>
        {mainTitle.split('\n').map(text => (
          <Text key={text} style={style.headText}>
            {text}
            {testText}
          </Text>
        ))}
      </View>
      <View style={style.buttonBox}>
        <Button onPress={isLogin ? toScanner : toMenu}> {scanQrButton} </Button>
        <Button onPress={toInfo} style={{ backgroundColor: '#e5e5e5', marginTop: 10 }} styleText={{ color: '#001941' }}>
          {readMoreButton}
        </Button>
      </View>
    </ViewBg>
  );
}

export default Hello;
