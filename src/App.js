/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {AppNavigator} from './AppNavigator';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import store from './store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'yellow',
  },
};

export default App = ()=>{
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </ReduxProvider>
  )
};
