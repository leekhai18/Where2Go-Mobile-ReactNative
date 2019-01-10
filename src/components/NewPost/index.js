import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BottomBar from '../motion/screens/List/BottomBar';

export default class NewPost extends Component {
  render() {
    return (
      <View style={{ margin: 30 }}>
        <Text onPress={() => this.props.navigation.navigate('HomeScreen')}>
          NewPost Screen
        </Text>
        <BottomBar tabIndex={1}></BottomBar>
      </View>
    );
  }
}