import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { State, recentsAction } from '../../store';
import GameButtonsList from '../GameButtonsList';

import AvailableGamesModel from '../../models/games';
import GameModel from '../../models/game';

import { Container, Title, Content, Subtitle } from './styles';

const RecentGamesBar: React.FC = () => {
	const [allGames, setAllGames] = useState<AvailableGamesModel>([]);
	const dispatch = useDispatch();
	const gameType = useSelector((state: State) => state.recents.id);
	const selectGameHandle = (game: GameModel) => {
		dispatch(recentsAction.setGame({ id: game.id }));
	};

	return (
		<Container>
			<Title>Recent Games</Title>
			<Content>
				<Subtitle>Filters</Subtitle>
				<GameButtonsList
					selectedButton={gameType}
					selectGameHandle={selectGameHandle}
					allGames={allGames}
					setAllGames={(games) => setAllGames(games)}
					screenName='RecentGames'
				/>
			</Content>
		</Container>
	);
};

export default RecentGamesBar;
