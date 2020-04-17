import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeTab from '../tabs/Home';
import SearchTab from '../tabs/Search';
import ReportTab from '../tabs/Report';
import ArchivedTab from '../tabs/Archived';
import { createDrawerNavigator } from '@react-navigation/drawer';


export default class Home extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', color: 'black',  },
      { key: 'search', title: 'Search', color: '#ff55f0', },
      { key: 'archived', title: 'Archive', color: '#27ff00', },
      { key: 'report', title: 'Report', color: '#ee0000', },
    ],
  };
  _handleIndexChange = index => this.setState({ index });

  

  _renderScene = BottomNavigation.SceneMap({
    home: HomeTab,
    search: SearchTab,
    archived: ArchivedTab,
    report : ReportTab
  })

  render() {
    let Drawer = createDrawerNavigator()
    return (
        <BottomNavigation
              navigationState={this.state}
              onIndexChange={this._handleIndexChange}
              renderScene={this._renderScene}
              labeled={true}
            /> 
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})
