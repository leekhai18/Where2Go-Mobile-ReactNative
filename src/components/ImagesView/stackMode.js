import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import styles, { colors } from './styles/index.style';
import { ENTRIES1 } from './static/entries';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

export default class StackMode extends Component {

	constructor(props) {
		super(props);
		this.state = {
			slider1ActiveSlide: SLIDER_1_FIRST_ITEM
		};
	}

	_renderItem({ item, index }) {
		return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
	}

	layoutStack(type) {
		const isTinder = type === 'tinder';
		return (
			<View style={[{ marginTop: -15 }, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
				<Carousel
					data={isTinder ? ENTRIES2 : ENTRIES1}
					renderItem={isTinder ? this._renderLightItem : this._renderItem}
					sliderWidth={sliderWidth}
					itemWidth={itemWidth}
					containerCustomStyle={styles.slider}
					contentContainerCustomStyle={styles.sliderContentContainer}
					layout={type}
					loop={true}
				/>
			</View>
		);
	}

	get gradient() {
		return (
			<LinearGradient
				colors={[colors.background1, colors.background2]}
				startPoint={{ x: 1, y: 0 }}
				endPoint={{ x: 0, y: 1 }}
				style={styles.gradient}
			/>
		);
	}

	render() {
		const stackmode = this.layoutStack('stack');

		return (
			<SafeAreaView style={styles.safeArea}>
				<View style={styles.container}>
					<StatusBar
						translucent={true}
						backgroundColor={'rgba(0, 0, 0, 0.3)'}
						barStyle={'light-content'}
					/>
					{this.gradient}
					<ScrollView
						style={styles.scrollview}
						scrollEventThrottle={200}
						directionalLockEnabled={true}
					>
						{stackmode}
					</ScrollView>
				</View>
			</SafeAreaView>
		);
	}
}
