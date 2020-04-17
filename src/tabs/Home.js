import React, {Component, useCallback} from 'react';
import {Text, StyleSheet, Button, SafeAreaView, View} from 'react-native';
import ChildComp from '../component/ChildComp';
import {useDispatch} from 'react-redux';
import {INCREASE, DECREASE, RESET} from '../action';
import {UIBanner} from '../component/UIBanner';
import Header from '../component/Header';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  console.log('rendered');
  const dispatch = useDispatch();

  const onIncrement = () => dispatch({type: INCREASE});
  const onReset = useCallback(() => dispatch({type: RESET}), [dispatch]);
  const onDecrement = () => {
    dispatch({type: DECREASE});
  };

  return (
    <View>
      <Header title="Welcome to my apps" />
      <ScrollView contentContainerStyle>
        <View styles={styles.container}>
          <ChildComp />
          <Button title="Increase" onPress={onIncrement} />
          <Button title="Decrease" onPress={onDecrement} />
          <Button title="Reset" onPress={onReset} />
          <UIBanner />
          <ChildComp />
          <Button title="Increase" onPress={onIncrement} />
          <Button title="Decrease" onPress={onDecrement} />
          <Button title="Reset" onPress={onReset} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
