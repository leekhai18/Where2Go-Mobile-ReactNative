import React, { PureComponent } from 'react';
import { Text, View, FlatList, StyleSheet, Easing, Animated } from 'react-native';

import { SharedElement } from 'react-native-motion';

import Toolbar from './Toolbar';
import BottomBar from './BottomBar';
import { ListItem } from '../../components';
import data from './../../../../assets/data/data';

class List extends PureComponent {
	constructor(props) {
		super(props);

		this.state = { opacityOfSelectedItem: 1, selectedItem: null };
		this.sharedElementRefs = {};
	}
	onListItemPressed = item => {
		const { onItemPress } = this.props;
		this.setState({ selectedItem: item });

		onItemPress(item);

		this.sharedElementRefs[item.name].moveToDestination();
	};
	onMoveToDestinationWillStart = () => {
		this.setState({ opacityOfSelectedItem: 0 });
	};
	onMoveToSourceDidFinish = () => {
		this.setState({ opacityOfSelectedItem: 1 });
	};
	getSharedNode = props => {
		const { item } = props;

		return (
			<View style={{ backgroundColor: 'transparent' }}>
				<ListItem item={item} animateOnDidMount={false} isHidden={false} />
			</View>
		);
	};
	renderItem = ({ item }) => {
		const { opacityOfSelectedItem } = this.state;
		const { selectedItem } = this.props;

		const isHidden = selectedItem && selectedItem.name !== item.name;
		const isSelected = selectedItem && selectedItem.name === item.name;
		const id = item.name;

		return (
			<SharedElement
				easing={Easing.in(Easing.back())}
				ref={node => (this.sharedElementRefs[id] = node)}
				id={id}
				onMoveToDestinationWillStart={this.onMoveToDestinationWillStart}
				onMoveToSourceDidFinish={this.onMoveToSourceDidFinish}
				getNode={this.getSharedNode}
				item={item}
			>
				<View
					style={{
						opacity: opacityOfSelectedItem,
						backgroundColor: 'transparent',
					}}
				>
					<ListItem
						item={item}
						onPress={this.onListItemPressed}
						isHidden={isHidden}
					/>
				</View>
			</SharedElement>
		);
	};

	onTouchToolbar = () => {
		console.log('onTouchToolbar');
		let count = 1;
		this.interval = setInterval(() => {
			this.setState({ opacityOfSelectedItem: count });
			count = count - 0.1;
		}, 30);

		setTimeout(() => {
			count = 0;
			clearInterval(this.interval);
			this.interval = setInterval(() => {
				this.setState({ opacityOfSelectedItem: count });
				count = count + 0.2;
			}, 20);

			setTimeout(() => {
				clearInterval(this.interval);
			}, 200);
		}, 300);
	}

	render() {
		const { opacityOfSelectedItem } = this.state;
		const { selectedItem, phase } = this.props;

		return (
			<View style={styles.container}>
				<Toolbar
					isHidden={phase !== 'phase-0'}
					onBackPress={this.onBackPressed}
					onTouchStart={this.onTouchToolbar}
				/>
				<FlatList
					style={{ height: 200 }}
					data={data}
					dataExtra={{ phase, opacityOfSelectedItem }}
					keyExtractor={item => item.name}
					renderItem={this.renderItem}
				/>
				<BottomBar isHidden={phase !== 'phase-0'} tabIndex={0} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
	},
});

export default List;
