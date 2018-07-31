import React from 'react';
import { Text } from 'react-native';

export default ({ navigation }) => console.log(navigation) || <Text>{navigation.state.params.item.name}</Text>;