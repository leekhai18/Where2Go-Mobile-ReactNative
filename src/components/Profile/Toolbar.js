import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, AsyncStorage, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Card, ListItem, Button, Icon, FormLabel, FormInput } from 'react-native-elements'
import { Row } from './../motion/components';
import translateAndOpacity from './../motion/animations/translateAndOpacity';
import Auth0 from 'react-native-auth0';
var credentials = require('./../../auth0/auth0-credentials');
const auth0 = new Auth0(credentials);

class Toolbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    this._retrieveAccessToken();
  }

  _retrieveAccessToken = async () => {
    try {
      const data = await AsyncStorage.getItem('accessToken');
      if (data !== 'null' && data !== null) {
        this._getUserInfo(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  _getUserInfo = (token) => {
    auth0
      .auth
      .userInfo({ token: token })
      .then((user) => {
        this.setState({ profile: user });
      })
      .catch(console.error);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <Card image={require('./../../assets/images/posts/3.jpg')}>
          <Row style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={{ uri: this.state.profile.picture }}
            />
            <MaterialIcons style={styles.iconEditAvatar} name='edit'></MaterialIcons>
          </Row>

          <Row style={styles.profileTextContainer}>
            <FontAwesome style={styles.icon} name='user-o'></FontAwesome>
            <Text style={styles.text}>{this.state.profile.nickname}</Text>
            <FontAwesome style={styles.icon} name='edit'></FontAwesome>
          </Row>
          <Row style={styles.profileTextContainer}>
            <Entypo style={styles.icon} name='email'></Entypo>
            <Text style={styles.text}>{this.state.profile.name}</Text>
            <FontAwesome style={styles.icon} name='edit'></FontAwesome>
          </Row>

          <Row style={{ marginTop: 20,  alignSelf: 'center', }}>
            <Text style={styles.textStrong}>164</Text>
            <Text style={styles.textlight}> Following</Text>
            <Text style={styles.textStrong}>22</Text>
            <Text style={styles.textlight}> Fans</Text>
            <Text style={styles.textStrong}>290</Text>
            <Text style={[styles.textlight, {marginRight: 0}]}> Hearts</Text>
          </Row>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  statusBar: {
    height: 24,
    backgroundColor: 'transparent',
  },
  avatar: {
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: '#f1ebeb',
    borderRadius: 50,
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
  avatarContainer: {
    alignSelf: 'center',
    marginTop: -65,
  },
  iconEditAvatar: {
    color: '#95a5a6',
    fontSize: 18,
    fontWeight: 'bold',
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  profileTextContainer: {
    alignSelf: 'center',
    borderBottomColor: '#bdc3c7',
    borderBottomWidth: 0.5,
    marginVertical: 6,
    paddingBottom: 5
  },
  icon: {
    color: '#95a5a6',
    fontSize: 14
  },
  text: {
    color: '#95a5a6',
    marginRight: 20,
    marginLeft: 5
  },
  textStrong: {
    fontWeight: '700',
    color: '#34495e',
  },
  textlight: {
    color: '#95a5a6',
    marginRight: 12
  }
});

export default translateAndOpacity(Toolbar);
