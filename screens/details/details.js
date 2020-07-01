import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import LocalStyle from '../info/localStyle';
import TopBar from '../globalModules/TopBar';
import colors from '../../assets/colors';
import BottomBar from '../globalModules/BottomBar';
import Generate, { GenConstants } from './toGeneration/Generate';
import { useSelector } from 'react-redux';
import { selectMdFieldFactory, selectMdLabelsFactory } from '../../store/contentSlice';
import { useSelectorFactory } from '../../assets/hooks/useSelectorFactory';
import { screensList } from '../../assets/constants';
import { useTranslate } from './translate';
import { useContentTextFields } from '../../assets/hooks/useContentTextFields';

const Details = ({ navigation }) => {
  const style = LocalStyle();
  const back = () => {
    navigation.goBack();
  };
  const toScanner = () => {
    navigation.navigate('Scanner');
  };
  const info = useSelectorFactory(selectMdFieldFactory, screensList.info, navigation.getParam('id'));
  const data = useTranslate(info.value.value ?? '');
  const { title } = useContentTextFields(screensList.info, ['title']);
  return (
    <View style={style.container}>
      <TopBar handlers={[back]} rightIcon={{ style: { display: 'none' } }} color={colors.main}>
        {title}
      </TopBar>
      <ScrollView style={{ paddingHorizontal: 15, marginTop: 5 }}>
        <View style={{ height: 20 }} />
        {data}
        <View style={{ height: 20 }} />
      </ScrollView>
      <BottomBar onPress={toScanner} />
    </View>
  );
};

export default Details;
