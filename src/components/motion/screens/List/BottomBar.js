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
import { withNavigation } from 'react-navigation';

class BottomBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      translateY: new Animated.Value(0),
      selectedTab: 0
    };
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

	//Bottom nav bar tap methods
	onHomeTap = () => {
    this.setState({ selectedTab: 0 });
    this.props.navigation.navigate('HomeScreen');
	}

	onWritePostTap = () => {
    this.setState({ selectedTab: 1 });
    this.props.navigation.navigate('NewPostScreen');
	}

	onProfileTap = () => {
    this.setState({ selectedTab: 2 });
    this.props.navigation.navigate('ProfileScreen');
  }
  
  render() {
    return (
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                translateY: this.state.translateY,
              },
            ],
          },
        ]}
      >
        <Row style={{ height: 50 }}>
          <Col onTouchStart={this.onHomeTap}>
            {this.state.selectedTab == 0 && (
              <Col>
                <Row>
                  <Image
                    style={styles.statusImage}
                    source={require('./../../../../assets/images/navhomem.png')}>
                  </Image>
                </Row>
                <Row>
                  <Text>Địa điểm</Text>
                </Row>
              </Col>
            )}
            {this.state.selectedTab != 0 && (
              <Row>
                <Image
                  style={styles.statusImage}
                  source={require('./../../../../assets/images/navhome.png')}>
                </Image>
              </Row>
            )}
          </Col>

          <Col onTouchStart={this.onWritePostTap}>
            {this.state.selectedTab == 1 && (
              <Col>
                <Row>
                  <Image
                    style={styles.statusImage}
                    source={require('./../../../../assets/images/navordersm.png')}>
                  </Image>
                </Row>
                <Row>
                  <Text>Viết bài</Text>
                </Row>
              </Col>
            )}
            {this.state.selectedTab != 1 && (
              <Row>
                <Image
                  style={styles.statusImage}
                  source={require('./../../../../assets/images/navorders.png')}>
                </Image>
              </Row>
            )}
          </Col>

          <Col onTouchStart={this.onProfileTap}>
            {this.state.selectedTab == 2 && (
              <Col>
                <Row>
                  <Image
                    style={styles.statusImage}
                    source={require('./../../../../assets/images/navusm.png')}>
                  </Image>
                </Row>
                <Row>
                  <Text>Trang cá nhân</Text>
                </Row>
              </Col>
            )}
            {this.state.selectedTab != 2 && (
              <Row>
                <Image
                  style={styles.statusImage}
                  source={require('./../../../../assets/images/navus.png')}>
                </Image>
              </Row>
            )}
          </Col>
        </Row>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  statusImage: {
		marginTop: 4,
		marginRight: 20,
		width: 30,
		height: 30,
	},
});

export default withNavigation(BottomBar);
