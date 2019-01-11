import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import RNRestart from 'react-native-restart';
import Auth0 from 'react-native-auth0';
var credentials = require('./auth0-credentials');
const auth0 = new Auth0(credentials);

export default class Auth0Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: null,
      loggedIn: false,
      profile: {}
    };
  }

  _storeAccessToken = async () => {
    try {
      await AsyncStorage.setItem('accessToken', this.state.accessToken);
    } catch (error) {
      console.log(error);
    }
  }

  _retrieveAccessToken = async () => {
    try {
      const data = await AsyncStorage.getItem('accessToken');
      if (data !== 'null' && data !== null) {
        this.setState({ accessToken: data });
        this._getUserInfo(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this._retrieveAccessToken();
  }

  _getUserInfo = (token) => {
    auth0
      .auth
      .userInfo({ token: token })
      .then((user) => {
        this.setState({ loggedIn: true, profile: user });
      })
      .catch(console.error);
  }

  _onLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile',
        audience: 'https://' + credentials.domain + '/userinfo',
        prompt: 'login'
      })
      .then(credentials => {
        Alert.alert(
          'Successful',
          'Login successfully! Need to restart application - Just a temp way ^^',
          [{ text: 'OK' }],
          { cancelable: false }
        );
        this.setState({ accessToken: credentials.accessToken });
        this._getUserInfo(credentials.accessToken);
        this._storeAccessToken();
        RNRestart.Restart();
      })
      .catch(error => console.log(error));
  };

  _onLogout = () => {
    if (Platform.OS === 'android') {
      this.setState({ accessToken: 'null', loggedIn: false });
      this._storeAccessToken();
      RNRestart.Restart();
    } else {
      auth0.webAuth
        .clearSession({})
        .then(success => {
          this.setState({ accessToken: 'null', loggedIn: false });
          this._storeAccessToken();
          RNRestart.Restart();
        })
        .catch(error => console.log(error));
    }
  };

  render() {
    return (
      <View>
        {this.state.loggedIn && (
          <TouchableOpacity onPress={this._onLogout}>
            <Image
              style={styles.statusAvatar}
              source={{ uri: this.state.profile.picture }}
            />
          </TouchableOpacity>
        )}

        {!this.state.loggedIn && (
          <TouchableOpacity onPress={this._onLogin}>
            <SimpleLineIcons style={{ marginTop: 7 }} name='login' size={24} color='#ecf0f1'></SimpleLineIcons>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusAvatar: {
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#f1ebeb',
    borderRadius: 15,
    marginTop: 4,
    marginRight: 15,
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
});
