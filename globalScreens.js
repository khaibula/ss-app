import { Provider, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchContent, selectContentIsLoading } from './store/contentSlice';
import { ActivityIndicator, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Hello from './screens/hello';
import { useAction } from './assets/hooks/useAction';
import Menu from './screens/menu';
import Scanner from './screens/scaner';
import Thanks from './screens/thanks';
import Info from './screens/info';
import Details from './screens/details/details';
import { getInitParams } from './store/authSlice';
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Hello,
    },
    Thanks: {
      screen: Thanks,
    },
    Info: {
        screen: Info,
    },
    Menu: {
      screen: Menu,
    },
    Scanner: {
      screen: Scanner,
    },
    Details: {
        screen: Details,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);
const AppContainer = createAppContainer(AppNavigator);
export const GlobalScreens = () => {
  const isLoading = useSelector(selectContentIsLoading);
  console.log(fetchContent);
  const fetch = useAction(fetchContent);
  const getAuth = useAction(getInitParams)
  useEffect(() => {
    fetch();
    getAuth()
  }, []);
  if (isLoading) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return <AppContainer />;
  }
};
