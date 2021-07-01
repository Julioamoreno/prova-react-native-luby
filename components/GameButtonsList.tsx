import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GameType from './GameType';

import API from '../API';

import { loadingAction } from '../store';
import AvailableGamesModel from '../models/games';
import GameModel from '../models/game';

const GameButtonsList: React.FC<{
	selectedButton: number[];
	selectGameHandle: (game: GameModel) => void;
	allGames: AvailableGamesModel;
	setAllGames: (allGames: []) => void;
}> = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadingAction.waitLoading());
		(async () => {
			try {
				const response = await API.get('/games');

				if (response.status === 200) {
					dispatch(loadingAction.stopLoading);
					return props.setAllGames(response.data);
				}
			} catch (err) {
				dispatch(loadingAction.stopLoading);
				return alert(err.message);
			}
		})();
	}, []);

	return (
		<View style={styles.gameList}>
			<ScrollView horizontal>
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
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	gameList: {
		flexDirection: 'row',
		alignItems: 'stretch',
		alignContent: 'stretch',
	},
});

export default GameButtonsList;
