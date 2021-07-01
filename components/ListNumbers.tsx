import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { State } from '../store';
import { gamePlayedAction } from '../store/index';

import ElipseNumber from './ElipseNumber';
import FormatString from '../shared/format/Number';

const ListNumbers: React.FC = () => {
	const { range, max_number, numbersSelected, color } = useSelector(
		(state: State) => state.gamePlayed
	);
	const loading = useSelector((state: State) => state.loading);
	const numbers = useSelector(
		(state: State) => state.gamePlayed.numbersSelected
	);
	const dispatch = useDispatch();
	const tabBarHeight = useBottomTabBarHeight();

	const selectNumberHandle = (number: string) => {
		dispatch(gamePlayedAction.setNumberSelected({ numbersSelected: number }));
		const gameIsComplete = max_number === numbersSelected.length;
		if (gameIsComplete && !numbersSelected.includes(number)) {
			alert('O jogo já está completo.');
		}
	};

	return (
		<View style={{ ...styles.container, paddingBottom: tabBarHeight }}>
			<ScrollView
				showsHorizontalScrollIndicator
				contentContainerStyle={{ paddingBottom: numbers.length > 0 ? 60 : 0 }}
				snapToEnd
			>
				<View style={styles.containerScrollView}>
					{range &&
						Array.apply(1, Array(range)).map((_x, idx) => (
							<ElipseNumber
								key={idx}
								number={FormatString((idx + 1).toString())}
								color={color}
								selectNumber={selectNumberHandle}
								active={numbers?.includes(FormatString((idx + 1).toString()))}
							/>
						))}
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'baseline',
		fontSize: 17,
		fontWeight: 'bold',
		fontStyle: 'italic',
		marginBottom: 20,
		zIndex: -1,
	},
	containerScrollView: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingBottom: 380,
	},
});

export default ListNumbers;
