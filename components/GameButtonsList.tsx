import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GameType from './GameType';

import API from '../API';

import { State, loadingAction } from '../store';
import AvailableGamesModel from '../models/games';
import GameModel from '../models/game';

const GameButtonsList: React.FC<{
	selectedButton: number[];
	selectGameHandle: (game: GameModel) => void;
	allGames: AvailableGamesModel;
	setAllGames: (allGames: []) => void;
}> = (props) => {
	const dispatch = useDispatch();
	// const [allGames, setAllGames] = useState<AvailableGamesModel>([]);

	useEffect(() => {
		dispatch(loadingAction.waitLoading());
		(async () => {
			try {
				const response = await API.get('/games');

				if (response.status === 200) {
					dispatch(loadingAction.stopLoading);
					// props.selectGameHandle(response.data[0]);
					return props.setAllGames(response.data);
				}
			} catch (err) {
				return alert(err.message);
			}
		})();
	}, [dispatch]);

	return (
		<View style={styles.gameList}>
			{!!props.allGames &&
				props.allGames.map((game) => (
					<GameType
						key={game.id}
						color={game.color}
						gameType={game.type}
						checked={props.selectedButton?.includes(game.id)}
						onPress={() => props.selectGameHandle(game)}
					/>
				))}
		</View>
	);
};

const styles = StyleSheet.create({
	gameList: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'stretch',
		alignContent: 'stretch',
	},
});

export default GameButtonsList;
