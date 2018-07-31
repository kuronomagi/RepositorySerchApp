import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Detail from './Detail';

export default StackNavigator ({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Detail',
    }
  }
},{
  initialRouteName: 'Home' // 初期表示させる画面
});