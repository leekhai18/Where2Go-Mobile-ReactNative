import React, { PureComponent } from 'react';
import {
  Easing,
  InteractionManager,
  Animated,
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import { SharedElement, TranslateYAndOpacity } from 'react-native-motion';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import data from './../../../../assets/data/data';
import { ListItem, Row, Col } from '../../components';
import Toolbar from './Toolbar';
import BottomBar from './BottomBar';
import ImagesView from '../../../ImagesView';
import Avatar from '../../components/ListItem/Avatar';
import requireAssets from './../../../../assets/data/require';

class Detail extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opacityOfDestinationItem: 0,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.phase === 'phase-2' && nextProps.phase === 'phase-3') {
      this.sharedElementRef.moveToSource();
    }
  }
  onMoveToDestinationDidFinish = () => {
    this.setState({ opacityOfDestinationItem: 1 });
    this.props.onSharedElementMovedToDestination();
  };
  onMoveToSourceWillStart = () => {
    this.setState({ opacityOfDestinationItem: 0 });
  };
  renderItem = ({ item, index }) => {
    const { phase, selectedItem } = this.props;

    let delay = index;
    // we need it to go from the end
    if (phase === 'phase-3') {
      delay = selectedItem.items.length - index;
    }

    return (
      <View>
        <TranslateYAndOpacity isHidden={phase !== 'phase-2'} delay={56 * delay}>
          <ImagesView></ImagesView>
        </TranslateYAndOpacity>

        <TranslateYAndOpacity isHidden={phase !== 'phase-2'} delay={56 * delay}>
          <View style={styles.itemContainer}>
            <Row>
              <FontAwesome name="tags" size={14} color="#00d2d3"></FontAwesome>
              <Text style={{ fontWeight: '700' }}> Description</Text>
            </Row>
            <View style={styles.description}>
              <Text>{item.describe}</Text>
            </View>

            <Row style={styles.commentContainer}>
              <Avatar src={requireAssets[item.comments[0].avatar]}></Avatar>
              <Col>
                <Text style={styles.commentContentText}>{item.comments[0].content}</Text>
                <Row>
                  <Text style={styles.commentSecondaryText}>{item.comments[0].time}</Text>
                  <Text style={styles.commentSecondaryText}>Like</Text>
                  <Text style={styles.commentSecondaryText}>Reply</Text>
                </Row>
              </Col>
            </Row>

            <Row style={styles.commentContainer}>
              <Avatar src={requireAssets[item.comments[1].avatar]}></Avatar>
              <Col>
                <Text style={styles.commentContentText}>{item.comments[1].content}</Text>
                <Row>
                  <Text style={styles.commentSecondaryText}>{item.comments[1].time}</Text>
                  <Text style={styles.commentSecondaryText}>Like</Text>
                  <Text style={styles.commentSecondaryText}>Reply</Text>
                </Row>
              </Col>
            </Row>

            <Row style={styles.commentContainer}>
              <Avatar src={requireAssets[item.comments[2].avatar]}></Avatar>
              <Col>
                <Text style={styles.commentContentText}>{item.comments[2].content}</Text>
                <Row>
                  <Text style={styles.commentSecondaryText}>{item.comments[2].time}</Text>
                  <Text style={styles.commentSecondaryText}>Like</Text>
                  <Text style={styles.commentSecondaryText}>Reply</Text>
                </Row>
              </Col>
            </Row>

            <Row style={styles.commentContainer}>
              <Avatar src={requireAssets[item.comments[3].avatar]}></Avatar>
              <Col>
                <Text style={styles.commentContentText}>{item.comments[3].content}</Text>
                <Row>
                  <Text style={styles.commentSecondaryText}>{item.comments[3].time}</Text>
                  <Text style={styles.commentSecondaryText}>Like</Text>
                  <Text style={styles.commentSecondaryText}>Reply</Text>
                </Row>
              </Col>
            </Row>
          </View>
        </TranslateYAndOpacity>
      </View>
    );
  };
  render() {
    const {
      selectedItem,
      startPosition,
      phase,
      onBackPress,
      onSharedElementMovedToSource,
    } = this.props;
    const { opacityOfDestinationItem } = this.state;

    const { items = [] } = selectedItem || {};

    if (!selectedItem) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Toolbar isHidden={phase === 'phase-3'} onBackPress={onBackPress} />
        <SharedElement
          ref={node => (this.sharedElementRef = node)}
          sourceId={selectedItem.name}
          easing={Easing.in(Easing.back())}
          onMoveToDestinationDidFinish={this.onMoveToDestinationDidFinish}
          onMoveToSourceWillStart={this.onMoveToSourceWillStart}
          onMoveToSourceDidFinish={onSharedElementMovedToSource}
        >
          <View
            style={{
              opacity: opacityOfDestinationItem,
              backgroundColor: 'transparent',
              zIndex: 1
            }}
          >
            <ListItem
              item={selectedItem}
              onPress={() => { }}
              animateOnDidMount={false}
              isHidden={false}
            />
          </View>
        </SharedElement>

        <FlatList style={{ marginTop: -120, zIndex: 0, marginBottom: 40 }}
          data={items}
          dataExtra={phase}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
        />

        <BottomBar isHidden={phase === 'phase-3'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  itemContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  description: { 
    borderBottomWidth: 0.5, 
    borderBottomColor: '#b2bec3', 
    paddingBottom: 10,
    marginBottom: 10,
  },
  commentSecondaryText: {
    color: '#636e72',
    marginRight: 10,
    fontSize: 12
  },
  commentContentText: {
    marginBottom: 4,
    paddingTop: 5,
  },
  commentContainer: {
    marginBottom: 5,
  }
});

export default Detail;
