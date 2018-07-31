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
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';

export default class App extends Component<{}> {
  state = {
    items: [],
    refreshing: false,
    text: '',
  }
  page = 0;

  fetchRepositories(refreshing = false) {
    const newPage = refreshing ? 1 : this.page + 1;
    this.setState({ refreshing });
    fetch(`https://api.github.com/search/repositories?q=${this.state.text}&page=${newPage}`)
    .then(response => response.json())
    .then(({ items }) => {
      this.page = newPage;
      if(refreshing) {
        this.setState({ items, refreshing: false });
      } else {
        this.setState({ items: [...this.state.items, ...items], refreshing: false })
      }
    });
  }

  navigateToDetail(item) {
    this.props.navigation.navigate('Detail', { item }); // App.jsのStackNavigatorで設定したキーを入れると、reactでページ遷移ができる, パラメータを渡す時は第二引数にobject
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} onChangeText={(text) => this.setState({ text })} />
          <TouchableOpacity onPress={() => this.fetchRepositories(true)}>
            <Text state={styles.serchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.fetchRepositories()}>
          <Text>Fetch</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.items}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => this.navigateToDetail(item)}>
              <Text style={{ padding: 20 }}>{item.name}</Text>
            </TouchableOpacity>
          }
          keyExtractor={(item) => item.url}
          onEndReached={() => this.fetchRepositories()}
          onEndReachedThreshold={0.1}
          onRefresh={() => this.fetchRepositories(true)}
          refreshing={this.state.refreshing}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inputWrapper: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
    marginRight: 10,
    borderRadius: 4,
  },
  serchText: {
    padding: 10,
  }
});
