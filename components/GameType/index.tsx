import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import {
	GameTypeButton,
	ContainerButton,
	GameButtonText,
	CloseBtn,
} from './styles';

import { colors } from '../../styles/colors';

const GameType: React.FC<{
	color: string;
	gameType: string;
	checked: boolean;
	thisRecentGamesScreen: boolean;
	onPress: () => void;
}> = (props) => {
	return (
		<GameTypeButton
			onPress={props.onPress}
			isChecked={props.checked}
			color={props.color}
			colorDefault={colors.white}
		>
			<ContainerButton>
				<GameButtonText
					isChecked={props.checked}
					color={props.color}
					colorDefault={colors.white}
				>
					{props.gameType}
				</GameButtonText>
				{props.checked && props.thisRecentGamesScreen && (
					<CloseBtn>
						<FontAwesome name='close' size={10} color={colors.white} />
					</CloseBtn>
				)}
			</ContainerButton>
		</GameTypeButton>
	);
};

export default GameType;
