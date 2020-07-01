import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import LocalStyle from './localStyle.js';
import colors from '../../../assets/colors.js';
import TopBar from '../../globalModules/TopBar.js';
import Hint from './hint.js';
import PhoneField from './phone.js';
import { useSelector } from 'react-redux';
import Password from './password';
import { Choice, choices } from './Choice';
import { useAction } from '../../../assets/hooks/useAction';
import { authSlice, selectIsChangingPassword } from '../../../store/authSlice';
import { useContentTextFields } from '../../../assets/hooks/useContentTextFields';
import { screensList } from '../../../assets/constants';

export default function MenuRej(props) {
  const [lPhone, setLPhone] = useState(undefined);
  const changingPassword = useSelector(selectIsChangingPassword);
  const passwordChanged = useAction(authSlice.actions.passwordChanged);

  const style = LocalStyle();

  const back = () => {
    props.navigation.goBack();
    changingPassword && passwordChanged();
  };

  const toQrScanner = () => {
    props.navigation.navigate('Hello');
  };

  const [choice, setChoice] = useState(choices.none);

  const {
    topHintCreate,
    topHintChange,
    bottomHintCreate,
    bottomHintChange,
    titleTextChange,
    titleTextCreate,
    labelPhone,
  } = useContentTextFields(screensList.menuLogin, [
    'topHintCreate',
    'topHintChange',
    'bottomHintCreate',
    'bottomHintChange',
    'titleTextChange',
    'titleTextCreate',
    'labelPhone',
  ]);

  return (
    <View style={style.container}>
      <TopBar handlers={[back]} color={colors.main} rightIcon={{ style: { display: 'none' } }}>
        {changingPassword ? titleTextChange : titleTextCreate}
      </TopBar>
      <ScrollView>
        <Hint style={{ marginTop: 20 }} isShown={!Boolean(lPhone)}>
          {changingPassword ? topHintChange : topHintCreate}
        </Hint>
        <Text style={style.text}>{labelPhone}</Text>
        <PhoneField setPhone={setLPhone} />
        <Choice isShown={choice === choices.none && lPhone} phone={lPhone} onChange={setChoice} />
        <Password onSendPassword={toQrScanner} isShown={choice !== choices.none && lPhone} phone={lPhone} />
        <Hint style={{ marginTop: 10 }} isShown={!lPhone}>
          {changingPassword ? bottomHintChange : bottomHintCreate}
        </Hint>
      </ScrollView>
    </View>
  );
}
