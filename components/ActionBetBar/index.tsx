import React from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import GameAction from '../GameAction';

import { State, gamePlayedAction } from '../../store';

import ElipseNumber from '../ElipseNumberSelected';

import DrawerScreenNavigationProp from '../../models/HomeScreenNavigationProp';

import { Container } from './styles';

const ActionBetBar: React.FC<{ navigation: DrawerScreenNavigationProp }> = ({
	navigation,
}) => {
	const dispatch = useDispatch();

	const { numbersSelected, color } = useSelector(
		(state: State) => state.gamePlayed
	);

	const UnselectNumber = (number: string) => {
		dispatch(gamePlayedAction.unSelectNumber({ number }));
	};
	return (
		<Container>
			<ScrollView horizontal>
				{numbersSelected.map((number, idx) => (
					<ElipseNumber
						key={idx}
						removeNumber={UnselectNumber}
						color={color}
						number={number}
					/>
				))}
			</ScrollView>
			<GameAction navigation={navigation} />
		</Container>
	);
};

export default ActionBetBar;
