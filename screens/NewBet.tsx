import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GameButtonsList from '../components/GameButtonsList';
import GameDescription from '../components/GameDescription';
import ActionBetBar from '../components/ActionBetBar';
import DrawerScreenNavigationProp from '../models/HomeScreenNavigationProp';

import { State, gameSelectedAction, gamePlayedAction } from '../store';

import GameModel from '../models/game';
import ListNumbers from '../components/ListNumbers';

const NewBet: React.FC<{ navigation: DrawerScreenNavigationProp }> = ({
	navigation,
}) => {
	const dispatch = useDispatch();
	const gameType = useSelector((state: State) => state.selectedGame.gameType);
	const { type, numbersSelected } = useSelector(
		(state: State) => state.gamePlayed
	);
	const selectGameHandle = (game: GameModel) => {
		dispatch(gameSelectedAction.setGameSelectedNewBet({ id: game.id }));
		dispatch(gamePlayedAction.setGamePlayed({ game }));
	};

	return (
		<View style={styles.container}>
			<View style={styles.bar}>
				<Text style={styles.title}>New Bet For {type}</Text>
				<View style={styles.containerGameBar}>
					<Text style={styles.subtitle}>Choose a game</Text>
					<GameButtonsList
						selectedButton={gameType}
						selectGameHandle={selectGameHandle}
					/>
				</View>
				{numbersSelected.length === 0 && <GameDescription />}
				{numbersSelected.length > 0 && <ActionBetBar navigation={navigation} />}
			</View>
			<ListNumbers />
		</View>
	);
};

export default NewBet;

const styles = StyleSheet.create({
	container: {
		opacity: 60,
		// backgroundColor: 'rgba(255, 255, 255, 0.5)',
		margin: 15,
	},
	bar: {
		opacity: 60,
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		zIndex: 2,
	},
	title: {
		fontSize: 22,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#707070',
		textTransform: 'uppercase',
	},

	containerGameBar: {
		marginVertical: 10,
	},
	subtitle: {
		marginVertical: 10,
		fontSize: 17,
		fontStyle: 'italic',
		color: '#868686',
	},

	containerDescription: {
		marginTop: 40,
	},
	descriptionTitle: {
		fontSize: 17,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#868686',
	},
});
