import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, ScrollView } from 'react-native';
import BottomBar from '../motion/screens/List/BottomBar';
import Toolbar from './Toolbar';
import { Row } from './../motion/components/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ToolbarBackground from './ToolbarBackground';
import { Card, ListItem, Button, Icon, FormLabel, FormInput } from 'react-native-elements'
import StackMode from '../ImagesView/stackMode';

export default class NewPost extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ToolbarBackground></ToolbarBackground>
        <Toolbar></Toolbar>

        <ScrollView style={{ marginTop: -120, paddingTop: 120, zIndex: -1 }}>
          <FormInput
            containerStyle={{ height: 100 }}
            numberOfLines={4}
            multiline
            placeholder='Write description' />

          <Button
            icon={{
              name: 'touch-app',
              size: 15,
              color: 'white',
            }}
            backgroundColor='#00d2d3'
            buttonStyle={{ borderRadius: 5, marginTop: 10 }}
            title='Add Other Pictures' />

          <StackMode></StackMode>
        </ScrollView>


        <FlatList></FlatList>
        <BottomBar tabIndex={1}></BottomBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  toolbarContainer: {
    height: 56,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  statusBar: {
    height: 24,
    backgroundColor: 'transparent',
  },
  titleBackText: {
    color: 'white',
    marginLeft: 8,
  },
  backContainer: {
    flex: 1,
    alignItems: 'center',
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});