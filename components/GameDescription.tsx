import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { State } from '../store';

const GameDescription: React.FC = () => {
	const { description } = useSelector((state: State) => state.gamePlayed);

	return (
		<View style={styles.containerDescription}>
			<Text style={styles.descriptionTitle}>Fill your bet</Text>
			<View>
				<Text>{description}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	containerDescription: {
		marginBottom: 15,
	},
	descriptionTitle: {
		fontSize: 17,
		fontStyle: 'italic',
		fontWeight: 'bold',
		color: '#868686',
	},
});

export default GameDescription;
