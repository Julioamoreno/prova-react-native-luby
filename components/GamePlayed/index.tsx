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
import { colors } from '../../styles/colors';

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
					<ListNumber color={colors.gray}>{props.numbers}</ListNumber>
				</View>

				<DateAndPriceContainer>
					<DateAndPrice color={colors.gray}>{props.dateAndPrice}</DateAndPrice>
				</DateAndPriceContainer>
				<View>
					<GameType color={colors.gray} style={{ color: props.color }}>
						{props?.type}
					</GameType>
				</View>
			</Col>
		</Container>
	);
};

export default GamePlayed;
