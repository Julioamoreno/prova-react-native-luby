import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';

import GamePlayed from '../GamePlayed';
import { State, loadingAction, recentsAction } from '../../store';
import API from '../../API';

import GamePlayedModel from '../../models/gamePlayed';

import FormatMoney from '../../shared/format/Money';

import { Container, Text, ScrollGames, GameList } from './styles';
import Loader from '../Loaders/RecentsGamesLoader';

const RecentGamesList: React.FC<{
	loadingError: boolean;
	setLoadingError: (value: boolean) => void;
}> = (props) => {
	const dispatch = useDispatch();
	const [allGamesPlayed, setAllGamesPlayed] = useState<GamePlayedModel>([]);
	const [url] = useState('/bets');
	const gameType = useSelector((state: State) => state.recents.id);
	const loading = useSelector((state: State) => state.loading);
	const loadData = useSelector((state: State) => state.loadDataApi);
	const { user } = useSelector((state: State) => state.authentication);
	const [gamePlayedFiltered, setGamePlayedFiltered] = useState<GamePlayedModel>(
		[]
	);
	useFocusEffect(
		useCallback(() => {
			dispatch(loadingAction.waitLoading());
			(async () => {
				try {
					const response = await API.get(url, {
						headers: { Authorization: `Bearer ${user.token}` },
					});
					if (response.status === 200) {
						props.setLoadingError(false);
						dispatch(loadingAction.stopLoading());
						setAllGamesPlayed(response.data);
					}
				} catch (err) {
					props.setLoadingError(true);
					if (err.response === undefined) {
						return;
					}
					if (err.response.status === 401) {
						return Toast.show('Não Autorizado', Toast.SHORT);
					}
					Toast.show(err.message, Toast.SHORT);
				}
			})();
		}, [loadData])
	);

	useEffect(() => {
		if (
			gameType.length === 0 ||
			gameType.every((value) => value === undefined)
		) {
			setGamePlayedFiltered(allGamesPlayed);
			return;
		}
		const array = allGamesPlayed.filter((gamePlayed) => {
			return gameType?.includes(gamePlayed.game.id);
		});
		setGamePlayedFiltered(array);
	}, [gameType, allGamesPlayed]);

	return (
		<Container>
			{loading && !props.loadingError && <Loader />}
			{!loading && !props.loadingError && gamePlayedFiltered.length === 0 && (
				<Text>Não existem registros para esse jogo</Text>
			)}
			{props.loadingError && (
				<Text>Não foi possível carregar as informações do servidor</Text>
			)}
			<ScrollGames>
				<GameList>
					{!loading &&
						!props.loadingError &&
						gamePlayedFiltered.map((gamePlayed, idx) => (
							<GamePlayed
								key={idx}
								color={gamePlayed.game.color}
								type={gamePlayed.game.type}
								numbers={gamePlayed.numbers}
								dateAndPrice={`${moment(gamePlayed.created_at).format(
									'DD/MM/YYYY'
								)} - (${FormatMoney(gamePlayed.price)})`}
							/>
						))}
				</GameList>
			</ScrollGames>
		</Container>
	);
};

export default RecentGamesList;
