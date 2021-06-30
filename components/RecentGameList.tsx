import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import moment from 'moment';

import GamePlayed from './GamePlayed';
import { State, loadingAction } from '../store';

import GamePlayedModel from '../models/gamePlayed';

import FormatMoney from '../shared/format/Money';

const RecentGamesList: React.FC<{
	loadingError: boolean;
	setLoadingError: (value: boolean) => void;
}> = (props) => {
	const dispatch = useDispatch();
	const [allGamesPlayed, setAllGamesPlayed] = useState<GamePlayedModel>([
		{
			numbers: '01,04',
			created_at: '',
			id: 1,
			price: 2.5,
			game: {
				id: 1,
				type: 'Lotofácil',
				color: '#7F3992',
			},
		},
		{
			numbers: '01,04',
			created_at: '',
			id: 2,
			price: 4.5,
			game: {
				type: 'Mega-Sena',
				color: '#01AC66',
				id: 2,
			},
		},
		{
			numbers: '01,04',
			created_at: '',
			id: 3,
			price: 2,
			game: {
				type: 'Lotomania',
				color: '#F79C31',
				id: 3,
			},
		},
	]);
	const gameType = useSelector((state: State) => state.recents.id);
	const loading = useSelector((state: State) => state.loading);

	const [gamePlayedFiltered, setGamePlayedFiltered] = useState<GamePlayedModel>(
		[]
	);

	useEffect(() => {
		dispatch(loadingAction.stopLoading());
	}, []);

	useEffect(() => {
		if (gameType.length === 0) {
			setGamePlayedFiltered(allGamesPlayed);
			return;
		}
		const array = allGamesPlayed.filter((gamePlayed) => {
			return gameType?.includes(gamePlayed.game.id);
		});
		setGamePlayedFiltered(array);
	}, [gameType, allGamesPlayed]);

	return (
		<View style={styles.container}>
			{loading && <ActivityIndicator size='large' color='#0000ff' />}
			{!loading && !props.loadingError && gamePlayedFiltered.length === 0 && (
				<Text>Não existem registros para esse jogo</Text>
			)}
			{!loading && props.loadingError && (
				<Text>Não foi possível carregar as informações do servidor</Text>
			)}
			{!loading &&
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
		</View>
	);
};

export default RecentGamesList;

const styles = StyleSheet.create({
	container: {
		marginLeft: 16,
		marginTop: 5,
	},
});
