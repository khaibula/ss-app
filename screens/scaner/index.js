import React, { useCallback } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import TopBar from '../globalModules/TopBar';
import Frame from './frame_svg.js';
import getStyle from './localStyle.js';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ErrorQr from './ErrorQr.js';
import { useCameraPermission } from './useCameraPermission';
import { useAction } from '../../assets/hooks/useAction';
import { qrSelectors, scanQr } from '../../store/qrSlice';
import { useSelector } from 'react-redux';

function Scanner(props) {
  const style = getStyle(props);
  const toThanks = () => {
    props.navigation.navigate('Thanks');
  };
  const toMenu = () => {
    props.navigation.navigate('Menu');
  };
  const back = () => {
    props.navigation.goBack();
  };
  const scanQrAction = useAction(scanQr);
  const handleBarCodeScanned = useCallback(qr => {
    scanQrAction(qr, toThanks);
  }, []);
  const isError = useSelector(qrSelectors.selectIsError);
  const isLoading = useSelector(qrSelectors.selectIsLoading);

  const hasCameraPermission = useCameraPermission();
  if (hasCameraPermission === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Ожидание разрешения доступа к камере</Text>
      </View>
    );
  }
  if (hasCameraPermission === false) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Нет доступа к камере</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BarCodeScanner onBarCodeScanned={handleBarCodeScanned} style={StyleSheet.absoluteFill} />
      {isError ? <ErrorQr /> : <Frame />}
      {!isLoading && (
        <TopBar style={style.topBar} handlers={[back, toMenu]} color={'#FFF'}>
          Сканер
        </TopBar>
      )}
    </View>
  );
}

export default Scanner;
