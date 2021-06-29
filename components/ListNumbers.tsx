import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { State } from '../store';
import { gamePlayedAction } from '../store/index';

import ElipseNumber from './ElipseNumber';

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
				contentContainerStyle={styles.listNumbers}
				snapToEnd
			>
				<View style={styles.containerScrollView}>
					{!loading &&
						range &&
						Array.apply(1, Array(range)).map((_x, idx) => (
							<ElipseNumber
								key={idx}
								number={(idx + 1).toLocaleString('pt-BR', {
									minimumIntegerDigits: 2,
								})}
								color={color}
								selectNumber={selectNumberHandle}
								active={numbers?.includes(
									(idx + 1).toLocaleString('pt-BR', {
										minimumIntegerDigits: 2,
									})
								)}
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
	listNumbers: {},
	containerScrollView: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingBottom: 400,
	},
});

export default ListNumbers;