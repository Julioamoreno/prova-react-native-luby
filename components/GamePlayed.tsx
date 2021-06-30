import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GamePlayed: React.FC<{
	color: string;
	type: string;
	numbers: string;
	dateAndPrice: string;
}> = (props) => {
	return (
		<View style={styles.container}>
			<View style={{ ...styles.col, borderLeftColor: props?.color }}>
				<View>
					<Text style={styles.listNumber}>{props.numbers}</Text>
				</View>

				<View style={styles.dateAndPriceContainer}>
					<Text style={styles.dateAndPriceP}>{props.dateAndPrice}</Text>
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
	container: {
		marginBottom: 25,
	},
	col: {
		borderLeftWidth: 5,
		borderRadius: 4,
		padding: 5,
		paddingLeft: 15,
	},
	listNumber: {
		fontSize: 12,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#868686',
	},
	dateAndPriceContainer: {
		marginVertical: 5,
	},
	dateAndPriceP: {
		fontSize: 12,
		color: '#868686',
	},
	gameType: {
		fontSize: 16,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#868686',
	},
});

export default GamePlayed;
