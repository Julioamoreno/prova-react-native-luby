import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import GameAction from './GameAction';

import { State, gamePlayedAction } from '../store';

import ElipseNumber from './ElipseNumberSelected';

const ActionBetBar: React.FC = (props) => {
	const dispatch = useDispatch();

	const { numbersSelected, color } = useSelector(
		(state: State) => state.gamePlayed
	);

	const UnselectNumber = (number: string) => {
		dispatch(gamePlayedAction.unSelectNumber({ number }));
	};
	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				{numbersSelected.map((number, idx) => (
					<ElipseNumber
						removeNumber={UnselectNumber}
						color={color}
						number={number}
					/>
				))}
			</ScrollView>
			<GameAction />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flexDirection: 'row',
		justifyContent: 'space-between',
		height: 100,
	},
});

export default ActionBetBar;
