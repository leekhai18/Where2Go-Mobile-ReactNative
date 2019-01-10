import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Avatar extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.container} source={this.props.src} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginLeft: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Avatar;
