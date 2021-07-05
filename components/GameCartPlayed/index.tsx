import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';

import FormatMoney from '../../shared/format/Money';

import { Col, ListNumber, Row, DateAndPriceP, GameType } from './styles';
import { colors } from '../../styles/colors';

const GameCartPlayed: React.FC<{
	color: string;
	type: string;
	numbers: string;
	gamePrice: number;
	deleteGame: () => void;
}> = (props) => {
	const DateNow = Date.now();

	return (
		<Col style={{ borderLeftColor: props?.color }}>
			<View>
				<ListNumber color={colors.gray}>{props.numbers}</ListNumber>
			</View>
			<Row>
				<DateAndPriceP color={colors.gray}>
					{moment(DateNow).format('DD/MM/yyyy')} - (
					{FormatMoney(props.gamePrice)})
				</DateAndPriceP>
				<Feather
					name='trash-2'
					size={24}
					color='black'
					onPress={props.deleteGame}
				/>
			</Row>
			<View>
				<GameType color={colors.gray} style={{ color: props.color }}>
					{props?.type}
				</GameType>
			</View>
		</Col>
	);
};

export default GameCartPlayed;
