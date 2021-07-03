import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import GameType from '../GameType';

import Toast from 'react-native-simple-toast';

import API from '../../API';

import { loadingAction } from '../../store';
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
				return Toast.show(err.message);
			}
		})();
	}, [dispatch]);

	return (
		<GameList>
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
		</GameList>
	);
};

export default GameButtonsList;
