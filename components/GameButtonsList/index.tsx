import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GameType from '../GameType';
import Loader from '../Loaders/GameButtonLoader';
import Toast from 'react-native-simple-toast';

import API from '../../API';

import { State, loadingAction } from '../../store';
import AvailableGamesModel from '../../models/games';
import GameModel from '../../models/game';

import { GameList } from './styles';

const GameButtonsList: React.FC<{
	selectedButton: number[];
	selectGameHandle: (game: GameModel) => void;
	allGames: AvailableGamesModel;
	setAllGames: (allGames: []) => void;
	screenName: string;
}> = (props) => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state: State) => state.loading);
	useEffect(() => {
		(async () => {
			try {
				const response = await API.get('/games');

				dispatch(loadingAction.stopLoading);
				if (response.status === 200) {
					return props.setAllGames(response.data);
				}
			} catch (err) {
				dispatch(loadingAction.stopLoading);
				return Toast.show(err.message, Toast.SHORT);
			}
		})();
		dispatch(loadingAction.stopLoading);
	}, []);

	return (
		<GameList>
			{isLoading && <Loader />}
			{isLoading && <Loader />}
			{!isLoading && (
				<ScrollView horizontal>
					{!!props.allGames &&
						props.allGames.map((game) => (
							<GameType
								key={game.id}
								color={game.color}
								gameType={game.type}
								thisRecentGamesScreen={props.screenName === 'RecentGames'}
								checked={props.selectedButton?.includes(game.id)}
								onPress={() => props.selectGameHandle(game)}
							/>
						))}
				</ScrollView>
			)}
		</GameList>
	);
};

export default GameButtonsList;
