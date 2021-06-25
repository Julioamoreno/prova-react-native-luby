import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GamePlayed: React.FC<{
	color: string;
	type: string;
	numbers: string;
	gamePrice: string;
}> = (props) => {
	return (
		<View>
			<View style={{ ...styles.col, borderLeftColor: props?.color }}>
				<View>
					<Text style={styles.listNumber}>{props.numbers}</Text>
				</View>

				<View>
					<Text style={styles.dateAndPriceP}>{props.gamePrice}</Text>
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
		padding: 5,
	},
	listNumber: {
		fontSize: 20,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#868686',
	},
	dateAndPriceP: {
		fontSize: 20,
		color: '#868686',
	},
	gameType: {
		fontSize: 20,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#868686',
	},
});

export default GamePlayed;
