import React, { PureComponent } from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Row } from '../motion/components/index';

class PostItem extends PureComponent {
  render() {
    return (
      <View>
        <Image style={styles.itemPost} source={this.props.src}></Image>
        <Row style={styles.likeContainer}>
          <MaterialCommunityIcons style={styles.icon} name='heart-outline'></MaterialCommunityIcons>
          <Text style={styles.text}> {this.props.numOfLike}</Text>
        </Row>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemPost: {
    height: 120,
    width: 100,
    resizeMode: 'stretch',
    marginRight: 5,
    marginBottom: 5
  },
  likeContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 10,
    marginLeft: 10
  },
  icon: { fontWeight: 'bold', color: 'white', fontSize: 13 },
  text: { fontSize: 12, fontWeight: '700', color: 'white' }
});

export default PostItem;
