import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class NewPost extends Component {
  render() {
    return (
      <View style={{ margin: 30 }}>
        <Text onPress={() => this.props.navigation.navigate('HomeScreen')}>
          NewPost Screen
        </Text>
      </View>
    );
  }
}