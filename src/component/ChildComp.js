import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ChildComp = () => {
  const counter = useSelector(state => state.counter.times);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>Clicked {counter} times </Text>
    </View>
  );
};

export default ChildComp;
