import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { getCategories, getItems } from './../../data/data';
import Item from './../../data/item.model';
import Category from './../../data/category.model';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(getCategories());
    console.log(getItems());
  }

  lastDelY = 0;
  headerCollapsed = false;
  selectedTab = 0;
  selectedTabview = 0;
  items: Array<Item>;
  categories: Array<Category>;

  showItem(itemId) {
    console.log(`Tapped on ${itemId}`);
    // this.routerExtensions.navigate(["detail/" + itemId, {
    //   animated: true,
    //   transition: {
    //     name: "slideTop",
    //     duration: 380,
    //     curve: "easeIn"
    //   }
    // }]);
  }

  toggleLike(item) {
    item.isLike = !item.isLike;
    if (item.isLike) {
      item.likes += 1;
    } else {
      item.likes -= 1;
    }
  }

  toggleHeart(item) {
    item.isFavorite = !item.isFavorite;
  }

  categoryIcon(itemCategory) {
    switch (itemCategory) {
      case "Burger":
        return String.fromCharCode(0xf0f5); //"fa-cutlery";
        break;
      case "Beer":
        return String.fromCharCode(0xf0fc); //"fa-beer";
        break;
      case "Pancake":
        return String.fromCharCode(0xf0f4); //"fa-coffee";
        break;
      case "Cake":
        return String.fromCharCode(0xf1fd); //"fa-birthday-cake";
        break;
      default:
        return String.fromCharCode(0xf06d); //"fa-fire";
        break;
    }
  }

  //Top nav bar tap methods
  onBellTap() {
    console.log('onBellTap');
  }

  onSearchTap() {
    console.log('onSearchTap');
  }

  onAvatarTap() {
    console.log('onAvatarTap');
  }

  onPopularTap() {
    this.selectedTabview = 0;
  }

  onCategoryTap() {
    this.selectedTabview = 1;
  }

  onPromosTap() {
    this.selectedTabview = 2;
  }

  //Bottom nav bar tap methods
  onHomeTap() {
    this.selectedTab = 0;
  }

  onCartTap() {
    this.selectedTab = 1;
  }

  onHistoryTap() {
    this.selectedTab = 2;
  }

  onAboutTap() {
    this.selectedTab = 3;
  }

  render() {
    return (
      <Grid>
        <Row style={styles.navStatusBar}>
          <Col size={5}>
            <Text style={styles.statusTitle}>Home</Text>
          </Col>
          <Col size={1}>
            <TouchableOpacity onPress={this.onSearchTap}>
              <Image
                style={styles.statusImage}
                source={require('./../../../src/assets/images/search.png')}
              />
            </TouchableOpacity>
          </Col>
          <Col size={1}>
            <TouchableOpacity onPress={this.onBellTap}>
              <Image
                style={styles.statusImage}
                source={require('./../../../src/assets/images/bell.png')}
              />
            </TouchableOpacity>
          </Col>
          <Col size={1}>
            <TouchableOpacity onPress={this.onAvatarTap}>
              <Image
                style={styles.statusAvatar}
                source={require('./../../../src/assets/images/me.jpg')}
              />
            </TouchableOpacity>
          </Col>
        </Row >

        <Row style={{  }}>
          <Col style={{ backgroundColor: '#ff7675' }}></Col>
          <Col style={{ backgroundColor: '#6c5ce7' }}></Col>
        </Row>

        <ScrollView>
          <Row>
            <Col style={{ backgroundColor: '#81ecec' }}></Col>
            <Col style={{ backgroundColor: '#6c5ce7' }}></Col>
            <Col style={{ backgroundColor: '#ff7675' }}></Col>
          </Row>
        </ScrollView>

        <Row>
          <Col style={{ backgroundColor: '#ff7675' }}></Col>
          <Col style={{ backgroundColor: '#6c5ce7' }}></Col>
        </Row>
      </Grid >
    );
  }
}

const dimensions = Dimensions.get('window');

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
  }
});
