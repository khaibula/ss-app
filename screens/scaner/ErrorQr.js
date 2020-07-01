import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Button from '../globalModules/button/button.js';
import { useSelector } from 'react-redux';
import { useAction } from '../../assets/hooks/useAction';
import { qrSelectors, qrSlice } from '../../store/qrSlice';

const errorToMassage = error => {
  switch (error.name) {
    case 'HTTPError': {
      return 'Отсканируйте qr код чека пожалуйста';
    }
    default: {
      return error.message
    }
  }
};

export default function() {
  const s = getStyle();
  const error = useSelector(qrSelectors.selectError);
  const isLoading = useSelector(qrSelectors.selectIsLoading);
  const dumpQr = useAction(() => qrSlice.actions.dampQr());

  return (
    <View style={s.wrapper}>
      <View style={s.center}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <Text style={s.text}>{errorToMassage(error)}</Text>
        )}
      </View>
      <View>
        {!isLoading && (
          <Button onPress={dumpQr} style={s.button} styleText={{ color: '#001941' }}>
            Сканировать снова
          </Button>
        )}
      </View>
    </View>
  );
}

function getStyle() {
  return StyleSheet.create({
    button: {
      width: '90%',
      backgroundColor: '#e5e5e5',
      alignSelf: 'center',
      marginBottom: 15,
    },
    wrapper: {
      backgroundColor: 'rgba(0,0,0,0.95)',
      flexGrow: 1,
      width: '100%',
      justifyContent: 'space-between',
    },
    center: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      marginBottom: 10,
      color: '#fff',
      fontSize: 22,
      textAlign: 'center',
    },
  });
}
