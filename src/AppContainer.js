import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigator from './AppNavigator';

function AppContainer() {
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  }

export default AppContainer;