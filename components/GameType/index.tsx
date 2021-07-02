import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import {
	GameTypeButton,
	ContainerButton,
	GameButtonText,
	CloseBtn,
} from './styles';

const GameType: React.FC<{
	color: string;
	gameType: string;
	checked: boolean;
	onPress: () => void;
}> = (props) => {
	return (
		<GameTypeButton
			onPress={props.onPress}
			isChecked={props.checked}
			color={props.color}
		>
			<ContainerButton>
				<GameButtonText isChecked={props.checked} color={props.color}>
					{props.gameType}
				</GameButtonText>
				{props.checked && (
					<CloseBtn>
						<FontAwesome name='close' size={10} color='#FFFFFF' />
					</CloseBtn>
				)}
			</ContainerButton>
		</GameTypeButton>
	);
};

export default GameType;
