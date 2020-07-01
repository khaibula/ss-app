import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, ActivityIndicator, Keyboard } from 'react-native';
import colors from '../../../assets/colors.js';
import HintError from './hintError';
import { useDispatch, useSelector } from 'react-redux';

export default function PhoneField(props) {
  const { loading, setPhone } = props;
  const style = getStyle(props);

  const phone = useSelector(state => state.phone);
  const [error, setError] = useState('');
  const [lphone, setLPhone] = useState(phone ? phone : '');

  const changeTimer = useRef(0);
  const handlePhoneChange = useCallback(phone => {
    setLPhone(phone);
    changeTimer.current && clearTimeout(changeTimer.current);
    changeTimer.current = setTimeout(() => {
      if (!phone) {
        setError('');
        setPhone('');
      } else if (phone.length !== 10) {
        setPhone('');
        setError('Неверный формат номера телефона');
      } else if (isNaN(phone + 1)) {
        setPhone('');
        setError('Номер телефона может содержать только цифры');
      } else {
        setPhone(phone);
        Keyboard.dismiss();
        setError('');
      }
    }, 500);
  }, []);

  const telConfig = {
    autoCompleteType: 'tel',
    keyboardType: 'numeric',
  };
  return (
    <>
      <View style={style.container}>
        <View style={[style.containerText, props.style]}>
          <View style={style.decor}>
            <View style={style.decorInner}></View>
          </View>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <>
              <Text style={style.plus}>+7</Text>
              <TextInput
                style={style.input}
                onChangeText={handlePhoneChange}
                placeholder={''}
                value={lphone}
                {...telConfig}
                onEndEditing={() => {
                  // onPress(phone)
                }}
              />
            </>
          )}
        </View>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <HintError isError={Boolean(error)}>{error}</HintError>
      </View>
    </>
  );
}

function getStyle(props) {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical: 5,
    },
    containerText: {
      backgroundColor: colors.white,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingTop: 8,
      paddingHorizontal: 10,
      paddingBottom: 12,
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
      backgroundColor: colors.main,
      borderRadius: 3,
      display: props.noDecor ? 'none' : undefined,
    },
    input: {
      width: '100%',
      fontSize: 20,
      lineHeight: 25,
    },
    plus: {
      fontSize: 20,
      lineHeight: 25,
      paddingLeft: 10,
    },
    buttonWrap: {
      borderRadius: 15,
      marginLeft: 10,
      padding: 15,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.main,
    },
    buttonText: {
      color: '#fff',
      fontSize: 14,
    },
  });
}
