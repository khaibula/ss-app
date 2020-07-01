import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../../../assets/colors.js';
import Button from '../button/button.js';
import Timer from './timer.js';
import { fetchDrawNow, selectDrawEnd } from '../../../store/drawNowSlice';
import { useContentImgFactory } from '../../../assets/hooks/useContentImfFactory';
import { useContentTextField } from '../../../assets/hooks/useContentTextField';
import { screensList } from '../../../assets/constants';
import { useAction } from '../../../assets/hooks/useAction';

function BottomBar(props) {
  const time = useSelector(selectDrawEnd);
  const qrImg = useContentImgFactory(screensList.bottomBar, 'qr');
  const buttonText = useContentTextField(screensList.bottomBar, 'buttonText');
  const fetchDrawNowAction = useAction(fetchDrawNow);

  useEffect(() => {
    fetchDrawNowAction();
  }, []);
  if (time) {
    return (
      <View style={style.container}>
        <Image style={style.bgimage} source={{ uri: qrImg }} resizeMode="cover" />
        <Timer time={time} />
        <Button style={style.button} onPress={props.onPress}>
          {buttonText}
        </Button>
      </View>
    );
  } else {
    return null;
  }
}

export default BottomBar;

const style = StyleSheet.create({
  container: {
    paddingTop: 20,
    overflow: 'hidden',
    marginTop: 'auto',
    backgroundColor: colors.main,
    width: '100%',
    // height: 140,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // borderRadius: 15,
    elevation: 1,
  },
  bgimage: {
    position: 'absolute',
    zIndex: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: undefined,
    aspectRatio: 750 / 167,
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: colors.active,
    borderWidth: 2,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 20,
  },
});
