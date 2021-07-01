import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { State, recentsAction } from '../store';
import GameButtonsList from './GameButtonsList';

import AvailableGamesModel from '../models/games';
import GameModel from '../models/game';

const RecentGamesBar: React.FC = () => {
	const [allGames, setAllGames] = useState<AvailableGamesModel>([]);
	const dispatch = useDispatch();
	const gameType = useSelector((state: State) => state.recents.id);
	const selectGameHandle = (game: GameModel) => {
		dispatch(recentsAction.setGame({ id: game.id }));
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Recent Games</Text>
			<View>
				<Text style={styles.subTitle}>Filters</Text>
				<GameButtonsList
					selectedButton={gameType}
					selectGameHandle={selectGameHandle}
					allGames={allGames}
					setAllGames={(games) => setAllGames(games)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 15,
	},
	title: {
		fontSize: 25,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#707070',
		textTransform: 'uppercase',
	},
	subTitle: {
		fontSize: 18,
		fontStyle: 'italic',
		color: '#707070',
		marginVertical: 12,
	},
});

export default RecentGamesBar;
