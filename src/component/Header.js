import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';

const style = StyleSheet.create({
  area: {
    width: '100%',
    height: Dimensions.get('window').height / 12,
    justifyContent: 'flex-end',
    backgroundColor: '#3ce3ce'
  },
  textHeader: {
    fontSize: 20,
    paddingBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default class Header extends Component {
  render() {
    const {title} = this.props;
    return (
      <View style={style.area} >
        <StatusBar
          barStyle="dark-content"
          animated={true}
        />
        <Text style={style.textHeader}> {title} </Text>
      </View>
    );
  }
}
