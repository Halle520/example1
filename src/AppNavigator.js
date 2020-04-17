import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/Home';



export const AppNavigator =()=>{
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  )
}
