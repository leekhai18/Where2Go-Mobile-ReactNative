import React, { PureComponent } from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScaleAndOpacity } from 'react-native-motion';
import { getPlatformElevation } from '../../utils';
import Avatar from './Avatar';
import requireAssets from './../../../../assets/data/require';
import Row from './../Row';
import Col from './../Col';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

class ListItem extends PureComponent {
  onPressed = event => {
    const { onPress, item } = this.props;
    onPress(item, event.nativeEvent);
  };

  onLikePress = () => {
    console.log('onLikePress');
  }

  render() {
    const { item, isSelected, style, isHidden, animateOnDidMount } = this.props;

    return (
      <ScaleAndOpacity
        isHidden={isHidden}
        animateOnDidMount={animateOnDidMount}
      >
        <TouchableWithoutFeedback onPress={this.onPressed}>
          <View style={[styles.container, style]} pointerEvents="box-only">
            <Image style={styles.picture} source={{ uri: item.picture }}></Image>

            <Row>
              <Avatar src={requireAssets[item.author]}></Avatar>
              <Col>
                <Text style={styles.mainText}>{item.name}</Text>
                <Text style={styles.mainText}>{item.address}</Text>
                <Row>
                  <Text style={{...styles.secondaryText, fontSize: 13}}>{item.type}</Text>
                  <FontAwesome name="star" size={14} color="#5be1bd"></FontAwesome>
                  <Text style={{...styles.secondaryText, fontSize: 13}}> {item.rate}</Text>
                </Row>
              </Col>
            </Row>

            <Row style={{ borderTopWidth: 0.5, borderTopColor: '#b2bec3', paddingTop: 5 }}>
              <AntDesign onPress={this.onLikePress} name="like2" size={16} color="#b2bec3"></AntDesign>
              <Text style={styles.secondaryText}> {item.likes}</Text>
              <FontAwesome name="comment-o" size={16} color="#b2bec3"></FontAwesome>
              <Text style={styles.secondaryText}> {item.comments}</Text>
              <FontAwesome name="heart-o" size={16} color="#b2bec3"></FontAwesome>
              <Text style={styles.secondaryText}> Favorite</Text>
              <FontAwesome name="share-square-o" size={16} color="#b2bec3"></FontAwesome>
              <Text style={styles.secondaryText}> Share</Text>
            </Row>
          </View>
        </TouchableWithoutFeedback>
      </ScaleAndOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    ...getPlatformElevation(2),
  },
  picture: {
    width: null,
    height: 120,
    resizeMode: 'cover'
  },
  mainText: {
    fontWeight: '700'
  },
  secondaryText: {
    color: '#636e72',
    marginRight: 15
  }
});

export default ListItem;
