import React, { useState, useEffect, useRef, Fragment } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, ActivityIndicator, Animated } from 'react-native';
import colors from '../../../assets/colors.js';

import HintError from './hintError';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../globalModules/button/button';
import { useShowAnimation } from '../../../assets/hooks/useShowAnimation';
import { useAddPassword } from '../../../assets/hooks/useAddPassword';
import { useSendPassword } from '../../../assets/hooks/useSendPassword';
import { useTimerAddPassword } from '../../../assets/hooks/useTimerAddPassword';

export default function Password(props) {
  const style = getStyle(props);

  const { isShown = true, maxHeight = 300, phone } = props;

  const aniView = useRef(null);
  const aniStyle = useShowAnimation(isShown, maxHeight);
  const [timer] = useTimerAddPassword();
  const [password, setPassword] = useState('');
  const [sendPasswordLoading, sendPassword] = useSendPassword({
    onError: str => {
      setError(str);
    },
  });
  const [addPasswordLoading, addPassword] = useAddPassword();
  const canSendPassword = password.length === 8;
  const [error, setError] = useState('');

  return (
    <Animated.View ref={aniView} style={[aniStyle, { paddingHorizontal: 10 }]}>
      <Text style={style.textHead}>Введите пароль из SMS</Text>
      <View style={style.container}>
        <View style={[style.containerText, props.style]}>
          {/*<View style={style.decor}><View style={style.decorInner}></View></View>*/}
          {sendPasswordLoading ? (
            <ActivityIndicator />
          ) : (
            <>
              <TextInput
                style={style.input}
                onChangeText={setPassword}
                placeholder={''}
                value={password}
                onEndEditing={() => {
                  // onPress(phone)
                }}
              />
            </>
          )}
        </View>
      </View>
      <HintError isError={Boolean(error)}>{error}</HintError>
      <View>
        <View style={style.buttonsGroup}>
          <TouchableOpacity
            onPress={() => {
              if (!canSendPassword) {
                setError('Неверный пароль');
              } else {
                sendPassword(phone, password);
              }
            }}
          >
            <View style={style.buttonWrap}>
              <Text style={style.buttonText}>Войти</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (timer === 0) {
                addPassword(phone);
              }
            }}
          >
            <View style={style.buttonWrapSecond}>
              {addPasswordLoading ? (
                <ActivityIndicator />
              ) : (
                <Text style={style.buttonTextSecond}>
                  {timer > 0
                    ? `До повторной отправки ${String(Math.floor(timer / 60)).padStart(2, '0')}:${String(
                        timer % 60
                      ).padStart(2, '0')} секунд`
                    : 'Получить новый пароль по SMS'}{' '}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}

function getStyle(props) {
  return StyleSheet.create({
    textHead: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.main,
      marginTop: 15,
      paddingLeft: 10,
    },
    container: {
      justifyContent: 'space-between',
      // alignItems: 'center',
      flexDirection: 'row',
      marginVertical: 5,
    },
    containerText: {
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
      flex: 3,
    },
    text: {
      color: '#000',
      fontSize: 14,
      fontWeight: '500',
      paddingLeft: 10,
      width: '100%',
    },
    decor: {
      position: 'absolute',
      width: 8,
      height: 8,
      backgroundColor: colors.white,
      borderRadius: 4,
      left: -4,
      alignItems: 'center',
      justifyContent: 'center',
      display: props.noDecor ? 'none' : undefined,
    },
    decorInner: {
      width: 6,
      height: 6,
      backgroundColor: colors.active,
      borderRadius: 3,
      display: props.noDecor ? 'none' : undefined,
    },
    input: {
      width: '100%',
      height: 25,
      fontSize: 20,
    },
    plus: {
      fontSize: 20,
      paddingLeft: 10,
      height: 25,
    },
    buttonWrap: {
      marginTop: 25,
      borderRadius: 15,
      padding: 15,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.main,
    },
    buttonText: {
      color: '#fff',
      fontSize: 14,
    },
    buttonWrapSecond: {
      marginTop: 10,
      borderRadius: 15,
      borderColor: colors.main,
      borderWidth: 1,
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    buttonTextSecond: {
      color: colors.main,
      fontSize: 14,
    },
    buttonsGroup: {
      width: '100%',
    },
  });
}
