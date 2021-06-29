import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import GameAction from './GameAction';

import { State, gamePlayedAction } from '../store';

import ElipseNumber from './ElipseNumberSelected';

import DrawerScreenNavigationProp from '../models/HomeScreenNavigationProp';

const ActionBetBar: React.FC<{ navigation: DrawerScreenNavigationProp }> = ({
	navigation,
}) => {
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
						key={idx}
						removeNumber={UnselectNumber}
						color={color}
						number={number}
					/>
				))}
			</ScrollView>
			<GameAction navigation={navigation} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flexDirection: 'row',
		justifyContent: 'space-between',
		height: 100,
		marginBottom: 20,
	},
});

export default ActionBetBar;
