/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class App extends Component<{}> {

  onPressFetch() {
    fetch('https://api.github.com/search/repositories?q=react&page=2')
    .then(response => response.json())
    .then(({ items }) => console.log(items));
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.onPressFetch()}>
          <Text>Fetch</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
