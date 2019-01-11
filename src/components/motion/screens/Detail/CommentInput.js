import React from 'react';
import {
  Animated,
  Easing,
  View,
  StyleSheet,
  InteractionManager,
  Image,
  Dimensions
} from 'react-native';

let window = Dimensions.get('window');

class CommentInput extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      translateY: new Animated.Value(45),
    };
  }
  componentDidMount() {
    InteractionManager.runAfterInteractions().then(() => {
      this.showAnimation(this.props);
    });
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.isHidden && nextProps.isHidden) {
      this.hideAnimation(nextProps);
    }
  }
  showAnimation(props) {
    Animated.timing(this.state.translateY, {
      easing: Easing.out(Easing.back()),
      toValue: 0,
      delay: props.delay,
    }).start();
  }
  hideAnimation(props) {
    Animated.timing(this.state.translateY, {
      easing: Easing.in(Easing.back()),
      toValue: 45,
      delay: props.delay,
    }).start();
  }
  render() {
    const { translateY } = this.state;

    const animationStyle = {
      transform: [{ translateY }],
    };

    return (
      <Animated.View
        style={[styles.container, animationStyle]}
      >
        <Image style={{ width: window.width, height: 45 }}
          source={require('./../../../../assets/images/comment.jpg')}></Image>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.5, 
    borderTopColor: '#b2bec3', 
  },
});

export default CommentInput;
