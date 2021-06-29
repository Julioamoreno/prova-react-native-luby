import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';

import FormatMoney from '../shared/format/Money';
const GameCartPlayed: React.FC<{
	color: string;
	type: string;
	numbers: Array<string>;
	gamePrice: number;
	deleteGame: () => void;
}> = (props) => {
	const DateNow = Date.now();

	return (
		<View>
			<View style={{ ...styles.col, borderLeftColor: props?.color }}>
				<View>
					<Text style={styles.listNumber}>{props.numbers}</Text>
				</View>

				<View style={styles.row}>
					<Text style={styles.dateAndPriceP}>
						{moment(DateNow).format('DD/MM/yyyy')} - (
						{FormatMoney(props.gamePrice)})
					</Text>
					<Feather
						name='trash-2'
						size={24}
						color='black'
						onPress={props.deleteGame}
					/>
				</View>
				<View>
					<Text style={{ ...styles.gameType, color: props.color }}>
						{props?.type}
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	col: {
		borderLeftWidth: 5,
		borderRadius: 4,
		paddingLeft: 15,
		marginLeft: 5,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 10,
	},
	listNumber: {
		fontSize: 16,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#868686',
	},
	dateAndPriceP: {
		fontSize: 16,
		color: '#868686',
	},
	gameType: {
		fontSize: 20,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#868686',
	},
});

export default GameCartPlayed;
