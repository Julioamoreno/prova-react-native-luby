import React from 'react';

import { Elipse, ElipseText } from './styles';

const ElipseNumber: React.FC<{
	number: string;
	selectNumber: (number: string) => void;
	active: boolean;
	color: string;
}> = (props) => {
	return (
		<Elipse
			onPress={() => props.selectNumber(props.number)}
			style={{ backgroundColor: props.active ? props.color : '#adc0c4' }}
		>
			<ElipseText>{props.number}</ElipseText>
		</Elipse>
	);
};

export default ElipseNumber;
