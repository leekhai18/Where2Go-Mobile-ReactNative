import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BottomBar from '../motion/screens/List/BottomBar';

export default class Profile extends Component {
  render() {
    return (
      <View>
        <Text>
          Profile Screen
        </Text>
        <BottomBar tabIndex={2}></BottomBar>
      </View>
    );
  }
}