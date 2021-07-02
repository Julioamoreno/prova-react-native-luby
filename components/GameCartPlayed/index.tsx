import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';

import FormatMoney from '../../shared/format/Money';

import { Col, ListNumber, Row, DateAndPriceP, GameType } from './styles';

const GameCartPlayed: React.FC<{
	color: string;
	type: string;
	numbers: Array<string>;
	gamePrice: number;
	deleteGame: () => void;
}> = (props) => {
	const DateNow = Date.now();

	return (
		<Col style={{ borderLeftColor: props?.color }}>
			<View>
				<ListNumber>{props.numbers}</ListNumber>
			</View>
			<Row>
				<DateAndPriceP>
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
				<GameType style={{ color: props.color }}>{props?.type}</GameType>
			</View>
		</Col>
	);
};

export default GameCartPlayed;
