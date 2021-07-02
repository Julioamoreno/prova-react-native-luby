import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { State } from '../../store';

import { ContainerDescription, DescriptionTitle, Description } from './styles';

const GameDescription: React.FC = () => {
	const { description } = useSelector((state: State) => state.gamePlayed);

	return (
		<ContainerDescription>
			<DescriptionTitle>Fill your bet</DescriptionTitle>
			<View>
				<Description>{description}</Description>
			</View>
		</ContainerDescription>
	);
};

export default GameDescription;
