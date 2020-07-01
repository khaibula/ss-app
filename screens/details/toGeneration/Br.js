import React from 'react';
import { View, StyleSheet } from 'react-native';
const style = StyleSheet.create({
  text: {
    height: 16,
  },
});

const Br = ({ children }) => {
  return <View style={style.text}>{children}</View>;
};

export default Br;
