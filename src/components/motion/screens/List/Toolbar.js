import React, { PureComponent } from 'react';
import translateAndOpacity from '../../animations/translateAndOpacity';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Auth0Component from '../../../../auth0';

class Toolbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabview: 0,
      selectedTab: 0
    }
  }

  //Top nav bar tap methods
  onBellTap = () => {
    console.log('onBellTap');
  }

  onSearchTap = () => {
    console.log('onSearchTap');
  }

  onAvatarTap = () => {
    console.log('onAvatarTap');
  }

  onPopularTap = () => {
    this.setState({ selectedTabview: 0 });
  }

  onCategoryTap = () => {
    this.setState({ selectedTabview: 1 });
  }

  onPromosTap = () => {
    this.setState({ selectedTabview: 2 });
  }

  get gradient() {
    return (
      <LinearGradient
        colors={['#00b894', '#00d2d3']}
        startPoint={{ x: 1, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    );
  }


  render() {
    return (
      <View onTouchStart={this.props.onTouchStart}>
        {this.gradient}
        <Row style={styles.navStatusBar}>
          <Col size={5}>
            <Text style={[styles.title, { fontFamily: 'Optima-Bold' }]}>Where2Go</Text>
          </Col>
          <Col size={1}>
            <TouchableOpacity onPress={this.onSearchTap}>
              <Image
                style={styles.statusImage}
                source={require('./../../../../assets/images/search.png')}
              />
            </TouchableOpacity>
          </Col>
          <Col size={1}>
            <TouchableOpacity onPress={this.onBellTap}>
              <AntDesign style={{ marginTop: 7 }} name='filter' size={24} color='#ecf0f1'></AntDesign>
            </TouchableOpacity>
          </Col>
          <Col size={1}>
            <Auth0Component></Auth0Component>
          </Col>
        </Row >

        <Row style={{ height: 50 }}>
          <Col style={styles.filterContainer}
            onTouchStart={this.onPopularTap}>
            {this.state.selectedTabview == 0 && (
              <Col>
                <Row>
                  <FontAwesome style={styles.iconFilter} name="users" size={24} color="white"></FontAwesome>
                </Row>
                <Row>
                  <Text style={styles.filterTextAction}>sparse</Text>
                </Row>
              </Col>
            )}
            {this.state.selectedTabview != 0 && (
              <Row>
                <Text style={styles.filterText}>SPARSE</Text>
              </Row>
            )}
          </Col>

          <Col style={styles.filterContainer}
            onTouchStart={this.onCategoryTap}>
            {this.state.selectedTabview == 1 && (
              <Col>
                <Row>
                  <FontAwesome style={styles.iconFilter} name="users" size={24} color="rgb(255, 193, 7)"></FontAwesome>
                </Row>
                <Row>
                  <Text style={styles.filterTextAction}>medium</Text>
                </Row>
              </Col>
            )}
            {this.state.selectedTabview != 1 && (
              <Row>
                <Text style={styles.filterText}>MEDIUM</Text>
              </Row>
            )}
          </Col>

          <Col style={styles.filterContainer}
            onTouchStart={this.onPromosTap}>
            {this.state.selectedTabview == 2 && (
              <Col>
                <Row>
                  <FontAwesome style={styles.iconFilter} name="users" size={24} color="rgb(220, 53, 69)"></FontAwesome>
                </Row>
                <Row>
                  <Text style={styles.filterTextAction}>crowded</Text>
                </Row>
              </Col>
            )}
            {this.state.selectedTabview != 2 && (
              <Row>
                <Text style={styles.filterText}>CROWDED</Text>
              </Row>
            )}
          </Col>
        </Row>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navStatusBar: {
    height: 55,
    paddingTop: 15
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 8,
  },
  statusImage: {
    marginTop: 4,
    marginRight: 20,
    width: 30,
    height: 30,
  },
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
  gradient: {
    ...StyleSheet.absoluteFillObject
  },
  filterText: {
    color: '#ffffff',
    fontSize: 15,
    marginTop: 10
  },
  filterTextAction: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 13
  },
  filterContainer: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 3,
    margin: 0,
    alignItems: 'center'
  },
  iconFilter: {
    marginLeft: 10,
  }
});

export default translateAndOpacity(Toolbar);
