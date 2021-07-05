import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { State } from '../../store';

import { ContainerDescription, DescriptionTitle, Description } from './styles';
import { colors } from '../../styles/colors';
import Loader from '../Loaders/GameDescriptionLoader';

const GameDescription: React.FC = () => {
	const { description } = useSelector((state: State) => state.gamePlayed);
	const loading = useSelector((state: State) => state.loading);
	return (
		<ContainerDescription>
			<DescriptionTitle color={colors.gray}>Fill your bet</DescriptionTitle>
			<View>
				{loading && <Loader />}
				{!loading && (
					<Description color={colors.gray}>{description}</Description>
				)}
			</View>
		</ContainerDescription>
	);
};

export default GameDescription;
