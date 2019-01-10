import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import CommentInput from './CommentInput';
import { Row } from '../../components';
import { getPlatformElevation } from '../../utils';

class BottomBar extends PureComponent {
  render() {
    const { isHidden } = this.props;

    return (
      <Row style={styles.container}>
        <View style={styles.flexContainer}>
          <CommentInput isHidden={isHidden} />
        </View>
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 40,
    marginHorizontal: 16,
  },
  flexContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomBar;
