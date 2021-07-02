import React from 'react';
import { View } from 'react-native';

import {
	Container,
	Col,
	ListNumber,
	DateAndPriceContainer,
	DateAndPrice,
	GameType,
} from './styles';

const GamePlayed: React.FC<{
	color: string;
	type: string;
	numbers: string;
	dateAndPrice: string;
}> = (props) => {
	return (
		<Container>
			<Col style={{ borderLeftColor: props?.color }}>
				<View>
					<ListNumber>{props.numbers}</ListNumber>
				</View>

				<DateAndPriceContainer>
					<DateAndPrice>{props.dateAndPrice}</DateAndPrice>
				</DateAndPriceContainer>
				<View>
					<GameType style={{ color: props.color }}>{props?.type}</GameType>
				</View>
			</Col>
		</Container>
	);
};

export default GamePlayed;
