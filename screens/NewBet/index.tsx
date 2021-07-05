import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameButtonsList from '../../components/GameButtonsList';
import GameDescription from '../../components/GameDescription';
import ActionBetBar from '../../components/ActionBetBar';
import DrawerScreenNavigationProp from '../../models/HomeScreenNavigationProp';

import {
	State,
	gameSelectedAction,
	gamePlayedAction,
	loadingAction,
} from '../../store';

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
	LineBottom,
} from './styles';
import Animated, {
	useSharedValue,
	withTiming,
	Easing,
	useAnimatedStyle,
} from 'react-native-reanimated';

const NewBet: React.FC<{ navigation: DrawerScreenNavigationProp }> = ({
	navigation,
}) => {
	const [allGames, setAllGames] = useState<AvailableGamesModel>([]);
	const [actionBetBarVisible, setActionBetBarVisible] = useState(false);
	const dispatch = useDispatch();
	const gameType = useSelector((state: State) => state.selectedGame.gameType);
	const { type, numbersSelected } = useSelector(
		(state: State) => state.gamePlayed
	);
	const gameDescriptionOpacity = useSharedValue(1);
	const actionBetBarOpacity = useSharedValue(0);

	useEffect(() => {
		dispatch(loadingAction.waitLoading);
	}, []);
	useEffect(() => {
		if (allGames.length === 0) return;
		dispatch(loadingAction.stopLoading);
		selectGameHandle(allGames[0]);
	}, [allGames]);

	useEffect(() => {
		if (numbersSelected.length === 0) {
			return setActionBetBarVisible(false);
		}
		setActionBetBarVisible(true);
	}, [numbersSelected]);

	useEffect(() => {
		if (actionBetBarVisible) {
			gameDescriptionOpacity.value = withTiming(0, {
				duration: 200,
				easing: Easing.quad,
			});
			actionBetBarOpacity.value = withTiming(1, {
				duration: 200,
				easing: Easing.quad,
			});
		} else {
			gameDescriptionOpacity.value = withTiming(1, {
				duration: 200,
				easing: Easing.quad,
			});
			actionBetBarOpacity.value = withTiming(0, {
				duration: 200,
				easing: Easing.quad,
			});
		}
	}, [actionBetBarVisible]);

	const descriptionAnimatedStyle = useAnimatedStyle(() => {
		return {
			opacity: gameDescriptionOpacity.value,
		};
	});
	const actionBetBarStyle = useAnimatedStyle(() => {
		return {
			opacity: actionBetBarOpacity.value,
		};
	});

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
					<Animated.View style={[descriptionAnimatedStyle]}>
						{!actionBetBarVisible && <GameDescription />}
					</Animated.View>
					{actionBetBarVisible && (
						<Animated.View style={[actionBetBarStyle]}>
							<ActionBetBar navigation={navigation} />
						</Animated.View>
					)}
					<LineBottom />
				</ContainerAction>
			</Bar>
			<ListNumbers />
		</Container>
	);
};

export default NewBet;
