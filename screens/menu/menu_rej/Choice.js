import { ActivityIndicator, Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useRef } from 'react';
import { useShowAnimation } from '../../../assets/hooks/useShowAnimation';
import colors from '../../../assets/colors';
import { useAddPassword } from '../../../assets/hooks/useAddPassword';
import { useContentTextFields } from '../../../assets/hooks/useContentTextFields';
import { screensList } from '../../../assets/constants';

const style = StyleSheet.create({
  buttonWrap: {
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
    marginTop: 15,
    borderRadius: 15,
    borderColor: colors.main,
    borderWidth: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonTextSecond: {
    color: colors.main,
    fontSize: 14,
  },
});
export const choices = {
  none: 'none',
  new: 'new',
  last: 'last',
};

export const Choice = ({ onChange, phone, isShown, maxHeight = 140 }) => {
  const aniView = useRef(null);
  const aniStyle = useShowAnimation(isShown, maxHeight);

  const onPassLoading = useCallback(() => {
    onChange(choices.new);
  }, []);
  const [addPasswordLoading, addPassword] = useAddPassword(onPassLoading);

  const { getPasswordButton, isHavePasswordButton } = useContentTextFields(screensList.menuLogin, [
    'getPasswordButton',
    'isHavePasswordButton',
  ]);

  return (
    <Animated.View style={[aniStyle, { paddingHorizontal: 10 }]} ref={aniView}>
      <TouchableOpacity
        onPress={() => {
          addPassword(phone);
        }}
      >
        <View style={[style.buttonWrap, { marginTop: 15 }]}>
          {addPasswordLoading ? <ActivityIndicator /> : <Text style={style.buttonText}>{getPasswordButton}</Text>}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          onChange(choices.last);
        }}
      >
        <View style={style.buttonWrapSecond}>
          <Text style={style.buttonTextSecond}>{isHavePasswordButton}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
