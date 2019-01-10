import React, { PureComponent } from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { getPlatformElevation } from '../../utils';
import { withNavigation, StackActions, NavigationActions } from 'react-navigation';

class BottomBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      translateY: new Animated.Value(56),
      selectedTab: 0
    };
  }

  componentDidMount() {
    this.setState({ selectedTab: this.props.tabIndex })
    setTimeout(() => {
      this.showAnimation();
    }, 300);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isHidden && nextProps.isHidden) {
      this.hideAnimation();
    }
    if (this.props.isHidden && !nextProps.isHidden) {
      this.showAnimation();
    }
  }

  hideAnimation() {
    Animated.timing(this.state.translateY, {
      toValue: 56,
      useNativeDriver: true,
    }).start();
  }
  showAnimation() {
    Animated.timing(this.state.translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }

  navigateWithResetAction = (router) => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: router })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  //Bottom nav bar tap methods
  onHomeTap = () => {
    this.setState({ selectedTab: 0 });
    this.hideAnimation();
    setTimeout(() => {
      this.navigateWithResetAction('HomeScreen');
    }, 300);

  }

  onWritePostTap = () => {
    this.setState({ selectedTab: 1 });
    this.hideAnimation();
    setTimeout(() => {
      this.navigateWithResetAction('NewPostScreen');
    }, 300);
  }

  onProfileTap = () => {
    this.setState({ selectedTab: 2 });
    this.hideAnimation();
    setTimeout(() => {
      this.navigateWithResetAction('ProfileScreen');
    }, 300);
  }

  render() {
    return (
      <Animated.View
        style={[
          {
            transform: [
              {
                translateY: this.state.translateY,
              },
            ],
          },
        ]}
      >
        <Row style={{ height: 40 }} onTouchStart={this.props.onTouchStart}>
          <Col onTouchStart={this.onHomeTap}>
            {this.state.selectedTab == 0 && (
              <Image
                style={styles.statusImage}
                source={require('./../../../../assets/images/navhomem.png')}>
              </Image>
            )}
            {this.state.selectedTab != 0 && (
              <Image
                style={styles.statusImage}
                source={require('./../../../../assets/images/navhome.png')}>
              </Image>
            )}
          </Col>

          <Col onTouchStart={this.onWritePostTap}>
            {this.state.selectedTab == 1 && (
              <Image
                style={styles.statusImage}
                source={require('./../../../../assets/images/navordersm.png')}>
              </Image>
            )}
            {this.state.selectedTab != 1 && (
              <Image
                style={styles.statusImage}
                source={require('./../../../../assets/images/navorders.png')}>
              </Image>
            )}
          </Col>

          <Col onTouchStart={this.onProfileTap}>
            {this.state.selectedTab == 2 && (
              <Image
                style={styles.statusImage}
                source={require('./../../../../assets/images/navusm.png')}>
              </Image>
            )}
            {this.state.selectedTab != 2 && (
              <Image
                style={styles.statusImage}
                source={require('./../../../../assets/images/navus.png')}>
              </Image>
            )}
          </Col>
        </Row>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  statusImage: {
    marginVertical: 5,
    marginRight: 20,
    width: 30,
    height: 30,
  },
});

export default withNavigation(BottomBar);
