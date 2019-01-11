import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import BottomBar from '../motion/screens/List/BottomBar';
import Toolbar from './Toolbar';
import { Row } from '../motion/components/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import ToolbarBackground from './ToolbarBackground';
import { Card, ListItem, Button, Icon, FormLabel, FormInput } from 'react-native-elements'
import PostItem from './postItem';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ToolbarBackground></ToolbarBackground>
        <Toolbar></Toolbar>

        <View style={{ height: 130, backgroundColor: 'black', zIndex: -1, marginTop: -130 }}></View>

        <View style={{ height: 40, backgroundColor: 'black' }}>
          <Row style={{ alignSelf: 'center', paddingTop: 5 }}>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#f1c40f', paddingBottom: 5 }}>
              <Text style={{ color: 'white' }}>Posts 5</Text>
            </View>

            <Text style={{ color: '#95a5a6', marginHorizontal: 40 }}>|</Text>
            <Text style={{ color: '#95a5a6' }}>Likes 2978</Text>
          </Row>
        </View>

        <ScrollView style={{ backgroundColor: 'black' }}>
          <View style={styles.postsContainer}>
            <PostItem src={require('./../../assets/images/posts/1.jpg')} numOfLike={'789'}></PostItem>
            <PostItem src={require('./../../assets/images/posts/2.jpg')} numOfLike={'6789'}></PostItem>
            <PostItem src={require('./../../assets/images/posts/3.jpg')} numOfLike={'70.7k'}></PostItem>
            <PostItem src={require('./../../assets/images/posts/4.jpg')} numOfLike={'101.2k'}></PostItem>
            <PostItem src={require('./../../assets/images/posts/5.jpg')} numOfLike={'78k'}></PostItem>
          </View>
        </ScrollView>



        <FlatList></FlatList>
        <BottomBar tabIndex={2}></BottomBar>
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
  postsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 5
  }
});