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

    // ↓動的に変更するひとつのやりかた(別の方法はDetail.js,表示させたいページにて)
    navigationOptions: ({ navigation }) => ({ // objectだとtitleなどは固定のものしか入らない。関数にすると動的に変更可能
      title: navigation.state.params.item.name,
    })
  }
},{
  initialRouteName: 'Home' // 初期表示させる画面
});