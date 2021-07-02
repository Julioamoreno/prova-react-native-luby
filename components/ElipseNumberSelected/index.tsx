import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { Elipse, ContainerElipse, CloseBtn, ElipseText } from './styles';

const ElipseNumber: React.FC<{
	removeNumber: (number: string) => void;
	number: string;
	color: string;
}> = (props) => {
	return (
		<Elipse
			onPress={() => props.removeNumber(props.number)}
			style={{
				backgroundColor: props.color,
			}}
		>
			<ContainerElipse>
				<CloseBtn>
					<FontAwesome name='close' size={10} color='#FFFFFF' />
				</CloseBtn>
				<ElipseText>{props.number}</ElipseText>
			</ContainerElipse>
		</Elipse>
	);
};

export default ElipseNumber;
