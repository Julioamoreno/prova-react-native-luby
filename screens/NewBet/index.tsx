import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameButtonsList from '../../components/GameButtonsList';
import GameDescription from '../../components/GameDescription';
import ActionBetBar from '../../components/ActionBetBar';
import DrawerScreenNavigationProp from '../../models/HomeScreenNavigationProp';

import { State, gameSelectedAction, gamePlayedAction } from '../../store';

import AvailableGamesModel from '../../models/games';
import GameModel from '../../models/game';
import ListNumbers from '../../components/ListNumbers';

import {
	Container,
	Bar,
	ContainerTitle,
	Title,
	ContainerGameBar,
	Subtitle,
	ContainerAction,
} from './styles';

const NewBet: React.FC<{ navigation: DrawerScreenNavigationProp }> = ({
	navigation,
}) => {
	const [allGames, setAllGames] = useState<AvailableGamesModel>([]);
	const dispatch = useDispatch();
	const gameType = useSelector((state: State) => state.selectedGame.gameType);
	const { type, numbersSelected } = useSelector(
		(state: State) => state.gamePlayed
	);

	useEffect(() => {
		if (allGames.length === 0) return;
		selectGameHandle(allGames[0]);
	}, [allGames]);
	const selectGameHandle = (game: GameModel) => {
		dispatch(gameSelectedAction.setGameSelectedNewBet({ id: game.id }));
		dispatch(gamePlayedAction.setGamePlayed({ game }));
	};

	return (
		<Container>
			<Bar>
				<ContainerTitle>
					<Title>New Bet For {type}</Title>
				</ContainerTitle>
				<ContainerGameBar>
					<Subtitle>Choose a game</Subtitle>
					<GameButtonsList
						selectedButton={gameType}
						selectGameHandle={selectGameHandle}
						allGames={allGames}
						screenName='NewBet'
						setAllGames={(games) => setAllGames(games)}
					/>
				</ContainerGameBar>
				<ContainerAction>
					{numbersSelected.length === 0 && <GameDescription />}
					{numbersSelected.length > 0 && (
						<ActionBetBar navigation={navigation} />
					)}
				</ContainerAction>
			</Bar>
			<ListNumbers />
		</Container>
	);
};

export default NewBet;
