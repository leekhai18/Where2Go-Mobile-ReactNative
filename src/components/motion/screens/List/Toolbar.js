import React, { PureComponent } from 'react';
import translateAndOpacity from '../../animations/translateAndOpacity';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { getCategories, getItems } from './../../../../data/data';
import Item from './../../../../data/item.model';
import Category from './../../../../data/category.model';
import { Col, Row, Grid } from "react-native-easy-grid";

class Toolbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabview: 0,
      selectedTab: 0
    }
  }

  componentDidMount() {
    console.log(getCategories());
    console.log(getItems());
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


  render() {
    return (
      <View>
        <Row style={styles.navStatusBar}>
          <Col size={5}>
            <Text style={styles.statusTitle}>Home</Text>
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
              <Image
                style={styles.statusImage}
                source={require('./../../../../assets/images/bell.png')}
              />
            </TouchableOpacity>
          </Col>
          <Col size={1}>
            <TouchableOpacity onPress={this.onAvatarTap}>
              <Image
                style={styles.statusAvatar}
                source={require('./../../../../assets/images/me.jpg')}
              />
            </TouchableOpacity>
          </Col>
        </Row >

        <Row style={{ backgroundColor: '#bd2122', height: 50 }}>
          <Col style={{ borderBottomColor: '#ffffff', borderBottomWidth: 3, margin: 0 }}
            onTouchStart={this.onPopularTap}>
            {this.state.selectedTabview == 0 && (
              <Col>
                <Row>
                  <Image
                    style={styles.statusImage}
                    source={require('./../../../../assets/images/popular.png')}>
                  </Image>
                </Row>
                <Row>
                  <Text>POPULAR</Text>
                </Row>
              </Col>
            )}
            {this.state.selectedTabview != 0 && (
              <Row>
                <Text>POPULAR</Text>
              </Row>
            )}
          </Col>

          <Col style={{ borderBottomColor: '#ffffff', borderBottomWidth: 3, margin: 0 }}
            onTouchStart={this.onCategoryTap}>
            {this.state.selectedTabview == 1 && (
              <Col>
                <Row>
                  <Image
                    style={styles.statusImage}
                    source={require('./../../../../assets/images/popular.png')}>
                  </Image>
                </Row>
                <Row>
                  <Text>POPULAR</Text>
                </Row>
              </Col>
            )}
            {this.state.selectedTabview != 1 && (
              <Row>
                <Text>POPULAR</Text>
              </Row>
            )}
          </Col>

          <Col style={{ borderBottomColor: '#ffffff', borderBottomWidth: 3, margin: 0 }}
            onTouchStart={this.onPromosTap}>
            {this.state.selectedTabview == 2 && (
              <Col>
                <Row>
                  <Image
                    style={styles.statusImage}
                    source={require('./../../../../assets/images/popular.png')}>
                  </Image>
                </Row>
                <Row>
                  <Text>POPULAR</Text>
                </Row>
              </Col>
            )}
            {this.state.selectedTabview != 2 && (
              <Row>
                <Text>POPULAR</Text>
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
    backgroundColor: '#bd2122',
    height: 55,
    paddingTop: 15
  },
  statusTitle: {
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
});

export default translateAndOpacity(Toolbar);
