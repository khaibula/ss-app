import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
const styleCreateStyle = ({ width, height }) =>
  StyleSheet.create({
    img: {
      borderRadius: 10,
      margin: 15,
      width,
      height,
      borderWidth: 1,
      borderColor: colors.main,
    },
  });

const ImageAdd = ({ url, width, height, alt }) => {
  const style = styleCreateStyle({ width, height });
  return <Image source={{ uri: url }} alt={alt} style={style.img} />;
};

export default ImageAdd;
