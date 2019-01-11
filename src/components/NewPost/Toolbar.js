import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Card, ListItem, Button, Icon, FormLabel, FormInput } from 'react-native-elements'
import { Row } from './../motion/components';
import translateAndOpacity from './../motion/animations/translateAndOpacity';

class Toolbar extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <Card
          image={require('./../../assets/images/posts/3.jpg')}>
          <FormInput placeholder='Enter name your new post' />
          <FormInput placeholder='Enter address' />

          <Button
            icon={{
              name: 'link',
              size: 15,
              color: 'white'
            }}
            backgroundColor='#576574'
            buttonStyle={{ borderRadius: 5, marginTop: 10 }}
            title='Choose Background' />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  toolbarContainer: {
    height: 56,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  statusBar: {
    height: 24,
    backgroundColor: 'transparent',
  }
});

export default translateAndOpacity(Toolbar);
